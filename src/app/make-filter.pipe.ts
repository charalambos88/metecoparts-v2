import { Make } from './models/make';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'makeFilterPipe'})

export class MakeFilterPipe implements PipeTransform {
    
    transform(makes: Make[], makeSearch: any): any {
        if(!makeSearch) return makes;

        return makes.filter((make) => {
            return make.name.toLowerCase().includes(makeSearch.toLowerCase());
        });
    }
}