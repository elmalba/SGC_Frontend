import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

@Injectable()
export class CursosService {
  static get parameters(){
    return [[Http]]
  }

  private cursosUrl = 'http://api.innovacolegio.cl/cursos';



  constructor() { }

}
