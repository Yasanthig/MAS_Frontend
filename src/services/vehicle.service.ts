import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Vehicle } from '../app/models/vehicle';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private profiles: Vehicle[] = [];
  private profiles$ = new Subject<Vehicle[]>();
  private _addVehicleUrl ="http://localhost:8000/vehicle/addVehicle";
  private _getAllVehicles ="http://localhost:8000/vehicle/getAllVehicles";
  private _getAllAvailableVehicles ="http://localhost:8000/vehicle/getAvailableVehicles/";

  constructor(private http : HttpClient) { }


  getAllVehicles(){
    return this.http.get<any>(this._getAllVehicles)
  }


  getAllAvailableVehicles(date : any){
    return this.http.get<any>(`${this._getAllAvailableVehicles}${date}`)
  }

  addVehicle(type:string,number:string,image: File): void {
    const vehicleData = new FormData();

    vehicleData.append('type', type);
    vehicleData.append('number', number);
 
    vehicleData.append('image', image);
    this.http
      .post<{ profile: Vehicle }>('http://localhost:8000/vehicle/addVehicle',vehicleData)
      .subscribe((vehicleData) => {
        const profile: Vehicle = {
          
          
          type: type,
          number: number,
          image: vehicleData.profile.image,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }

}
