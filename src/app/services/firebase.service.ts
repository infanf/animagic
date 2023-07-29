import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  QueryFieldFilterConstraint,
} from '@angular/fire/firestore';
import { Observable, Subject, map } from 'rxjs';
import { AnimagicEvent, Location } from '@models/event';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  events$: Subject<AnimagicEvent[]> = new Subject<AnimagicEvent[]>();
  locations$: Subject<Location[]> = new Subject<Location[]>();
  private _locations: Location[] = [];
  myEvents$: Subject<string[]> = new Subject<string[]>();
  private _myEvents: string[] = [];
  showMyEvents$: Subject<boolean> = new Subject<boolean>();
  private _showMyEvents = false;

  constructor(public firestore: Firestore) {
    this.locations$.asObservable().subscribe((locations) => {
      this._locations = locations;
      this.updateEvents();
    });
    this.myEvents$.asObservable().subscribe((myEvents) => {
      this._myEvents = myEvents;
      this.updateEvents();
    });
    this.showMyEvents$.asObservable().subscribe((showMyEvents) => {
      this._showMyEvents = showMyEvents;
      this.updateEvents();
    });
    this.updateEvents();
  }

  set toggleLocation(locations: Location) {
    if (this._locations.includes(locations)) {
      this._locations = this._locations.filter((e) => e !== locations);
    } else {
      this._locations.push(locations);
    }
    this.locations$.next(this._locations);
  }

  set myEventsToggle(myEvents: string) {
    if (this._myEvents.includes(myEvents)) {
      this._myEvents = this._myEvents.filter((e) => e !== myEvents);
    } else {
      this._myEvents.push(myEvents);
    }
    this.myEvents$.next(this._myEvents);
  }

  set showMyEvents(showMyEvents: boolean) {
    this.showMyEvents$.next(showMyEvents);
  }

  updateEvents() {
    const { collection, collectionData, query, where, documentId } =
      require('@angular/fire/firestore') as typeof import('@angular/fire/firestore');
    const itemCollection = collection(
      this.firestore,
      'events'
    ) as CollectionReference<AnimagicEvent>;
    console.debug({
      locations: this._locations,
      myEvents: this._myEvents,
      showMyEvents: this._showMyEvents,
    });
    const queries: QueryFieldFilterConstraint[] = [];
    if (this._locations?.length) {
      queries.push(where('location', 'in', this._locations));
    }
    if (this._myEvents?.length && this._showMyEvents) {
      queries.push(where(documentId(), 'in', this._myEvents));
    }
    const q = queries.length
      ? query(itemCollection, ...queries)
      : itemCollection;
    collectionData(q, { idField: 'id' }).subscribe((collection) => {
      this.events$.next(collection);
    });
  }

  addEvents(event: AnimagicEvent[]) {
    event.forEach((e) => {
      this.addEvent(e);
    });
  }

  async addEvent(event: AnimagicEvent) {
    const { start, end, title, description, location } = event;
    const { addDoc, collection } =
      require('@angular/fire/firestore') as typeof import('@angular/fire/firestore');
    const itemCollection = collection(
      this.firestore,
      'events'
    ) as CollectionReference<AnimagicEvent>;
    const newEvent = await addDoc(itemCollection, {
      start,
      end,
      title,
      description,
      location,
    });
    event.id = newEvent.id;
    return newEvent.id;
  }

  async updateEvent(event: AnimagicEvent) {
    if (!event.id) {
      event.id = await this.addEvent(event);
    }
    const { start, end, title, description, location, id } = event;
    const { doc, setDoc } =
      require('@angular/fire/firestore') as typeof import('@angular/fire/firestore');
    const itemDoc = doc(this.firestore, 'events', id);
    setDoc(itemDoc, {
      start,
      end,
      title,
      description,
      location,
    });
  }
}
