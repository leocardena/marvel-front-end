import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Comic } from '@marvel-app/comics/models/comic.model';
import * as fromComics from '@marvel-app/comics/store/reducers';
import {  FindComicPageActions } from '@marvel-app/comics/store/actions';

@Component({
  selector: 'marvel-app-find-comic-page',
  templateUrl: './find-comic-page.component.html',
  styleUrls: ['./find-comic-page.component.scss']
})
export class FindComicPageComponent implements OnInit {
  comics$: Observable<Comic[]>;

  constructor(private store: Store<fromComics.State>) {
    this.comics$ = store.pipe(select(fromComics.getSearchResults));
  }COr

  ngOnInit() {
    this.store.dispatch(new FindComicPageActions.SearchComics());
  }

}
