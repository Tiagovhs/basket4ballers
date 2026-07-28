import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SneakerAPI } from '../models/sneaker-api';
import { SneakerService } from '../services/sneaker/sneaker.service';

@Component({
  selector: 'app-sneakers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sneakers.component.html',
  styleUrl: './sneakers.component.scss',
})
export class SneakersComponent implements OnInit {
  allSneakers: SneakerAPI[] = [];
  loading = true;

  selectedBrand = '';
  selectedPriceRange = '';
  searchQuery = '';

  brands: string[] = [];

  readonly PAGE_SIZE = 24;
  currentPage = 1;

  priceRanges = [
    { label: 'Moins de 130€', min: 0, max: 130 },
    { label: '130€ – 160€', min: 130, max: 160 },
    { label: '160€ – 200€', min: 160, max: 200 },
    { label: 'Plus de 200€', min: 200, max: Infinity },
  ];

  constructor(private sneakerService: SneakerService) {}

  ngOnInit(): void {
    this.sneakerService.getSneakers().subscribe({
      next: (data) => {
        this.allSneakers = data;
        this.brands = [...new Set(data.map(s => s.brand))].sort();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  get sneakerOfTheDay(): SneakerAPI | null {
    if (!this.allSneakers.length) return null;
    const start = new Date(new Date().getFullYear(), 0, 0).getTime();
    const dayOfYear = Math.floor((Date.now() - start) / 86400000);
    return this.allSneakers[dayOfYear % this.allSneakers.length];
  }

  get filteredSneakers(): SneakerAPI[] {
    let result = this.allSneakers;

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
      result = result.filter(s => s.name.toLowerCase().includes(q));
    }

    return result;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredSneakers.length / this.PAGE_SIZE);
  }

  get paginatedSneakers(): SneakerAPI[] {
    const start = (this.currentPage - 1) * this.PAGE_SIZE;
    return this.filteredSneakers.slice(start, start + this.PAGE_SIZE);
  }

  get pages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const delta = 2;
    const range: number[] = [];

    const left = Math.max(1, current - delta);
    const right = Math.min(total, current + delta);

    for (let i = left; i <= right; i++) range.push(i);
    if (left > 1) range.unshift(-1, 1);
    if (right < total) range.push(-1, total);

    return range;
  }

  get hasActiveFilters(): boolean {
    return !!(this.selectedBrand || this.selectedPriceRange || this.searchQuery);
  }

  onFilterChange(): void {
    this.currentPage = 1;
  }

  clearFilters(): void {
    this.selectedBrand = '';
    this.selectedPriceRange = '';
    this.searchQuery = '';
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
