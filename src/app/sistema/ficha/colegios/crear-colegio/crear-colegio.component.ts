import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-crear-colegio',
  templateUrl: './crear-colegio.component.html',
  styleUrls: ['./crear-colegio.component.css']
})
export class CrearColegioComponent implements OnInit {

  constructor(
      private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
