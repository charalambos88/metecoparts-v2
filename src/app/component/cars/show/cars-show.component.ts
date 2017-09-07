import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { MessageService } from '../../../services/message.service';
import { CarService } from '../../../services/car.service';
import { MakeService } from '../../../services/make.service';
import { Car } from '../../../models/car';

import $ from 'jquery/dist/jquery';
declare var $: any;

@Component({
	selector: 'app-cars-show',
	templateUrl: './cars-show.component.html',
	styleUrls: ['./cars-show.component.css']
})
export class CarsShowComponent implements OnInit, AfterViewInit {

	car: Car;
	id: number;
	response: string;

	constructor(
		private carService: CarService,
		private makeService: MakeService,
		private route: ActivatedRoute,
		private router: Router,
		public fb: FormBuilder,
		private messageService: MessageService,
		title: Title) 
	{ 
		title.setTitle(`Μεταχειρισμένα ανταλλακτικά  για AE`);

	}

	public contactForm = this.fb.group({
		car_id: [null, Validators.required],
		name: [null, Validators.required],
		phone: [null, Validators.required],
		email: [null, Validators.required],
		location: [null, Validators.required],
		message: [null, Validators.required]
	});

	sendMessage(event, isValid: boolean) {
		if (isValid) {
			this.messageService.sendMessage(this.contactForm.value)
			.then(response => this.response = response.message);
		}else{
			this.response = "Missing required fields"
		}
	}

	getCar(id: number): void {
		this.carService
		.getCar(id)
		.then(car => this.car = car);
		
	}	


	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = params['id'];
		});
		this.contactForm.controls['car_id'].setValue('this.id');
		this.getCar(this.id);
	}



	ngAfterViewInit() {
		
	}
}
