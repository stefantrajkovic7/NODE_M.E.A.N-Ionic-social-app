import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { reducers } from './posts/store';
import { StreamsComponent } from './streams.component';
import { StreamsRoutingModule } from './streams-routing.module';
import { ToolbarComponent } from '../components/toolbar.component';
import { SideComponent } from './components/side.component';
import { PostFormComponent } from './posts/post-form.component';
import { PostsListComponent } from './components/posts-list.component';
import { PostService } from './posts/services/post.service';
import { PostGuard } from './posts/services/post.guard';
import { PostEffects } from './posts/store/post.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StreamsRoutingModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostEffects])
  ],
  declarations: [
    StreamsComponent,
    PostFormComponent,
    SideComponent,
    PostsListComponent,
    ToolbarComponent
  ],
  providers: [
    PostService,
    PostGuard
  ]
})
export class StreamsModule {}
