import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';

@Component({
  selector: 'app-accepted-requests',
  templateUrl: './accepted-requests.component.html',
  styleUrls: ['./accepted-requests.component.css']
})
export class AcceptedRequestsComponent implements OnInit {

  userData : any = {}
  searchedRequests : any = {}
  clickedRequestId : any = {}

  constructor(private request : RequestService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    
    this.request.getAllAcceptedRequests(this.userData.username).subscribe((res: any)=> {
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
