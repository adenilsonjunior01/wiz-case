import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAcompanhanteComponent } from './dados-acompanhante.component';

describe('DadosAcompanhanteComponent', () => {
  let component: DadosAcompanhanteComponent;
  let fixture: ComponentFixture<DadosAcompanhanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosAcompanhanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAcompanhanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
