import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lrxjs-input',
  host: {
    "class": "input",
  },
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() id: string = crypto.randomUUID();
  @Input() name: string = "";
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;

  // [(ngModel)]
  _value: string = "";
  _onChange(event: Event) { this.onChange((<HTMLInputElement>event.target).value) }
  @Input()
  get value() {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.onChange(val);
  }
  onChange(val: string) {}
  onTouch() {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
