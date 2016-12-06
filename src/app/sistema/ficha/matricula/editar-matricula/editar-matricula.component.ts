import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';

import { Matricula } from '../matricula';
import { MatriculaService } from '../../matricula.service';

@Component({
  selector: 'app-editar-matricula',
  templateUrl: './editar-matricula.component.html',
  styleUrls: ['./editar-matricula.component.css']
})
export class EditarMatriculaComponent implements OnInit {

  id: number;
  private sub: any;

  selectedMatricula: Matricula;
  matricula: Matricula;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private matriculaService: MatriculaService,
  ) { }

  ngOnInit() {
    this.selectedMatricula = new Matricula();
    this.matricula = new Matricula();

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
