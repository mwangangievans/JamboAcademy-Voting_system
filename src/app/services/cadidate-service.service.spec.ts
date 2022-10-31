import { TestBed } from '@angular/core/testing';

import { CadidateServiceService } from './cadidate-service.service';

describe('CadidateServiceService', () => {
  let service: CadidateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadidateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
