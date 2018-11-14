import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export const options = {   
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true,
};

@Injectable()
export class NotificationsService {
    constructor(private _http: HttpClient) {}
}