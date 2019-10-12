import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPrincipalComponent } from './menu-principal.component';
import { MenuPrincipalListaComponent } from './menu-principal-lista/menu-principal-lista.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
  declarations: [MenuPrincipalComponent, MenuPrincipalListaComponent, SubMenuComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MenuPrincipalComponent
  ]
})
export class MenuPrincipalModule { }
