import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { CommentsGuard } from './comments-guard';
import { CommentsService } from './services/comments.service';
import { CommentsEffects } from './store/comments.effects';
import { reducer } from './store/comments.reducer';
import { SharedModule } from '../shared/shared.module';
import { CommentFormComponent } from './components/comment-form.component';
import { CommentsListComponent } from './components/comments-list.component';
import { PostViewComponent } from './components/post-view.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommentsRoutingModule,
    StoreModule.forFeature('comments', reducer),
    EffectsModule.forFeature([CommentsEffects])
  ],
  declarations: [
    PostViewComponent,
    CommentsComponent,
    CommentsListComponent,
    CommentFormComponent
  ],
  providers: [
    CommentsService,
    CommentsGuard
  ]
})
export class CommentsModule {}
