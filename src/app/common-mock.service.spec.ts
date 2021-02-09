import { TestBed } from '@angular/core/testing';

import { CommonMockService } from './common-mock.service';

describe('CommonMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonMockService = TestBed.get(CommonMockService);
    expect(service).toBeTruthy();
  });
});
