import { Injectable } from '@angular/core';
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';

const poolConfig = {
  UserPoolId: 'us-east-2_90X6BCYnF',
  ClientId: '4b2m32vqna8lq90p8snj7e47g8'
};

const userPool = new CognitoUserPool(poolConfig);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cognitoUser: any;

  constructor() {}

  registerUser(email: string, password: string) {
    const userAttributes = [];
    userAttributes.push(
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    );
    return Observable.create(observer => {
      userPool.signUp(email, password, userAttributes, null, (err, result) => {
        if (err) {
          console.log('sign up error', err);
          observer.error(err);
        }
        this.cognitoUser = result.user;
        console.log('sign up success', result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  confirmAuthCode(code: string) {
    const user = {
      Username: this.cognitoUser.username,
      Pool: userPool
    };
    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
          console.log(err);
          observer.error(err);
        }
        console.log('confirmAuthCode() success', result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  signIn(email, password) {
    const authenticationData = {
      Username: email,
      Password: password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);

    return Observable.create(observer => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
          // console.log(result);
          observer.next(result);
          observer.complete();
        },
        onFailure: function(err) {
          console.log(err);
          observer.error(err);
        }
      });
    });
  }

  isLoggedIn() {
    return userPool.getCurrentUser() != null;
  }

  getAuthenticatedUser() {
    // gets the current user from the local storage
    return userPool.getCurrentUser();
  }

  logOut() {
    this.getAuthenticatedUser().signOut();
    this.cognitoUser = null;
  }
}
