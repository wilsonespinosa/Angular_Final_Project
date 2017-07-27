import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missed'
})
export class MissedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   let cont = 0;
    if (value.hw1 === 0) {
      cont += 1;
    } if (value.hw2 === 0) {
      cont += 1;
    } if (value.hw3 === 0) {
      cont += 1;
    } if (value.hw4 === 0) {
      cont += 1;
    } if (value.hw5 === 0) {
      cont += 1;
    }
    return cont;
  }

}
