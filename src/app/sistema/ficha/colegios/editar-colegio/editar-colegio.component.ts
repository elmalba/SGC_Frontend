import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }       from '@angular/common';

import { ColegiosService } from '../../colegios.service';
import { Colegio } from '../colegio';

@Component({
  selector: 'app-editar-colegio',
  templateUrl: './editar-colegio.component.html',
  styleUrls: ['./editar-colegio.component.css']
})
export class EditarColegioComponent implements OnInit {

  id: number;
  private sub: any;

  selectedColegio: Colegio;
  colegio: Colegio;

  regiones: {val: number, nom: string}[] = [
    {"val":1,"nom":"Tarapacá"},
    {"val":2,"nom":"Antofagasta"},
    {"val":3,"nom":"Atacama"},
    {"val":4,"nom":"Coquimbo"},
    {"val":5,"nom":"Valparaíso"},
    {"val":6,"nom":"O'Higgins"},
    {"val":7,"nom":"Maule"},
    {"val":8,"nom":"Bío Bío"},
    {"val":9,"nom":"Araucanía"},
    {"val":10,"nom":"Los Lagos"},
    {"val":11,"nom":"Aisén"},
    {"val":12,"nom":"Magallanes"},
    {"val":14,"nom":"Los Ríos"},
    {"val":15,"nom":"Arica y Parinacota"},
    {"val":16,"nom":"Metropolitana de Santiago"},
  ];

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private colegiosService: ColegiosService,
  ) { }

  ngOnInit() {
    this.selectedColegio = new Colegio();
    this.colegio = new Colegio();

    this.sub = this.route.params.subscribe( params => { this.id = +params['id'];});

    this.route.params
      .switchMap((params: Params) => this.colegiosService.getColegio(+params['id']))
      .subscribe((colegio) => {
        this.colegio = colegio;
        this.selectedColegio = JSON.parse(JSON.stringify(colegio));
    });
  }

  goBack(): void {
    this.location.back();
  }

  saveColegio(): void {
    this.colegiosService.updateColegio(this.colegio).subscribe((res) => {
      this.selectedColegio = JSON.parse(JSON.stringify(res));
    });
  }
}
