import { Comic } from '@marvel-app/comics/models/comic.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'marvel-app-comics-preview-list',
  templateUrl: './comics-preview-list.component.html',
  styleUrls: ['./comics-preview-list.component.scss']
})
export class ComicsPreviewListComponent {
  @Input() comics: Comic[];
  @Input() isLoading: boolean;
}
