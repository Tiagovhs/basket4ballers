import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLAYERS } from '../mock/mock-players';
import { SNEAKERS } from '../mock/mock-sneakers';
import { Player } from '../models/player';
import { Sneaker } from '../models/sneaker';

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.scss',
})
export class CompareComponent {
  players = PLAYERS;
  player1Id: number | '' = '';
  player2Id: number | '' = '';

  get player1(): Player | undefined {
    return this.players.find(p => p.id === +this.player1Id);
  }

  get player2(): Player | undefined {
    return this.players.find(p => p.id === +this.player2Id);
  }

  getSneakers(player: Player): Sneaker[] {
    return SNEAKERS.filter(s => player.sneakerIds.includes(s.id));
  }

  better(v1: number, v2: number): 'left' | 'right' | 'equal' {
    if (v1 > v2) return 'left';
    if (v2 > v1) return 'right';
    return 'equal';
  }

  stats = [
    { key: 'ppg', label: 'PPG' },
    { key: 'rpg', label: 'RPG' },
    { key: 'apg', label: 'APG' },
    { key: 'fgp', label: 'FG%' },
  ] as const;
}
