import { EventEmitter, Injectable } from '@angular/core';
import { NullableString, TreeViewNode } from '../types';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, switchMap } from 'rxjs';
import { getWithId } from '../helpers';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private generatedIds: string[] = [];

  private _title: NullableString = null;
  get title(): NullableString {
    return this._title;
  }
  set title(val: NullableString) {
    this._title = val;
  }

  private _content: NullableString = null;
  get content(): NullableString {
    return this._content;
  }
  set content(val: NullableString) {
    this._content = val;
    this.onContentChange.emit(val);
  }
  onContentChange = new EventEmitter<NullableString>();

  constructor(private db: AngularFireDatabase) { }

  generateMockBlogs() {
    return [
      { 
        text: "Operators",
        contentId: this.generateContentId(),
        children: [
          {
            text: "Combination",
            contentId: this.generateContentId(),
            children: [
              { 
                text: "combineAll",
                contentId: this.generateContentId(),
              },
              { 
                text: "combineLatest",
                contentId: this.generateContentId(),
              },
              { 
                text: "concat",
                contentId: this.generateContentId(),
              },
              { 
                text: "merge",
                contentId: this.generateContentId(),
              },
              { 
                text: "startWith",
                contentId: this.generateContentId(),
              },
              { 
                text: "withLatestFrom",
                contentId: this.generateContentId(),
              },
            ]
          },
          {
            text: "Conditional",
            contentId: this.generateContentId(),
            children: [
              { 
                text: "every",
                contentId: this.generateContentId(),
              },
              { 
                text: "iif",
                contentId: this.generateContentId(),
              },
            ]
          },
          { 
            text: "Creation",
            contentId: this.generateContentId(),
            children: [
              { 
                text: "fromEvent",
                contentId: this.generateContentId(),
              },
              { 
                text: "from",
                contentId: this.generateContentId(),
              },
              { 
                text: "of",
                contentId: this.generateContentId(),
              },
            ]
          },
          {
            text: "Filtering",
            contentId: this.generateContentId(),
            children: [
              { 
                text: "debounceTime",
                contentId: this.generateContentId(),
              },
              { 
                text: "distinctUntilChanged",
                contentId: this.generateContentId(),
              },
              { 
                text: "filter",
                contentId: this.generateContentId(),
              },
              { 
                text: "take",
                contentId: this.generateContentId(),
              },
              { 
                text: "takeUntil",
                contentId: this.generateContentId(),
              },
            ]
          },
          { 
            text: "Full list",
            contentId: this.generateContentId(),
          },
        ]
      },
      {
        text: "Subjects",
        contentId: this.generateContentId(),
        children: [
          { 
            text: "AsyncSubjects",
            contentId: this.generateContentId(),
          },
          { 
            text: "BehaviorSubjects",
            contentId: this.generateContentId(),
          },
          { 
            text: "ReplaySubjects",
            contentId: this.generateContentId(),
          },
          { 
            text: "Subject",
            contentId: this.generateContentId(),
          },
        ]
      }
    ];
  }

  private generateContentId() {
    const id = this.db.createPushId();
    this.generatedIds.push(id);
    return id;
  }

  postMockContent(): void {
    this.generatedIds.forEach((id, index) => {
      this.db.database.ref("content").update({ [id]: "mockContent" + index})
    });
  }

  post(nodes: TreeViewNode[]) {
    const dbBlogs = 
      nodes
        .map(node => {
          const id = this.db.createPushId();
          return {[id]: node};
        })
        .reduce((acc, obj) => {
          return { ...acc, ...obj };
        });

    this.db.database.ref("blogs").update(dbBlogs);
  }

  getAll() {
    return this.db.list<any>("/blogs")
      .snapshotChanges()
      .pipe(map(changes => changes.map(getWithId)));
  }

  getRoot(id: string) {
    return this.db.object<any>(`blogs/${id}`)
      .snapshotChanges()
      .pipe(map(getWithId));
  }

  getContent(id: NullableString) {
    return this.db.object<string>(`content/${id}`)
      .valueChanges();
  }
}
