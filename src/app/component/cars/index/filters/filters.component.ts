import { Component, OnInit, EventEmitter } from '@angular/core';

import { CarService } from '../../../../services/car.service';
import { MakeService } from '../../../../services/make.service';
import { Make } from '../../../../models/make';
import { Model } from '../../../../models/model';
import { Version } from '../../../../models/version';
import { Facelift } from '../../../../models/facelift';

import { CarsIndexComponent } from '../cars-index.component';

@Component({
	selector: 'app-filters',
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.css'],
	outputs: ['onRefresh']
})
export class FiltersComponent implements OnInit {
	//@Input()
	public make: string;

	//@Output()
	public onRefresh = new EventEmitter();

	makes: Make[];
	models: Model[];
	selectedMake: Make;
	selectedModel: Model;
	selectedVersion: Version;
	selectedFacelift: Facelift;

	constructor(
		private carService: CarService,
		private makeService: MakeService,
		private carsIndexComponent: CarsIndexComponent
		) { }

	refreshCars(key: string, value: string): void {
		this.onRefresh.emit({
			[`${key}`]: value
		});
	}

	selectMake(make: Make): void {
		this.selectedMake = make;
		this.selectedModel = null;
		this.selectedVersion = null;
		this.selectedFacelift = null;
	}

	selectModel(model: Model): void {
		this.selectedModel = model;
		this.selectedVersion = null;
		this.selectedFacelift = null;
	}

	selectVersion(version: Version): void {
		this.selectedVersion = version;
		this.selectedFacelift = null;
	}

	selectFacelift(facelift: Facelift): void {
		this.selectedFacelift = facelift;
	}

	getMakes(): void {
		this.makeService
		.getMakes()
		.then(makes => this.makes = makes);
	}

	

	ngOnInit(): void {
		this.getMakes();
	}
}