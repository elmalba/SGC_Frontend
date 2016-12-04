import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from "rxjs";

import { Colegio } from './colegios/colegio'

@Injectable()
export class ColegiosService {
  static get parameters(){
    return [[Http]]
  }

  private colegiosUrl = 'http://api.innovacolegio.cl/colegios';

  constructor(private http: Http) { }

/*  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
*/

  private headers = new Headers({'Content-Type': 'application/json'});

  getColegios(): Observable<Colegio[]> {
    return this.http.get(this.colegiosUrl)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t GET Colegios'));

  }

  getColegio(id: number): Observable<Colegio> {
    return this.getColegios()
                .map(colegios => colegios.find(colegio => colegio.id == id));
  }

  updateColegio(colegio: Colegio){
    const url = `${this.colegiosUrl}/${colegio.id}`;
    return this.http
      .put(url, JSON.stringify(colegio), {headers: this.headers})
      .map(() => colegio)
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t UPDATE Colegio'));
  }

  createColegio(colegio: Colegio): Observable<Colegio>{
    return this.http
      .post(this.colegiosUrl, JSON.stringify({nombre: colegio.nombre}), {headers: this.headers})
      .map(res => res.json().data)
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t CREATE Colegio'));
  }

  deleteColegio(id: number): Observable<void>{
    const url = `${this.colegiosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .map(() => null)
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error: Couldn\'t DELETE Colegio'));
  }

}
