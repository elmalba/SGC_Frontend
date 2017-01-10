import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  certificados = [
    {'id':1,'nombre':'Certificado Matricula'},
    {'id':2,'nombre':'Certificado Alumno Regular'},
    {'id':3,'nombre':'Certificado de Inscripción'},
    {'id':4,'nombre':'Certificado de Asistencia'},
    {'id':5,'nombre':'Certificado de Traslado'},
    {'id':6,'nombre':'Ranking 4tos Medios'},
  ];

  options = [
    {'id':1,'nombre':'Por Tipo de Enseñanza','icon':'icon-institution'},
    {'id':2,'nombre':'Por Grado','icon':'icon-mortar-board'},
    {'id':3,'nombre':'Por Curso','icon':'icon-users'},
    {'id':4,'nombre':'Por Alumno','icon':'icon-user'},
  ];

  certificadosId: number[] = [];
  optionId: number;

  constructor() { }

  ngOnInit() {
  }

  setCertificado(id: number){
    if(this.include(this.certificadosId,id)){
      this.certificadosId.splice(this.certificadosId.indexOf(id),1);
    } else {
      this.certificadosId.push(id);
    }
  }

  setOption(id: number){
    if(this.optionId == id){
      this.optionId = null;
    } else {
      this.optionId = id;
    }
  }

  include(arr,obj) {
    return (arr.indexOf(obj) != -1);
  }


}
