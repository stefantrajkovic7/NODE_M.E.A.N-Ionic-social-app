import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { CommentsRoutingModule } from './comments-routing.module';
// import { ToolbarComponent } from '../components/toolbar.component';
import { CommentsComponent } from './comments.component';
import { CommentsGuard } from './comments-guard';
import { CommentsService } from './services/comments.service';
import { CommentsEffects } from './store/comments.effects';
import { reducer } from './store/comments.reducer';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommentsRoutingModule,
    StoreModule.forFeature('comments', reducer),
    EffectsModule.forFeature([CommentsEffects])
  ],
  declarations: [
    CommentsComponent
    // ToolbarComponent
  ],
  providers: [
    CommentsService,
    CommentsGuard
  ]
})
export class CommentsModule {}
