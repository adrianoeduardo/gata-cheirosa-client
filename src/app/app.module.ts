import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DiretivasMaterializeModule} from './diretivas/diretivas-materialize/diretivas-materialize.module';

//Módulos criados no projeto
import { MenuPrincipalModule } from './components/menu-principal/menu-principal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiretivasMaterializeModule,
    MenuPrincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
