import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private _addDriverUrl ="http://localhost:8000/driver/addDriver";
  private _getAllDrivers ="http://localhost:8000/driver/getAllDrivers";
  private _getAllAvailableDrivers ="http://localhost:8000/driver/getAvailableDrivers/";

  constructor(private http : HttpClient) { }

  sendDriver(driver :any){
    return this.http.post<any>(this._addDriverUrl, driver)
  }

  getAlldrivers(){
    return this.http.get<any>(this._getAllDrivers)
  }

  getAllAvailabledrivers(date : any){
    return this.http.get<any>(`${this._getAllAvailableDrivers}${date}`)
  }


}
