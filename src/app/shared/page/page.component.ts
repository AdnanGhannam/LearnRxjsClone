import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NullableString } from 'src/app/types';

@Component({
  selector: 'lrxjs-page',
  host: {
    "class": "page"
  },
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  @Input() content: NullableString = null;
}
