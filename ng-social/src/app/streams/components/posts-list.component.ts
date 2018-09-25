import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import * as PostActions from '../posts/store/post.actions';
import * as io from 'socket.io-client';

import _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  socket: any;
  @Input() posts: any;
  @Input() userData: any;

  constructor(private store: Store<any>, private router: Router) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {}

  realTime(time) {
    return moment(time).fromNow();
  }

  likePost(post) {
    this.store.dispatch(new PostActions.AddLike(post));
    this.socket.emit('refresh', {})
  }
  
  checkInLikesArray(arr, username) {
    return _.some(arr, { username: username })
  }

  openComment(post) {
    this.router.navigate(['comments', post._id])
  }

}
