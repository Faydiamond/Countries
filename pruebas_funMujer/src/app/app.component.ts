import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryComponent } from "./country/country.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebas_funMujer';
}
