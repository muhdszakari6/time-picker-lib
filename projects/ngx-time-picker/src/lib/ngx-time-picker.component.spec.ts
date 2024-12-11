import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimePickerComponent } from './ngx-time-picker.component';

describe('NgxTimePickerComponent', () => {
  let component: NgxTimePickerComponent;
  let fixture: ComponentFixture<NgxTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTimePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
