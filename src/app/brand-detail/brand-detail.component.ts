import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Brand, BRANDS } from '../mock/mock-brands';
import { Sneaker } from '../models/sneaker';
import { SNEAKERS } from '../mock/mock-sneakers';

@Component({
  selector: 'app-brand-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-detail.component.html',
  styleUrl: './brand-detail.component.scss',
})
export class BrandDetailComponent implements OnInit {
  brand: Brand | undefined;
  brandSneakers: Sneaker[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  goBack() {
    this.router.navigate(['/marques']);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.brand = BRANDS.find(b => b.id === +id);
      if (this.brand) {
        this.brandSneakers = SNEAKERS.filter(s => s.brand === this.brand!.name);
      }
    }
  }
}
