import {Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Profesor } from '../profesor';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  profesor: Profesor;
  cursos = [];

  grados = [
    {"id":"1ro básico"},
    {"id":"2do básico"},
    {"id":"3ro básico"},
    {"id":"4to básico"},
    {"id":"5to básico"},
    {"id":"6to básico"},
    {"id":"7mo básico"},
    {"id":"8vo básico"},
    {"id":"1ro medio"},
    {"id":"2do medio"},
    {"id":"3ro medio"},
    {"id":"4to medio"},
  ];

  letras = [
    {"id":"A"},
    {"id":"B"},
    {"id":"C"},
    {"id":"D"},
    {"id":"E"},
    {"id":"F"},
    {"id":"G"},
    {"id":"H"},
    {"id":"I"},
    {"id":"J"},
    {"id":"K"},
    {"id":"L"},
    {"id":"M"},
    {"id":"N"},
    {"id":"O"},
    {"id":"P"},
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
    // this.modalOpen();
  }

  modalOpen(): void {
    this.modal.open();
  }

  modalClose(): void {
    this.modal.close();
    this.goBack();
  }

  addCurso() {
    this.cursos.push({"grado":"","curso":""});
  }

  susCurso() {
    this.cursos.pop();
  }


}
