import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ComicEffects } from './comic.effects';

describe('ComicEffectsEffects', () => {
  const actions$: Observable<any>;
  let effects: ComicEffectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComicEffectsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ComicEffectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
