import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnTreeViewNodeClickParams, TreeViewNode } from 'src/app/types';

@Component({
  selector: 'lrxjs-tree-view',
  host: {
    "class": "tree-view",
  },
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {
  @Input() treeTitle?: string;
  @Input() activeNode?: string;
  _nodes: Array<TreeViewNode> = [];
  @Input()
  get nodes() {
    return this._nodes
  }
  set nodes(val: Array<TreeViewNode>) {
    this._nodes = val;

    // Active node
    if (this.activeNode) {
      this._nodes.forEach(node => {
        this.getLeaf(node, this.activeNode!);
      });
    }
  }

  @Output() onNodeClick = new EventEmitter<OnTreeViewNodeClickParams>();
  _onNodeClick(id: string, value: string) {
    this.activeNode = value;
    this.onNodeClick.emit({id, value});
  }

  private getLeaf(currentNode: TreeViewNode, text: string): boolean | undefined {
    if (currentNode.text == text) {
      this.onNodeClick.emit({id: currentNode.contentId!, value: currentNode.text})
      currentNode.isOpened = true;
    } else {
      currentNode.children?.every(childNode => {
        currentNode.isOpened = this.getLeaf(childNode, text);
        return !currentNode.isOpened;
      });
    }

    return currentNode.isOpened;
  }

  onToggle(node: TreeViewNode) {
    node.isOpened = !node.isOpened;
  }
}
