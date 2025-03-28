import { Jugador } from "./jugador";

export class Participante {
  jugador : Jugador;
  profesion: string;

  constructor( boxeador: Jugador, profession: string ){
    this.jugador = boxeador;
    this.profesion = profession;
  }
}

