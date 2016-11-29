import {Component, OnInit} from '@angular/core';

import { ColegiosService } from '../colegios.service'

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit {
  private colegios = [];

  constructor(private colegiosService: ColegiosService  ) { }

  getColegios(): void {
    this.colegiosService.getColegios().then((colegios) => {this.colegios = colegios});
    console.log(this.colegios)
  }

  ngOnInit(): void {
    this.getColegios();
  }



}
