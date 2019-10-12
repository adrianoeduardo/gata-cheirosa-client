import { Directive, ElementRef, AfterViewInit, Input} from '@angular/core';

@Directive({
  selector: '[MDropdown]'
})
export class DropdownDirective implements AfterViewInit{

  constructor(private _el:ElementRef) { }
  @Input() options: any = null;
  ngAfterViewInit(){
    console.log('MDropdown =>', this._el)
    if(!this.options){
      this.options = {hover: true}
    }
    let elems = this._el.nativeElement.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, this.options);
  }

}
