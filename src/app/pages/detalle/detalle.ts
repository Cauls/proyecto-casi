import { Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Alumno, Alumnos } from '../servicios/alumnos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  private alumnoService = inject(Alumnos);
  private route = inject(ActivatedRoute);

  listaAlumnos: Alumno[] = this.alumnoService.getAlumnos();

  alumnoId: number = Number(this.route.snapshot.paramMap.get('id'));
  alumnoSeleccionado?: Alumno = this.listaAlumnos.find(a => a.id === this.alumnoId);

}
