import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-asistencia',
  templateUrl: './curso-asistencia.component.html',
  styleUrls: ['./curso-asistencia.component.css']
})
export class CursoAsistenciaComponent implements OnInit {

  selectedTabId: number;
  tabs = [
    {"id":1,"path":'ver',"label":"Ver","icon":"icon-eye"},
    {"id":2,"path":'ingresar',"label":"Ingresar","icon":"icon-plus"},
  ];

  constructor() { }

  ngOnInit() {
    this.selectedTabId = 1;
  }

  setActive(id: number){
    this.selectedTabId = id;
  }
}
