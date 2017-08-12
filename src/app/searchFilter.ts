import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})


export class SearchFilterPipe implements PipeTransform{
    transform(people: any[], personName: any):any {
        console.log('personName', personName);
        return personName
        ? people.filter(person => person.name.toLowerCase().indexOf(personName.toLowerCase()) !== -1)
        : people;
        
    }
}
