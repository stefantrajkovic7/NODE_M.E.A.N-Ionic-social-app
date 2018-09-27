import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersGuard } from './users.guard';

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [UsersGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
