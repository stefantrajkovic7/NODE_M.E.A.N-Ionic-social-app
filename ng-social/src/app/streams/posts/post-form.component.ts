import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as PostActions from './store/post.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  postForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<any>) {}

  ngOnInit() {
    this.postInit();
  }

  postInit() {
    this.postForm = this.fb.group({
      post: ['', Validators.required]
    })
  }

  createPost() {
    const data = this.postForm.value;

    if (this.postForm.valid) {
      this.store.dispatch(new PostActions.CreatePost(data));
    } else {
      this.postForm.controls['post'].markAsTouched();
    }
  }

}
