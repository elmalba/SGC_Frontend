import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

import { Matricula, Apoderado } from '../matricula';
import { MatriculaService } from '../../matricula.service';

@Component({
  selector: 'app-crear-matricula',
  templateUrl: './crear-matricula.component.html',
  styleUrls: ['./crear-matricula.component.css']
})
export class CrearMatriculaComponent implements OnInit {

  matricula: Matricula;
  padre: Apoderado;
  madre: Apoderado;
  apoderado: Apoderado;

  constructor(
    private location: Location,
    private matriculaService: MatriculaService,
  ) { }

  ngOnInit() {
    this.matricula = new Matricula();
    this.padre = new Apoderado(false);
    this.madre = new Apoderado(false);
    this.apoderado = new Apoderado(true);
  }

  goBack(): void {
    this.location.back();
  }

  onChange(changed: Apoderado, other: Apoderado) {
    if ( !changed.selected && !other.selected ) {
      this.apoderado = new Apoderado(true);
    }

    else if ( changed.selected && other.selected ) {
      other.selected = false;
      this.apoderado = JSON.parse(JSON.stringify(changed));
      this.apoderado.selected = false;
    }
    else if ( changed.selected && !other.selected ) {
      this.apoderado = JSON.parse(JSON.stringify(changed));
      this.apoderado.selected = false;
    }
    else if ( !changed.selected && other.selected ){
      this.apoderado = JSON.parse(JSON.stringify(other));
      this.apoderado.selected = false;
    }
    console.log(this.apoderado);
  }

  saveMatricula() {
    this.matricula.madre = this.madre;
    this.matricula.padre = this.padre;
    this.matricula.apoderado = this.apoderado;

    this.matriculaService.createMatricula(this.matricula).subscribe((matricula) => {
      this.matricula = matricula;
      console.log(this.matricula);
      this.goBack();
    });
  }

}
