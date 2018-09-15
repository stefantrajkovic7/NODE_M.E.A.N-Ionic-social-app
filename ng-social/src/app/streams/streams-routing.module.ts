import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamsComponent } from './streams.component';
import { StreamsGuard } from './streams.guard';

export const routes: Routes = [
  {
    path: '',
    component: StreamsComponent,
    canActivate: [StreamsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule {
}
