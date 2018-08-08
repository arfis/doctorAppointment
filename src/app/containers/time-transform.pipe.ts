import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTransform'
})
export class TimeTransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    const hours = Math.floor(value / 3600);
    let minutes = String ((value % 3600) / 60);

    if (minutes.length === 1) {
      minutes += '0';
    }
    return `${hours}:${minutes}`;
  }

}
