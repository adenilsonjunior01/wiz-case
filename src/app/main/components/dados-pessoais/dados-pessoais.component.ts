import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  formDadosPessoais: FormGroup;
  checked = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formDadosPessoais = this.fb.group({
      primeiroNome: [null, Validators.required],
      segundoNome: [null, Validators.required],
      nuCpf: [null, Validators.required],
      dtNascimento: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

    });
  }

  public click(event) {
    this.checked = !event;
    console.log(this.checked);
  }
}
