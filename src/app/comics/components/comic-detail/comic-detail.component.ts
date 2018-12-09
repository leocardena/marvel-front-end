import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '@marvel-app/comics/models/comic.model';

@Component({
  selector: 'marvel-app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss']
})
export class ComicDetailComponent implements OnInit {

  @Input() comic: Comic;

  constructor() { }

  ngOnInit() {
  }

}
