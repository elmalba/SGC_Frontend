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
    console.log(this.colegio);
    this.colegiosService.createColegio(this.colegio);
  }

}
