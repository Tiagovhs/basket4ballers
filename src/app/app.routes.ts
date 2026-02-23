import { Routes } from '@angular/router';
import { PlayerCardComponent } from './player-card/player-card.component';
import { DetailsPalyerComponent } from './details-palyer/details-palyer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'players',component:PlayerCardComponent},
    {path:'player/:id', component: DetailsPalyerComponent},
    {path:'',redirectTo:'players',pathMatch:"full"},
    {path:'**',component:PageNotFoundComponent}
];

