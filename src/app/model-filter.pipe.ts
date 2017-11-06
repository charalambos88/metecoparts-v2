import { Model } from './models/model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'modelFilterPipe'})

export class ModelFilterPipe implements PipeTransform {
    
    transform(models: Model[], modelSearch: any): any {
        if(!modelSearch) return models;

        return models.filter((model) => {
            return model.name.toLowerCase().includes(modelSearch.toLowerCase());
        });
    }
}