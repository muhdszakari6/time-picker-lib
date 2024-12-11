import { Component } from '@angular/core';
import { NgxTimePickerModule } from "../../projects/ngx-time-picker/src/lib/ngx-time-picker.module";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
