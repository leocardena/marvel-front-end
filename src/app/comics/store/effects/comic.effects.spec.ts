import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ComicEffects } from './comic.effects';
import { MarvelComicsService } from '@marvel-app/comics/services/marvel/marvel-comics.service';

xdescribe('ComicEffectsEffects', () => {
  const actions$: Observable<any> = undefined;
  let effects: ComicEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComicEffects,
        MarvelComicsService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ComicEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
