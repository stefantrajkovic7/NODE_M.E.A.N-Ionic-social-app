import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from '../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<any>) {}

  ngOnInit() {
    this.loginInit();
  }

  loginInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    const data = this.loginForm.value;

    if (this.loginForm.valid) {
      this.store.dispatch(new AuthActions.Login(data));
    } else {
        this.loginForm.controls['username'].markAsTouched();
        this.loginForm.controls['password'].markAsTouched();
    }
  }

}