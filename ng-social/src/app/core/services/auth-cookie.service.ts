import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class AuthCookieService {


    constructor(public cookieService: CookieService) {}

    setToken(token) {
        this.cookieService.set('frenzy_token', token);
    }

    getToken() {
        return this.cookieService.get('frenzy_token');
    }

    deleteToken() {
        this.cookieService.delete('frenzy_token')
    }

}