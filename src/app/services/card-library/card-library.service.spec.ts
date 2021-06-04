import { TestBed } from '@angular/core/testing';

import { CardLibraryService } from './card-library.service';

describe('CardLibraryService', () => {
  let service: CardLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
