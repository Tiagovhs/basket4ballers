import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScarpingService {

  private baseUrl = 'http://localhost:8080/scrape';

  constructor(private http: HttpClient) { 
  }

  
  getPlayerImage(playerName: string): Observable<string> {
    console.log(this.http.get<string>(`${this.baseUrl}?name=${playerName}`));
    
    return this.http.get<string>(`${this.baseUrl}?name=${playerName}`);
    
  }
}
