import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowingComponent } from './following.component';
import { FollowingGuard } from './following.guard';

export const routes: Routes = [
  {
    path: '',
    component: FollowingComponent,
    canActivate: [FollowingGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowingRoutingModule {
}