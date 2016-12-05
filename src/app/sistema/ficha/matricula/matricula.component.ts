import { Component, OnInit } from '@angular/core';

import { MatriculaService } from '../matricula.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {

  private matriculas = [];

  constructor(
    private matriculaService: MatriculaService,
  ) { }

  getMatriculas() {
    // this.matriculaService.getMatriculas().subscribe((response) => {this.matriculas = response})
  }

  ngOnInit(): void {
    this.getMatriculas();
  }

}
