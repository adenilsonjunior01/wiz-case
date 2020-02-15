import { TestBed } from '@angular/core/testing';

import { MoviedbApiService } from './moviedb-api.service';

describe('MoviedbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviedbApiService = TestBed.get(MoviedbApiService);
    expect(service).toBeTruthy();
  });
});
