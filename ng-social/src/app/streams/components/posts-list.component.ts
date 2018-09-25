import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import * as PostActions from '../posts/store/post.actions';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  socket: any;
  @Input() posts: any;

  constructor(private store: Store<any>) {
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

}
