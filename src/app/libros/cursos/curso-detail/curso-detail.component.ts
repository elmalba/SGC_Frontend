import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CursosService } from '../../../services/libros/cursos.service';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {
  id: number;
  private sub: any;

  private curso: any;

  selectedTabId: number;
  tabs = [
    {"id":1,"path":'lista',"label":"Lista Curso","icon":"icon-users"},
    {"id":2,"path":'notas',"label":"Notas","icon":"icon-check-square-o"},
    {"id":3,"path":'asistencia',"label":"Asistencia","icon":"icon-calendar-check-o"},
    {"id":4,"path":'anotaciones',"label":"Anotaciones","icon":"icon-bullhorn"},
  ];

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.selectedTabId = 1;

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.route.params
      .switchMap((params: Params) => this.cursosService.getCurso(+params['id']))
      .subscribe((curso) => {
        this.curso = curso;
      });
  }

  //navigation
  goBack(): void {
    //change to router.navigate to navigate to parent route app/libro/ver-cursos
    //this.location.back navigates inside tabs, bad for tab logic.
    this.router.navigate(['./'],{relativeTo: this.route.parent});
  }

  //tab logic
  setActive(id: number){
    this.selectedTabId = id;
  }

  //service


}
