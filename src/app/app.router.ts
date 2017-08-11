import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/commons/header/header.component';
import { FooterComponent } from './component/commons/footer/footer.component';
import { AboutComponent } from './component/pages/about/about.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { FaqsComponent } from './component/pages/faqs/faqs.component';
import { IndexComponent } from './component/pages/index/index.component';
import { CarsIndexComponent } from './component/cars/index/cars-index.component';
import { Notfound404Component } from './component/pages/notfound404/notfound404.component';
import { CarsShowComponent } from './component/cars/show/cars-show.component';
import { SidebarComponent } from './component/cars/show/sidebar/sidebar.component';
import { FiltersComponent } from './component/cars/index/filters/filters.component';
import { TermsComponent } from './component/pages/terms/terms.component';

export const router: Routes = [
	{ path: '', component:IndexComponent, pathMatch:'full'},
	{ path: 'about', component:AboutComponent},
	{ path: 'contact', component:ContactComponent},
	{ path: 'listing', component:CarsIndexComponent},
	{ path: 'car', component:CarsShowComponent},
	{ path: 'faq', component:FaqsComponent},
	{ path: 'terms', component:TermsComponent},
	{ path: '**', component: Notfound404Component}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
