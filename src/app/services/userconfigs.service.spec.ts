import { TestBed } from '@angular/core/testing';

import { UserconfigsService } from './userconfigs.service';

describe('UserconfigsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserconfigsService = TestBed.get(UserconfigsService);
    expect(service).toBeTruthy();
  });
});
