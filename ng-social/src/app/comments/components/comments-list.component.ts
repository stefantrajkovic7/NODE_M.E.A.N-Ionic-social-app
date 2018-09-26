import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import * as CommentsAction from '../store/comments.actions';
import * as io from 'socket.io-client';

import _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  socket: any;
  @Input() post: any;

  constructor(private store: Store<any>, private router: Router) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
      console.log(this.post + 'dddd')
  }

  realTime(time) {
    return moment(time).fromNow();
  }

}
