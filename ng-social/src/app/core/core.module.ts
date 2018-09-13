import {ModuleWithProviders, NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers';
import { CoreEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
    imports: [
        StoreModule.forFeature('auth', fromAuth.reducer),
        EffectsModule.forFeature([CoreEffects]),
    ],
    declarations: [],
    exports: []
})
export class CoreModule {
   
}