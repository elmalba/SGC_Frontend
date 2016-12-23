import { Component, OnInit } from '@angular/core';

import { MatriculaService } from '../../../../services/sistema/ficha/matricula.service';


@Component({
  selector: 'app-ver-matricula',
  templateUrl: './ver-matricula.component.html',
  styleUrls: ['./ver-matricula.component.css']
})
export class VerMatriculaComponent implements OnInit {

  private matriculas = [
    {"id":1},
  ];

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
