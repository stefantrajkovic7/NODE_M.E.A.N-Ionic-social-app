import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as PostsActions from './posts/store/post.actions';
import * as fromPosts from './posts/store';
import * as fromAuth from '../core/store';
import { AppComponentBase } from '../app-component-base';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamsComponent extends AppComponentBase implements OnInit {
  socket: any;
  userData$: Observable<any>;
  posts$: any;

  constructor(injector: Injector, public store: Store<any>) {
    super(injector);
    this.socket = io('http://localhost:3000');
    this.userData$ = store.pipe(select(fromAuth.getUser));
    this.posts$ = this.store.pipe(select(fromPosts.getPosts))
    this.socket.on('refreshPage', data => {
      this.store.dispatch(new PostsActions.LoadPosts());
    })
  }

  ngOnInit() {
    
  }

}
