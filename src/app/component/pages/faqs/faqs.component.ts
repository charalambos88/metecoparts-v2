import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor(title: Title) {
  	title.setTitle("Συχνές ερωτήσεις - Μεταχειρισμένα ανταλλακτικά αυτοκινήτων - Meteco AE");
  }

  ngOnInit() {
  }

}
