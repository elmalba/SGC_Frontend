import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  asignatura_id: any;
  asignaturas = [
    {"id":"1","nombre":"MAT"},
    {"id":"2","nombre":"ING"},
    {"id":"3","nombre":"LEN"},
    {"id":"4","nombre":"CIE"},
    {"id":"5","nombre":"HIS"},
    {"id":"6","nombre":"EDF"},
    {"id":"7","nombre":"MUS"},
    {"id":"8","nombre":"ART"},
    {"id":"9","nombre":"ORI"},
  ];

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  showAsignatura(id: number){
    this.asignatura_id = id;
    console.log(this.asignatura_id,id);
  }

  goBack(): void {
    this.location.back();
  }

}
