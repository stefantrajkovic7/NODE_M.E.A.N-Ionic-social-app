import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';
import { AuthCookieService } from '../../core/services/auth-cookie.service';
import { Store } from '@ngrx/store';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.css']
})
export class FollowersListComponent implements OnInit {
  socket: any;
  @Input() userData: any;

  constructor(private store: Store<any>) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {}

}