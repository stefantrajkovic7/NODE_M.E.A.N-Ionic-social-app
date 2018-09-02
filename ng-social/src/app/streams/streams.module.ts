import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StreamsComponent } from './streams.component';
import { StreamsRoutingModule } from './streams-routing.module';
import { ToolbarComponent } from '../components/toolbar.component';
import { SideComponent } from './components/side.component';
import { PostFormComponent } from './components/post-form.component';
import { PostsListComponent } from './components/posts-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StreamsRoutingModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    // StoreModule.forFeature('surveys', reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    // EffectsModule.forFeature([SurveysEffects]),

  ],
  declarations: [
    StreamsComponent,
    PostFormComponent,
    SideComponent,
    PostsListComponent,
    ToolbarComponent
  ],
  providers: []
})
export class StreamsModule {
}
