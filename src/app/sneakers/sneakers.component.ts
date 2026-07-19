import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sneaker } from '../models/sneaker';
import { SNEAKERS } from '../mock/mock-sneakers';

@Component({
  selector: 'app-sneakers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sneakers.component.html',
  styleUrl: './sneakers.component.scss',
})
export class SneakersComponent {
  sneakers: Sneaker[] = SNEAKERS;
}
