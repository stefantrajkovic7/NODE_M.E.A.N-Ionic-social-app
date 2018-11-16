import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from '../../core/store/actions';
import { Router } from '@angular/router';
import * as MUI from 'materialize-css';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() userData: any;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {

    const dropDownElement = document.querySelector('.dropdown-trigger');
    MUI.Dropdown.init(dropDownElement, {
      aligment: 'right',
      hover: true,
      coverTrigger: false
    })
    
  }

  get user() {
    return this.userData.user ? this.userData.user.username : '';
  }

  goToUserSection() {
    this.router.navigate(['/streams'])
  }

  logout() {
    this.store.dispatch(new Logout())
  }

}
