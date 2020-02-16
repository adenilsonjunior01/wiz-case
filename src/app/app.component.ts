import { Component, ViewChild, OnInit } from '@angular/core';
import { DadosPessoaisComponent } from './main/components/dados-pessoais/dados-pessoais.component';
import { DadosEntregaComponent } from './main/components/dados-entrega/dados-entrega.component';
import { DadosAcompanhanteComponent } from './main/components/dados-acompanhante/dados-acompanhante.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from './main/services/cadastro/cadastro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(DadosPessoaisComponent, {static: false}) dadosPessoais;
  @ViewChild(DadosEntregaComponent, {static: false}) dadosEntrega;
  @ViewChild(DadosAcompanhanteComponent, {static: false}) dadosAcompanhante;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CadastroService) {}

  ngOnInit() {
    this.form = this.fb.group({
      dadosPessoais: [],
      dadosEntrega: [],
      dadosAcompanhate: [],
      acompanhante: [false]
    });
  }

  public verificaDados() {
    if (this.dadosPessoais.formDadosPessoais.valid && this.dadosEntrega.formDadosEntrega.valid ) {
      if (this.form.value.acompanhante === true && this.dadosAcompanhante.formAcompanhanter.valid) {
        const cpf = this.dadosAcompanhante.formAcompanhanter.value.nuCpf.replace(/\D/g, '');
        this.dadosAcompanhante.formAcompanhanter.get('nuCpf').setValue(cpf);
        this.form.get('dadosAcompanhate').setValue(this.dadosAcompanhante.formAcompanhanter.value);
      } else if (this.form.value.acompanhante === true) {
        if (this.dadosAcompanhante.formAcompanhanter.invalid) {
          Object.keys(this.dadosAcompanhante.formAcompanhanter.controls).forEach(campo => {
            const controle = this.dadosAcompanhante.formAcompanhanter.get(campo);
            controle.markAsTouched();
          });
        }
      }
      const cpf = this.dadosPessoais.formDadosPessoais.value.nuCpf.replace(/\D/g, '');
      this.dadosPessoais.formDadosPessoais.get('nuCpf').setValue(cpf);
      this.form.get('dadosPessoais').setValue(this.dadosPessoais.formDadosPessoais.value);
      this.form.get('dadosEntrega').setValue(this.dadosEntrega.formDadosEntrega.value);
      this.submitValues();
      console.log(this.form.value);
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

  private submitValues() {
    const valuesSubmit = Object.assign({}, this.form.value);
    delete(valuesSubmit.acompanhante);
    this.service.submitCaddastroReserva(valuesSubmit).subscribe(
      response => console.log('Cadastro Realizado com Sucesso!'),
      err => {
        if (err.status === 400) {
          return console.log('Formulário inválido');
        }
      }
    );
  }

}
