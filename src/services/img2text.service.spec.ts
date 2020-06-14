import { TestBed } from '@angular/core/testing';

import { Img2textService } from './img2text.service';

describe('Img2textService', () => {
  let service: Img2textService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Img2textService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
