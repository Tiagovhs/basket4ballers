import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface ImportStatus {
  percent: number;
  current: number;
  total: number;
  running: boolean;
  message?: string;
}

type StepId = 'reset' | 'import' | 'conferences' | 'stats' | 'sneakers-sync' | 'sneakers-images';

interface Step {
  id: StepId;
  label: string;
  description: string;
  method: 'DELETE' | 'POST';
  endpoint: string;
  statusEndpoint?: string;
  status: 'idle' | 'running' | 'done' | 'error';
  percent?: number;
  message?: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnDestroy {

  private readonly BASE = environment.apiUrl.replace('/api', '');
  private pollingInterval: any = null;

  steps: Step[] = [
    {
      id: 'reset',
      label: '1. Reset BDD',
      description: 'Vide toute la base (players, teams, stats). Optionnel si la BDD est déjà vide.',
      method: 'DELETE',
      endpoint: '/api/admin/reset',
      status: 'idle',
    },
    {
      id: 'import',
      label: '2. Import joueurs actifs',
      description: 'Scrape nba.com et crée les teams + players en arrière-plan.',
      method: 'POST',
      endpoint: '/api/admin/import-active',
      statusEndpoint: '/api/admin/import-status',
      status: 'idle',
      percent: 0,
    },
    {
      id: 'conferences',
      label: '3. Update conférences/divisions',
      description: 'Applique la structure conférence/division aux 30 équipes. Synchrone.',
      method: 'POST',
      endpoint: '/api/admin/update-conferences',
      status: 'idle',
    },
    {
      id: 'stats',
      label: '4. Import stats de carrière',
      description: 'Scrape les stats pour chaque joueur (les joueurs doivent exister).',
      method: 'POST',
      endpoint: '/api/admin/stats/scrape',
      statusEndpoint: '/api/admin/stats/status',
      status: 'idle',
      percent: 0,
    },
  ];

  sneakerSteps: Step[] = [
    {
      id: 'sneakers-sync',
      label: '1. Scrape catalogue',
      description: 'Récupère toutes les pages du catalogue (nom, marque, prix). ~30 secondes.',
      method: 'POST',
      endpoint: '/api/sneakers/sync?pages=30',
      status: 'idle',
    },
    {
      id: 'sneakers-images',
      label: '2. Récupère les images',
      description: 'Visite chaque page produit pour extraire les images. ~3-4 minutes.',
      method: 'POST',
      endpoint: '/api/sneakers/sync-images',
      status: 'idle',
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnDestroy() {
    this.stopPolling();
  }

  run(step: Step) {
    if (step.status === 'running') return;
    step.status = 'running';
    step.message = undefined;

    const url = this.BASE + step.endpoint;
    const req = step.method === 'DELETE'
      ? this.http.delete(url, { responseType: 'text' })
      : this.http.post(url, null, { responseType: 'text' });

    req.subscribe({
      next: () => {
        if (step.statusEndpoint) {
          this.startPolling(step);
        } else {
          step.status = 'done';
        }
      },
      error: (err) => {
        step.status = 'error';
        step.message = err?.error ?? err?.message ?? 'Erreur inconnue';
      },
    });
  }

  private startPolling(step: Step) {
    this.stopPolling();
    const url = this.BASE + step.statusEndpoint!;
    this.pollingInterval = setInterval(() => {
      this.http.get<ImportStatus>(url).subscribe({
        next: (s) => {
          step.percent = s.percent;
          step.message = s.message;
          if (!s.running && s.percent >= 100) {
            step.status = 'done';
            this.stopPolling();
          }
        },
        error: () => {
          step.status = 'error';
          this.stopPolling();
        },
      });
    }, 1500);
  }

  private stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }
}
