import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  imports: [FormsModule],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  @Input() mensajeDelPadre: string | null = null;

  @Output() eventoDelHijo = new EventEmitter<string>();

  mensaje:string = '';

  enviarMensajeDelHijo(){
    this.eventoDelHijo.emit(this.mensaje)
  }
}
