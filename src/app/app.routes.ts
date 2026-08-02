import { Routes } from '@angular/router';
import { PlayerCardComponent } from './player-card/player-card.component';
import { DetailsPalyerComponent } from './details-palyer/details-palyer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { CompareComponent } from './compare/compare.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { adminGuard } from './admin/admin.guard';

export const routes: Routes = [
    { path: 'players', component: PlayerCardComponent },
    { path: 'player/:id', component: DetailsPalyerComponent },
    { path: 'sneakers', component: SneakersComponent },
    { path: 'compare', component: CompareComponent },
    { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },
    { path: 'admin/login', component: AdminLoginComponent },
    { path: 'admin/register', component: AdminRegisterComponent },
    { path: '', redirectTo: 'players', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
