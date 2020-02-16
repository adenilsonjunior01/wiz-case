import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-acompanhante',
  templateUrl: './dados-acompanhante.component.html',
  styleUrls: ['./dados-acompanhante.component.css']
})
export class DadosAcompanhanteComponent implements OnInit {
  formAcompanhanter: FormGroup;
  public maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,];
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formAcompanhanter = this.fb.group({
      primeiroNome: [null, Validators.required],
      segundoNome: [null, Validators.required],
      nuCpf: [null, Validators.required],
      dtNascimento: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

}
