import { Component } from '@angular/core';
import { NonSelectableDirective } from '../directives/non-selectable.directive';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NonSelectableDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private route:ActivatedRoute, private router:Router){}



  goToPlayers() {
    this.router.navigate(['/players'])
  }
}
