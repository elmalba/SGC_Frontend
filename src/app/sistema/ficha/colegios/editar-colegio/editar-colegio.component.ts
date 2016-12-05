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
      .subscribe((colegio) => {this.selectedColegio = colegio;this.colegio = this.selectedColegio});

  }

  goBack(): void {
    this.location.back();
  }

  saveColegio(): void {
    console.log(this.selectedColegio);
    console.log(this.colegio);
    this.colegiosService.updateColegio(this.colegio);
  }



}
