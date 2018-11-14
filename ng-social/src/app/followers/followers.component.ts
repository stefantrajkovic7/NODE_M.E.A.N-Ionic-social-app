import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as FollowersAction from './store/followers.actions';
import * as fromFollowers from './store';
import * as fromAuth from '../core/store';
import * as AuthActions from '../core/store/actions';

import * as io from 'socket.io-client';
import { AuthCookieService } from '../core/services/auth-cookie.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowersComponent implements OnInit, AfterViewInit {
  toolbarElement: any;
  id: any;
  socket: any;
  currentUser: any;
  userData$: Observable<any>;

  constructor(public store: Store<any>, private auth: AuthCookieService) {
    this.socket = io('http://localhost:3000');
    this.userData$ = store.pipe(select(fromAuth.getUser));
    this.currentUser = this.auth.getUser();
    this.socket.on('refreshPage', data => {
      this.store.dispatch(new AuthActions.LoadUser(this.currentUser.data._id));
    })
  }

  ngOnInit() {}

  ngAfterViewInit() {}

}
