import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
})
export class WeatherHomeComponent implements OnInit {
  initialCityName = 'Indaiatuba,br'
  weatherDatas!: WeatherDatas
  constructor(private weatherService: WeatherService){
  }
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }
  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next: (response)=>{
        response &&(this.weatherDatas = response);
        console.log(this.weatherDatas.main.temp)
      },
      error: (error)=> console.log(error)
    })
  }
}
