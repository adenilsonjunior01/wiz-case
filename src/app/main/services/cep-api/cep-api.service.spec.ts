import { TestBed } from '@angular/core/testing';

import { CepApiService } from './cep-api.service';

describe('CepApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CepApiService = TestBed.get(CepApiService);
    expect(service).toBeTruthy();
  });
});
