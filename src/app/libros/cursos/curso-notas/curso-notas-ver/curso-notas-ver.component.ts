import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-notas-ver',
  templateUrl: './curso-notas-ver.component.html',
  styleUrls: ['./curso-notas-ver.component.css']
})
export class CursoNotasVerComponent implements OnInit {

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
        {'value':5.0},
        {'value': null},
        {'value': 4.6},
        {'value': 6.0},
        {'value': 5.7},
      ]},
      {'numero':2,'nombre':'Valentin','apellidos':'Trujillo','nMat':15,'exc':'','notas':[
        {'value':4.0},
        {'value': 7.0},
        {'value': null},
        {'value': null},
        {'value': 5.4},
      ]},
      {'numero':3,'nombre':'Don','apellidos':'Carter','nMat':230,'exc':'','notas':[
        {'value':7.0},
        {'value': 7.0},
        {'value': null},
        {'value': 5.5},
        {'value': 6.4},
      ]},
    ]}
  ];

  selectedAsignatura: any;
  selectedAsignaturaAlumnos = [];

  constructor() { }

  ngOnInit() {
    this.setAsignatura(1);
    console.log(this.selectedAsignaturaAlumnos);
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
  public getPromedio(asignId: number, alumnoId: number): number{
    let notas = this.alumnos.find(res => res.id == asignId).alumnos.find(res => res.nMat == alumnoId).notas;
    let sum: number = 0;
    let total: number = 0;
    for(let nota of notas){
      if(!(nota.value == null)){
        sum += nota.value;
        total += 1;
      }
    }
    return sum/total;
  }



}
