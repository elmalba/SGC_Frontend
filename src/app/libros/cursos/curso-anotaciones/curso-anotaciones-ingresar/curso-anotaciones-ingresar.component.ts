import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CursosService } from '../../../../services/libros/cursos.service';
import { AnotacionesService } from '../../../../services/libros/anotaciones.service';

@Component({
  selector: 'app-curso-anotaciones-ingresar',
  templateUrl: './curso-anotaciones-ingresar.component.html',
  styleUrls: ['./curso-anotaciones-ingresar.component.css']
})
export class CursoAnotacionesIngresarComponent implements OnInit {
  id: number;
  private sub: any;

  asignaturas = [];

  curso: any;
  alumnos: any[] = [];
  selectedAlumno: any;

  anotacion: any;

  constructor(
    private cursosService: CursosService,
    private anotacionesService: AnotacionesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.sub = this.route.parent.parent.params.subscribe(params => {
      this.id = params['id'];
    });

    this.route.parent.parent.params
      .switchMap((params: Params) => this.cursosService.getCursoById(params['id']))
      .subscribe((curso) => {
        this.curso = curso;
        this.alumnos = curso.alumnos;
    });

    this.cursosService.getAsignaturasByCursoId(this.id).subscribe((res) => {
      this.asignaturas = res.asignaturas;
      console.log(this.asignaturas);
    });

    this.selectedAlumno = {
      'fullname': '',
      'rut':null,
    };

    this.anotacion = {
      'curso_id':this.id,
      'asignatura_id':null,
      'fecha': '',
      'observacion': '',
      'general': false,
      'tipo':true,
      'alumno': this.selectedAlumno,
    };
  }

  toggleGeneral(){
    this.anotacion.general = !(this.anotacion.general);
    if(!(this.anotacion.general)){
      this.selectedAlumno = {
        'fullname': '',
        'rut':null,
      };
      this.anotacion.alumno = this.selectedAlumno;
    }
  };

  setSelectedAlumno(alumno){
    this.selectedAlumno.rut = alumno.rut;
    this.selectedAlumno['fullname'] = alumno.nombre + ' ' + alumno.apellido_paterno + ' ' + alumno.apellido_materno;
    this.anotacion.alumno = this.selectedAlumno;
  }

  saveAnotacion(){
    console.log(this.anotacion);
    this.anotacionesService.createAnotacion(this.anotacion).subscribe((res) =>{})
  }

}
