import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';

import { Colegio } from './colegios/colegio'

@Injectable()
export class ColegiosService {
  static get parameters(){
    return [[Http]]
  }

  private colegiosUrl = 'http://api.innovacolegio.cl/colegios';

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  getColegios() {
    return this.http.get(this.colegiosUrl)
      .toPromise()
      .then(response => response.json().data as Colegio[])
      .catch(this.handleError);
  }

  /*getColegio(id: number): Promise<Colegio> {
    return this.getColegios()
                .then(colegios => colegios.find(colegio => colegio.id == id));
  }

  updateColegio(colegio: Colegio){
    const url = `${this.colegiosUrl}/${colegio.id}`;
    return this.http
      .put(url, JSON.stringify(colegio), {headers: this.headers})
      .toPromise()
      .then(() => colegio)
      .catch(this.handleError);
  }

  createColegio(name: string /*otros datos): Promise<Colegio>{
    return this.http
      .post(this.colegiosUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  deleteColegio(id: number): Promise<void>{
    const url = `${this.colegiosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }*/

}
