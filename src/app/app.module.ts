import { ModelFilterPipe } from './model-filter.pipe';
import { MakeFilterPipe } from './make-filter.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routes } from './app.router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/commons/header/header.component';
import { FooterComponent } from './component/commons/footer/footer.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { FaqsComponent } from './component/pages/faqs/faqs.component';
import { IndexComponent } from './component/pages/index/index.component';
import { Notfound404Component } from './component/pages/notfound404/notfound404.component';
import { CarsIndexComponent } from './component/cars/index/cars-index.component';
import { CarsShowComponent } from './component/cars/show/cars-show.component';
import { SidebarComponent } from './component/cars/show/sidebar/sidebar.component';
import { FiltersComponent } from './component/cars/index/filters/filters.component';
import { TermsComponent } from './component/pages/terms/terms.component';

import { CarService } from './services/car.service';
import { MakeService } from './services/make.service';
import { MessageService } from './services/message.service';

import { ReplaceSpacePipe } from './replace-space.pipe';

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  AboutComponent,
  ContactComponent,
  FaqsComponent,
  IndexComponent,
  CarsIndexComponent,
  Notfound404Component,
  CarsShowComponent,
  SidebarComponent,
  FiltersComponent,
  TermsComponent,
  ReplaceSpacePipe,
  SearchFilterPipe,
  MakeFilterPipe,
  ModelFilterPipe
  ],
  imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  InfiniteScrollModule,
  NgbModule.forRoot(),
  routes
  ],
  providers: [
  Title,
  CarService,
  MakeService,
  MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
