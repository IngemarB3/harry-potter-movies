import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'million',
  standalone: true
})
export class MillionPipe implements PipeTransform {

    transform(value: string): string {

        const numericValue = parseInt(value);

        if (isNaN(numericValue)) {
            return '';
        }

        if (numericValue === 0) {
            return `$${value}`;
        }
        
        return `$${value} million`;
    }
}
