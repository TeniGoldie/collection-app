import { Collectable } from './collectable.module';

export class CollectableService {

  private collectables: Collectable[] = [
    { description : 'A very rare copy of "jQuery for Dummies"' , type: 'Book'},
    { description : 'A very first letter about nothing"' , type: 'Piece of Paper'},
    { description : 'A photp with nothing special"' , type: 'Photo'},
    { description : 'A box with some stuff"' , type: 'Garbage'}
  ];

  private collection: Collectable[] = [];

  getCollactables () {
    return this.collectables;
  }

  getCollection () {
    return this.collection;
  }

  addToCollection(item: Collectable) {
    if (this.collection.indexOf(item) !== -1) {
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection (item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}
