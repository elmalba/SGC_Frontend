import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-anotaciones-ingresar',
  templateUrl: './curso-anotaciones-ingresar.component.html',
  styleUrls: ['./curso-anotaciones-ingresar.component.css']
})
export class CursoAnotacionesIngresarComponent implements OnInit {

  asignaturas = [
    {'id':1,'label':'LEN','nombre':'Lenguaje','cantNotas':5},
    {'id':2,'label':'MAT','nombre':'Matemáticas','cantNotas':7},
    {'id':3,'label':'FIS','nombre':'Física','cantNotas':8},
    {'id':4,'label':'CSO','nombre':'Ciencias Sociales','cantNotas':7},
    {'id':5,'label':'ART','nombre':'Artes','cantNotas':10},
    {'id':6,'label':'BIO','nombre':'Biología','cantNotas':15},
    {'id':7,'label':'EDF','nombre':'Educación Física','cantNotas':4},
    {'id':8,'label':'REL','nombre':'Religión','cantNotas':5},
  ];

  alumnos: any[] = [];

  anotacion: any;

  constructor() { }

  ngOnInit() {
    this.anotacion = {
      'asignatura':'',
      'fecha': '',
      'obs': '',
      'general': false,
      'alumno':''
    }
  }

  toggleGeneral(){
    this.anotacion.general = !(this.anotacion.general);
    if(!(this.anotacion.general)){
      this.anotacion.alumno = '';
    }
  };

  saveAnotacion(){
    console.log(this.anotacion);
  }

}
