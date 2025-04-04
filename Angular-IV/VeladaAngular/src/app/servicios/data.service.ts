import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../common/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getPlayers(): Observable<Player>{
    return this.http.get<Player>('data/data.json');
  }

  //establecer el protocolo http
  //1. importar el modulo httpClient
  //2. importar el modulo httpClientModule en el app.module.ts
  //3. inyectar el httpClient en el constructor del servicio
  //4. crear un metodo que devuelva un observable
  //5. llamar al metodo en el componente jugadores
  //6. suscribirse al observable en el componente jugadores
  //7. mostrar los datos en el html del componente jugadores
}
