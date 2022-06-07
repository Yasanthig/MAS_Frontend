import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/services/request.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-request-details',
  templateUrl: './view-request-details.component.html',
  styleUrls: ['./view-request-details.component.css']
})
export class ViewRequestDetailsComponent implements OnInit {

  clickedRequestId : any = {}
  searchedRequest : any = {}
  updateRequest : any = {}
  user : any = {}

  constructor( private request : RequestService, private _router : Router , public auth : AuthService) { }

  ngOnInit(): void {
    this.clickedRequestId = localStorage.getItem('clickedRequestId') || '{}';
    console.log(this.clickedRequestId+" id")
    this.request.getRequestById(this.clickedRequestId).subscribe((res: any)=> {
      this.searchedRequest=res,
      this.auth.getUserImageById(this.searchedRequest.user_id).subscribe((res: any)=>{
        this.user=res;
      })
      console.log(JSON.stringify(this.searchedRequest))
    })

    console.log(JSON.stringify(this.user)+" imge link")

    
  }

  approveRequest(){
    this.updateRequest._id = this.searchedRequest._id;
    this.updateRequest.status = "approved";
    this.request.approveRejectRequestById(this.updateRequest)
    .subscribe(
      res => {
        this.updateRequest.push=res;
        window.alert("successfully Approved");
        this._router.navigate(['/view-all-request']);
      },
      err => {
        console.log(err)
      }
    )
  }

  rejectRequest(){
    this.updateRequest._id = this.searchedRequest._id;
    this.updateRequest.status = "rejected";
    this.request.approveRejectRequestById(this.updateRequest)
    .subscribe(
      res => {
        this.updateRequest.push=res;
        window.alert("successfully Rejected");
        this._router.navigate(['/view-all-request']);
      },
      err => {
        console.log(err)
      }
    )
  }


}
