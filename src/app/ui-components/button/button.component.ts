import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: '[lrxjs-button]',
  host: {
    "class": "button",
  },
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon?: string;
}
