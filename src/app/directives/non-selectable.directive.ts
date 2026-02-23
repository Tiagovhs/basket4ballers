import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNonSelectable]',
  standalone: true
})
export class NonSelectableDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.el.nativeElement, 'user-select', 'none');
   }

}
