import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { MessageService } from '../../../services/message.service';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';

@Component({
	selector: 'app-cars-show',
	templateUrl: './cars-show.component.html',
	styleUrls: ['./cars-show.component.css']
})
export class CarsShowComponent implements OnInit {

	car: Car;
	id: number;
	response: string;

	constructor(
		private carService: CarService,
		private route: ActivatedRoute,
		private router: Router,
		public fb: FormBuilder,
		private messageService: MessageService
		) { }

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

}
