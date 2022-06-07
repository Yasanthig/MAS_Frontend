import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public _auth : AuthService , private request : RequestService) { }

  ngOnInit(): void {
  }
  toggle = true;
  status = "Enable";

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Enable" : "Disable";
  }

  

}
