import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

    transform(value: string): string {
        const numericValue = parseInt(value);
        
        if (isNaN(numericValue)
            || numericValue < 0
            || value === null
            || value === undefined
            || value === '') {
            return '';
        } 
        
        const hours = Math.floor(+value / 60);
        const minutes = +value % 60;
    
        return `${hours}h ${minutes}min`;
    }    
}
