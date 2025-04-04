import { DataService } from '../../servicios/data.service';
import { Player } from './../../common/player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  imports: [],
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css'
})
export class JugadoresComponent implements OnInit {
  constructor( private dataservice: DataService){}

  ngOnInit(): void {
    this.loadplayers();
  }

  loadplayers() {
    this.dataservice.getPlayers().subscribe(
      {
        next: (data)=>{
          this.players = data;
          console.log(data);
        },
        error: (error)=>{
          console.log(error);
        },
        complete: ()=>{
          console.log('complete');
        }
      }
    )

  }

  // superheroes= {
  //    NombreSquad: 'Los Damagers',
  //    BaseSecreta: 'PIA08',
  //    Active: true,
  //    city: 'Valencia',
  //    miembro: [
  //     {
  //       Alias: 'SuperBiker',
  //       Nombre: 'Fabrizio',
  //       activo: true,
  //       poderes:['partir cuellos telemáticamente', 'invisibilidad', 'se prende fuego'],
  //       enemigos:['Profesor C', 'El Super K']
  //     },
  //     {
  //       Alias: 'El niño kilo',
  //       Nombre: 'Rubén',
  //       activo: true,
  //       poderes:['super elasticidad', 'aumentar de tamaño', 'inmortalidad'],
  //       enemigos:['El Super K']
  //     },
  //     {
  //       Alias: 'Mr Olimplia',
  //       Nombre: 'Brian',
  //       activo: true,
  //       poderes:['Super fuerza', 'Vuelo', 'Rayo laser'],
  //       enemigos:['Profesor C']
  //     }
  //    ],
  //    enemigos:[
  //     {
  //       Alias: 'El super K ',
  //       Nombre: 'Carlos',
  //       activo: true,
  //       poderes:['irrompibilidad', 'Vuelo', 'elasticidad']
  //     },
  //     {
  //       Alias: 'Profesor C',
  //       Nombre: 'Oscar',
  //       activo: true,
  //       poderes:['telepatía', 'telequinesis', 'invisibilidad']
  //     }
  //    ]
  // }

  players! : Player;



}
