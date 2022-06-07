import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private _sendRequestUrl ="http://localhost:8000/request/sendRequest";
  private _getRequestByUserId ="http://localhost:8000/request/getAllRequestsByUserId/";
  private _getRequestsByStatus ="http://localhost:8000/request/getAllRequestsByStatus";
  private _getRequestById ="http://localhost:8000/request/getRequestById/";
  private _getAllRequests ="http://localhost:8000/request/getAllRequests";
  private _getAllRequestsBySupervisor ="http://localhost:8000/request/getAllRequestsBySupervisor/";
  private _approveRejectRequestById ="http://localhost:8000/request/approveRejectRequestById/";
  private _driverVehicleAssignById ="http://localhost:8000/request/driverVehicleAssignById/";
  private _driverApproveRequestById ="http://localhost:8000/request/driverApproveRequestById/";
  private _getAllRequestsByDriver ="http://localhost:8000/request/getAllRequestsByDriver/";
  private _getAllAcceptedRequests ="http://localhost:8000/request/getAllAcceptedRequests/";

  constructor(private http : HttpClient ) { }

  sendRequest(request:any){
    return this.http.post<any>(this._sendRequestUrl, request)
  }

  getRequestsById(id :any){
    return this.http.get<any>(`${this._getRequestByUserId}${id}`)
  }

  getRequestsByStatus(){
    return this.http.get<any>(`${this._getRequestsByStatus}`)
  }

  getAllrequests(){
    return this.http.get<any>(this._getAllRequests)
  }

  getRequestById(id :any){
    return this.http.get<any>(`${this._getRequestById}${id}`)
  }

  getRequestByBySupervisor(managerUserName :any){
    return this.http.get<any>(`${this._getAllRequestsBySupervisor}${managerUserName}`)
  }

  getAllRequestsByDriver(assignedDriver :any){
    return this.http.get<any>(`${this._getAllRequestsByDriver}${assignedDriver}`)
  }

  getAllAcceptedRequests(assignedDriver :any){
    return this.http.get<any>(`${this._getAllAcceptedRequests}${assignedDriver}`)
  }

  approveRejectRequestById(request : any){
    let body = new HttpParams()
    .set('status', request.status);
    return this.http.put<any>(`${this._approveRejectRequestById}${request._id}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  driverVehicleAssignById(request : any){
    let body = new HttpParams()
    .set('assignedDriver', request.assignedDriver)
    .set('assignedVehicle', request.assignedVehicle);
    return this.http.put<any>(`${this._driverVehicleAssignById}${request._id}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  driverApproveRequestById(request : any){
    let body = new HttpParams()
    .set('isDriverAccepted', request.isDriverAccepted);
    return this.http.put<any>(`${this._driverApproveRequestById}${request._id}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  
}
