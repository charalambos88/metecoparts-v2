import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	//get year for footer.
	yearFooter: number = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
