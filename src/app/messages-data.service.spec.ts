import { TestBed, inject } from '@angular/core/testing';

import { MessagesDataService } from './messages-data.service';

describe('MessagesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesDataService]
    });
  });

  it('should be created', inject([MessagesDataService], (service: MessagesDataService) => {
    expect(service).toBeTruthy();
  }));
});
