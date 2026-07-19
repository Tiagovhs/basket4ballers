import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Brand, BRANDS } from '../mock/mock-brands';

@Component({
  selector: 'app-marques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marques.component.html',
  styleUrl: './marques.component.scss',
})
export class MarquesComponent {
  brands: Brand[] = BRANDS;

  constructor(private router: Router) {}

  goToBrand(brand: Brand) {
    this.router.navigate(['/marques', brand.id]);
  }
}
