import { Pipe, PipeTransform } from '@angular/core';
import {Person} from '../models/person.interface';

@Pipe({
    name: 'filterByPartner'
})

export class FilterByPartnerPipe implements PipeTransform{
    transform(people: Person[], comingWithPartner: boolean ): any {
        return comingWithPartner
            ? people.filter(person => person.partner && person.partner.coming )
            : people 
    }
        
}