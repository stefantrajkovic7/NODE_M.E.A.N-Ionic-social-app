import { Component, OnInit, ChangeDetectionStrategy, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AuthCookieService } from '../core/services/auth-cookie.service';
import * as AuthListActions from '../core/store/actions';
import * as fromAuth from '../core/store';
import * as fromPosts from './posts/store';
import { AppComponentBase } from '../app-component-base';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamsComponent extends AppComponentBase implements OnInit {
  userData$: Observable<any>;
  posts$: Observable<any>;

  constructor(injector: Injector, public store: Store<any>) {
    super(injector);
    this.userData$ = store.pipe(select(fromAuth.getUser));
    this.posts$ = store.pipe(select(fromPosts.getPosts));
  }

  ngOnInit() {

  }

}
