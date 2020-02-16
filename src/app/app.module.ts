import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { DadosPessoaisComponent } from './main/components/dados-pessoais/dados-pessoais.component';
import { DadosEntregaComponent } from './main/components/dados-entrega/dados-entrega.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { DadosFilmeComponent } from './main/components/dados-filme/dados-filme.component';
import { DadosAcompanhanteComponent } from './main/components/dados-acompanhante/dados-acompanhante.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';

defineLocale('de', deLocale);
registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    DadosPessoaisComponent,
    DadosEntregaComponent,
    DadosFilmeComponent,
    DadosAcompanhanteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TextMaskModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent],
  exports: [
    DadosPessoaisComponent,
    DadosEntregaComponent
  ]
})
export class AppModule { }
