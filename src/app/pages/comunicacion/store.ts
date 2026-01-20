import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Subject,BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

export interface Alumno { id: number; nombre: string, email: string, progreso: number }

@Injectable({
  providedIn: 'root',
})

export class Store {
  
  alumnoSelected = signal<Alumno | null>(null);

  alumnoSelected$ = toObservable(this.alumnoSelected);

  setAlumnoSelected(alumno: Alumno) {

   this.alumnoSelected.set(alumno);

 }

 getAlumnoSelected(): Observable<Alumno | null> {

   return this.alumnoSelected$;

 }
}

