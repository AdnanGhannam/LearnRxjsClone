import { Component, Input } from '@angular/core';

@Component({
  selector: '[lrxjs-icon-button][icon]',
  host: {
    "class": "icon-button",
  },
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() icon!: string;
}
