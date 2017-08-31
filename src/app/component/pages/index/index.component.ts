import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { MakeService } from '../../../services/make.service';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';
import { Make } from '../../../models/make';
import { Model } from '../../../models/model';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
	cars:Car[];
	makes:Make[];
	models:Model[];
	selectedMake: Make;
	selectedModel: Model;
	selectUndefinedOptionValue: any;
	private filters = new Map;
	  limit: number;

	constructor(
		private makeService: MakeService,
		private carService: CarService,
		title: Title
		) {
		//SEO Support
		title.setTitle('Μεταχειρισμένα ανταλλακτικά αυτοκινήτων από απόσυρση // Meteco AE');
	}
	
	getMakes(): void {
		this.makeService
		.getMakes()
		.then(makes => this.makes = makes);
	}

	getCars(filters: Map<string, any>): void {
		this.carService
		.getCars(filters)
		.then(response => this.cars = response);		
	}


	onMakeChange(make) {
		this.selectedMake = make;
		this.models = make.models;
	}

	onModelChange(model){
		this.selectedModel = model;
	}

	ngOnInit(): void {
		this.getMakes();
		this.getCars(this.filters)
	}

}
