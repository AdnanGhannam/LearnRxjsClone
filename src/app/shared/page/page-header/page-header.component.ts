import { Component, Input } from '@angular/core';
import { NullableString } from 'src/app/types';

@Component({
  selector: 'lrxjs-page-header',
  host: {
    "class": "page-header"
  },
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() title: NullableString = "";
}
