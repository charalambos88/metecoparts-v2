import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
// to top function
import { Location, PopStateEvent } from "@angular/common";
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	//get year for footer.
	yearFooter: number = Date.now();
	private lastPoppedUrl: string;

	constructor(private router: Router, private location: Location) {}

	ngOnInit() {
		// to top function
		this.location.subscribe((ev:PopStateEvent) => {
			this.lastPoppedUrl = ev.url;
		});
		this.router.events.subscribe((ev) => {
			if (ev instanceof NavigationEnd) {
				if (ev.url == this.lastPoppedUrl)
					this.lastPoppedUrl = undefined;
				else
					window.scrollTo(0, 0);
			}
		});
	}

}
