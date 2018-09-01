import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
