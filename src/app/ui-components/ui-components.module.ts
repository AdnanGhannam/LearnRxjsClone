import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MenuComponent } from './menu/menu.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { LinkComponent } from './link/link.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InputComponent,
    MenuComponent,
    TreeViewComponent,
    LinkComponent,
    NavigationButtonsComponent,
    ButtonComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    InputComponent,
    MenuComponent,
    TreeViewComponent,
    LinkComponent,
    NavigationButtonsComponent,
    ButtonComponent,
    IconButtonComponent
  ]
})
export class UIComponentsModule { }
