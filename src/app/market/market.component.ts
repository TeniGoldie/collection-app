import { Component, OnInit } from '@angular/core';

import { CollectableService } from '../shared/collectable.service';
import {Collectable} from '../shared/collectable.module';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html'
})
export class MarketComponent implements OnInit {
  collectables: Collectable[] = [];

  onAddToCollection(item: Collectable) {
    this.collectableService.addToCollection(item);

  }
  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectables = this.collectableService.getCollactables();
  }

}
