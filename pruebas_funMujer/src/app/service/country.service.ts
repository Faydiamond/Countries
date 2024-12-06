import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../models/interfaces/country';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }


  getAllCountries():Observable<ICountry[]>{
    const url = `https://restcountries.com/v3.1/name/Colombia`;
    console.log(url)
    return this.http.get<ICountry[]>(url);
  }
}
