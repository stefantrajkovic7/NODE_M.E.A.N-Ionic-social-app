import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
    console.log(this.name)
  }

}
