import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications.component';
import { NotificationsGuard } from './notifications.guard';

export const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    canActivate: [NotificationsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule {
}