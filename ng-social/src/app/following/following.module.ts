import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { reducer } from './store/following.reducer';
import { SharedModule } from '../shared/shared.module';
import { FollowingEffects } from './store/following.effects';
import { FollowingService } from './services/following.service';
import { FollowingComponent } from './following.component';
import { FollowingGuard } from './following.guard';
import { FollowingRoutingModule } from './following-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    FollowingRoutingModule,
    StoreModule.forFeature('following', reducer),
    EffectsModule.forFeature([FollowingEffects])
  ],
  declarations: [
    FollowingComponent
  ],
  providers: [
    FollowingService,
    FollowingGuard
  ]
})
export class FollowingModule {}
