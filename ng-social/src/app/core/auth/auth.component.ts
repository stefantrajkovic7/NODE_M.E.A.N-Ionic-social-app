import { AfterViewInit, Component } from '@angular/core';
import * as MUI from 'materialize-css';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements AfterViewInit {
  public username: string;
  public password: string;
  public email: string;

  constructor() { }

  ngAfterViewInit() {
      const tabs = document.querySelector('.tabs');
      MUI.Tabs.init(tabs, {});
  }

}
