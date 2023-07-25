import { Injectable } from '@angular/core';
import { CollectionReference, Firestore } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { AnimagicEvent } from '@models/event';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  events$: Observable<AnimagicEvent[]>;
  firestore: Firestore;

  constructor() {
    const { inject } =
      require('@angular/core') as typeof import('@angular/core');
    const { collection, collectionData, Firestore } =
      require('@angular/fire/firestore') as typeof import('@angular/fire/firestore');
    this.firestore = inject(Firestore);
    const itemCollection = collection(
      this.firestore,
      'events'
    ) as CollectionReference<AnimagicEvent>;
    this.events$ = collectionData(itemCollection);
  }

  get events() {
    // sort by start date
    return this.events$.pipe(
      map((events) => events.sort((a, b) => a.start.seconds - b.start.seconds))
    );
  }

  addEvents(event: AnimagicEvent[]) {
    event.forEach((e) => {
      const { start, end, title, description, location } = e;
      const { addDoc, collection } =
        require('@angular/fire/firestore') as typeof import('@angular/fire/firestore');
      const itemCollection = collection(
        this.firestore,
        'events'
      ) as CollectionReference<AnimagicEvent>;
      addDoc(itemCollection, {
        start,
        end,
        title,
        description,
        location,
      });
    });
  }
}
