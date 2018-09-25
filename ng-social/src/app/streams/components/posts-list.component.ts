import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  @Input() posts: any;

  constructor() {}

  ngOnInit() {}

  realTime(time) {
    return moment(time).fromNow();
  }

  likePost(post) {
    console.log(post);
  }

}
