import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { sistemaResolver } from './sistema.resolver';

describe('sistemaResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => sistemaResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
