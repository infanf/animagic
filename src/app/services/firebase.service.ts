import { Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentReference,
  Firestore,
  QueryFieldFilterConstraint,
} from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { AnimagicEvent, Location } from '@models/event';
import { Calendar } from '@models/calendar';
import { AuthService } from './auth.service';
import { User } from '@angular/fire/auth';

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
  private _user: User | null = null;

  constructor(public firestore: Firestore, private auth: AuthService) {
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
    this.auth.user$.subscribe((user) => {
      console.debug('User', user);
      this._user = user;
      this.getCalendarEvents();
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
    this.updateCalendarEvents();
  }

  set showMyEvents(showMyEvents: boolean) {
    this.showMyEvents$.next(showMyEvents);
  }

  async updateEvents() {
    const { collection, collectionData, query, where, documentId } =
      await import('@angular/fire/firestore');
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
    event.forEach(async (e) => {
      const { start, end, title, description, location } = e;
      const { addDoc, collection } = await import('@angular/fire/firestore');
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

  private async createCalendar(uid: string) {
    const { addDoc, collection, getDoc } = await import(
      '@angular/fire/firestore'
    );
    const itemCollection = collection(
      this.firestore,
      'calendars'
    ) as CollectionReference<Calendar>;
    const calendarReference = await addDoc(itemCollection, {
      uid,
      events: [],
    });
    return (await getDoc(calendarReference)).data();
  }

  async getCalendar(uid: string) {
    const { collection, collectionData, query, where } = await import(
      '@angular/fire/firestore'
    );
    const itemCollection = collection(
      this.firestore,
      'calendars'
    ) as CollectionReference<Calendar>;
    const q = query(itemCollection, where('uid', '==', uid));
    const collectionData$ = collectionData(q, { idField: 'id' });
    const calendars = await new Promise<Calendar[]>((r) => {
      collectionData$.subscribe((collection) => {
        r(collection);
      });
    });
    if (!calendars?.length) {
      return this.createCalendar(uid);
    }
    return calendars[0];
  }

  async getCalendarEvents() {
    if (!this._user) {
      return;
    }
    const { uid } = this._user;
    const calendar = await this.getCalendar(uid);
    if (!calendar) {
      return;
    }
    const { events } = calendar;
    this.myEvents$.next(events);
  }

  async updateCalendarEvents() {
    if (!this._user) {
      return;
    }
    const { uid } = this._user;
    const calendar = await this.getCalendar(uid);
    if (!calendar) {
      return;
    }
    const { updateDoc, doc } = await import('@angular/fire/firestore');
    const itemDoc = doc(
      this.firestore,
      `calendars/${calendar.id}`
    ) as DocumentReference<Partial<Calendar>>;
    await updateDoc(itemDoc, {
      events: this._myEvents,
    });
  }
}
