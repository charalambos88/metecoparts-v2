import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Title } from "@angular/platform-browser";

import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';
import { Page } from '../../../models/pages';
import 'rxjs/add/operator/map';

@Component({
	selector: 'app-cars-index',
	templateUrl: './cars-index.component.html',
	styleUrls: ['./cars-index.component.css']
})
export class CarsIndexComponent implements OnInit {
	cars: Car[];
	pages: Page;
	make: string;
	model: string;
	page: number;
	pageNo = 2;
	private filters = new Map;

	//dom manipulation
	isList = true;
	activeList = true;

	constructor(
		private carService: CarService,
		private route: ActivatedRoute,
		private router: Router,
		title: Title
	) {
		title.setTitle("Αναζήτηση για μεταχειρισμένα ανταλλακτικά αυτοκινήτων - Meteco AE");
	}

	getCars(filters: Map<string, any>): void {
		
		this.carService
			.getCars(filters)
			.then(response => this.cars = response)
			
	}

	getPages(pages: number): void {
		this.carService
			.getPages(pages)
			.then(response => this.pages = response);
	}

	refreshCars(event): void {
		for (var key in event) {
			if (event.hasOwnProperty(key)) {
				if (event[key] === null) {
					this.filters.delete(key);
				}
				else {
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
					if (params[key]) {
						this.filters.set(key, params[key]);
						
					}
				}
			}
		})
		this.getCars(this.filters);
		this.getPages(this.page);
		
	}

	toggleView() {
		this.isList = !this.isList;
		this.activeList = !this.activeList
	}
}
