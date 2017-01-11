import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-by-alumno',
  templateUrl: './by-alumno.component.html',
  styleUrls: ['./by-alumno.component.css']
})
export class ByAlumnoComponent implements OnInit {
  @Input('docs') docs: string[];

  constructor() { }

  ngOnInit() {}

}
