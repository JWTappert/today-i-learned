import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  confirmCode = false;
  codeWasConfirmed = false;
  error = '';

  constructor(private _auth: AuthService, private _router: Router) {}

  register(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this._auth.registerUser(email, password).subscribe(
      data => {
        this.confirmCode = true;
      },
      err => {
        console.log(err);
        this.error = 'Registration Error has occurred';
      }
    );
  }

  validateAuthCode(form: NgForm) {
    const code = form.value.code;

    this._auth.confirmAuthCode(code).subscribe(
      data => {
        // this._router.navigateByUrl('/');
        this.codeWasConfirmed = true;
        this.confirmCode = false;
      },
      err => {
        console.log(err);
        this.error = 'Confirm Authorization Error has occurred';
      }
    );
  }
}
