import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  certificados = [
    {'id':'cMatricula','nombre':'Certificado Matricula'},
    {'id':'cAlumnoRegular','nombre':'Certificado Alumno Regular'},
    {'id':'cInscripcion','nombre':'Certificado de Inscripción'},
    {'id':'cAsistencia','nombre':'Certificado de Asistencia'},
    {'id':'cTRaslado','nombre':'Certificado de Traslado'},
    {'id':'cRanking','nombre':'Ranking 4tos Medios'},
  ];

  options = [
    {'id':1,'nombre':'Por Tipo de Enseñanza','icon':'icon-institution'},
    {'id':2,'nombre':'Por Grado','icon':'icon-mortar-board'},
    {'id':3,'nombre':'Por Curso','icon':'icon-users'},
    {'id':4,'nombre':'Por Alumno','icon':'icon-user'},
  ];

  docsId: string[] = [];
  optionId: number;

  constructor() { }

  ngOnInit() {
  }

  setCertificado(id: string){
    if(this.include(this.docsId,id)){
      this.docsId.splice(this.docsId.indexOf(id),1);
    } else {
      this.docsId.push(id);
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
