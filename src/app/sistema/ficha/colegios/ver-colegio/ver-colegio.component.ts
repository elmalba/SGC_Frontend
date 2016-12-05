import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }       from '@angular/common';

import { ColegiosService } from '../../colegios.service';
import { Colegio } from '../colegio';

@Component({
  selector: 'app-ver-colegio',
  templateUrl: './ver-colegio.component.html',
  styleUrls: ['./ver-colegio.component.css']
})
export class VerColegioComponent implements OnInit {

  id: number;
  private sub: any;

  colegio: Colegio;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private colegiosService: ColegiosService,) {
  }

  ngOnInit() {
    this.colegio = new Colegio();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.route.params
      .switchMap((params: Params) => this.colegiosService.getColegio(+params['id']))
      .subscribe((colegio) => {
        this.colegio = colegio;
      });
  }

  goBack(): void {
    this.location.back();
  }

  goToEdit(id: number){
    console.log(this.route);
    this.router.navigate(['sistema/ficha/colegios/editar-colegio',id],{relativeTo: this.route.parent});

  }

  deleteColegio(): void {
    this.colegiosService.deleteColegio(this.colegio.id);
  }
}
