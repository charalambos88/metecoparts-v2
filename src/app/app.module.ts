import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.router';

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
    TermsComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
