import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location }       from '@angular/common';

@Component({
  selector: 'app-editar-colegio',
  templateUrl: './editar-colegio.component.html',
  styleUrls: ['./editar-colegio.component.css']
})
export class EditarColegioComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => { this.id = +params['id'];});
  }

  goBack(): void {
    this.location.back();
  }



}
