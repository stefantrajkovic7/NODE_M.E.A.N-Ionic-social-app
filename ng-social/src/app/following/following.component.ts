import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as FollowingAction from './store/following.actions';
import * as fromFollowing from './store';
import * as fromAuth from '../core/store';
import * as AuthActions from '../core/store/actions';

import * as io from 'socket.io-client';
import { AuthCookieService } from '../core/services/auth-cookie.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowingComponent implements OnInit, AfterViewInit {
  toolbarElement: any;
  id: any;
  socket: any;
  userData$: Observable<any>;

  constructor(public store: Store<any>, private auth: AuthCookieService) {
    this.socket = io('http://localhost:3000');
    this.userData$ = store.pipe(select(fromAuth.getUser));
    // this.users$ = store.pipe(select(fromUsers.getAllUsers))
    // this.currentUser = this.auth.getUser();
  }

  ngOnInit() {
    // this.toolbarElement = document.querySelector('.nav-content');
    // this.store.dispatch(new UsersAction.LoadUsers());
  }

  ngAfterViewInit() {
    // this.toolbarElement.style.display = 'none';
  }

}
