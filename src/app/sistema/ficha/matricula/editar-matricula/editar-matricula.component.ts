import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';

import { Matricula, Apoderado } from '../matricula';
import { MatriculaService } from '../../../../services/sistema/ficha/matricula.service';

@Component({
  selector: 'app-editar-matricula',
  templateUrl: './editar-matricula.component.html',
  styleUrls: ['./editar-matricula.component.css']
})
export class EditarMatriculaComponent implements OnInit {

  id: number;
  private sub: any;

  selectedMatricula: Matricula;
  selectedPadre: Apoderado;
  selectedMadre: Apoderado;
  selectedApoderado: Apoderado;


  matricula: Matricula;
  padre: Apoderado;
  madre: Apoderado;
  apoderado: Apoderado;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private matriculaService: MatriculaService,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.selectedMatricula = new Matricula();
    this.selectedPadre = new Apoderado(false);
    this.selectedMadre = new Apoderado(false);
    this.selectedApoderado = new Apoderado(true);

    this.matricula = new Matricula();
    this.padre = new Apoderado(false);
    this.madre = new Apoderado(false);
    this.apoderado = new Apoderado(true);

    this.sub = this.route.params.subscribe( params => { this.id = +params['id'];});

    this.route.params
      .switchMap((params: Params) => this.matriculaService.getMatricula(+params['id']))
      .subscribe((matricula) => {
        this.matricula = matricula;
        this.selectedMatricula = JSON.parse(JSON.stringify(matricula));
      });
  }

  goBack(): void {
    this.location.back();
  }

  saveMatricula() {
    this.matriculaService.updateMatricula(this.matricula).subscribe((res) => {
      this.selectedMatricula = JSON.parse(JSON.stringify(res));
    });
  }
}
