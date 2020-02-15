import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-dados-entrega',
  templateUrl: './dados-entrega.component.html',
  styleUrls: ['./dados-entrega.component.css']
})
export class DadosEntregaComponent implements OnInit {

  formDadosEntrega: FormGroup;
  pais: any[] = [
    { value: '<18', label: 'Under 18' },
    { value: '18', label: '18' },
    { value: '>18', label: 'More than 18' },
  ];
  estados: [
    { value: '<18', label: 'Under 18' },
    { value: '18', label: '18' },
    { value: '>18', label: 'More than 18' },
  ];

  constructor(
    private fb: FormBuilder,
    private config: NgSelectConfig
  ) {
    this.config.notFoundText = 'Sem registros';
  }

  ngOnInit() {
    this.formDadosEntrega = this.fb.group({
      cep: [null, Validators.required],
      endereco: [null, Validators.required],
      pais: [null, Validators.required],
      estado: [null, Validators.required],
      cidade: [null, Validators.required],
      telefone: [null, Validators.required]
    });
  }

  public getDadosEntrega(cep: any): void {

  }

}
