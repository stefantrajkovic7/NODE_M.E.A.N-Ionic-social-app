import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { reducer } from './store/notifications.reducer';
import { SharedModule } from '../shared/shared.module';
import { NotificationsEffects } from './store/notifications.effects';
import { NotificationsService } from './services/notifications.service';
import { NotificationsComponent } from './notifications.component';
import { NotificationsGuard } from './notifications.guard';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsListComponent } from './components/notifications-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NotificationsRoutingModule,
    StoreModule.forFeature('notifications', reducer),
    EffectsModule.forFeature([NotificationsEffects])
  ],
  declarations: [
    NotificationsComponent,
    NotificationsListComponent
  ],
  providers: [
    NotificationsService,
    NotificationsGuard
  ]
})
export class NotificationsModule {}
