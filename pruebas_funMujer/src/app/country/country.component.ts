
import { Component, inject, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { ICountry } from '../models/interfaces/country';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-country',
  imports: [FormsModule,GoogleMapsModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent  implements OnInit{
  countryList:ICountry [] = [];
  clientService = inject(CountryService);
  country:string = '';
  countryFound : ICountry | undefined = undefined ;
  
  latitude: number = 37.7749; // Ejemplo de valor inicial
  longitude: number = -122.4194;
  onCountryChange() {
    console.log('El país ingresado es: ', this.country);
    if (this.country.length >=4) {
      this.countryFound = this.findByCountry(this.country);
      console.log(this.countryFound);
    }
    // Aquí puedes realizar otras acciones, como hacer una búsqueda, etc.

    
    

  }
  loadClients(){
    this.clientService.getAllCountries().subscribe({
      next: (res: ICountry[]) => {
      
      this.countryList = res;
       console.log(res);  
      },
      error: (err) => {
        alert("API error: Network Dawn");
        //this.isLoader = false;
        console.error(err); 
      },
    });
  }

  ngOnInit(): void {
    this.loadClients();
  }

  findByCountry(searchTerm: string): ICountry | undefined {
    return this.countryList.find((country) => {
      return country?.name?.common?.toLowerCase() === searchTerm.toLowerCase();
    });
  }
}


