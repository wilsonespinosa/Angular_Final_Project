import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTopScore]'
})
export class TopScoreDirective {
@Input() highlightColor: string;

    constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
     this.hover('showContent');
   }

   @HostListener('mouseleave') onMouseLeave() {
     this.hover('');
   }

   hover(state: string) {
     if ( Number(this.highlightColor) >= 3 ) {
      console.log( this.highlightColor);
      this.element.nativeElement.className = state;
     }
   }

}
