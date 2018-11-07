import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private amplify: AmplifyService) {
    // CognitoUserSession => { idToken, refreshToken, accessToken }
    const session = Auth.currentSession()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${'poop'}`
      }
    });
    return next.handle(req);
  }
}
