import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {

  userData : any = {}
  searchedRequests : any = {}
  clickedRequestId : any = {}

  constructor( private request : RequestService, public _auth : AuthService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    
    this.request.getRequestByBySupervisor(this.userData.username).subscribe((res: any)=> {
      this.searchedRequests=res,
      console.log(res)
    })
  }

  getId(id : any){
    this.clickedRequestId = id;
    localStorage.setItem('clickedRequestId', this.clickedRequestId);
    console.log(this.clickedRequestId+" id of Request");
  }

}
