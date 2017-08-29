import { Component, OnInit } from '@angular/core';

import { MakeService } from '../../../services/make.service';
import { Car } from '../../../models/car';
import { Make } from '../../../models/make';
import { Model } from '../../../models/model';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	cars:Car[];
	makes:Make[];
	models:Model[];
	selectedMake: Make;
	selectedModel: Model;
	selectUndefinedOptionValue: any;


	constructor(private makeService:MakeService) { 
		
	}

	getMakes(): void {
		this.makeService
		.getMakes()
		.then(makes => this.makes = makes);
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
	}

}
