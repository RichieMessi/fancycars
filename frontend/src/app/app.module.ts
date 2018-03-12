import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http'



import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { CarDataService } from './services/car-data.service';
import { CarAvailabilityService } from './services/car-availability.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarComponent } from './components/car/car.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const appRoutes = [
  {path: '', component: DashboardComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarComponent,
    FooterComponent,
    CarouselComponent,
    DashboardComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarDataService, CarAvailabilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
