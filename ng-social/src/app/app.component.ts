import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCookieService } from './core/services/auth-cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private cookieService: AuthCookieService) {}

  ngOnInit() {
    const token = this.cookieService.getToken();

    if (token) {
      this.router.navigate(['/streams'])
    } else {
       this.router.navigate(['/'])
    }
  }

}
