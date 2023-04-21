import { Component, OnInit } from '@angular/core';
import { BlogsService } from './services/blogs.service';
import { NullableString } from './types';

@Component({
  selector: 'lrxjs-root',
  host: {
    "class": "app"
  },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: NullableString = "";
  content: NullableString = "";

  constructor(private blogsService: BlogsService) { }

  ngOnInit(): void {
    this.blogsService.onContentChange
      .subscribe(content => {
        this.title = this.blogsService.title;
        this.content = content;
      });
  } 
}
