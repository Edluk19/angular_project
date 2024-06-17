import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'releaseDate',
  standalone: true
})
export class ReleaseDatePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.replace(/-/g, '/');

  }
}
