import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs";

import { Matricula } from './matricula/matricula';

@Injectable()
export class MatriculaService {
  static get parameters(){
    return [[Http]]
  }

  private matriculasUrl = 'http://api.innovacolegio.cl/matriculas';

  constructor( private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});

/*  getMatriculas(): Observable<Matricula[]> {

  }

  getMatricula(): Observable<Matricula> {

  }

  updateMatricula(){

  }

  createMatricula(): Observable<Matricula> {

  }

  deleteMatricula(): Observable<any> {

  }*/

}
