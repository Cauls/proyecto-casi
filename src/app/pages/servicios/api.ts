// import { Injectable, signal } from "@angular/core";
// import { BehaviorSubject, Observable } from "rxjs";
// import { HttpClient } from "@angular/common/http";
  
// @Injectable({
//    providedIn: 'root',
// })
// export class Api {
//   private carrito: Corredor[] = [];
//   private _carrito: BehaviorSubject<Corredor[]> = new BehaviorSubject<Corredor[]>([]);

//   //Signal
//   userSelected = signal('');
//   constructor(private http: HttpClient) { }
//   private url = 'https://dam.colegiolitterator.es/php/bbdd.php';
  
//   // Definimos Observable
//   login(email: string, password: string): Observable<LoginResponse> {
//    return this.http.post<LoginResponse>(this.url, { usuario: email, clave: password, accion: 'validar' }, { headers: { 'Content-Type': 'application/json' } });
//   }

//   // Definimos Observable
//   getCorredores(token: string): Observable<Corredor[]> {
//   return this.http.get<Corredor[]>(this.url, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } });
//   }
// }