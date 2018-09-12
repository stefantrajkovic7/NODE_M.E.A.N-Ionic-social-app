import { Component, OnInit } from '@angular/core';
import { AuthCookieService } from '../core/services/auth-cookie.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  constructor(private auth: AuthCookieService) { }

  ngOnInit() {
    
    const token = this.auth.getPayload()

    console.log(token)
    
  }

}
