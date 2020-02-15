import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DadosPessoaisComponent } from './main/components/dados-pessoais/dados-pessoais.component';
import { DadosEntregaComponent } from './main/components/dados-entrega/dados-entrega.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    DadosPessoaisComponent,
    DadosEntregaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
