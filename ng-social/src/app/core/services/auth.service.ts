import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from "rxjs";
import {RequestOptions, Headers} from '@angular/http';
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private _http: HttpClient) {}

    getToken(): string {
        return sessionStorage.getItem('token');
    }

    createUser(payload: any): Observable<any> {

        // Need this for later
        // let headers = new Headers({
        //     'Accept': 'aplication/json',
        //     'Content-Type': 'application/json'
        // });
        // let options = new RequestOptions({ headers: headers, withCredentials: true });

        return this._http.post(`${environment.API_BASE_URL}users/register`, payload)
    }

    loginUser(payload: any): Observable<any> {
        return this._http.post(`${environment.API_BASE_URL}users/login`, payload)
    }

}