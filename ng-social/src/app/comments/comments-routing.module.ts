import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { CommentsGuard } from './comments-guard';

export const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    canActivate: [CommentsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
