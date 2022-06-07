import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicleList : any = {}

  constructor(private _vehicle : VehicleService) { }

  ngOnInit(): void {

    this._vehicle.getAllVehicles().subscribe((res: any)=> {
      this.vehicleList=res,
      console.log(res)
    })
    
  }

}
