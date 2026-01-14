import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hijo } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo, FormsModule],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  showModal = false;

  mensajeDelPadre:string = '';
  mensajeDelHijo:string = '';

  openModal(){
    console.log('Modal abierto');
    this.showModal = true;
  }

  closeModal(){
    console.log('Modal cerrado');
    this.showModal = false;
  }

  recibirMensajeDelHijo(event:any){
    this.mensajeDelHijo = event;
  }
}
