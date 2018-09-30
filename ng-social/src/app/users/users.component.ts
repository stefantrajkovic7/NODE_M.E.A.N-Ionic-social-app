import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as UsersAction from './store/users.actions';
import * as fromUsers from './store';
import * as fromAuth from '../core/store';

import * as io from 'socket.io-client';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit, AfterViewInit {
  toolbarElement: any;
  id: any;
  socket: any;
  userData$: Observable<any>;
  users$: Observable<any>;

  constructor(public store: Store<any>, private users: UsersService) {
    this.socket = io('http://localhost:3000');
    this.userData$ = store.pipe(select(fromAuth.getUser));
    this.users$ = store.pipe(select(fromUsers.getAllUsers))

    // this.socket.on('refreshPage', data => {
    //   this.store.dispatch(new CommentsAction.LoadPost(this.id));
    // })
  }

  ngOnInit() {
    // this.toolbarElement = document.querySelector('.nav-content');
    // this.store.dispatch(new UsersAction.LoadUsers());
    this.users.getAllUsers().subscribe(data => {
        console.log(data.result[0].email + 'jjj')
    })
  }

  ngAfterViewInit() {
    // this.toolbarElement.style.display = 'none';
  }

}
