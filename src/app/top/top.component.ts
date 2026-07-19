import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../models/player';
import { PLAYERS } from '../mock/mock-players';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
})
export class TopComponent {
  topPlayers: Player[] = PLAYERS.slice(0, 10);
}
