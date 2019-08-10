import { TestBed } from '@angular/core/testing';

import { GithubFinderService } from './github-finder.service';

describe('GithubFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubFinderService = TestBed.get(GithubFinderService);
    expect(service).toBeTruthy();
  });
});
