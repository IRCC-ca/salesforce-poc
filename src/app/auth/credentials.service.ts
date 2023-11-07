import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


export interface Credentials {
  // Customize received credentials here
  username: string;
  token: string;
}

const credentialsKey = 'credentials';

/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.getIsAuthorized()
  );
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private jwtHelper: JwtHelperService) {}

  public getIsAuthorized(): boolean {
    const jwt = this.getJwt();
    if (jwt) {
      try {
        this.decodeJwt(jwt);
        return !this.jwtHelper.isTokenExpired(jwt);
      } catch (e) {
        console.warn(e);
      }
    }
    return false;
  }

  public getTokenExpirationDate(): Date | null {
    const jwt = this.getJwt();
    if (jwt) {
      try {
        this.decodeJwt(jwt);
        return this.jwtHelper.getTokenExpirationDate(jwt);
      } catch (e) {
        console.warn(e);
      }
    }
    return null;
  }

    userType(userGroup: string | string[]) {
        if (userGroup !== undefined && userGroup !== null) {
            //UserGroup can be null!
            if (typeof userGroup === 'string') {
                localStorage.setItem(
                    'user_type',
                    userGroup);
            } else {
                localStorage.setItem(
                    'user_type',
                    userGroup[0]);
            }
        }
    }

  /**
   * Pass jwt in from the authenticate service
   * @param jwt
   */
  public setJwt(jwt: string) {
    this.isLoggedIn.next(true);
    sessionStorage.setItem('jwtToken', jwt);
  }

  public getJwt(): string | null {
    return sessionStorage.getItem('jwtToken');
  }

  public removeJwt() {
    this.isLoggedIn.next(false);
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('user_type');
    return;
  }

  public decodeJwt(jwt: string): any {
    return this.jwtHelper.decodeToken(jwt);
  }

}
