import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class apiservice {
  private posts: any[] = [];
  private apiUri =
    "https://aggrenierdevsandbox-dev-ed.develop.my.salesforce.com/services/oauth2/token";

  body = {
    grant_type: "password",
    client_id:
      "3MVG9Xl3BC6VHB.aWqB0wJK70.p8UFWsjSA3lQK4J9Z4CDu2eIkOuZiyjV_yS7eICJINpMy0T7FAKMaZUv4tC",
    client_secret:
      "E9A72999989A715B788826A3BEB779089816726C633A44CF282C919FF076808E",
    username: "aggrenierdevsandbox@gmail.com",
    password: "vopwot-tuxhod-qaHri1",
  };

  constructor(private http: HttpClient) {}

  postAuth(username: string, password:string): Observable<any> {
    let body = new HttpParams()
      .set("grant_type", "client_credentials")
      .set(
        "client_id",
        "3MVG9Xl3BC6VHB.aWqB0wJK70.p8UFWsjSA3lQK4J9Z4CDu2eIkOuZiyjV_yS7eICJINpMy0T7FAKMaZUv4tC"
      )
      .set(
        "client_secret",
        "E9A72999989A715B788826A3BEB779089816726C633A44CF282C919FF076808E"
      )
      .set("username", username)
      .set("password", password) 

    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    return this.http.post<any>(
      "https://aggrenierdevsandbox-dev-ed.develop.my.salesforce.com/services/oauth2/token",
      body.toString(),
      {
        headers: headers,
      }
    );
    // return this.http.post<any>(`${this.apiUri}`, this.body, {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // });
  }
}
