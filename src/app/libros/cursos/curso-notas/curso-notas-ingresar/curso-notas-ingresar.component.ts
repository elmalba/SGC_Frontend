import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { CursosService } from '../../../../services/libros/cursos.service';
import { NotasService } from '../../../../services/libros/notas.service';

@Component({
  selector: 'app-curso-notas-ingresar',
  templateUrl: './curso-notas-ingresar.component.html',
  styleUrls: ['./curso-notas-ingresar.component.css'],
})
export class CursoNotasIngresarComponent implements OnInit {
  @ViewChild('modalDelete') modalDelete: ModalComponent;
  @ViewChild('modalCreate') modalCreate: ModalComponent;
  @ViewChild('modalInfo') modalInfo: ModalComponent;

  asignaturas = [];
  alumnos = [];

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
  restrictValue(nota: any){
    if(nota.valor > 7.0){
      nota.valor=7.0;
    }  else if(nota.valor == 0){
      nota.valor = null;
    } else if(nota.valor < 1.0 && nota.valor!=null){
      nota.valor=1.0;
    }
  }

  onChange(nota: any){
    this.saveNota(nota);

  }

  //services
  saveNota(nota: any){
    this.restrictValue(nota);
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

  deleteNota(){

  }

  ////modals

  //delete
  modalDeleteOpen(){
    this.modalDelete.open();
  }

  modalDeleteClose(){
    this.modalDelete.close();
  }

  modalDeleteDismiss(){
    this.modalDelete.dismiss();
  }
  //create
  modalCreateOpen(){
    this.modalCreate.open('lg');
  }
  modalCreateClose(){
    this.modalCreate.close();
  }
  modalCreateDismiss(){
    this.modalCreate.dismiss();
  }
  //info
  modalInfoOpen(){
    this.modalInfo.open();
  }

  modalInfoClose(){
    this.modalInfo.close();
  }

}
