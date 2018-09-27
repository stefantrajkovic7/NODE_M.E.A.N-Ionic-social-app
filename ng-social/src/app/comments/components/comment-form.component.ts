import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as io from 'socket.io-client';

import * as CommentsActions from '../store/comments.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  socket: any;
  commentForm: FormGroup;
  postId: any;

  constructor(private fb: FormBuilder, private store: Store<any>, private route: ActivatedRoute) {
    this.socket = io('http://localhost:3000');
    this.postId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.commentInit();
  }

  commentInit() {
    this.commentForm = this.fb.group({
      postId: [this.postId],
      comment: ['', Validators.required]
    })
  }

  createComment() {
    const data = this.commentForm.value;

    if (this.commentForm.valid) {
      this.store.dispatch(new CommentsActions.CreateComment(data));
      this.socket.emit('refresh', {})
      this.commentForm.reset()
    } else {
      this.commentForm.controls['comment'].markAsTouched();
    }
  }

}
