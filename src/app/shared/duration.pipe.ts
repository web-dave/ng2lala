import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let s = value / 1000;
    let minuten: number = Math.floor(s / 60);
    let sekunden: any = Math.round(s - (minuten * 60));
    if (sekunden < 10) {
      sekunden = `0${sekunden}`;
    }


    return `${minuten}:${sekunden}`;
  }

}
