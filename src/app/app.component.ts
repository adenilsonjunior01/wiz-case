import { Component, ViewChild, OnInit } from '@angular/core';
import { DadosPessoaisComponent } from './main/components/dados-pessoais/dados-pessoais.component';
import { DadosEntregaComponent } from './main/components/dados-entrega/dados-entrega.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(DadosPessoaisComponent, {static: false}) dadosPessoais;
  @ViewChild(DadosEntregaComponent, {static: false}) dadosEntrega;

  constructor() {}

  ngOnInit() {
  }

  public submit() {
    if (this.dadosPessoais.formDadosPessoais.valid && this.dadosEntrega.formDadosEntrega.valid ) {

    } else {
      if (this.dadosPessoais.formDadosPessoais.invalid) {
        Object.keys(this.dadosPessoais.formDadosPessoais.controls).forEach(campo => {
          const controle = this.dadosPessoais.formDadosPessoais.get(campo);
          controle.markAsTouched();
        });
      }
        if (this.dadosEntrega.formDadosEntrega.invalid) {
          Object.keys(this.dadosEntrega.formDadosEntrega.controls).forEach(campo => {
            const controle = this.dadosEntrega.formDadosEntrega.get(campo);
            controle.markAsTouched();
          });
      }
    }
  }

}
