import { Component, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs';
import { BlogsService } from 'src/app/services/blogs.service';
import { TreeViewNode } from 'src/app/types';
import { TreeViewComponent } from 'src/app/ui-components/tree-view/tree-view.component';

@Component({
  selector: 'lrxjs-sidebar',
  host: {
    "class": "sidebar",
  },
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  nodes: TreeViewNode[] = [];

  @ViewChild('treeView') treeView?: TreeViewComponent;

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getAll()
      .subscribe(val => this.nodes = val ?? []);
  }

  ngAfterViewInit() {
    this.treeView?.onNodeClick
      .pipe(switchMap(({id, value}) => {
        this.blogsService.title = value;
        return this.blogsService.getContent(id);
      }))
      .subscribe(content => this.blogsService.content = content);
  }
}
