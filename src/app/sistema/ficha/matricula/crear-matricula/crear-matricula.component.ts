import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

import { Matricula } from '../matricula';
import { MatriculaService } from '../../matricula.service';

@Component({
  selector: 'app-crear-matricula',
  templateUrl: './crear-matricula.component.html',
  styleUrls: ['./crear-matricula.component.css']
})
export class CrearMatriculaComponent implements OnInit {

  matricula: Matricula;

  constructor(
    private location: Location,
    private matriculaService: MatriculaService,
  ) { }

  ngOnInit() {
    this.matricula = new Matricula();
  }

  goBack(): void {
    this.location.back();
  }

  saveMatricula() {
    console.log(this.matricula);
    // this.matriculaService.createMatricula(this.matricula);
  }

}
