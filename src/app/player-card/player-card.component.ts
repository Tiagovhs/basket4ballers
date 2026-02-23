import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../models/player';
import { NonSelectableDirective } from '../directives/non-selectable.directive';
import { PLAYERS } from '../mock/mock-players';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [CommonModule,NonSelectableDirective],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})

export class PlayerCardComponent {

  constructor(private router:Router){}


goToPlayer(player:Player) {
  this.router.navigate(['player/',player.id])
  console.log(`vous avez cliqué sur ${player.first_name}`);

}
 
  hoveredCard: any = null;
  setHoveredCard(joueur: any) {
    this.hoveredCard = joueur;
  }

  resetHoveredCard() {
    this.hoveredCard = null;
  }


  data_source = PLAYERS;



}
