import { TestBed } from '@angular/core/testing';

import { ProfileInterceptor } from './profile.interceptor';

describe('ProfileInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProfileInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ProfileInterceptor = TestBed.inject(ProfileInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
