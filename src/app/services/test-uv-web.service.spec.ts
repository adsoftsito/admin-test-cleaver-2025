import { TestBed } from '@angular/core/testing';

import { TutorialService } from './test-uv-web.service';

describe('TutorialService', () => {
  let service: TutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
