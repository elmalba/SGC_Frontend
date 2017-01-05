import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


import { CursosService } from '../../../../services/libros/cursos.service';
import { MatriculaService } from '../../../../services/sistema/ficha/matricula.service';

@Component({
  selector: 'app-curso-anotaciones-ver',
  templateUrl: './curso-anotaciones-ver.component.html',
  styleUrls: ['./curso-anotaciones-ver.component.css'],
})
export class CursoAnotacionesVerComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  id: number;
  private sub: any;

  alumnos: any[] = [];
  selectedAlumno: any;

  constructor(
    private cursosService: CursosService,
    private matriculaService: MatriculaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.parent.parent.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.cursosService.getCursoById(this.id).subscribe(curso => {
      this.alumnos = curso.alumnos;
      for (let alumno of this.alumnos){
        this.matriculaService.getAnotacionesById(alumno.id,this.id).subscribe((res) =>{
          alumno['anotaciones'] = res.anotaciones;
          for (let anotacion of alumno.anotaciones){
            anotacion['show'] = false
          }
        });
      }
      console.log(this.alumnos);
    });

  }

  modalOpen(alumno: any){
    this.setSelected(alumno);
    this.modal.open();
  }

  modalClose(){
    this.modal.close();
    this.selectedAlumno = {};
  }

  setSelected(alumno: any){
    this.selectedAlumno = alumno;
  }

  toggleShow(anotacion){
    anotacion.show = !(anotacion.show);
  }

}
