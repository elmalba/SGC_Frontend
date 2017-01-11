import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-by-grado',
  templateUrl: './by-grado.component.html',
  styleUrls: ['./by-grado.component.css']
})
export class ByGradoComponent implements OnInit {
  @Input('docs') docs: string[];

  constructor() { }

  ngOnInit() {
  }

}
