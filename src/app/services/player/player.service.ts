import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  readonly API_URL="http://localhost:8080/players"

  constructor(private httpClient : HttpClient) { }

  getPlayers(){
    return this.httpClient.get(this.API_URL);
  }




}
