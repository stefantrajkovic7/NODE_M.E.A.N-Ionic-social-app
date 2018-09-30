import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';
import { AuthCookieService } from '../../core/services/auth-cookie.service';
import { Store } from '@ngrx/store';

import * as UsersAction from '../store/users.actions';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users: any;
  @Input() userData: any;
  loggedInUser: any;
  ss: any

  constructor(private auth: AuthCookieService, private ser: UsersService, private store: Store<any>) {}

  get usersList() {
    this.loggedInUser = this.auth.getUser()
      _.remove(this.users ? this.users : null, { username: this.loggedInUser.data.username })
    return this.users;
  }

  ngOnInit() {}

  follow(user) {
    this.store.dispatch(new UsersAction.FollowingAction(user._id));
  }

  checkInArray(arr, id) {
    const result = _.find(arr, ['userFollowed._id', id]);
    if (result) {
      console.log(result)
      return true
    } else {
      console.log(result)
      return false;
    }
  }

}