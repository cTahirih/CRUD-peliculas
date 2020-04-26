import { TestBed } from '@angular/core/testing';

import { ListUserService } from './list-user.service';

describe('ListUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListUserService = TestBed.get(ListUserService);
    expect(service).toBeTruthy();
  });
});
