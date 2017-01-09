import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { CursosService } from '../../../../../services/libros/cursos.service';
import { ProfesoresService } from '../../../../../services/libros/profesores.service';

@Component({
  selector: 'app-curso-anotaciones-ver-gen',
  templateUrl: 'curso-anotaciones-ver-gen.component.html',
  styleUrls: ['curso-anotaciones-ver-gen.component.css']
})
export class CursoAnotacionesVerGenComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  id: number;
  private sub: any;

  anotaciones = [];
  selectedAnotacion: any = {};

  constructor(
    private cursosService: CursosService,
    private profesoresService: ProfesoresService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.parent.parent.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.cursosService.getAnotacionesGenerales(this.id).subscribe((anotaciones) =>{
      this.anotaciones = anotaciones;

      for (let anotacion of this.anotaciones){

        if(anotacion.profesor_id){
          this.profesoresService.getProfesorById(anotacion.profesor_id).subscribe((profesor) => {
            anotacion['profesor'] = {
              'nombre':profesor.usuario.nombre,
              'apellido_paterno': profesor.usuario.apellido_paterno,
              'apellido_materno': profesor.usuario.apellido_materno
            }
          });
        } else {
          anotacion['profesor'] = {
            'nombre':'',
            'apellido_paterno': '',
            'apellido_materno': ''
          }
        }

        if(anotacion.asignatura_id){
          let asignatura: any;
          this.cursosService.getAsignaturasByCursoId(this.id).subscribe((asignaturas) => {
            asignatura = asignaturas.asignaturas.find(res => res.asignatura.datos.id == anotacion.asignatura_id);
            anotacion['asignatura'] = {
              'nombre': asignatura.asignatura.datos.nombre,
            };
          })
        } else {
          anotacion['asignatura'] = {
            'nombre': '',
          }
        }
      }
    });

  }


  modalOpen(anotacion){
    this.setSelected(anotacion);
    this.modal.open('lg');
  }

  modalClose(){
    this.modal.close();
    this.selectedAnotacion = {};
  }

  setSelected(anotacion){
    this.selectedAnotacion = anotacion;
  }

  toggleShow(anotacion){
    this.modalOpen(anotacion)
  }

}
