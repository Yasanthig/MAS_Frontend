import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData: any = {};
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        if (res.code == 200 && res.success == true) {
          console.log(res);
          localStorage.setItem('token', JSON.stringify(res.token));
          localStorage.setItem('user', JSON.stringify(res.data));
          localStorage.setItem('position', JSON.stringify(res.data.position));
          this._router.navigate(['/dashboard'])
        }

        if (res.code == 200 && res.success == false) {
          alert(res.message);
        }
      },
      (err) => {
        console.log(err);
        window.alert(err.error);
      }
    );
  }
}
