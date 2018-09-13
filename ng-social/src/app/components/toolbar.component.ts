import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../core/store/actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() userData: any;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    console.log(this.userData + 'USEEER')
  }

  logout() {
    this.store.dispatch(new Logout())
  }

}
