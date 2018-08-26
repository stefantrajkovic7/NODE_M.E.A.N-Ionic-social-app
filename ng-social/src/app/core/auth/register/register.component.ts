import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from '../../store/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<any>) {}

  ngOnInit() {
    this.registerInit();
  }

  registerInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

  register() {
    const data = this.signupForm.value;

    if (this.signupForm.valid) {
      this.store.dispatch(new AuthActions.Register(data));
    } else {
      this.signupForm.controls['username'].markAsTouched();
      this.signupForm.controls['email'].markAsTouched();
      this.signupForm.controls['password'].markAsTouched();
    }
  }

}
