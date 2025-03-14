import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent{

  name: string = 'Barbara';
  address = 'Calle 123';
  edad: number = 25;
  altura = 1.60;
  EsCasado: boolean = false;
  frutas: string[] = ['manzana', 'pera', 'uva', 'cereza', 'anana', 'banana', 'aguacate'];
  fruta ={
    nombre: 'manzana',
    color: 'rojo',
    precio: 1.25
  }

  ArrayFrutas: any[] = [
    {
      nombre: 'manzana',
      color: 'rojo',
      precio: 1.25
    },
    {
      nombre: 'pera',
      color: 'verde',
      precio: 2.50
    },
    {
      nombre: 'uva',
      color: 'morada',
      precio: 3.75
    },
    {
      nombre: 'cereza',
      color: 'roja',
      precio: 4.25
    },
    {
      nombre: 'anana',
      color: 'amarilla',
      precio: 5.25
    },
    {
      nombre: 'banana',
      color: 'amarilla',
      precio: 6.25
    },
    {
      nombre: 'aguacate',
      color: 'verde',
      precio: 7.25
    }
  ]



   masUno(): void{
    this.edad++;
   }
   cambiaNombre(): string{
    return this.name= 'jose Luis';
   }

   cambiafruta(): void{
    this.fruta= {
      nombre: 'pera',
      color: 'verde',
      precio: 2.50
    }
   }
   casadoY() {
    this.EsCasado = true;
   }
   casadoN() {
    this.EsCasado = false;
   }
}
