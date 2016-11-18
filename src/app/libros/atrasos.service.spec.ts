/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AtrasosService } from './atrasos.service';

describe('Service: Atrasos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtrasosService]
    });
  });

  it('should ...', inject([AtrasosService], (service: AtrasosService) => {
    expect(service).toBeTruthy();
  }));
});
