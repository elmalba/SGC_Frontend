import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

import * as globalVar from '../../globals';

@Injectable()
export class ProfesoresService {
  static get parameters(){
    return [[Http]]
  }

  private profesorsUrl = globalVar.apiUrl+'/profesores';

  constructor(private http: Http) {

    this.http=http;
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  getProfesors(): Observable<any> {
    return this.http.get(this.profesorsUrl)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t GET Profesores'));
  }

  getProfesor(id: number): Observable<any> {
    return this.getProfesors()
      .map(profesors => profesors.find(profesor => profesor.id == id));
  }

  createProfesor(profesor: any): Observable<any>{
    let options = new RequestOptions({headers: this.headers});
    return this.http.post(this.profesorsUrl, JSON.stringify(profesor), options)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t CREATE Profesor'));
  }

}
