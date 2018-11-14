import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';
import { AuthCookieService } from '../../core/services/auth-cookie.service';
import { Store } from '@ngrx/store';

import * as io from 'socket.io-client';
import { UnFollowUser } from '../store/following.actions';

@Component({
  selector: 'app-followers',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowingListComponent implements OnInit {
  socket: any;
  @Input() userData: any;

  constructor(private store: Store<any>) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {}

  unFollow(user) {
    this.store.dispatch(new UnFollowUser(user));
    this.socket.emit('refresh', {})
  }

}