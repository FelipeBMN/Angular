import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueIce]' // Pode ser alterado sem nenhuma complicação 
})
export class BlueIceDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#1e90ff'
  }

}
