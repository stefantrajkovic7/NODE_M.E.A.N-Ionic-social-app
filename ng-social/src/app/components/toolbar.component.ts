import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../core/store/actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private store: Store<any>) {}

  logout() {
    this.store.dispatch(new Logout())
  }

}
