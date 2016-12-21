import {Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  cursos = [
    {"grado":"1ro medio", "curso":"A", "profesor":"Atos", "id":"1" },
    {"grado":"8vo básico", "curso":"J", "profesor":"Portos", "id":"2" },
    {"grado":"3ro medio", "curso":"B", "profesor":"Dartagnan", "id":"3" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
