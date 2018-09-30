import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export const options = {   
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true,
};

@Injectable()
export class UsersService {
    constructor(private _http: HttpClient) {}

    getAllUsers(): Observable<any> {
        return this._http.get(`${environment.API_BASE_URL}users`, options)
    }

    postFollow(userFollowed): Observable<any> {
        return this._http.post(`${environment.API_BASE_URL}users/follow`, {userFollowed}, options)
    }
}