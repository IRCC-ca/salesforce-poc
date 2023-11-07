import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IRecoverEmail {
  email: string;
  attemptNum?: number;
  reachToMax?: boolean;
  sent?: boolean;
  error?: string;
}

export interface IRecoverPassword {
  email: string;
  attemptNum?: number;
  reachToMax?: boolean;
  sent?: boolean;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginRecoveryService {
  private readonly baseUrl = environment.baseUrl;
  rEmail = {
    email: '',
    attemptNum: 0,
    reachToMax: false,
    sent: false,
    error: '',
  };

  rPassword = {
    email: '',
    attemptNum: 0,
    reachToMax: false,
    sent: false,
    error: '',
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient) {}

  /**
   * Observable to control the selected student.
   */
  private recoverEmail = new BehaviorSubject<IRecoverEmail>(this.rEmail);
  recoverEmailObs: Observable<IRecoverEmail> = this.recoverEmail.asObservable();

  /**
   * Observable to control the selected student.
   */
  private recoverPassword = new BehaviorSubject<IRecoverPassword>(
    this.rPassword
  );
  recoverPasswordObs: Observable<IRecoverPassword> =
    this.recoverPassword.asObservable();

  public requestEmailRecovery(email: string) {
    this.updateRecoverEmail(this.rEmail); //flush out old data
    const body = { email: email };
    this.http
      .post<IRecoverEmail>(
        this.baseUrl + `/recover-username`,
        body,
        this.httpOptions
      )
      .subscribe((data: IRecoverEmail) => this.updateRecoverEmail(data));
  }

  public setPasswordObject = (rPassword: IRecoverPassword) => {
    this.recoverPassword.next(rPassword);
  };
  private updateRecoverEmail(rEmail: IRecoverEmail) {
    this.recoverEmail.next(rEmail);
  }
}
