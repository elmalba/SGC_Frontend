import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-curso-anotaciones-ver',
  templateUrl: './curso-anotaciones-ver.component.html',
  styleUrls: ['./curso-anotaciones-ver.component.css'],
})
export class CursoAnotacionesVerComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  alumnos: any[] = [
    {'nombre':'Ivan','apellido_paterno':'Arenas','apellido_materno':'Rossa','rut':'1111111-1',
      'anotaciones': [
        {'numero':1,'fecha_anotacion': new Date(),'asignatura':'Lenguaje','general':true,'positiva':false,'obs':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla luctus diam, ac tempus sapien vestibulum vel. Morbi pretium nisl libero, sed semper leo tincidunt mollis. Morbi metus orci, eleifend nec varius quis, gravida id dui. Etiam ac orci nunc. Quisque non accumsan odio. Ut maximus quam sit amet lobortis porta. Morbi tempus tellus et ullamcorper pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus lorem at erat convallis, ac sollicitudin mauris sodales. Curabitur ornare eros sapien, a lacinia orci dignissim a. Quisque at lacus vel ipsum sodales rutrum non ac enim. Morbi eget enim laoreet, congue ipsum quis, consequat sapien.'},
      ]},
  ];
  selectedAlumno: any;

  constructor() { }

  ngOnInit() {


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

}
