import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[zoomer]'
})
export class ZoomerDirective {

  constructor(public renderer: Renderer, public el: ElementRef) { 
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '50%')
  }

  @HostListener('mouseenter') zoomIn() {
    this.zoom(true)
  }

  @HostListener('mouseleave') zoomOut() {
    this.zoom(false)
  }

  zoom(flag: boolean) {
    (flag) ? this.renderer.setElementStyle(this.el.nativeElement, 'width', '100%') : this.renderer.setElementStyle(this.el.nativeElement, 'width', '50%');
  }

}
