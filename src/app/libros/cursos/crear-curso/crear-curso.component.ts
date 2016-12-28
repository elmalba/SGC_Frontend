import {Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common'
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Curso } from '../curso';
import { CursosService } from '../../../services/libros/cursos.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  private default_date: Date;
  private curso: Curso;

  modalMessage: string;
  modalErrorMessage: string;

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
    private cursosService: CursosService,
  ) {
  }

  ngOnInit() {
    this.curso = new Curso();
    this.default_date = new Date();
    if (this.default_date.getMonth() > 4) {
      this.default_date.setFullYear(this.default_date.getFullYear() + 1);
    }
    this.curso.anio = this.default_date.getFullYear().toString();
    this.modalErrorMessage ='';
  }

  goBack(): void {
    this.location.back();
  }

  saveCurso() {
    this.cursosService.createCurso(this.curso).subscribe((res) => {
      this.modalMessage = 'Curso creado con éxito.';
      this.modalOpen();
    }, (error:any) => {
      if (error == 422){
        this.modalMessage = 'Curso no creado.';
        this.modalErrorMessage = 'Curso ya existente.';
        this.modalOpen();
      }
    });
  }

  modalOpen(): void {
    this.modal.open();
  }

  modalClose(): void {
    this.modal.close();
    this.modalErrorMessage = '';
  }

}
