import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-statusrequest',
  templateUrl: './statusrequest.component.html',
  styleUrls: ['./statusrequest.component.css']
})
export class StatusrequestComponent implements OnInit {

  userData : any = {}
  searchedRequests : any = {}
  clickedRequestId : any = {}
  constructor( private request : RequestService, private _auth : AuthService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('user') || '{}');

    this.request.getRequestsById(this.userData._id).subscribe((res: any)=> {
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
