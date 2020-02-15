import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosFilmeComponent } from './dados-filme.component';

describe('DadosFilmeComponent', () => {
  let component: DadosFilmeComponent;
  let fixture: ComponentFixture<DadosFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
