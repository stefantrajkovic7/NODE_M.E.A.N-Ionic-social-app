import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as io from 'socket.io-client';

import * as CommentsActions from '../store/comments.actions';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  socket: any;
  commentForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<any>) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    this.commentInit();
  }

  commentInit() {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required]
    })
  }

  createComment() {
    // const data = this.postForm.value;

    // if (this.postForm.valid) {
    //   this.store.dispatch(new PostActions.CreatePost(data));
    //   this.socket.emit('refresh', {})
    // } else {
    //   this.postForm.controls['post'].markAsTouched();
    // }
  }

}
