import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/services/driver.service';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  driverList : any = {}

  constructor(private _driver : DriverService) { }

  ngOnInit(): void {

    this._driver.getAlldrivers().subscribe((res: any)=> {
      this.driverList=res,
      console.log(res)
    })

  }

}
