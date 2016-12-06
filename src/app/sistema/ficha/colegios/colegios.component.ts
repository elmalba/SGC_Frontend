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

  indexOfObj(id: number): number {
    for (let i = 0; i < this.colegios.length; i++) {
      if ( this.colegios[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  deleteColegio(id: number): void {
    this.colegiosService.deleteColegio(id).subscribe(()=>{
      let index = this.indexOfObj(id);
      this.colegios.splice(index,1);
    });
  }



}
