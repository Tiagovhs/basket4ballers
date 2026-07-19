import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PLAYERS } from '../mock/mock-players';
import { SNEAKERS } from '../mock/mock-sneakers';
import { Player } from '../models/player';
import { Sneaker } from '../models/sneaker';

@Component({
  selector: 'app-details-palyer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-palyer.component.html',
  styleUrl: './details-palyer.component.scss'
})
export class DetailsPalyerComponent implements OnInit {

  currentPlayer: Player | undefined;
  playerSneakers: Sneaker[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  returnToPlayers() {
    this.router.navigate(['/players']);
  }

  ngOnInit() {
    const playerId: string | null = this.route.snapshot.paramMap.get('id');
    if (playerId) {
      this.currentPlayer = PLAYERS.find(p => +playerId === p.id);
      if (this.currentPlayer) {
        this.playerSneakers = SNEAKERS.filter(s => this.currentPlayer!.sneakerIds.includes(s.id));
      }
    }
  }
}
