import {Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { ProfesoresService } from '../../../../services/libros/profesores.service';
import { Profesor } from '../profesor';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: 'crear-profesor.component.html',
  styleUrls: ['crear-profesor.component.css']
})
export class CrearProfesorComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  profesor: Profesor;
  cursosId = [];
  cursos = [
    {"grado":"1ro medio", "curso":"A", "profesor":"Atos", "id":1 },
    {"grado":"8vo básico", "curso":"H", "profesor":"Portos", "id":2 },
    {"grado":"3ro medio", "curso":"B", "profesor":"Dartagnan", "id":3 },
    {"grado":"7mo básico", "curso":"B", "profesor":null, "id":4 },
    {"grado":"4to básico", "curso":"C", "profesor":null, "id":5 },
  ];

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
    this.profesor = new Profesor();
  }

  goBack(): void {
    this.location.back();
  }

  saveProfesor() {
    this.profesor["cursos"] = this.cursos;
    this.modalOpen();
  }

  modalOpen(): void {
    this.modal.open();
  }

  modalClose(): void {
    this.modal.close();
    this.goBack();
  }

  addCurso() {
    this.cursosId.push({"id":""});
  }

  susCurso() {
    this.cursosId.pop();
  }


}
