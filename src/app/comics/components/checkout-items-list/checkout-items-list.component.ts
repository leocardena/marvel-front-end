import { Component, Input } from '@angular/core';

import { Comic } from '@marvel-app/comics/models/comic.model';

@Component({
  selector: 'marvel-app-checkout-items-list',
  templateUrl: './checkout-items-list.component.html',
  styleUrls: ['./checkout-items-list.component.scss']
})
export class CheckoutItemsListComponent {
  @Input() comics: Comic[];
}
