import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../../services/car-data.service';
import { CarAvailabilityService } from '../../services/car-availability.service';
import { Car } from '../../Interfaces/Car';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[]
  availability: any[]
  constructor(
        private carService: CarDataService,
        private carAvailabilityService: CarAvailabilityService
        ) {
          this.callCarDataService()
          this.callCarAvailibilityService()
         }
        callCarDataService(){
          this.carService.getCars()
          .subscribe((cars) => {
            console.warn(cars)
            this.cars = cars
            return cars
          })
        }
        callCarAvailibilityService(){
          this.carAvailabilityService.checkAvailability()
          .subscribe((result) => {
            console.warn(result)
            return result
          })
        }
  ngOnInit() {}
  getAvailable(){
    let inStock = []
    console.warn('check')
    this.cars.map((i) => {
      if(i.availability === true) 
      {
        inStock.push(i)
        this.cars = inStock
      }
    })
    return false
  }
  sortByName(x1: Car, x2: Car){
    if(x1.name > x2.name) return 1
    else if(x1.name > x2.name ) return 0 
    else return -1
  }
  sortType(sort: string, ) {
    if(sort === 'name'){
      this.cars = this.cars.sort(this.sortByName)
      console.warn(this.cars)
    }
    return false
  }
}
