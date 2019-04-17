import { TestBed } from '@angular/core/testing';

import { ClientAPIService } from './client-api.service';

describe('ClientAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientAPIService = TestBed.get(ClientAPIService);
    expect(service).toBeTruthy();
  });
});
