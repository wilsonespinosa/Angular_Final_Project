import { TestBed, inject } from '@angular/core/testing';

import { AttendeesService } from './attendees.service';

describe('AttendeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendeesService]
    });
  });

  it('should be created', inject([AttendeesService], (service: AttendeesService) => {
    expect(service).toBeTruthy();
  }));
});
