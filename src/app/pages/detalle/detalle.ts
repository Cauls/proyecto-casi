import { Component, inject} from '@angular/core';
import { Store, Alumno } from '../comunicacion/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-detalle',
  imports: [AsyncPipe],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  store = inject(Store);

 alumnoSelected$ = this.store.getAlumnoSelected();

 alumnoSelected:Alumno = toSignal(this.alumnoSelected$,);

}
