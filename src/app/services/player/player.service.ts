import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CareerStats, PlayerAPI } from '../../models/player-api';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private readonly BASE_URL = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  getPlayers(active?: boolean): Observable<PlayerAPI[]> {
    const params: Record<string, string> = {};
    if (active !== undefined) params['active'] = String(active);
    return this.httpClient.get<PlayerAPI[]>(`${this.BASE_URL}/players`, { params });
  }

  getPlayer(id: number): Observable<PlayerAPI> {
    return this.httpClient.get<PlayerAPI>(`${this.BASE_URL}/players/${id}`);
  }

  getPlayerStats(id: number): Observable<CareerStats[]> {
    return this.httpClient.get<CareerStats[]>(`${this.BASE_URL}/players/${id}/stats`);
  }

  searchPlayers(name: string): Observable<PlayerAPI[]> {
    return this.httpClient.get<PlayerAPI[]>(`${this.BASE_URL}/players/search`, {
      params: { name }
    });
  }
}
