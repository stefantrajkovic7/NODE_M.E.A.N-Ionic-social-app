import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar.component';
import { SideComponent } from './components/side.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule,
      RouterModule,
      ReactiveFormsModule,
      FormsModule,
  ],
  declarations: [
    ToolbarComponent,
    SideComponent
  ],
  exports: [
    ToolbarComponent,
    SideComponent
  ]
})
export class SharedModule {}
