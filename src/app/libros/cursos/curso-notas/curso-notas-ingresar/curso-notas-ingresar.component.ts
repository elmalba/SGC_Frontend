import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CursosService } from '../../../../services/libros/cursos.service';
import { NotasService } from '../../../../services/libros/notas.service';

@Component({
  selector: 'app-curso-notas-ingresar',
  templateUrl: './curso-notas-ingresar.component.html',
  styleUrls: ['./curso-notas-ingresar.component.css'],
})
export class CursoNotasIngresarComponent implements OnInit {

  asignaturas = [];

  alumnos = [
    {'id':1, 'alumnos':[
      {'numero':1,'nombre':'Ivan','apellidos':'Arenas','nMat':10,'exc':'','notas':[
        {'id':1,'valor':5.0},
        {'id':2,'valor': null},
        {'id':3,'valor': 4.6},
        {'id':4,'valor': 6.0},
        {'id':5,'valor': 5.7},
      ]},
      {'numero':2,'nombre':'Valentin','apellidos':'Trujillo','nMat':15,'exc':'','notas':[
        {'id':6,'valor':4.0},
        {'id':7,'valor': 7.0},
        {'id':8,'valor': null},
        {'id':9,'valor': null},
        {'id':10,'valor': 5.4},
      ]},
      {'numero':3,'nombre':'Don','apellidos':'Carter','nMat':230,'exc':'','notas':[
        {'id':11,'valor':7.0},
        {'id':12,'valor': 7.0},
        {'id':13,'valor': null},
        {'id':14,'valor': 5.5},
        {'id':15,'valor': 6.4},
      ]},
    ]}
  ];

  selectedAsignatura: any;
  selectedAsignaturaAlumnos = [];

  id: number;
  private sub: any;

  constructor(
    private cursosService: CursosService,
    private notasService: NotasService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route.parent.parent.params.subscribe(params => {
      this.id = params['id'];
    });

    this.route.parent.parent.params
      .switchMap((params: Params) => this.cursosService.getAsignaturasByCursoId(params['id']))
      .subscribe((res) => {
        this.asignaturas = res.asignaturas;
        this.setAsignatura(this.asignaturas[0].asignatura.datos.id);
      });

    this.selectedAsignatura = {'datos':{
      'id':1,
      'nombre': 'Lenguaje y Comunicación',
      'ponderacion':true,
    },'cantidad':0,'info_notas':[]}

  }

  //template rendering
  createRange(n: number){
    let items: number[] = [];
    for(let i = 1; i <= n; i++){
      items.push(i);
    }
    return items;
  }

  setAsignatura(id: number) {
    this.selectedAsignatura = this.asignaturas.find(res => res.asignatura.datos.id == id).asignatura;
    this.getAlumnos(this.selectedAsignatura);
  }

  getAlumnos(asignatura: any){
    this.cursosService.getNotasAlumnosByCursoId(this.id,asignatura.datos.id).subscribe((res) => {
      this.selectedAsignaturaAlumnos = res.notas_alumnos;
    })
  }

  //logic
  restrictValue(nota: any, alumnoId: number, assignId: number){
    let updatedNota = this.alumnos.find(res => res.id == assignId)
      .alumnos.find(res => res.nMat == alumnoId)
      .notas.find(res => res.id == nota.id);
    if(nota.value > 7.0){
      nota.value=7.0;
      updatedNota.valor = nota.value;
    }  else if(nota.value == 0){
      nota.value = null;
      updatedNota.valor = nota.value;
    } else if(nota.value < 1.0 && nota.value!=null){
      nota.value=1.0;
      updatedNota.valor = nota.value;
    }
  }

  onChange(nota: any){
    this.saveNota(nota);
  }

  //services
  saveNota(nota: any){
    console.log(nota);
    this.notasService.updateNota(nota).subscribe((res) =>{
      nota = res;
    });
  }

  saveNotas(){
    for (let alumno of this.selectedAsignaturaAlumnos){
      for (let nota of alumno.notas){
        this.saveNota(nota);
      }
    }
  }

  createNota(){
    this.notasService.createNota(this.id,this.selectedAsignatura.datos.id).subscribe((res) => {
      this.route.parent.parent.params
        .switchMap((params: Params) => this.cursosService.getAsignaturasByCursoId(params['id']))
        .subscribe((res) => {
          this.asignaturas = res.asignaturas;
          this.setAsignatura(this.selectedAsignatura.datos.id);
        });
    });

  }

}
