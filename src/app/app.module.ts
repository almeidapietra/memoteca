import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  declarations: [ //todos os componentes aqui
    AppComponent, HomeComponent, CabecalhoComponent, RodapeComponent
  ],
  imports: [ //modulos importados 
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //classes de serviços
  bootstrap: [AppComponent] //indica qual componete que será primeiramente renderizado nessa aplicação
})
export class AppModule { } 
