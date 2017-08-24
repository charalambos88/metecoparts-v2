import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	constructor() {
		
	}

	ngOnInit() {
	}

	ngAfterContentInit(){
		//change bg image
		$(document).ready(function () {
			var collection = collection ? collection : $('[data-bg]');
			collection.each(function(){
				var $this = $(this),
				bg = $this.data('bg');
				if(bg) $this.css('background-image', 'url('+bg+')');
			});
		});
		// custom formatting example
		$('.count-number').data('countToOptions', {
			formatter: function (value, options) {
				return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, '');
			}
		});		
		// start all the timers
		$('.timer').each(count);
		function count(options) {
			var $this = $(this);
			options = $.extend({}, options || {}, $this.data('countToOptions') || {});
			$this.countTo(options);
		}
		
	}

}
