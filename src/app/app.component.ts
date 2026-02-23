import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerCardComponent } from "./player-card/player-card.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerCardComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'S4B-frontend';
}
