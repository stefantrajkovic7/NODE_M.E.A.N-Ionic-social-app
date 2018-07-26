import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './core/auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthFormComponent } from './shared/components/auth-form/auth-form.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
