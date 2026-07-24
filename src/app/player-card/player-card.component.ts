import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../models/player';
import { NonSelectableDirective } from '../directives/non-selectable.directive';
import { Router } from '@angular/router';
import { PlayerService } from '../services/player/player.service';
import { playerApiToPlayer } from '../utils/player-mapper';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule, NonSelectableDirective],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) {}

  allPlayers: Player[] = [];
  hoveredCard: Player | null = null;
  isLoading = true;

  searchQuery = '';
  selectedTeam = '';
  selectedPoste = '';
  currentPage = 1;
  readonly pageSize = 12;

  teams: string[] = [];
  postes: string[] = [];

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.allPlayers = players.map(p => playerApiToPlayer(p));
      this.teams = [...new Set(this.allPlayers.map(p => p.team.name))].sort();
      this.postes = [...new Set(this.allPlayers.map(p => p.poste))].sort();
      this.isLoading = false;
    });
  }

  get filteredPlayers(): Player[] {
    const q = this.searchQuery.toLowerCase();
    return this.allPlayers.filter(p => {
      const matchesSearch = !q || `${p.first_name} ${p.last_name}`.toLowerCase().includes(q);
      const matchesTeam = !this.selectedTeam || p.team.name === this.selectedTeam;
      const matchesPoste = !this.selectedPoste || p.poste === this.selectedPoste;
      return matchesSearch && matchesTeam && matchesPoste;
    });
  }

  get paginatedPlayers(): Player[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPlayers.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPlayers.length / this.pageSize);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onSearch(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.currentPage = 1;
  }

  onTeamFilter(event: Event) {
    this.selectedTeam = (event.target as HTMLSelectElement).value;
    this.currentPage = 1;
  }

  onPosteFilter(event: Event) {
    this.selectedPoste = (event.target as HTMLSelectElement).value;
    this.currentPage = 1;
  }

  clearFilters() {
    this.searchQuery = '';
    this.selectedTeam = '';
    this.selectedPoste = '';
    this.currentPage = 1;
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToPlayer(player: Player) {
    this.router.navigate(['player/', player.id]);
  }

  setHoveredCard(joueur: Player) {
    this.hoveredCard = joueur;
  }

  resetHoveredCard() {
    this.hoveredCard = null;
  }
}
