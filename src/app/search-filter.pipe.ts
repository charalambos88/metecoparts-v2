import { Car } from './models/car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilterPipe' })
export class SearchFilterPipe implements PipeTransform {

    transform(items: Car[], carSearch: any): any {
        if (!carSearch) return items;
        
        return items.filter(item => {
            return (item.make.toLowerCase().includes(carSearch.toLowerCase())) ||
            (item.model.toLowerCase().includes(carSearch.toLowerCase())) ||
            (item.engine_number.toLowerCase().includes(carSearch.toLowerCase()));
        })
    }

}
