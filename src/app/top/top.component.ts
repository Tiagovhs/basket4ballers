import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Player } from '../models/player';
import { PlayerService } from '../services/player/player.service';
import { playerApiToPlayer } from '../utils/player-mapper';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent implements OnInit {

  topPlayers: Player[] = [];

  constructor(private playerService: PlayerService, private router: Router) {}

  goToPlayer(player: Player) {
    this.router.navigate(['player/', player.id]);
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.topPlayers = players.slice(0, 10).map(p => playerApiToPlayer(p));
    });
  }
}
