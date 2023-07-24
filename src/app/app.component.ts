import { Component, inject } from '@angular/core';
import { CollectionReference, Firestore, Timestamp, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'animagic';
  items$: Observable<AnimagicEvent[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'events') as CollectionReference<AnimagicEvent>;
    this.items$ = collectionData(itemCollection);
  }
}

export interface AnimagicEvent {
  start: Timestamp;
  end: Timestamp;
  title: string;
  description: string;
  location: string;
}
