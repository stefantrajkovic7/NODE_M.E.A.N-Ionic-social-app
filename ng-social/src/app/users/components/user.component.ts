import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';
import { AuthCookieService } from '../../core/services/auth-cookie.service';
import { Store } from '@ngrx/store';

import * as UsersAction from '../store/users.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users: any;
  loggedInUser: any;

  constructor(private auth: AuthCookieService, private store: Store<any>) {}

  get usersList() {
    this.loggedInUser = this.auth.getUser()
      _.remove(this.users ? this.users : null, { username: this.loggedInUser.data.username })
    return this.users;
  }

  ngOnInit() {}

  follow(user) {
    this.store.dispatch(new UsersAction.FollowingAction(user._id));
  }

}