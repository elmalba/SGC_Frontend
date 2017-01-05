import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

import * as globalVar from '../../globals';

@Injectable()
export class AnotacionesService {
  static get parameters(){
    return [[Http]]
  }

  private anotacionessUrl = globalVar.apiUrl+'/anotaciones';

  constructor(private http: Http) {
    this.http=http;
  }
  private headers = new Headers({'Content-Type': 'application/json'});

  createAnotacion(anotacion): Observable<any>{
    let options = new RequestOptions({headers: this.headers});
    let payload = {};
    payload['anotaciones'] = JSON.parse(JSON.stringify(anotacion));

    return this.http.post(this.anotacionessUrl, JSON.stringify(payload), options)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || error.status ));
  }

}
