import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sneaker } from '../models/sneaker';
import { SNEAKERS } from '../mock/mock-sneakers';

@Component({
  selector: 'app-sneakers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sneakers.component.html',
  styleUrl: './sneakers.component.scss',
})
export class SneakersComponent {
  sneakers: Sneaker[] = SNEAKERS;

  selectedBrand = '';
  selectedPriceRange = '';
  searchQuery = '';

  brands = [...new Set(SNEAKERS.map(s => s.brand))].sort();

  priceRanges = [
    { label: 'Moins de 130€', min: 0, max: 130 },
    { label: '130€ – 160€', min: 130, max: 160 },
    { label: '160€ – 200€', min: 160, max: 200 },
    { label: 'Plus de 200€', min: 200, max: Infinity },
  ];

  get filteredSneakers(): Sneaker[] {
    let result = this.sneakers;

    if (this.selectedBrand) {
      result = result.filter(s => s.brand === this.selectedBrand);
    }

    if (this.selectedPriceRange) {
      const range = this.priceRanges.find(r => r.label === this.selectedPriceRange);
      if (range) {
        result = result.filter(s => s.price >= range.min && s.price < range.max);
      }
    }

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(s =>
        s.name.toLowerCase().includes(q) || s.colorway.toLowerCase().includes(q)
      );
    }

    return result;
  }

  get hasActiveFilters(): boolean {
    return !!(this.selectedBrand || this.selectedPriceRange || this.searchQuery);
  }

  clearFilters() {
    this.selectedBrand = '';
    this.selectedPriceRange = '';
    this.searchQuery = '';
  }
}
