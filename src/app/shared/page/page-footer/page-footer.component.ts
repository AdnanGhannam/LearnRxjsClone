import { Component, Input } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';
import { NullableString, TreeViewNode } from 'src/app/types';

@Component({
  selector: 'lrxjs-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent {
  private _current: NullableString = null;
  @Input() 
  get current() {
    return this._current;
  }
  set current(val: NullableString) {
    this._current = val;
    this.prevNext = this.getPrevNext(this._current);
  }

  nodes: TreeViewNode[] = [];
  nodesArray: TreeViewNode[] = [];
  prevNext: Array<TreeViewNode | undefined> = [];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getAll()
      .subscribe(val => {
        this.nodes = val ?? [];
        this.TreeToArray(this.nodes, this.nodesArray);

        if (this.current){
          this.prevNext = this.getPrevNext(this.current);
        }
      });
  }

  private TreeToArray(nodes: TreeViewNode[], array: any[] = []) {
    nodes.forEach(node => {
      const children = node.children;
      delete node.children;
      array.push(node)

      if (children) {
        this.TreeToArray(children, array)
      }
    })
  }

  getPrevNext(nodeText: NullableString) {
    const node = this.nodesArray.find(n => n.text == nodeText);
    
    if (node) {
      const index = this.nodesArray.indexOf(node);

      if (index == 0) {
        return [undefined, this.nodesArray[index + 1]];
      }

      if (index == this.nodesArray.length) {
        return [this.nodesArray[index - 1], undefined];
      }

      return [this.nodesArray[index - 1], this.nodesArray[index + 1]];
    }

    return [undefined, undefined];
  }
}
