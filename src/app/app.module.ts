import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// for routing
import {RouterModule,Routes} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';

// import statement for service
import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,

    NgbModule.forRoot(),

    BrowserAnimationsModule,

    ToastrModule.forRoot(),

    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'countries/:regionId',component:CountriesComponent},
      {path:'countries/currency/:currencyId',component:CountriesComponent},
      {path:'countries/lang/:languageId',component:CountriesComponent},
      {path:'country/:countryId',component:CountryComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
      
    ]),
  ],

  // service declared in providers array
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
