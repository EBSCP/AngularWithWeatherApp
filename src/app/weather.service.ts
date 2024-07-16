import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private ApiKey = '5db5a191a956b4422cf7673bc5fc48c0';
  private Url = 'https://api.openweathermap.org/data/2.5/weather';
  
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.Url}?q=${city}&units=metric&appid=${this.ApiKey}`; // Hava durumu API'sine istek yapacak URL
    return this.http.get(url);
  }
}
