import { Component,OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  cityName: string = '';
  weatherData: any = {};

  constructor(private weatherService: WeatherService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  searchWeather() {
        if (this.cityName.trim()=== '') return alert("Enter a real City");
        this.weatherService.getWeather(this.cityName)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData); // İsteğin sonucunu konsola yazdırabilirsiniz
      });
  }

}
