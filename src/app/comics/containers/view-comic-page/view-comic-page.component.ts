import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Comic } from '@marvel-app/comics/models/comic.model';
import * as fromComics from '@marvel-app/comics/store/reducers';
import { Store, select } from '@ngrx/store';
import { ViewComicPageActions } from '@marvel-app/comics/store/actions';

@Component({
  selector: 'marvel-app-view-comic-page',
  templateUrl: './view-comic-page.component.html',
  styleUrls: ['./view-comic-page.component.scss']
})
export class ViewComicPageComponent implements OnInit {

  selectedComic$: Observable<Comic>;

  constructor(private store: Store<fromComics.State>) {
    this.selectedComic$ = this.store.pipe(select(fromComics.getSelectedComicInRouter));
  }

  ngOnInit() {
    this.store.dispatch(new ViewComicPageActions.SearchComic());
  }

  addToCheckout(comic: Comic) {
    this.store.dispatch(new ViewComicPageActions.AddToCheckout(comic));
  }

}
