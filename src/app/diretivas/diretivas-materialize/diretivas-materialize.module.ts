import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { SidenavDirective } from './sidenav.directive';



@NgModule({
  declarations: [DropdownDirective, SidenavDirective],
  imports: [
    CommonModule
  ],
  exports:[
    DropdownDirective,
    SidenavDirective
  ]
})
export class DiretivasMaterializeModule { }
