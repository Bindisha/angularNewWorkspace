import { TestBed } from '@angular/core/testing';

import { HttpLogInterceptorService } from './http-log-interceptor.service';

describe('HttpLogInterceptorService', () => {
  let service: HttpLogInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpLogInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
