import { Routes } from '@angular/router';
import { PlayerCardComponent } from './player-card/player-card.component';
import { DetailsPalyerComponent } from './details-palyer/details-palyer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { MarquesComponent } from './marques/marques.component';
import { TopComponent } from './top/top.component';
import { BrandDetailComponent } from './brand-detail/brand-detail.component';

export const routes: Routes = [
    { path: 'players', component: PlayerCardComponent },
    { path: 'player/:id', component: DetailsPalyerComponent },
    { path: 'sneakers', component: SneakersComponent },
    { path: 'marques', component: MarquesComponent },
    { path: 'marques/:id', component: BrandDetailComponent },
    { path: 'top', component: TopComponent },
    { path: '', redirectTo: 'players', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

