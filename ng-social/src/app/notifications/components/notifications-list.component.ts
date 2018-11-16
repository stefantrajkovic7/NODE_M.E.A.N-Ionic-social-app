import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';
import { AuthCookieService } from '../../core/services/auth-cookie.service';
import { Store } from '@ngrx/store';

import * as io from 'socket.io-client';

import * as moment from 'moment';
import { MarkNotificationAction, DeleteNotification } from '../store/notifications.actions';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {
  socket: any;
  @Input() userData: any;

  constructor(private store: Store<any>) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {}

  currentTime(time) {
    return moment(time).fromNow();
  }

  mark(data) {
    this.store.dispatch(new MarkNotificationAction(data._id))
    this.socket.emit('refresh', {});
  }

  delete(data) {
    this.store.dispatch(new DeleteNotification(data._id, true))
    this.socket.emit('refresh', {});
  }

}