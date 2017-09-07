import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'replacespacepipe'})

export class ReplaceSpacePipe implements PipeTransform {
	transform(value){
		return value.replace(/ /g, "-");
	}
}