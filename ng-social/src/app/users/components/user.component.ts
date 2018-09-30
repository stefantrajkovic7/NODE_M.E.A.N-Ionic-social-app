import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';
import { AuthCookieService } from '../../core/services/auth-cookie.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users: any;
  loggedInUser: any;

  constructor(private auth: AuthCookieService) {}

  get usersList() {
    this.loggedInUser = this.auth.getUser()
      _.remove(this.users ? this.users : null, { username: this.loggedInUser.data.username })
    return this.users;
  }

  ngOnInit() {}

}