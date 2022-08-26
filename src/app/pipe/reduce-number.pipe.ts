import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reduceNumber'
})
export class ReduceNumberPipe implements PipeTransform {

  transform(value: any, numAfterComma: number = 0): string {
    const isNegative = value < 0;
    const number = Math.abs(value);
    const suffixes = ['K', 'M', 'B', 'T'];

    for (let i = suffixes.length - 1; i >= 0; i--) {
      let size = Math.pow(10, (i + 1) * 3);
      if (size <= number) {
        return ReduceNumberPipe.abbreviateNumber(number, size, suffixes[i], isNegative, numAfterComma)
      }
    }
    return ReduceNumberPipe.getIsNegative(number, isNegative).toFixed(numAfterComma)
  }

  private static abbreviateNumber(number: number, size: number, suffix: string, isNegative: boolean, numAfterComma: number) {
    let k = Math.floor(number / size)
    let th = 0;
    if (numAfterComma > 0) {
      th = (((number % size) / (size)))
    }
    return ReduceNumberPipe.getIsNegative((k + th), isNegative).toFixed(numAfterComma) + suffix
  }

  private static getIsNegative(number: number, isNegative: boolean): number {
    return isNegative ? number * -1 : number

  }
}
