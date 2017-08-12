import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByComing'
})

export class FilterByPipe implements PipeTransform{
    transform(people: any[], isComing: boolean ): any {
        return isComing
        ? people.filter(personIsComing => personIsComing.isComing)
        : people
    }
        
}