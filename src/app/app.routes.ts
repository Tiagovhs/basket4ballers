import { Routes } from '@angular/router';
import { PlayerCardComponent } from './player-card/player-card.component';
import { DetailsPalyerComponent } from './details-palyer/details-palyer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { CompareComponent } from './compare/compare.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: 'players', component: PlayerCardComponent },
    { path: 'player/:id', component: DetailsPalyerComponent },
    { path: 'sneakers', component: SneakersComponent },
    { path: 'compare', component: CompareComponent },
    { path: 'admin', component: AdminComponent },
    { path: '', redirectTo: 'players', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
