import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageHeaderComponent } from './page/page-header/page-header.component';
import { PageFooterComponent } from './page/page-footer/page-footer.component';
import { UIComponentsModule } from '../ui-components/ui-components.module';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs'
import 'prismjs/components/prism-typescript';
import { LogoComponent } from './logo/logo.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContainerComponent,
    PageComponent,
    SidebarComponent,
    PageHeaderComponent,
    PageFooterComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    UIComponentsModule,
    RouterModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    ContainerComponent,
    PageComponent,
    SidebarComponent,
    PageHeaderComponent,
    PageFooterComponent
  ]
})
export class SharedModule { }
