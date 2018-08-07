import { Injectable } from '@angular/core';

// importing http client to make the requests
import {HttpClient,HttpErrorResponse} from '@angular/common/http'

// import statement for service
import { ToastrService } from 'ngx-toastr';

// rxjs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // base URL
  public baseUrl = 'https://restcountries.eu/rest/v2'

  // HttpClient declared in constructor
  constructor(private _http:HttpClient,private toastr: ToastrService) { 
    console.log("http service is working")
  }

  //  method to get countries
  public getCountriesByRegion(regionId){   
    let response = this._http.get(this.baseUrl+'/region/'+regionId);
    console.log("Countries by Region : ",response);
    return response;     
  }

  public getCountriesByCurrency(currencyId){   
    let response = this._http.get(this.baseUrl+'/currency/'+currencyId);
    console.log("Countries by currency : "+response);
    return response;     
  }

  public getCountriesByLanguage(languageId){   
    let response = this._http.get(this.baseUrl+'/lang/'+languageId);
    console.log("Countries by Language : "+response);
    return response;     
  }

  public getCountryDetails(countryId){   
    let response = this._http.get(this.baseUrl+'/alpha/'+countryId);
    console.log("Country Details : "+response);
    return response;     
  }
}
