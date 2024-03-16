import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [	
    AppComponent,
      MenuComponent,
      MedicamentosComponent,
      InicioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
