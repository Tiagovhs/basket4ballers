import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { SNEAKERS } from '../mock/mock-sneakers';
import { Player } from '../models/player';
import { PlayerAPI } from '../models/player-api';
import { Sneaker } from '../models/sneaker';
import { PlayerService } from '../services/player/player.service';
import { playerApiToPlayer } from '../utils/player-mapper';

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.scss',
})
export class CompareComponent implements OnInit {

  players: PlayerAPI[] = [];
  player1Id = '';
  player2Id = '';
  player1: Player | undefined;
  player2: Player | undefined;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  onPlayer1Change(id: string) {
    this.player1Id = id;
    if (!id) { this.player1 = undefined; return; }
    forkJoin([
      this.playerService.getPlayer(+id),
      this.playerService.getPlayerStats(+id)
    ]).subscribe(([p, stats]) => {
      this.player1 = playerApiToPlayer(p, stats);
    });
  }

  onPlayer2Change(id: string) {
    this.player2Id = id;
    if (!id) { this.player2 = undefined; return; }
    forkJoin([
      this.playerService.getPlayer(+id),
      this.playerService.getPlayerStats(+id)
    ]).subscribe(([p, stats]) => {
      this.player2 = playerApiToPlayer(p, stats);
    });
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
