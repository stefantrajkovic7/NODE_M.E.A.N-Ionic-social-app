import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StreamsComponent } from './streams.component';

export const routes: Routes = [
  {
    path: '',
    component: StreamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule {
}
