import { Component, OnInit } from '@angular/core';

import { MatriculaService } from '../../../services/sistema/ficha/matricula.service';

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
    this.matriculaService.getMatriculas().subscribe((response) => {this.matriculas = response})
  }

  ngOnInit(): void {
    this.getMatriculas();
  }

  indexOfObj(id: number): number {
    for (let i = 0; i < this.matriculas.length; i++) {
      if ( this.matriculas[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  deleteMatricula(id: number){
    this.matriculaService.deleteMatricula(id).subscribe(() => {
      let index = this.indexOfObj(id);
      this.matriculas.splice(index,1);
    });
  }

}
