import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs";

import { Matricula } from './matricula/matricula';

@Injectable()
export class MatriculaService {
  static get parameters(){
    return [[Http]]
  }

  private matriculasUrl = 'http://api.innovacolegio.cl/alumnos';

  constructor( private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  getMatriculas(): Observable<Matricula[]> {
    return this.http.get(this.matriculasUrl)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t GET Colegios'));
  }

  getMatricula(id: number): Observable<Matricula> {
    return this.getMatriculas()
      .map(matricula => matricula.find(matricula => matricula.id == id));
  }

  updateMatricula(matricula: Matricula){
    const url = `${this.matriculasUrl}/${matricula.id}`;
    return this.http
      .put(url, JSON.stringify(matricula), {headers: this.headers})
      .map(() => matricula)
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t UPDATE Colegio'));
  }

  createMatricula(matricula: Matricula): Observable<Matricula> {
    return this.http
      .post(this.matriculasUrl, JSON.stringify({nombre: matricula.nombre}), {headers: this.headers})
      .map(res => res.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t CREATE Colegio'));
  }

  deleteMatricula(id: number): Observable<any> {
    const url = `${this.matriculasUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .map(() => null)
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t DELETE Colegio'));

  }

}
