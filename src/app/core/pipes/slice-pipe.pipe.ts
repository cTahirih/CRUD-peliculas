import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicePipe'
})
export class SlicePipePipe implements PipeTransform {

  transform(value: string, start: number = 0, end?: number): string {
    return value.slice(start, end);
  }

}

