import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password : any = {}
  constructor(  private _auth : AuthService) { }

  ngOnInit(): void {
  }


  resetPassword(){
    console.log('reset password');
    this._auth.resetPassword(this.password)
    .subscribe(
      res => {
        window.alert("Success")
      }
    )
  }
}




