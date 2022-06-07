import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcceptedRequestsComponent } from './accepted-requests/accepted-requests.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverViewRequestComponent } from './driver-view-request/driver-view-request.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ManagerGuard } from './guards/manager.guard';
import { TransportManagerGuard } from './guards/transport-manager.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { RegistrationComponent } from './registration/registration.component';
import { RequestComponent } from './request/request.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { StatusrequestComponent } from './statusrequest/statusrequest.component';
import { TransporterViewRequestsComponent } from './transporter-view-requests/transporter-view-requests.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleUploadComponent } from './vehicle-upload/vehicle-upload.component';
import { ViewRequestDetailsComponent } from './view-request-details/view-request-details.component';
import { ViewRequestComponent } from './view-request/view-request.component';

const routes: Routes = [
  { path :'', redirectTo : '/home' , pathMatch : 'full'},
  { path : 'home', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'about', component : AboutUsComponent},
  { path : 'contact-us', component : ContactUsComponent},
  { path : 'register', component : RegistrationComponent},
  { path : 'forgetpassword', component : ForgetPasswordComponent},
  { path : 'edit-profile', component : EditProfileComponent},
  { path : 'dashboard', component : DashboardComponent , canActivate : [AuthGuard]},
  { path : 'request', component : RequestComponent},
  { path : 'statusrequest', component : StatusrequestComponent},
  { path : 'view-all-request', component : ViewRequestComponent},
  { path : 'view-all-request-transporter', component : TransporterViewRequestsComponent},
  { path : 'view-request-details', component : ViewRequestDetailsComponent},
  { path : 'notification', component : NotificationComponent },
  { path : 'transport-view-requests', component : TransporterViewRequestsComponent, canActivate : [TransportManagerGuard] },
  { path : 'vehicle-list', component : VehicleListComponent, canActivate : [TransportManagerGuard] },
  { path : 'drivers-list', component : DriverListComponent, canActivate : [TransportManagerGuard] },
  { path : 'driver-view-requests', component : DriverViewRequestComponent },
  { path : 'accepted-requests', component : AcceptedRequestsComponent },
  { path : 'reset-password/:token', component : ResetPasswordComponent },
  {path:"vehicle-upload",component:VehicleUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
