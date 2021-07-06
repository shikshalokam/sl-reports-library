import { TestBed } from '@angular/core/testing';

import { SlReportsLibraryService } from './sl-reports-library.service';

describe('SlReportsLibraryService', () => {
  let service: SlReportsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlReportsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
