import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Player } from '../models/player';
import { PlayerAPI } from '../models/player-api';
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

  search1 = '';
  search2 = '';
  showDropdown1 = false;
  showDropdown2 = false;

  player1: Player | undefined;
  player2: Player | undefined;
  loading1 = false;
  loading2 = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  get filtered1(): PlayerAPI[] {
    const q = this.search1.toLowerCase();
    return this.players.filter(p =>
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(q)
    ).slice(0, 8);
  }

  get filtered2(): PlayerAPI[] {
    const q = this.search2.toLowerCase();
    return this.players.filter(p =>
      `${p.firstName} ${p.lastName}`.toLowerCase().includes(q)
    ).slice(0, 8);
  }

  selectPlayer1(p: PlayerAPI) {
    this.search1 = `${p.firstName} ${p.lastName}`;
    this.showDropdown1 = false;
    this.loading1 = true;
    this.player1 = undefined;
    forkJoin([
      this.playerService.getPlayer(+p.id),
      this.playerService.getPlayerStats(+p.id)
    ]).subscribe(([player, stats]) => {
      this.player1 = playerApiToPlayer(player, stats);
      this.loading1 = false;
    });
  }

  selectPlayer2(p: PlayerAPI) {
    this.search2 = `${p.firstName} ${p.lastName}`;
    this.showDropdown2 = false;
    this.loading2 = true;
    this.player2 = undefined;
    forkJoin([
      this.playerService.getPlayer(+p.id),
      this.playerService.getPlayerStats(+p.id)
    ]).subscribe(([player, stats]) => {
      this.player2 = playerApiToPlayer(player, stats);
      this.loading2 = false;
    });
  }

  onSearch1Change() {
    this.showDropdown1 = true;
    this.player1 = undefined;
  }

  onSearch2Change() {
    this.showDropdown2 = true;
    this.player2 = undefined;
  }

  hideDropdown1() {
    setTimeout(() => this.showDropdown1 = false, 150);
  }

  hideDropdown2() {
    setTimeout(() => this.showDropdown2 = false, 150);
  }

  draftLabel(player: Player): string {
    if (player.undrafted) return 'Non drafté';
    return `#${player.draftPick} (${player.draftYear})`;
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
