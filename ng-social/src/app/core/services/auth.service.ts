import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private _http: HttpClient) {}

    getToken(): string {
        return localStorage.getItem('token');
    }

    createUser(payload: any): Observable<any> {
        return this._http.post(`${environment.API_BASE_URL}/users/register`, payload)
    }

    loginUser(payload: any): Observable<any> {
        return this._http.post(`${environment.API_BASE_URL}/users/login`, payload)
    }

}