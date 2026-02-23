import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PLAYERS } from '../mock/mock-players';
import { Player } from '../models/player';


@Component({
  selector: 'app-details-palyer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-palyer.component.html',
  styleUrl: './details-palyer.component.scss'
})
export class DetailsPalyerComponent implements OnInit{

    playerList!: Player[];
    currentPlayer:Player | undefined;

    constructor(private route:ActivatedRoute, private router:Router){}



    returnToPlayers() {
      this.router.navigate(['/players'])
      console.log("retour sur players");
    }

      ngOnInit(){
        //permet de recup a un instant T les different params de la route, ici L'id
        this.playerList=PLAYERS;

          const playerId :string |null =this.route.snapshot.paramMap.get('id');

          
          if(playerId)
            this.currentPlayer =this.playerList.find(player=> +playerId== player.id)
        
      }
      
}

