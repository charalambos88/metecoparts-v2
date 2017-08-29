import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from'@angular/router';

import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';

import 'rxjs/add/operator/map';

@Component({
	selector: 'app-cars-index',
	templateUrl: './cars-index.component.html',
	styleUrls: ['./cars-index.component.css']
})
export class CarsIndexComponent implements OnInit {
	cars: Car[];
	make:string;
	model: string;

	private filters = new Map;

	constructor(
		private carService: CarService,
		private route: ActivatedRoute,
		private router: Router
		) {}

	getCars(filters: Map<string, any>): void {
		this.carService
		.getCars(filters)
		.then(response => this.cars = response);
	}

	refreshCars(event): void {
		for (var key in event){
			if (event.hasOwnProperty(key)) {
				if (event[key] === null) {
					this.filters.delete(key);
				}
				else
				{
					this.filters.set(key, event[key]);
				}
			}
		}
		this.getCars(this.filters);
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params: Params) => {
			for (var key in params) {
				if (params.hasOwnProperty(key)) {
					if(params[key]) {
						this.filters.set(key, params[key]);
					}
				}
			}
		})
		this.getCars(this.filters)
	}

	//dom manipulation
	isList = true;
	activeList = true;

	onclickGrid(){
		this.isList = !this.isList;
		this.activeList = !this.activeList
	}

	onclickList(){
		this.isList = !this.isList;
		this.activeList = !this.activeList;
	}
}
