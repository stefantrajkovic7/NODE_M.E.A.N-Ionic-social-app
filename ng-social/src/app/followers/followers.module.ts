import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { reducer } from './store/followers.reducer';
import { SharedModule } from '../shared/shared.module';
import { FollowersEffects } from './store/followers.effects';
import { FollowersService } from './services/followers.service';
import { FollowersComponent } from './followers.component';
import { FollowersGuard } from './followers.guard';
import { FollowersRoutingModule } from './followers-routing.module';
import { FollowersListComponent } from './components/followers-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    FollowersRoutingModule,
    StoreModule.forFeature('followers', reducer),
    EffectsModule.forFeature([FollowersEffects])
  ],
  declarations: [
    FollowersComponent,
    FollowersListComponent
  ],
  providers: [
    FollowersService,
    FollowersGuard
  ]
})
export class FollowersModule {}
