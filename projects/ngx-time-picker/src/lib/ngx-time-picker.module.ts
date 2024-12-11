import { NgModule } from '@angular/core';
import { NgxTimePickerComponent } from './ngx-time-picker.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NgxTimePickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxTimePickerComponent,
  ]
})
export class NgxTimePickerModule { }
