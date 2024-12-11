import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTimePickerModule } from '@salimzakari/ngx-time-picker';

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
