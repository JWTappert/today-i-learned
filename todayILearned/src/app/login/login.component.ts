import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailVerificationMessage = false;

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  submit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this._auth.signIn(email, password).subscribe(
      response => {
        console.log('success');
      },
      err => {
        this.emailVerificationMessage = true;
      }
    );
  }
}
