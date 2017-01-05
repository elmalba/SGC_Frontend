import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class DpaService {
  static get parameters(){
    return [[Http]]
  }

  private dpaUrl = 'https://apis.modernizacion.cl/dpa/';

  constructor(private http: Http) {
    this.http=http;
  }
  private headers = new Headers({'Content-Type': 'application/json'});

  getRegiones(): Observable<any[]> {
    const url =`${this.dpaUrl}/regiones`;

    return this.http.get(url)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || error.status ));
  }

  getProvinciasByRegionId(regionId: string): Observable<any[]> {
    const url =`${this.dpaUrl}/regiones/${regionId}/provincias`;

    return this.http.get(url)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || error.status ));
  }

  getComunasByProvinciaIdRegionId(regionId: string, provinciaId: string): Observable<any[]> {
    const url =`${this.dpaUrl}/regiones/${regionId}/provincias/${provinciaId}/comunas`;

    return this.http.get(url)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || error.status ));
  }

}
