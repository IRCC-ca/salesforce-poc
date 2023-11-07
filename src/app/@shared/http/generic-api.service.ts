/**
 * This is a generic API service. It performs all api calls for the application. It passes the post/get directly
 * back into the calling function where it can be handled as required. 
 * IT IS IMPORTANT TO USE THIS SERVICE!
 * By using a generic api service, the HttpClient module only gets imported and run ONCE
 */

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export interface IApiResponse {
    componentID: string,
    success: boolean;
    response: any;
}

@Injectable({
    providedIn: 'root'
})
export class GenericApiCallService {

    constructor(private http: HttpClient) { }


    genericPost(address: string, payload: any, headers?: HttpHeaders, overrideBaseUrl?: string) {
        let baseURL = '';
        overrideBaseUrl ? baseURL = overrideBaseUrl : baseURL = environment.baseUrl;
        return this.http.post<any>((baseURL + address), payload, {headers});
    }

    genericGet(address: string, headers?: HttpHeaders, overrideBaseUrl?: string) { //TODO: Headers not hooked in
        let baseURL = '';
        overrideBaseUrl ? baseURL = overrideBaseUrl : baseURL = environment.baseUrl;
        return this.http.get(baseURL + address);
    }
}