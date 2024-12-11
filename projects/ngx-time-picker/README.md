# NgxTimePicker

A time picker component for your angular application.

## Dependencies

- [Angular](https://angular.io/)

## Features

- Select time from a dropdown
- Supports Reactive Forms
- Supports Template-Driven Forms
- Customizable styles

## Demo

[Demo Application](https://ngx-time-picker-demo.vercel.app/)

## Example

![ngx-time-picker example ](https://res.cloudinary.com/muhdsalim/image/upload/v1733935007/Screenshot_2024-12-11_at_16.41.22_qx8eeh.png)

## Installation

Install ngx-time-picker via.

```bash
npm i @salimzakari/ngx-time-picker
```

Once installed you need to import our main module in your application module or in your component for example:

```javascript
import { NgxTimePickerModule } from "@salimzakari/ngx-time-picker";

@NgModule({
  declarations: [AppComponent],
  imports: [NgxTimePickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Usage

ngx-time-picker with form control: Pass in formControlName like you would in any reactive form input.

```html
<form [formGroup]="form">
  <ngx-time-picker formControlName="startTime"> </ngx-time-picker>
</form>
```

ngx-time-picker with NgModel.

```html
<ngx-time-picker [(ngModel)]="time"></ngx-time-picker>
```

ngx-time-picker with custom class for dropdown, input and selected class.

```html
<ngx-time-picker [(ngModel)]="customTime" inputClass="input" dropdownClass="dropdown" selectedClass="selected"></ngx-time-picker>
```
