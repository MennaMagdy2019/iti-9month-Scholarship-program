import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustdirective]'
})
export class CustdirectiveDirective {

  constructor(private myRef:ElementRef) {
    console.log(myRef)
    myRef.nativeElement.style.color="red";
   }
   @HostListener('click') click(){
    this.myRef.nativeElement.style.color=this.color;
   }

   @Input('appCustdirective') color :any
}
