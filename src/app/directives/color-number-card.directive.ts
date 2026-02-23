import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorNumberCard]',
  standalone: true
})
export class ColorNumberCardDirective {

    //el renvoie une ref a un elem card
    constructor(private el: ElementRef) { 
      this.setColor('yellow');
    }
  
    @HostListener('mouseenter') onMouseEnter(){
      this.setColor('blue')
    }
  
    @HostListener('mouseleave') onMouseLeave(){
      this.setColor('yellow')
    }

  
      private setColor(color:string){
        let colo=`${color}`
        this.el.nativeElement.style.color=colo;
      }
  
}
