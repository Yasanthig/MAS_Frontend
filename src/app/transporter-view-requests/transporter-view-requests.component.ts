import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from 'src/services/driver.service';
import { RequestService } from 'src/services/request.service';
import { VehicleService } from 'src/services/vehicle.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-transporter-view-requests',
  templateUrl: './transporter-view-requests.component.html',
  styleUrls: ['./transporter-view-requests.component.css']
})
export class TransporterViewRequestsComponent implements OnInit {
  userData : any = {}
  searchedRequests : any = {}
  clickedRequestId : any = {}
  driverList : any = {}
  vehicleList : any = {}
  updateRequest : any = {}
  driver : any = {}
  vehicle : any = {}
  reqId : any = {}

  constructor( private request : RequestService, public _auth : AuthService, private _driver : DriverService,
    private _vehicle : VehicleService, private _router : Router) { }

  ngOnInit(): void {
    this.request.getRequestsByStatus().subscribe((res: any)=> {
      this.searchedRequests=res,
      console.log(res)
    })
    this._driver.getAlldrivers().subscribe((res: any)=> {
      this.driverList=res,
      console.log(res)
    })

    // this._driver.getAllAvailabledrivers(this.searchedRequests.dateOfTrip).subscribe((res: any)=> {
    //   this.driverList=res
    // })

    this._vehicle.getAllVehicles().subscribe((res: any)=> {
      this.vehicleList=res,
      console.log(res)
    })
  }

  onOptionsSelectedDrivers(date:string){
      this._driver.getAllAvailabledrivers(date).subscribe((res: any)=> {
      this.driverList=res
      console.log("first"+res)
    })

}
onOptions(){
  this.driverList=null;
}

onOptionsSelectedVehicles(date:string){
  this._vehicle.getAllAvailableVehicles(date).subscribe((res: any)=> {
  this.vehicleList=res
})
}

  getId(id : any){
    this.clickedRequestId = id;
    localStorage.setItem('clickedRequestId', this.clickedRequestId);
    console.log(this.clickedRequestId+" id of Request");
  }

  assignRequest(id:any, assignedDriver:any, assignedVehicle:any){
    console.log("id "+id)
    console.log("Driver "+assignedDriver)
    console.log("Vehicle "+assignedVehicle)
    this.updateRequest._id = id;
    this.updateRequest.assignedDriver = assignedDriver;
    this.updateRequest.assignedVehicle = assignedVehicle;
    console.log(this.updateRequest)
    this.request.driverVehicleAssignById(this.updateRequest)
    .subscribe(
      res => {
        this.updateRequest.push=res;
        window.alert("successfully Assigned");
        window.location.reload();
      },
      err => {
        console.log(err)
      }
    )
  }

}
