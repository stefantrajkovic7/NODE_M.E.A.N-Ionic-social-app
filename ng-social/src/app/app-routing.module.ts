import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },

  {
    path: 'streams',
    loadChildren: './streams/streams.module#StreamsModule',
    data: { preload: true },
    canActivate: [AuthGuard]
  },

  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
    data: { preload: true },
    // canActivate: [AuthGuard]
  },

  {
    path: 'comments/:id',
    loadChildren: './comments/comments.module#CommentsModule',
    data: { preload: true },
    // canActivate: [AuthGuard]
  },

  {
    path: 'following',
    loadChildren: './following/following.module#FollowingModule',
    data: { preload: true },
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    router.events.subscribe(event => {

    });
  }
}
