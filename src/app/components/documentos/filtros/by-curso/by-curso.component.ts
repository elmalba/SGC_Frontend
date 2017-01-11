import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-by-curso',
  templateUrl: './by-curso.component.html',
  styleUrls: ['./by-curso.component.css']
})
export class ByCursoComponent implements OnInit {
  @Input('docs') docs: string[];

  constructor() { }

  ngOnInit() {
  }

}
