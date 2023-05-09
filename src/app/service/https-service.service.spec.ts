import { TestBed } from '@angular/core/testing';

import { HttpsGenericService } from './https-service.service';

describe('HttpsServiceService', () => {
  let service: HttpsGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpsGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
