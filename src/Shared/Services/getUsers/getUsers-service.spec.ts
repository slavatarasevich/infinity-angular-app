import { TestBed } from '@angular/core/testing';

import { GetUsersService } from './getUsers-service';

describe('GetUsersService', () => {
  let service: GetUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
