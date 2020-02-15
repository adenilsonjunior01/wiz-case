import { Component, ViewChild } from '@angular/core';
import { DadosPessoaisComponent } from './main/components/dados-pessoais/dados-pessoais.component';
import { DadosEntregaComponent } from './main/components/dados-entrega/dados-entrega.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dadosPessoais', {static: false}) dadosPessoais: DadosPessoaisComponent;
  @ViewChild('dadosEntrega', {static: false}) dadosEntrega: DadosEntregaComponent;

  constructor() {}

}
