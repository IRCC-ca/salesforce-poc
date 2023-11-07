import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Amplify, Auth } from 'aws-amplify';


import { Credentials, CredentialsService } from './credentials.service';
import { environment } from '@env/environment';
import { LoginRecoveryService } from './login-recovery.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private loginService: LoginRecoveryService,
    private credentialService: CredentialsService
  ) {
    console.log('before amplify');
    Amplify.configure({
      Auth: {
        // REQUIRED - Amazon Cognito Region
        region: environment.CognitoRegion,

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: environment.CognitoUserPoolID,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: environment.CognitoWebClientID,
      },
    });
    console.log('after amplify');

  }

  async login(username: string, password: string) {
    //Save the token and the user type in local storage for use app-wide
    const cognito = await Auth.signIn(username, password); // grab the jwt from the return and pass into auth
    this.credentialService.userType(cognito.signInUserSession.accessToken.payload['cognito:groups']);
    this.credentialService.setJwt(cognito.signInUserSession.accessToken.jwtToken);
    return Auth.signIn(username, password);
  }


  async forgotPassword(username: string) {
    let attemptNum = 0;
    this.loginService.recoverPasswordObs.subscribe((e) => {
      attemptNum = e.attemptNum || 0;
    });
    return Auth.forgotPassword(username)
      .then((data) => {
        this.loginService.setPasswordObject({
          email: username,
          attemptNum: attemptNum + 1,
          sent: true,
          reachToMax: false,
        });
      })
      .catch((err) =>
        this.loginService.setPasswordObject({
          email: username,
          attemptNum: attemptNum,
          sent: false,
          reachToMax: false,
          error: err,
        })
      );
  }

  async submitNewPasswordWithToken(
    username: string,
    code: string,
    new_password: string
  ) {
    return Auth.forgotPasswordSubmit(username, code, new_password)
      .then((data) => {
        return { success: true, data: data, error: null };
      })
      .catch((err) => {
        return { success: false, data: null, error: err };
      });
  }
}
