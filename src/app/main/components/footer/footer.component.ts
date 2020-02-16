import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: any;

  constructor() { }

  ngOnInit() {
    this.year = this.anoAtual();
  }

  private anoAtual() {
    const date = new Date();
    const ano = date.getFullYear();
    return ano;
  }
}
