import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[MSidenav]'
})
export class SidenavDirective implements AfterViewInit {

  constructor(private _el:ElementRef) { }
  options: any;
  ngAfterViewInit(){
    console.log('MSidenav')
    let elems = this._el.nativeElement.querySelectorAll('.sidenav');
    let instance = M.Sidenav.init(elems, this.options);
    console.log(instance)
  }
}
