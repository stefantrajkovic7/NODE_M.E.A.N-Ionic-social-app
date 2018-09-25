import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { reducer } from './posts/store/post.reducer';
import { StreamsComponent } from './streams.component';
import { StreamsRoutingModule } from './streams-routing.module';
import { PostFormComponent } from './posts/post-form.component';
import { PostsListComponent } from './components/posts-list.component';
import { PostService } from './posts/services/post.service';
import { PostGuard } from './posts/services/post.guard';
import { PostEffects } from './posts/store/post.effects';
import { StreamsGuard } from './streams.guard';
import { PostComponent } from './components/post.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StreamsRoutingModule,
    StoreModule.forFeature('posts', reducer),
    EffectsModule.forFeature([PostEffects])
  ],
  declarations: [
    StreamsComponent,
    PostFormComponent,
    PostsListComponent,
    PostComponent
  ],
  providers: [
    PostService,
    StreamsGuard,
    PostGuard
  ]
})
export class StreamsModule {}
