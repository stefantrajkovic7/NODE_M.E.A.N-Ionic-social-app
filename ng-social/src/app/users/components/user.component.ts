import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';
import { AuthCookieService } from '../../core/services/auth-cookie.service';
import { Store } from '@ngrx/store';

import * as io from 'socket.io-client';

import * as UsersAction from '../store/users.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() users: any;
  @Input() userData: any;
  socket: any;
  loggedInUser: any;
  currentUser: any;

  constructor(private auth: AuthCookieService, private store: Store<any>) {
    this.socket = io('http://localhost:3000');
  }

  get usersList() {
    this.loggedInUser = this.auth.getUser()
      _.remove(this.users ? this.users : null, { username: this.loggedInUser.data.username })
    return this.users;
  }

  ngOnInit() {}

  follow(user) {
    this.store.dispatch(new UsersAction.FollowingAction(user._id));
    this.socket.emit('refresh', {})
  }

  checkInArray(arr, id) {
    const result = _.find(arr, ['userFollowed._id', id]);
    if (result) {
      return true
    } else {
      return false;
    }
  }

}