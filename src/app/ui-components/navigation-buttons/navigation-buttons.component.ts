import { Component, Input } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { NullableString, TreeViewNode } from 'src/app/types';

@Component({
  selector: 'lrxjs-navigation-buttons',
  host: {
    "class": 'navigation-buttons',
  },
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss']
})
export class NavigationButtonsComponent {
  @Input() next?: TreeViewNode;
  @Input() previous?: TreeViewNode;

  constructor(private blogsService: BlogsService) { }

  navTo(id: NullableString) {
    this.blogsService.getContent(id).subscribe(val => this.blogsService.content = val);
  }
}
