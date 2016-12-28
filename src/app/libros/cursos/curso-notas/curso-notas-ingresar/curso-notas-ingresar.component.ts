import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-notas-ingresar',
  templateUrl: './curso-notas-ingresar.component.html',
  styleUrls: ['./curso-notas-ingresar.component.css'],
})
export class CursoNotasIngresarComponent implements OnInit {

  asignaturas = [
    {'id':1,'label':'LEN','nombre':'','cantNotas':5},
    {'id':2,'label':'MAT','nombre':'','cantNotas':7},
    {'id':3,'label':'FIS','nombre':'','cantNotas':8},
    {'id':4,'label':'CSO','nombre':'','cantNotas':7},
    {'id':5,'label':'ART','nombre':'','cantNotas':10},
    {'id':6,'label':'BIO','nombre':'','cantNotas':15},
    {'id':7,'label':'EDF','nombre':'','cantNotas':4},
    {'id':8,'label':'REL','nombre':'','cantNotas':5},
  ];

  alumnos = [
    {'id':1, 'alumnos':[
      {'numero':1,'nombre':'Ivan','apellidos':'Arenas','nMat':10,'exc':'','notas':[
        {'id':1,'value':5.0},
        {'id':2,'value': null},
        {'id':3,'value': 4.6},
        {'id':4,'value': 6.0},
        {'id':5,'value': 5.7},
      ]},
      {'numero':2,'nombre':'Valentin','apellidos':'Trujillo','nMat':15,'exc':'','notas':[
        {'id':6,'value':4.0},
        {'id':7,'value': 7.0},
        {'id':8,'value': null},
        {'id':9,'value': null},
        {'id':10,'value': 5.4},
      ]},
      {'numero':3,'nombre':'Don','apellidos':'Carter','nMat':230,'exc':'','notas':[
        {'id':11,'value':7.0},
        {'id':12,'value': 7.0},
        {'id':13,'value': null},
        {'id':14,'value': 5.5},
        {'id':15,'value': 6.4},
      ]},
    ]}
  ];

  selectedAsignatura: any;
  selectedAsignaturaAlumnos = [];

  constructor() { }

  ngOnInit() {
    this.setAsignatura(1);
  }

  //template rendering
  createRange(n: number){
    let items: number[] = [];
    for(let i = 1; i <= n; i++){
      items.push(i);
    }
    return items;
  }

  setAsignatura(id: number) {
    this.selectedAsignatura = this.asignaturas.find(res => res.id == id);
    if (this.alumnos.find(res => res.id == id)){
      this.selectedAsignaturaAlumnos = this.alumnos.find(res => res.id == id).alumnos;
    } else {
      this.selectedAsignaturaAlumnos =[];
    }
  }

  //logic
  restrictValue(nota: any, alumnoId: number, assignId: number){
    let updatedNota = this.alumnos.find(res => res.id == assignId)
      .alumnos.find(res => res.nMat == alumnoId)
      .notas.find(res => res.id == nota.id);
    if(nota.value > 7.0){
      nota.value=7.0;
      updatedNota.value = nota.value;
    } else if(nota.value < 1.0){
      nota.value=1.0;
      updatedNota.value = nota.value;
    }
  }

}
