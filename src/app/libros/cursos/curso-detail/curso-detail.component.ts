import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  selectedTabId: number;
  tabs = [
    {"id":1,"path":'lista',"label":"Lista Curso","icon":"icon-users"},
    {"id":2,"path":'notas',"label":"Notas","icon":"icon-check-square-o"},
    {"id":3,"path":'asistencia',"label":"Asistencia","icon":"icon-calendar-check-o"},
    {"id":4,"path":'anotaciones',"label":"Anotaciones","icon":"icon-bullhorn"},
  ];

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    this.selectedTabId = 1;
  }

  goBack(): void {
    this.location.back();
  }

  setActive(id: number){
    this.selectedTabId = id;
  }

}
