import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers.component';
import { FollowersGuard } from './followers.guard';

export const routes: Routes = [
  {
    path: '',
    component: FollowersComponent,
    canActivate: [FollowersGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowersRoutingModule {
}