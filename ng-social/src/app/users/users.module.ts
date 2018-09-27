import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { reducer } from './store/users.reducer';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersEffects } from './store/users.effects';
import { UsersService } from './services/users.service';
import { UsersGuard } from './users.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UsersService,
    UsersGuard
  ]
})
export class UsersModule {}
