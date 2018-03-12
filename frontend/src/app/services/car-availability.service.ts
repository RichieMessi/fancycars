import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Car } from '../Interfaces/Car';
import 'rxjs/add/operator/map';
@Injectable()
export class CarAvailabilityService {
  constructor(private http: Http) { }
  checkAvailability()
  {
   return this.http.get('http://localhost:3000/availability')
   .map((res) => {
     return res.json()
   })
 }
}
