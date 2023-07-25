import { Component } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { AnimagicEvent } from '@models/event';
import { FirebaseService } from '@services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'animagic';
  events$: Observable<AnimagicEvent[]>;

  constructor(private firebase: FirebaseService) {
    this.events$ = firebase.events;
  }

  addEvent() {
    const events = [
      {
        start: '2023-08-04T15:30:00+02:00',
        end: '2023-08-04T16:30:00+02:00',
        title: 'peppermint anime X AKIBA PASS-Panel',
        description: 'Infos zum neuen Anime- und Streaming-Line-up',
        location: 'Kino 1',
      },
      {
        start: '2023-08-04T17:00:00+02:00',
        end: '2023-08-04T18:00:00+02:00',
        title: 'NANA Special-Panel',
        description: 'mit den Deutschen Synchronsprechern von NANA',
        location: 'Kino 1',
      },
      {
        start: '2023-08-04T18:15:00+02:00',
        end: '2023-08-04T18:45:00+02:00',
        title: 'NANA',
        description: 'Ep. 1, Dt., ca. 25 Min., FSK: 12',
        location: 'Kino 1',
      },
      {
        start: '2023-08-04T19:00:00+02:00',
        end: '2023-08-04T20:30:00+02:00',
        title:
          'Fate/Grand Order Final Singularity Grand Temple of Time: Solomon',
        description: 'Dt., ca. 94 Min., FSK: 12',
        location: 'Kino 1',
      },
      {
        start: '2023-08-04T20:45:00+02:00',
        end: '2023-08-04T22:00:00+02:00',
        title: 'Rurouni Kenshin',
        description: 'Ep 1–3, OmU, ca. 75 Min., FSK: 12',
        location: 'Kino 1',
      },
      {
        start: '2023-08-04T22:15:00+02:00',
        end: '2023-08-04T23:15:00+02:00',
        title: 'The Eminence in Shadow',
        description: 'Ep. 1+2, Dt., ca. 50 Min., FSK: 16',
        location: 'Kino 1',
      },
      {
        start: '2023-08-04T23:30:00+02:00',
        end: '2023-08-05T00:30:00+02:00',
        title: 'Full Dive',
        description: 'Ep. 1+2, Dt., ca. 50 Min., FSK: 16',
        location: 'Kino 1',
      },
      {
        start: '2023-08-05T11:00:00+02:00',
        end: '2023-08-05T12:45:00+02:00',
        title: 'Free! the Final Stroke – the Second Volume',
        description: 'Dt., ca. 105 Min., FSK: 12',
        location: 'Kino 1',
      },
      {
        start: '2023-08-05T13:00:00+02:00',
        end: '2023-08-05T14:15:00+02:00',
        title:
          'The Ancient Magus Bride – The Boy from the West and the Night of Blue Storm OVAs',
        description: 'Ep. 1–3, Dt., ca. 69 Min., FSK: 12',
        location: 'Kino 1',
      },
      {
        start: '2023-08-05T14:45:00+02:00',
        end: '2023-08-05T15:30:00+02:00',
        title: 'Miss Kobayashi‘s Dragon Maid S',
        description: 'mit Begrüßung von Yuuki Kuwahara und Maria Naganawa',
        location: 'Kino 1',
      },
      {
        start: '2023-08-05T16:00:00+02:00',
        end: '2023-08-05T16:45:00+02:00',
        title: 'ProSieben MAXX – 10 Jahre Home of Anime',
        description: 'Exklusive Einblicke Hinter die Senderkulissen',
        location: 'Kino 1',
      },
      {
        start: '2023-08-05T17:15:00+02:00',
        end: '2023-08-05T17:45:00+02:00',
        title: 'BLUELOCK',
        description: 'Ep. 1, Dt., ca. 25 Min., FSK: 12',
        location: 'Kino 1',
      },
      {
        start: '2023-08-05T18:00:00+02:00',
        end: '2023-08-05T19:45:00+02:00',
        title: 'Your Name. – Gestern, heute und für immer',
        description: 'Dt., ca. 106 Min., FSK: 6',
        location: 'Kino 1',
      },
      {
        start: '2023-08-05T20:00:00+02:00',
        end: '2023-08-05T21:45:00+02:00',
        title: 'Weathering With You – Das Mädchen, das die Sonne berührte',
        description: 'Dt., ca. 113 Min., FSK: 6',
        location: 'Kino 1',
      },
      {
        start: '2023-08-05T22:00:00+02:00',
        end: '2023-08-05T23:30:00+02:00',
        title: '[Oshi No Ko] – [Mein*Star]',
        description: 'mit Begrüßung von Produzent Shimpei Yamashita',
        location: 'Kino 1',
      },
      {
        start: '2023-08-05T23:45:00+02:00',
        end: '2023-08-06T00:45:00+02:00',
        title: 'The Eminence in Shadow',
        description: 'Ep. 1+2, Dt., ca. 50 Min., FSK: 16',
        location: 'Kino 1',
      },
      {
        start: '2023-08-06T11:00:00+02:00',
        end: '2023-08-06T12:00:00+02:00',
        title: 'Meine Arbeit in einem Anime-Studio',
        description: 'Panel mit Ehrengast Franziska van Wulfen',
        location: 'Kino 1',
      },
      {
        start: '2023-08-06T12:30:00+02:00',
        end: '2023-08-06T13:30:00+02:00',
        title: 'AniMoon Publishing: Panel',
        description: 'Infos zum neuen Anime-Line-up',
        location: 'Kino 1',
      },
      {
        start: '2023-08-06T14:00:00+02:00',
        end: '2023-08-06T15:00:00+02:00',
        title: 'Ninotaku-Panel Q&A mit Moderator Nino Kerl',
        description: '',
        location: 'Kino 1',
      },
      {
        start: '2023-08-06T15:30:00+02:00',
        end: '2023-08-06T16:30:00+02:00',
        title: 'KSM-Anime-Panel',
        description: 'Infos zum neuen Anime-Line-up',
        location: 'Kino 1',
      },
      {
        start: '2023-08-06T17:00:00+02:00',
        end: '2023-08-06T18:30:00+02:00',
        title: 'Pompo the Cinephile',
        description: 'Dt., ca. 94 Min., FSK: 12',
        location: 'Kino 1',
      },
    ];
    this.firebase.addEvents(
      events.map((event) => ({
        ...event,
        start: Timestamp.fromDate(new Date(event.start)),
        end: Timestamp.fromDate(new Date(event.end)),
      }))
    );
  }
}
