import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export const options = {   
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true,
};

@Injectable()
export class CommentsService {
    constructor(private _http: HttpClient) {}

    createComment(payload: any): Observable<any> {
        return this._http.post(`${environment.API_BASE_URL}posts/create-comment`, payload, options)
    }

    getPost(id: any): Observable<any> {
        return this._http.get(`${environment.API_BASE_URL}posts/${id}`, options)
    }
}