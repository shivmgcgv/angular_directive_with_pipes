import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class ColorDirective {

  constructor(public renderer: Renderer, public el: ElementRef) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', 'blue');    
    this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'line-through');    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
      this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');    
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');
      this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'overline');    
    }
  }
}
