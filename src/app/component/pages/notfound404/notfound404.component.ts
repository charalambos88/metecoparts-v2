import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";


@Component({
	selector: 'app-notfound404',
	templateUrl: './notfound404.component.html',
	styleUrls: ['./notfound404.component.css']
})
export class Notfound404Component implements OnInit {

	constructor(title:Title) {
		title.setTitle("Σφάλμα 404"); 
	}

	ngOnInit() {
	}

}
