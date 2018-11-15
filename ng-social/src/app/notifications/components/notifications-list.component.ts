import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';
import { AuthCookieService } from '../../core/services/auth-cookie.service';
import { Store } from '@ngrx/store';

import * as io from 'socket.io-client';

import * as moment from 'moment';

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

  mark() {

  }

  delete() {
    
  }

}