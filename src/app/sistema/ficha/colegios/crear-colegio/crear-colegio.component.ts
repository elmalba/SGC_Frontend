import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

import { Colegio } from '../colegio';
import { ColegiosService } from '../../colegios.service';

@Component({
  selector: 'app-crear-colegio',
  templateUrl: './crear-colegio.component.html',
  styleUrls: ['./crear-colegio.component.css']
})
export class CrearColegioComponent implements OnInit {

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
      private location: Location,
      private colegiosService: ColegiosService,
  ) { }

  ngOnInit() {
    this.colegio = new Colegio();
  }

  goBack(): void {
    this.location.back();
  }

  saveColegio(): void {
    this.colegiosService.createColegio(this.colegio).subscribe(res => {
      this.colegio = res;
      this.goBack();
    });
  }

}
