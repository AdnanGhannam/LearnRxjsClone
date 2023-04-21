import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Direction } from 'src/app/types';

@Component({
  selector: 'lrxjs-menu',
  host: {
    "class": "menu",
  },
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  @ViewChild('content') content?: ElementRef<HTMLDivElement>;
  @Input() direction: Direction = "BottomRight";
  isOpened: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    document.addEventListener('click', e => this.onOutside(e));
  }

  ngAfterViewInit() {
    window.addEventListener('resize', e => this.onOverflow(e))
    window.addEventListener('scroll', e => this.onOverflow(e))
  }

  /**
   * To close menu when clicks outside
   * @param event click event
   */
  onOutside(event: Event) {
    const isClickInside = this.elementRef.nativeElement.contains(event.target);

    if (!isClickInside) {
      this.isOpened = false;
    }
  }

  /**
   * when the menu overflows
   * @param event window resize event
   */
  onOverflow(event: Event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const menuContent = this.content?.nativeElement;
    if (menuContent) {
      // const { x, y, width, height } = menuContent.getBoundingClientRect();
      // console.log(windowWidth, windowHeight)

      // // TODO fix menu
      // // Default value
      // let dir = this.direction;
      // // X
      // if ((x + width) > windowWidth) {
      //   dir = dir.replace("Right", "Left") as Direction;
      // } else if ((x + width) <= windowWidth) {
      //   dir = dir.replace("Left", "Right") as Direction;
      // }
      // // Y
      // if ((y + height) > windowHeight) {
      //   dir = dir.replace("Bottom", "Top") as Direction;
      // } else if ((y + height) <= windowHeight) {
      //   dir = dir.replace("Top", "Bottom") as Direction;
      // }
      // this.direction = dir;
    }
  }

  /**
   * Toggle opened
   */
  onToggle() {
    this.isOpened = !this.isOpened;
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', e => this.onOutside(e));
    window.removeEventListener('resize', e => this.onOverflow(e));
    window.removeEventListener('scroll', e => this.onOverflow(e));
  }
}
