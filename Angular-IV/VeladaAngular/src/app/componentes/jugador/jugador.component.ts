
import { Component } from '@angular/core';
import { Jugador } from '../../common/jugador';
import { Participante } from '../../common/participante';

@Component({
  selector: 'app-jugador',
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {
  persona ={
    nombre: 'David García',
    alias: 'The Grefg',
    pais: 'spain',
    pesoenKG: 90,
    rival: 'WetsCol',
    win: 1,
    lose: 0
  }

  esdebut(player : Jugador){
    if(player.win==0 && player.lose == 0)
      return 'Debutante'
    else return 'Experto'
  }

  // jugador : Jugador = this.persona

  jugador: Jugador={
    nombre: 'Rocío Lopez',
    alias: 'RoRo',
    pais: 'spain',
    pesoenKG: 56,
    rival: 'Abby',
    win: 0,
    lose: 0
  }

  boxeador : Participante={
    jugador: this.persona,
    profesion: 'youtuber'
  }

}
