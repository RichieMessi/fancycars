import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Car } from '../Interfaces/Car';
import 'rxjs/add/operator/map';

@Injectable()
export class CarDataService {
carList = []
  constructor(private http: Http) { }
  getCars()
  {
   return this.http.get('http://localhost:3000/cars')
   .map((res) => {
     return res.json()
   })
  }
}
