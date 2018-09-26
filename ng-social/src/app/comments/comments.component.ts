import { Component, OnInit, ChangeDetectionStrategy, Injector, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as CommentsAction from './store/comments.actions';
import * as fromComments from './store';
import * as fromAuth from '../core/store';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-streams-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit, AfterViewInit {
  toolbarElement: any;
  socket: any;
  userData$: Observable<any>;
  post$: any;

  constructor(public store: Store<any>) {
    this.socket = io('http://localhost:3000');
    this.userData$ = store.pipe(select(fromAuth.getUser));
    this.post$ = store.pipe(select(fromComments.getPost))
    console.log(this.post$ + 'jjjj')
  }

  ngOnInit() {
    this.toolbarElement = document.querySelector('.nav-content');
  }

  ngAfterViewInit() {
    this.toolbarElement.style.display = 'none';
  }

}
