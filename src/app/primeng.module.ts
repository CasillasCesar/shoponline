import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos PrimeNg
const modPrime : any = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrime
  ],
  exports:[
    modPrime,   //Agregar arreglo de componentes
  ]
})
export class PrimengModule { }
