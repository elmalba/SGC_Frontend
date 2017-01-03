/**
 * Created by matias on 28-12-16.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcPromedio',
  pure: false,
})
export class CalcPromedio implements PipeTransform {
  transform(notas: any[]) {
    let sum: number = 0;
    let total: number = 0;
    for(let nota of notas){
      if(nota.valor){
        sum += nota.valor;
        total += 1;
      }
    }
    return isNaN(sum/total)? 1.0 : sum/total ;
  }
}
