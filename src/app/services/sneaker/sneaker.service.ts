import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SneakerAPI } from '../../models/sneaker-api';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SneakerService {

  private readonly BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSneakers(brand?: string): Observable<SneakerAPI[]> {
    const params: Record<string, string> = {};
    if (brand) params['brand'] = brand;
    return this.http.get<SneakerAPI[]>(`${this.BASE_URL}/sneakers`, { params });
  }
}
