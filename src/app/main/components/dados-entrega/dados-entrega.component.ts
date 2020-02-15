import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { CepApiService } from '../../services/cep-api.service';

@Component({
  selector: 'app-dados-entrega',
  templateUrl: './dados-entrega.component.html',
  styleUrls: ['./dados-entrega.component.css']
})
export class DadosEntregaComponent implements OnInit {

  formDadosEntrega: FormGroup;
  loadingCep = false;

  pais: any[] = [
    { value: '<18', label: 'Under 18' },
    { value: '18', label: '18' },
    { value: '>18', label: 'More than 18' },
  ];
  estados: any[];

  constructor(
    private fb: FormBuilder,
    private config: NgSelectConfig,
    private service: CepApiService
  ) {
    this.config.notFoundText = 'Sem registros';
  }

  ngOnInit() {
    this.formDadosEntrega = this.fb.group({
      cep: [null, [Validators.required, Validators.maxLength(8)]],
      endereco: [null, Validators.required],
      pais: [null, Validators.required],
      estado: [null, Validators.required],
      cidade: [null, Validators.required],
      telefone: [null, Validators.required]
    });
  }

  public getDadosEntrega(value: any): void {
    const cep = value.replace(/\D/g, '');
    if (cep !== '') {
      const validCep = /^[0-9]{8}$/;
      if (validCep.test(cep)) {
        this.loadingCep = true;
        this.service.getEnderecoPorCep(cep).subscribe(
          response => {
            this.loadingCep = false;
            this.formDadosEntrega.get('endereco').setValue(response.logradouro);
            this.formDadosEntrega.get('cidade').setValue(response.localidade);
            this.formDadosEntrega.get('estado').setValue(response.uf);
          },
          err => {
            this.loadingCep = false;
          console.log('Erro ao obter dados do Endereço', err);
        });
      }
    }
  }

}
