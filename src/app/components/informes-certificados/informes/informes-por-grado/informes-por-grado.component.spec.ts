/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InformesPorGradoComponent } from './informes-por-grado.component';

describe('InformesPorGradoComponent', () => {
  let component: InformesPorGradoComponent;
  let fixture: ComponentFixture<InformesPorGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformesPorGradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesPorGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
