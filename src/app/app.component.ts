import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTimePickerModule } from '../../projects/ngx-time-picker/src/lib/ngx-time-picker.module';

@Component({
  selector: 'app-root',
  imports: [NgxTimePickerModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  time: string = ""
  customTime: string = ""
  form = new FormGroup({
    time: new FormControl(null)
  })
}
