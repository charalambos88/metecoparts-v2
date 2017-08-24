import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	constructor() { 
		$(document).ready(function () {
			var collection = collection ? collection : $('[data-bg]');
			collection.each(function(){
				var $this = $(this),
				bg = $this.data('bg');
				if(bg) $this.css('background-image', 'url('+bg+')');
			});
		});
	}

	ngOnInit() {
	}

}
