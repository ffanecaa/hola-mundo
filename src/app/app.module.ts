import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { NuevoTestComponent } from './nuevo-test/nuevo-test.component';
import { PeliculasService } from './peliculas.service';

@NgModule({  
  declarations: [
    AppComponent,
    HolaMundoComponent,
    NuevoComponenteComponent,
    NuevoTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
