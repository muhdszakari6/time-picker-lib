import { Component, ElementRef, EventEmitter, HostListener, Input, Optional, Output, QueryList, Self, ViewChild, ViewChildren } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'ngx-time-picker',
  templateUrl: './ngx-time-picker.component.html',
  styleUrl: './ngx-time-picker.component.scss'
})
export class NgxTimePickerComponent {
  @Input() placeholder: string = ""
  @Input() inputClass: string = ""
  @Input() selectedClass: string = ""
  @Input() dropdownClass: string = ""
  @Output() selectInputChange = new EventEmitter();

  top = 0
  left = 0
  selectedHour = "00"
  selectedMinute = "00"
  dropdownOpen: boolean = false;
  selectedOption: SelectOptionItem | null = null;
  hours = Array.from(new Array(24).keys()).map((_, i) => `${i < 10 ? '0' : ''}${i}`);
  minutes = Array.from(new Array(60).keys()).map((_, i) => `${i < 10 ? '0' : ''}${i}`);

  @ViewChild('input') input: ElementRef | undefined;
  @ViewChildren('hour') hourElements: QueryList<ElementRef> | undefined;
  @ViewChildren('minute') minuteElements: QueryList<ElementRef> | undefined;
  @ViewChild('hourContainer') hourContainer: ElementRef | undefined;
  @ViewChild('minuteContainer') minuteContainer: ElementRef | undefined;

  private onTouched: Function = () => { };
  private onChanged: Function = (item: SelectOptionItem | null) => { };

  constructor(private el: ElementRef, @Self() @Optional() public control: NgControl) {
    if (this.control)
      this.control.valueAccessor = this;
  }

  public get invalid(): boolean | null {
    return this.control ? this.control.invalid : false;
  }

  public get disabled(): boolean | null {
    return this.control ? this.control.disabled : false;
  }

  public get showError(): boolean | null {
    if (!this.control) {
      return false;
    }

    const { dirty, touched } = this.control;
    return this.invalid ? (dirty || touched) : false;
  }

  writeValue(item: string | null): void {
    this.selectedHour = (item as string)?.split(':')[0] || "00"
    this.selectedMinute = (item as string)?.split(':')[1] || "00"

    if (this.hourContainer && this.minuteContainer && this.hourElements && this.minuteElements)
      this.scrollToPosition();

  }

  scrollToPosition() {
    const scrollTop = this.hourContainer?.nativeElement.scrollTop
    const containerRect = this.hourContainer?.nativeElement.getBoundingClientRect();
    const top = this.hourElements?.get(+this.selectedHour)?.nativeElement?.getBoundingClientRect()?.top;
    const scrollPosition = top - containerRect?.top + scrollTop

    this.hourContainer?.nativeElement?.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    })

    const m_scrollTop = this.minuteContainer?.nativeElement.scrollTop
    const m_containerRect = this.minuteContainer?.nativeElement.getBoundingClientRect();
    const m_top = this.minuteElements?.get(+this.selectedMinute)?.nativeElement?.getBoundingClientRect()?.top;
    const m_scrollPosition = m_top - m_containerRect?.top + m_scrollTop

    this.minuteContainer?.nativeElement?.scrollTo({
      top: m_scrollPosition,
      behavior: "smooth"
    })

  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  selectHour(hour: string) {
    this.selectedHour = hour;
    const value = this.selectedHour + ":" + this.selectedMinute
    this.onTouched();
    this.writeValue(value)
    this.onChanged(value);
  }

  selectMinute(minute: string) {
    this.selectedMinute = minute;
    const value = this.selectedHour + ":" + this.selectedMinute
    this.onTouched();
    this.writeValue(value)
    this.onChanged(value);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.el.nativeElement.contains(event.target) && this.dropdownOpen) {
      this.dropdownOpen = false;
      this.onTouched() //Calls onTouched whenever dropdown is closed, check if there's a validation error
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updatePosition()
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updatePosition()
  }

  toggleDropdown() {
    if (this.dropdownOpen) this.onTouched() //Calls onTouched whenever dropdown is closed, check if there's a validation error
    this.dropdownOpen = !this.dropdownOpen
    if (this.dropdownOpen) {
      setTimeout(() => {
        this.scrollToPosition()
      }, 10)
      this.updatePosition()
    }
  }

  selectNow() {
    const date = new Date()
    this.selectHour(date.toTimeString().split(":")[0])
    this.selectMinute(date.toTimeString().split(":")[1])
    this.toggleDropdown()
  }

  emitChange() {
    this.onTouched()
    this.selectInputChange.emit();
  }

  updatePosition = () => {
    this.top = this.input?.nativeElement.getBoundingClientRect().top + this.input?.nativeElement.getBoundingClientRect().height
    this.left = this.input?.nativeElement.getBoundingClientRect().left
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updatePosition()
    }, 0);

  }
}

export interface SelectOptionItem {
  label: string,
  value: string
}
