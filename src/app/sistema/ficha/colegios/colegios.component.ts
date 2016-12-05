import {Component, OnInit} from '@angular/core';

import { ColegiosService } from '../colegios.service'

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit {

  private colegios = [];

  constructor(
    private colegiosService: ColegiosService,
  ) { }

  getColegios() {
    this.colegiosService.getColegios().subscribe((response) => {this.colegios = response})
  }

  ngOnInit(): void {
    this.getColegios();
  }

  deleteColegio(id: number): void {
    this.colegiosService.deleteColegio(id);
  }



}
