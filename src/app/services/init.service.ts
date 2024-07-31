import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AnimagicEvent, Location } from '@models/event';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  constructor(private firebase: FirebaseService) {}

  init() {
    // return;
    this.firebase.addEvents(cinemagic1);
    this.firebase.addEvents(cinemagic2);
    this.firebase.addEvents(kino1);
    this.firebase.addEvents(kino2);
    this.firebase.addEvents(kino3);
    this.firebase.addEvents(karaoke);
    this.firebase.addEvents(mozartsaal);
    this.firebase.addEvents(musensaal);
    this.firebase.addEvents(crunchyroll);
  }

  clear() {
    // return;
    this.firebase.deleteEvents(new Date('2024-08-01'), new Date('2024-08-31'));
  }
}

const eventMapper = (
  event: {
    start: string;
    end: string;
    title: string;
    description: string;
  },
  location: Location
) =>
  ({
    ...event,
    start: Timestamp.fromDate(new Date(event.start)),
    end: Timestamp.fromDate(new Date(event.end)),
    location,
  } as AnimagicEvent);

const getMapper = (location: Location) => {
  return (event: {
    start: string;
    end: string;
    title: string;
    description: string;
  }) => eventMapper(event, location);
};

const mozartsaal: AnimagicEvent[] = [
  {
    start: '2024-08-02T14:45:00+02:00',
    end: '2024-08-02T15:30:00+02:00',
    title: 'Einlass Mozartsaal',
    description: '',
  },
  {
    start: '2024-08-02T15:30:00+02:00',
    end: '2024-08-02T16:00:00+02:00',
    title: 'halca',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-02T16:30:00+02:00',
    end: '2024-08-02T17:00:00+02:00',
    title: 'Ayumi Miyazaki',
    description: 'Digimon-Konzert',
  },
  {
    start: '2024-08-02T17:45:00+02:00',
    end: '2024-08-02T18:15:00+02:00',
    title: 'Kashitaro Ito',
    description: 'J-Rock-Konzert',
  },
  {
    start: '2024-08-02T19:00:00+02:00',
    end: '2024-08-02T20:30:00+02:00',
    title: 'Eröffnungsfeier',
    description:
      'Verleihung des AnimaniA Awards, J-Music-Acts & Vorstellung der deutschen sowie der japanischen Ehrengäste',
  },
  {
    start: '2024-08-02T21:00:00+02:00',
    end: '2024-08-02T21:30:00+02:00',
    title: 'Claris',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-02T22:00:00+02:00',
    end: '2024-08-02T23:50:00+02:00',
    title: 'SPY x FAMILY CODE: White',
    description: 'Dt ., ca. 110 Min ., FSK: 12',
  },
  {
    start: '2024-08-03T11:15:00+02:00',
    end: '2024-08-03T11:45:00+02:00',
    title: 'Einlass Mozartsaal',
    description: '',
  },
  {
    start: '2024-08-03T11:45:00+02:00',
    end: '2024-08-03T12:00:00+02:00',
    title: 'Taiko Heidelberg',
    description: 'Taiko-Trommler',
  },
  {
    start: '2024-08-03T12:00:00+02:00',
    end: '2024-08-03T13:15:00+02:00',
    title: 'Animagic-Bühnencosplay',
    description: 'Wettbewerb',
  },
  {
    start: '2024-08-03T13:30:00+02:00',
    end: '2024-08-03T14:00:00+02:00',
    title: 'Kashitaro Ito',
    description: 'J-Rock-Konzert',
  },
  {
    start: '2024-08-03T14:15:00+02:00',
    end: '2024-08-03T14:45:00+02:00',
    title: 'AnimagiC-Bühnencosplay',
    description: 'Siegerehrung',
  },
  {
    start: '2024-08-03T15:00:00+02:00',
    end: '2024-08-03T15:15:00+02:00',
    title: 'Taiko Heidelberg',
    description: 'Taiko-Trommler',
  },
  {
    start: '2024-08-03T16:00:00+02:00',
    end: '2024-08-03T17:15:00+02:00',
    title: 'Anime in Concert',
    description: 'Classic-Konzert',
  },
  {
    start: '2024-08-03T17:45:00+02:00',
    end: '2024-08-03T19:15:00+02:00',
    title: 'TnS - Tsuki no Senshi',
    description: 'Showgruppe „The Grandmaster of Demonic Cultivation“',
  },
  {
    start: '2024-08-03T20:00:00+02:00',
    end: '2024-08-03T22:00:00+02:00',
    title: 'SACRA MUSIC X Animagic',
    description: 'J-Pop-Konzert mit halca, Who-ya Extended, ASCA & Claris',
  },
  {
    start: '2024-08-03T22:30:00+02:00',
    end: '2024-08-04T00:15:00+02:00',
    title: 'Suzume',
    description: 'Dt ., ca. 121 Min ., FSK: 12',
  },
  {
    start: '2024-08-04T10:30:00+02:00',
    end: '2024-08-04T11:00:00+02:00',
    title: 'Einlass Mozartsaal',
    description: '',
  },
  {
    start: '2024-08-04T11:00:00+02:00',
    end: '2024-08-04T11:15:00+02:00',
    title: 'Taiko Heidelberg',
    description: 'Taiko-Trommler',
  },
  {
    start: '2024-08-04T11:30:00+02:00',
    end: '2024-08-04T12:00:00+02:00',
    title: 'Ayumi Miyazaki',
    description: 'Digimon-Konzert',
  },
  {
    start: '2024-08-04T12:45:00+02:00',
    end: '2024-08-04T14:00:00+02:00',
    title: 'Anime in Concert',
    description: 'Classic-Konzert',
  },
  {
    start: '2024-08-04T14:30:00+02:00',
    end: '2024-08-04T15:00:00+02:00',
    title: 'Kashitaro Ito',
    description: 'J-Rock-Konzert',
  },
  {
    start: '2024-08-04T15:30:00+02:00',
    end: '2024-08-04T16:00:00+02:00',
    title: 'Who-ya Extended',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-04T16:30:00+02:00',
    end: '2024-08-04T17:00:00+02:00',
    title: 'ASCA',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-04T17:30:00+02:00',
    end: '2024-08-04T18:30:00+02:00',
    title: 'Großes Finale',
    description: '',
  },
].map(getMapper('Mozartsaal'));

const musensaal: AnimagicEvent[] = [
  {
    start: '2024-08-02T14:30:00+02:00',
    end: '2024-08-02T15:15:00+02:00',
    title: 'Einlass Musensaal',
    description: '',
  },
  {
    start: '2024-08-02T15:15:00+02:00',
    end: '2024-08-02T16:15:00+02:00',
    title: 'MindaRyn',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-02T16:15:00+02:00',
    end: '2024-08-02T17:30:00+02:00',
    title: 'Ryota Kikuchi',
    description: 'Ghibli-Classic-Konzert',
  },
  {
    start: '2024-08-02T17:30:00+02:00',
    end: '2024-08-02T18:00:00+02:00',
    title: 'TRUE',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-02T18:15:00+02:00',
    end: '2024-08-02T20:00:00+02:00',
    title: '[Oshi No Ko] - [Mein *Star]',
    description:
      'Das [Oshi No Ko]-Anime-Team begrüßt euch persönlich zum anschließenden Screening',
  },
  {
    start: '2024-08-02T20:30:00+02:00',
    end: '2024-08-02T21:15:00+02:00',
    title: 'Cellotic Soundtrack Ensemble',
    description: 'Classic-Konzert',
  },
  {
    start: '2024-08-02T21:45:00+02:00',
    end: '2024-08-02T22:15:00+02:00',
    title: 'Miura Ayme',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-02T22:30:00+02:00',
    end: '2024-08-03T00:10:00+02:00',
    title: 'SAND LAND: The Movie',
    description: 'Englische OmU-Fassung, ca. 106 Min., FSK 12',
  },
  {
    start: '2024-08-03T10:45:00+02:00',
    end: '2024-08-03T11:15:00+02:00',
    title: 'Einlass Musensaal',
    description: '',
  },
  {
    start: '2024-08-03T11:15:00+02:00',
    end: '2024-08-03T12:30:00+02:00',
    title: 'Daijoubu',
    description: 'Showgruppe „Demon Slayer“',
  },
  {
    start: '2024-08-03T13:00:00+02:00',
    end: '2024-08-03T13:45:00+02:00',
    title: 'Cellotic Soundtrack Ensemble',
    description: 'Classic-Konzert',
  },
  {
    start: '2024-08-03T14:15:00+02:00',
    end: '2024-08-03T14:45:00+02:00',
    title: 'MindaRyn',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-03T15:15:00+02:00',
    end: '2024-08-03T16:15:00+02:00',
    title: '[Oshi No Ko] - [Stage*Event]',
    description:
      'Live-Musik-Performance, Talk, Q&A & Gewinnspiel mit dem [Oshi No Ko]-Anime-Team',
  },
  {
    start: '2024-08-03T16:45:00+02:00',
    end: '2024-08-03T17:30:00+02:00',
    title: 'Ryota Kikuchi',
    description: 'Ghibli-Classic-Konzert',
  },
  {
    start: '2024-08-03T18:00:00+02:00',
    end: '2024-08-03T19:15:00+02:00',
    title: 'Detektiv Conan Film 27: Das 1-Million-Dollar-Pentagramm',
    description:
      '30-minütige Film-Preview, Stage-Event mit Talk & Q&A mit den japanischen Synchronsprechern Kappei Yamaguchi & Ryo Horikawa',
  },
  {
    start: '2024-08-03T20:00:00+02:00',
    end: '2024-08-03T20:30:00+02:00',
    title: 'TRUE',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-03T21:00:00+02:00',
    end: '2024-08-03T21:30:00+02:00',
    title: 'Miura Ayme',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-03T22:00:00+02:00',
    end: '2024-08-03T23:50:00+02:00',
    title: 'SPY x FAMILY CODE: White',
    description: 'Dt ., ca. 110 Min ., FSK 12',
  },
  {
    start: '2024-08-04T10:30:00+02:00',
    end: '2024-08-04T11:00:00+02:00',
    title: 'Einlass Musensaal',
    description: '',
  },
  {
    start: '2024-08-04T11:00:00+02:00',
    end: '2024-08-04T12:00:00+02:00',
    title: '[Oshi No Ko] - [Stage*Event]',
    description:
      'Live-Musik-Performance, Talk, Q&A & Gewinnspiel mit dem [Oshi No Ko]-Anime-Team',
  },
  {
    start: '2024-08-04T12:30:00+02:00',
    end: '2024-08-04T13:15:00+02:00',
    title: 'Ryota Kikuchi',
    description: 'Ghibli-Classic-Konzert',
  },
  {
    start: '2024-08-04T13:45:00+02:00',
    end: '2024-08-04T14:15:00+02:00',
    title: 'MindaRyn',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-04T14:30:00+02:00',
    end: '2024-08-04T15:00:00+02:00',
    title: 'Miura Ayme',
    description: 'J-Pop-Konzert',
  },
  {
    start: '2024-08-04T15:30:00+02:00',
    end: '2024-08-04T16:15:00+02:00',
    title: 'Cellotic Soundtrack Ensemble',
    description: 'Classic-Konzert',
  },
  {
    start: '2024-08-04T16:30:00+02:00',
    end: '2024-08-04T17:00:00+02:00',
    title: 'TRUE',
    description: 'J-Pop-Konzert',
  },
].map(getMapper('Musensaal'));

const crunchyroll: AnimagicEvent[] = [
  {
    start: '2024-08-02T15:00:00+02:00',
    end: '2024-08-02T16:15:00+02:00',
    title: 'Große Charity-Auktion',
    description: '',
  },
  {
    start: '2024-08-02T17:00:00+02:00',
    end: '2024-08-02T18:15:00+02:00',
    title: 'BONES 25th Anniversary Panel',
    description: 'Q&A & Live-Drawing mit Toshihiro Kawamoto',
  },
  {
    start: '2024-08-02T19:00:00+02:00',
    end: '2024-08-02T20:00:00+02:00',
    title: 'Blue Exorcist -Shimane Illuminati Saga-',
    description: 'Ep. 3+4, Dt., ca. 60 Min., FSK: 12',
  },
  {
    start: '2024-08-02T20:00:00+02:00',
    end: '2024-08-02T21:00:00+02:00',
    title: 'Tower of God - Season 2',
    description: 'Ep. 1+2, Dt., ca. 60 Min., FSK: 12',
  },
  {
    start: '2024-08-02T21:15:00+02:00',
    end: '2024-08-02T22:15:00+02:00',
    title: 'Black Butler: Public School Arc',
    description: 'Ep. 1+2, Dt., ca. 60 Min., FSK: 16',
  },
  {
    start: '2024-08-02T22:15:00+02:00',
    end: '2024-08-02T23:30:00+02:00',
    title: 'Demon Slayer: Hashira Training Arc',
    description: 'Special, Dt., ca. 75 Min., FSK: 16',
  },
  {
    start: '2024-08-02T23:45:00+02:00',
    end: '2024-08-03T00:45:00+02:00',
    title: 'Kaiju No. 8',
    description: 'Ep. 1+2, Dt., ca. 60 Min., FSK: 16',
  },
  {
    start: '2024-08-03T11:00:00+02:00',
    end: '2024-08-03T12:00:00+02:00',
    title: 'Blue Exorcist Special Panel',
    description: 'Stage-Event mit dem Blue Exorcist-Anime-Team',
  },
  {
    start: '2024-08-03T12:45:00+02:00',
    end: '2024-08-03T13:30:00+02:00',
    title: 'Aniplex Special Stage',
    description: 'Panel-Präsentation von und mit Aniplex',
  },
  {
    start: '2024-08-03T14:00:00+02:00',
    end: '2024-08-03T15:00:00+02:00',
    title: 'Crunchyroll Panel',
    description: 'Panel-Präsentation von und mit Crunchyroll',
  },
  {
    start: '2024-08-03T15:45:00+02:00',
    end: '2024-08-03T16:45:00+02:00',
    title: 'SPY x FAMILY CODE: White-Special Panel',
    description: 'Q&A-Panel mit dem SPY x FAMILY CODE: White-Anime-Team',
  },
  {
    start: '2024-08-03T17:30:00+02:00',
    end: '2024-08-03T18:30:00+02:00',
    title: 'Solo Leveling Special Stage',
    description: 'Stage-Event mit dem Solo Leveling-Anime-Team',
  },
  {
    start: '2024-08-03T19:00:00+02:00',
    end: '2024-08-03T20:45:00+02:00',
    title: 'Sword Art Online the Movie -Progressive- Aria of a Starless Night',
    description: 'Dt., ca. 97 Min., FSK: 12',
  },
  {
    start: '2024-08-03T21:00:00+02:00',
    end: '2024-08-03T22:45:00+02:00',
    title: 'Sword Art Online the Movie -Progressive- Scherzo of Deep Night',
    description: 'Dt., ca. 100 Min., FSK: 12',
  },
  {
    start: '2024-08-03T23:00:00+02:00',
    end: '2024-08-04T00:15:00+02:00',
    title: 'Demon Slayer: Hashira Training Arc',
    description: 'Special, Dt., ca. 75 Min., FSK: 16',
  },
  {
    start: '2024-08-04T11:00:00+02:00',
    end: '2024-08-04T12:00:00+02:00',
    title: 'Blue Exorcist Special Panel',
    description: 'Stage-Event mit dem Blue Exorcist-Anime-Team',
  },
  {
    start: '2024-08-04T12:45:00+02:00',
    end: '2024-08-04T13:45:00+02:00',
    title: 'SPY x FAMILY CODE: White-Special Panel',
    description: 'Q&A-Panel mit dem SPY x FAMILY CODE: White-Anime-Team',
  },
  {
    start: '2024-08-04T14:15:00+02:00',
    end: '2024-08-04T15:15:00+02:00',
    title: 'Solo Leveling Special Stage',
    description: 'Stage-Event mit dem Solo Leveling-Anime-Team',
  },
  {
    start: '2024-08-04T15:45:00+02:00',
    end: '2024-08-04T17:00:00+02:00',
    title: 'BONES 25th Anniversary Panel',
    description: 'Q&A & Live-Drawing mit Toshihiro Kawamoto',
  },
  {
    start: '2024-08-04T17:30:00+02:00',
    end: '2024-08-04T18:30:00+02:00',
    title: 'Wind Breaker',
    description: 'Ep. 1+2, Dt., ca. 60 Min., FSK: 12',
  },
].map(getMapper('Crunchyroll Cinema'));

const cinemagic1: AnimagicEvent[] = [
  {
    start: '2024-08-02T14:30:00+02:00',
    end: '2024-08-02T15:00:00+02:00',
    title: 'Sengoku Youko',
    description: 'Ep. 1, OmU, ca. 25 Min ., FSK: 12',
  },
  {
    start: '2024-08-02T15:00:00+02:00',
    end: '2024-08-02T16:00:00+02:00',
    title: 'Sengoku Youko Special Panel',
    description: 'mit dem Sengoku Youko-Anime-Team',
  },
  {
    start: '2024-08-02T16:30:00+02:00',
    end: '2024-08-02T17:30:00+02:00',
    title: 'Studio MAPPA Fan-Panel',
    description: 'Anime-Neuankündigungen von Studio MAPPA',
  },
  {
    start: '2024-08-02T18:00:00+02:00',
    end: '2024-08-02T19:00:00+02:00',
    title: 'Suicide Squad ISEKAI',
    description: 'Ep. 1+2, OmU, ca. 60 Min ., FSK: 12',
  },
  {
    start: '2024-08-02T19:00:00+02:00',
    end: '2024-08-02T20:15:00+02:00',
    title: 'Wind Breaker',
    description: 'Ep. 1+2, Dt ., ca. 60 Min ., FSK: 12',
  },
  {
    start: '2024-08-02T20:30:00+02:00',
    end: '2024-08-02T21:30:00+02:00',
    title: 'Edens Zero - Season 2',
    description: 'Ep. 1+2, Dt, ca. 50 Min., FSK: 16',
  },
  {
    start: '2024-08-02T21:45:00+02:00',
    end: '2024-08-02T22:45:00+02:00',
    title: 'Junji Ito Collection',
    description: 'Ep. 1 & 13 A+B, OmU, ca. 50 Min., FSK: 16',
  },
  {
    start: '2024-08-02T23:00:00+02:00',
    end: '2024-08-02T23:45:00+02:00',
    title: 'ARIFURETA - Season 3',
    description: 'Ep. 1, OmU, ca. 45 Min ., FSK: 16',
  },
  {
    start: '2024-08-02T23:45:00+02:00',
    end: '2024-08-03T00:45:00+02:00',
    title: 'Solo Leveling',
    description: 'Ep. 1+2, Dt., ca. 50 Min., FSK: 16',
  },
  {
    start: '2024-08-03T11:30:00+02:00',
    end: '2024-08-03T12:30:00+02:00',
    title: 'The Eminence in Shadow: Manga-Panel',
    description: 'mit Autor Daisuke Yazawa & Manga-ka Anri Sakano',
  },
  {
    start: '2024-08-03T13:00:00+02:00',
    end: '2024-08-03T14:00:00+02:00',
    title: 'Toei Animation Festa 2024',
    description: 'Präsentation von und mit Toei Animation',
  },
  {
    start: '2024-08-03T14:15:00+02:00',
    end: '2024-08-03T15:30:00+02:00',
    title: 'Digimon Adventure 02: The Beginning',
    description: 'Dt ., ca. 77 Min ., FSK: 6',
  },
  {
    start: '2024-08-03T16:00:00+02:00',
    end: '2024-08-03T17:00:00+02:00',
    title: 'Blue Exorcist - Shimane Illuminati Saga',
    description: 'Ep. 1+2, Dt ., ca. 50 Min ., FSK: 12',
  },
  {
    start: '2024-08-03T17:00:00+02:00',
    end: '2024-08-03T18:00:00+02:00',
    title: 'Tower of God - Season 2',
    description: 'Ep. 1+2, OmU, ca. 60 Min ., FSK: 12',
  },
  {
    start: '2024-08-03T18:30:00+02:00',
    end: '2024-08-03T19:30:00+02:00',
    title: 'Sengoku Youko: Special-Screening',
    description:
      'Das Sengoku Youko-Team begrüßt euch zum Screening der aktuellen Episoden 17 & 18',
  },
  {
    start: '2024-08-03T20:00:00+02:00',
    end: '2024-08-03T20:30:00+02:00',
    title: 'SHY - Season 2',
    description: 'Ep. 1, OmU, ca. 25 Min ., FSK: 12',
  },
  {
    start: '2024-08-03T20:30:00+02:00',
    end: '2024-08-03T21:30:00+02:00',
    title: 'Black Butler: Public School Arc',
    description: 'Ep. 1+2, Dt., ca. 60 Min ., FSK: 16',
  },
  {
    start: '2024-08-03T21:45:00+02:00',
    end: '2024-08-03T22:30:00+02:00',
    title: 'ARIFURETA - Season 3',
    description: 'Ep. 1, OmU, ca. 45 Min ., FSK: 16',
  },
  {
    start: '2024-08-03T22:45:00+02:00',
    end: '2024-08-04T00:45:00+02:00',
    title: 'Godzilla Minus One',
    description: 'Dt ., ca. 124 Min ., FSK: 12',
  },
  {
    start: '2024-08-04T11:15:00+02:00',
    end: '2024-08-04T12:15:00+02:00',
    title: 'Sengoku Youko Special Panel',
    description: 'mit dem Sengoku Youko-Anime-Team',
  },
  {
    start: '2024-08-04T13:00:00+02:00',
    end: '2024-08-04T14:00:00+02:00',
    title: 'KADOKAWA Industry Panel',
    description: 'Panel-Präsentation von und mit KADOKAWA',
  },
  {
    start: '2024-08-04T14:30:00+02:00',
    end: '2024-08-04T15:30:00+02:00',
    title: 'Schattenwahrheiten - The Eminence in Shadow',
    description:
      'Anime-Panel Q&A-Panel mit dem Anime-Team von The Eminence in Shadow',
  },
  {
    start: '2024-08-04T16:00:00+02:00',
    end: '2024-08-04T16:30:00+02:00',
    title: 'My Hero Academia - Season 7',
    description: 'Ep. 1, OmU, ca. 25 Min., FSK: 12',
  },
  {
    start: '2024-08-04T16:30:00+02:00',
    end: '2024-08-04T18:30:00+02:00',
    title: 'Blue Giant',
    description: 'Dt ., ca. 120 Min ., FSK: 12',
  },
].map(getMapper('CineMagic 1'));

const cinemagic2: AnimagicEvent[] = [
  {
    start: '2024-08-02T15:30:00+02:00',
    end: '2024-08-02T16:45:00+02:00',
    title:
      'Die Weisheit der Schatten – The Eminence in Shadow Opening Stage Event',
    description:
      'Panel Stage-Event mit dem Anime- und Manga-Team von The Eminence in Shadow',
  },
  {
    start: '2024-08-02T17:30:00+02:00',
    end: '2024-08-02T18:30:00+02:00',
    title: 'KonoSuba - Season 3',
    description: 'Ep. 1+2, Dt ., ca. 60 Min ., FSK: 12',
  },
  {
    start: '2024-08-02T19:00:00+02:00',
    end: '2024-08-02T19:30:00+02:00',
    title: 'My Hero Academia - Season 7',
    description: 'Ep. 1, OmU, ca. 25 Min ., FSK: 12',
  },
  {
    start: '2024-08-02T19:30:00+02:00',
    end: '2024-08-02T20:30:00+02:00',
    title: 'That Time I Got Reincarnated as a Slime Season 3',
    description: 'Ep. 49+50, OmU, ca. 60 Min ., FSK: 12',
  },
  {
    start: '2024-08-02T21:00:00+02:00',
    end: '2024-08-02T22:30:00+02:00',
    title: 'Re:ZERO -Sarting Life in Another World- Season 3',
    description: 'Ep. 1, OmU, ca. 90 Min ., FSK: 12',
  },
  {
    start: '2024-08-02T22:45:00+02:00',
    end: '2024-08-03T00:45:00+02:00',
    title: 'Psycho-Pass: Providence',
    description: 'Dt ., ca. 86 Min ., FSK: 16',
  },
  {
    start: '2024-08-03T11:00:00+02:00',
    end: '2024-08-03T12:00:00+02:00',
    title: 'Junji Ito: Horror-Q&A mit Dominik Jell',
    description:
      'Talk zum Thema „Horror“ mit Junji Ito und Dominik Jell, moderiert von Nino Kerl',
  },
  {
    start: '2024-08-03T12:45:00+02:00',
    end: '2024-08-03T13:30:00+02:00',
    title: 'The Leveling of Solo Leveling',
    description: 'Doku, OmU, ca. 40 Min ., FSK: 12',
  },
  {
    start: '2024-08-03T13:45:00+02:00',
    end: '2024-08-03T14:15:00+02:00',
    title: '[Oshi No Ko] - [Mein*Star] - Season 2',
    description: 'Ep. 1, OmU, ca. 25 Min ., FSK: 12',
  },
  {
    start: '2024-08-03T14:30:00+02:00',
    end: '2024-08-03T15:30:00+02:00',
    title: 'Metallic Rouge',
    description: 'Ep. 1+2, OmU, ca. 50 Min ., FSK: 12',
  },
  {
    start: '2024-08-03T15:30:00+02:00',
    end: '2024-08-03T16:20:00+02:00',
    title: 'BONES 25th: Dreaming Forward',
    description: 'Doku, Ep. 1+4, OmU, ca. 50 Min ., FSK: 12',
  },
  {
    start: '2024-08-03T16:30:00+02:00',
    end: '2024-08-03T18:15:00+02:00',
    title: 'SAND LAND: The Movie',
    description: 'Englische OmU ., ca. 106 Min ., FSK: 12',
  },
  {
    start: '2024-08-03T19:30:00+02:00',
    end: '2024-08-03T23:00:00+02:00',
    title: 'Dice Actors @ Animagic',
    description: 'Live-Session D&D-Kampagne mit den Dice Actors',
  },
  {
    start: '2024-08-04T11:00:00+02:00',
    end: '2024-08-04T12:00:00+02:00',
    title: 'Junji Ito: Live-Drawing Panel',
    description: 'Manga-ka Junji Ito gewährt Einblicke in seine Arbeit',
  },
  {
    start: '2024-08-04T12:30:00+02:00',
    end: '2024-08-04T13:30:00+02:00',
    title: 'Attack on Titan Special Panel',
    description: 'mit Regisseur Yuichiro Hayashi',
  },
  {
    start: '2024-08-04T14:30:00+02:00',
    end: '2024-08-04T16:00:00+02:00',
    title: 'Deutsche Cosplaymeisterschaft 2024',
    description: 'Wettbewerb',
  },
  {
    start: '2024-08-04T16:30:00+02:00',
    end: '2024-08-04T17:00:00+02:00',
    title: 'Deutsche Cosplaymeisterschaft 2024',
    description: 'Siegerehrung',
  },
  {
    start: '2024-08-04T17:30:00+02:00',
    end: '2024-08-04T18:30:00+02:00',
    title: 'One Piece',
    description: 'Ep. 1100 & 1101, OmU, ca. 50 Min, FSK: 12',
  },
].map(getMapper('CineMagic 2'));

const kino1: AnimagicEvent[] = [
  {
    start: '2024-08-02T15:30:00+02:00',
    end: '2024-08-02T16:30:00+02:00',
    title: 'Digimon Adv. 02 - The Beginning: Q&A-Panel',
    description:
      'KSM Anime und Digimon-Produzentin Eri Shimomura begrüßen euch zum Q&A-Panel',
  },
  {
    start: '2024-08-02T17:00:00+02:00',
    end: '2024-08-02T18:00:00+02:00',
    title: '2.5 Dimensional Seduction - Special Panel',
    description:
      'AniMoon Publishing präsentiert das Special Panel inkl. Premiere-Screening der Folgen 8 & 9',
  },
  {
    start: '2024-08-02T19:00:00+02:00',
    end: '2024-08-02T20:45:00+02:00',
    title: 'THE FIRST SLAM DUNK',
    description: 'Dt., ca. 110 Min., FSK: 12',
  },
  {
    start: '2024-08-02T21:00:00+02:00',
    end: '2024-08-02T21:30:00+02:00',
    title: 'Plus-Sized Elf',
    description: 'Ep. 1, OmU, ca. 25 Min., FSK: 16',
  },
  {
    start: '2024-08-02T21:30:00+02:00',
    end: '2024-08-02T22:00:00+02:00',
    title: 'Helck',
    description: 'Ep. 1, OmU, ca. 25 Min., FSK: 16',
  },
  {
    start: '2024-08-02T22:00:00+02:00',
    end: '2024-08-02T23:00:00+02:00',
    title: 'The Eminence in Shadow - 2nd Season',
    description: 'Ep. 1+2, Dt., ca. 50 Min., FSK: 16',
  },
  {
    start: '2024-08-02T23:15:00+02:00',
    end: '2024-08-02T23:45:00+02:00',
    title: 'Dead Dead Demons DEDEDEDE Destruction',
    description: 'Ep. 1, OmU., ca. 25 Min., FSK: 12',
  },
  {
    start: '2024-08-02T23:45:00+02:00',
    end: '2024-08-03T00:45:00+02:00',
    title: 'BLEACH: Thousand-Year Blood War',
    description: 'Ep. 1+2, Dt., ca. 60 Min., FSK: 16',
  },
  {
    start: '2024-08-03T11:00:00+02:00',
    end: '2024-08-03T11:45:00+02:00',
    title: 'Dice Actors Q&A-Panel',
    description: 'Die Dice Actors beantworten eure Fragen',
  },
  {
    start: '2024-08-03T12:30:00+02:00',
    end: '2024-08-03T13:30:00+02:00',
    title: 'AniMoon-Panel',
    description: 'Präsentation neuer Lizenzen & Line-up 2025',
  },
  {
    start: '2024-08-03T14:00:00+02:00',
    end: '2024-08-03T15:00:00+02:00',
    title: 'AKIBA PASS TV x peppermint anime',
    description: 'Infos zum neuen Anime- und Streaming-Line-up',
  },
  {
    start: '2024-08-03T15:30:00+02:00',
    end: '2024-08-03T16:30:00+02:00',
    title: 'polyband-/Pokémon-Panel',
    description: 'Erkundet mit polyband das Pokemon-Universum',
  },
  {
    start: '2024-08-03T17:00:00+02:00',
    end: '2024-08-03T17:45:00+02:00',
    title: 'ProSieben MAXX x Joyn',
    description: 'Moderator Nino Kerl spricht mit Senderverantwortlichen',
  },
  {
    start: '2024-08-03T18:15:00+02:00',
    end: '2024-08-03T19:15:00+02:00',
    title: 'CITY HUNTER THE MOVIE: Angel Dust-Panel',
    description:
      'KSM Anime blickt hinter die Kulissen der Synchronisation von CITY HUNTER THE MOVIE: Angel Dust',
  },
  {
    start: '2024-08-03T21:00:00+02:00',
    end: '2024-08-03T22:00:00+02:00',
    title: 'Girls und Panzer - Das Finale: Teil 4',
    description: 'Dt., ca. 54 Min., FSK: 12',
  },
  {
    start: '2024-08-03T22:15:00+02:00',
    end: '2024-08-03T23:15:00+02:00',
    title: 'Solo Leveling',
    description: 'Ep. 1+2, Dt., ca. 60 Min., FSK: 16',
  },
  {
    start: '2024-08-03T23:15:00+02:00',
    end: '2024-08-04T00:15:00+02:00',
    title: 'Kaiju No. 8',
    description: 'Ep. 1+2, Dt., ca. 60 Min., FSK: 16',
  },
  {
    start: '2024-08-04T00:15:00+02:00',
    end: '2024-08-04T00:45:00+02:00',
    title: 'Attack on Titan: The Final Season Final Chapters',
    description: 'Special 2 - Preview (Ep. 1, Dt., ca. 30 Min., FSK: 16)',
  },
  {
    start: '2024-08-04T11:00:00+02:00',
    end: '2024-08-04T11:45:00+02:00',
    title: 'Dice Actors Q&A-Panel',
    description: 'Die Dice Actors beantworten eure Fragen',
  },
  {
    start: '2024-08-04T12:30:00+02:00',
    end: '2024-08-04T13:30:00+02:00',
    title: 'Mushi-shi: Panel',
    description: 'Freut euch auf Synchronsprecher Philipp Moog',
  },
  {
    start: '2024-08-04T14:00:00+02:00',
    end: '2024-08-04T15:00:00+02:00',
    title: 'KSM-Anime-Panel',
    description: 'Infos zum neuen Anime-Line-up',
  },
  {
    start: '2024-08-04T15:30:00+02:00',
    end: '2024-08-04T16:30:00+02:00',
    title: 'Ninotaku-Panel',
    description: 'Q&A mit Moderator Nino Kerl',
  },
  {
    start: '2024-08-04T16:45:00+02:00',
    end: '2024-08-04T17:45:00+02:00',
    title: 'Ramen Akaneko',
    description: 'Ep. 1+2, OmU, ca. 60 Min., FSK: 12',
  },
  {
    start: '2024-08-04T17:45:00+02:00',
    end: '2024-08-04T18:45:00+02:00',
    title: 'Suicide Squad ISEKAI',
    description: 'Ep 1+2, OmU, ca. 60 Min., FSK: 12',
  },
].map(getMapper('AnimagiC-Kino 1'));

const kino2: AnimagicEvent[] = [
  {
    start: '2024-08-02T14:30:00+02:00',
    end: '2024-08-02T15:15:00+02:00',
    title: 'Ryota Kikuchi: Signierstunde',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-02T15:45:00+02:00',
    end: '2024-08-02T16:45:00+02:00',
    title: 'Miura Ayme: Signierstunde',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-02T17:30:00+02:00',
    end: '2024-08-02T18:30:00+02:00',
    title: 'The Eminence in Shadow Manga-Team: Signierstunde',
    description:
      'Achtung: Die Tickets für diese Signierstunde wurden im Vorfeld von TOKYOPOP verlost! Bitte nur mit Ticket anstellen!',
  },
  {
    start: '2024-08-02T19:00:00+02:00',
    end: '2024-08-02T21:00:00+02:00',
    title: 'Lonely Castle in the Mirror',
    description: 'Dt., ca. 116 Min., FSK: 6',
  },
  {
    start: '2024-08-02T21:15:00+02:00',
    end: '2024-08-02T22:15:00+02:00',
    title: 'Mushi-shi',
    description: 'Ep. 1+2, Dt., ca. 60 Min., FSK: 12',
  },
  {
    start: '2024-08-02T22:30:00+02:00',
    end: '2024-08-03T00:00:00+02:00',
    title: 'Komada: Eine Whisky-Familie',
    description: 'Dt., ca. 91 Min., FSK: 12',
  },
  {
    start: '2024-08-03T00:00:00+02:00',
    end: '2024-08-03T00:30:00+02:00',
    title: 'Bartender: Glass of God',
    description: 'OmU, ca. 25 Min., FSK: 16',
  },
  {
    start: '2024-08-03T11:00:00+02:00',
    end: '2024-08-03T12:00:00+02:00',
    title: 'Solo Leveling: Signierstunde',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-03T12:30:00+02:00',
    end: '2024-08-03T13:30:00+02:00',
    title: 'Studio MAPPA: Signierstunde',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-03T14:15:00+02:00',
    end: '2024-08-03T15:15:00+02:00',
    title: 'The Eminence in Shadow Manga-Team: Signierstunde',
    description:
      'Achtung: Die Tickets für diese Signierstunde wurden im Vorfeld von TOKYOPOP verlost! Bitte nur mit Ticket anstellen!',
  },
  {
    start: '2024-08-03T15:45:00+02:00',
    end: '2024-08-03T16:45:00+02:00',
    title: 'Blue Exorcist: Signierstunde',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-03T17:30:00+02:00',
    end: '2024-08-03T18:30:00+02:00',
    title: 'SPY x FAMILY: Signierstunde',
    description:
      'Teilnahme nur möglich, wenn ihr eine limitierte Autogrammkarte am SPY x FAMILY CODE: White-Stand erworben habt',
  },
  {
    start: '2024-08-03T19:00:00+02:00',
    end: '2024-08-03T21:00:00+02:00',
    title: 'Totto-chan: Das kleine Mädchen am Fenster',
    description: 'OmU, ca. 114 Min., FSK: 6',
  },
  {
    start: '2024-08-03T21:15:00+02:00',
    end: '2024-08-03T22:15:00+02:00',
    title: 'Mushi-shi',
    description: 'Ep. 1+2, Dt., ca. 60 Min., FSK: 12',
  },
  {
    start: '2024-08-03T22:30:00+02:00',
    end: '2024-08-03T23:30:00+02:00',
    title: 'Junji Ito Collection',
    description: 'Ep. 1+13 A+B, OmU, ca. 50 Min., FSK: 18',
  },
  {
    start: '2024-08-03T23:30:00+02:00',
    end: '2024-08-04T00:30:00+02:00',
    title: 'Vampire Dormitory',
    description: 'Ep. 1+2, Dt., ca. 50 Min., FSK: 16',
  },
  {
    start: '2024-08-04T11:00:00+02:00',
    end: '2024-08-04T12:00:00+02:00',
    title: 'Solo Leveling: Signierstunde',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-04T12:45:00+02:00',
    end: '2024-08-04T13:45:00+02:00',
    title: 'Webtoons auf dem Vormarsch: altraverse-Panel',
    description:
      'altraverse-Verleger Joachim Kaps spricht mit seinen Gästen über die wachsende Beliebtheit von Webtoons.',
  },
  {
    start: '2024-08-04T14:30:00+02:00',
    end: '2024-08-04T15:30:00+02:00',
    title: 'SPY x FAMILY: Signierstunde',
    description:
      'Teilnahme nur möglich, wenn ihr eine limitierte Autogrammkarte am SPY x FAMILY CODE: White-Stand erworben habt.',
  },
  {
    start: '2024-08-04T16:00:00+02:00',
    end: '2024-08-04T17:00:00+02:00',
    title: 'The Eminence in Shadow Manga-Team: Signierstunde',
    description:
      'Achtung: Die Tickets für diese Signierstunde wurden im Vorfeld von TOKYOPOP verlost! Bitte nur mit Ticket anstellen!',
  },
  {
    start: '2024-08-04T17:15:00+02:00',
    end: '2024-08-04T17:45:00+02:00',
    title: 'That Time I Got Reincarnated as a Slime - Season 3 (Ep. 49)',
    description: 'OmU, ca. 25 Min., FSK: 12',
  },
  {
    start: '2024-08-04T17:45:00+02:00',
    end: '2024-08-04T18:15:00+02:00',
    title: 'Kaina of the Great Snow Sea: Star Sage (Ep. 1)',
    description: 'OmU, ca. 25 Min., FSK: 12',
  },
  {
    start: '2024-08-04T17:30:00+02:00',
    end: '2024-08-04T18:00:00+02:00',
    title: 'SHY - Season 1 (Ep. 1)',
    description: 'Dt., ca. 25 Min., FSK: 12',
  },
].map(getMapper('AnimagiC-Kino 2'));

const kino3: AnimagicEvent[] = [
  {
    start: '2024-08-02T15:30:00+02:00',
    end: '2024-08-02T16:30:00+02:00',
    title: 'Angelina Paustian · Workshop',
    description: 'Thema: Foodtourismus in Japan',
  },
  {
    start: '2024-08-02T17:30:00+02:00',
    end: '2024-08-02T18:30:00+02:00',
    title: 'Dice Actors: Signierstunde',
    description:
      'Um euch eines der 100 Signiertickets zu sichern, meldet euch am Merchandise-Stand der Dice Actors Cat in the Dice Bag im Künstlermarkt',
  },
  {
    start: '2024-08-02T19:00:00+02:00',
    end: '2024-08-02T21:00:00+02:00',
    title: 'Break of Dawn',
    description: 'Dt., ca. 121 Min., FSK: 6',
  },
  {
    start: '2024-08-02T21:15:00+02:00',
    end: '2024-08-02T22:45:00+02:00',
    title: 'A Certain Magical Index - The Movie: The Miracle of Endymion',
    description: 'Dt., ca. 90 Min., FSK: 16',
  },
  {
    start: '2024-08-02T23:00:00+02:00',
    end: '2024-08-02T23:30:00+02:00',
    title: 'Gushing Over Magical Girls',
    description: 'Ep. 1, Dt., ca. 25 Min., FSK: 16',
  },
  {
    start: '2024-08-02T23:30:00+02:00',
    end: '2024-08-03T00:00:00+02:00',
    title: 'Haganai NEXT!',
    description: 'Ep. 1, Dt., ca. 25 Min., FSK: 16',
  },
  {
    start: '2024-08-03T00:00:00+02:00',
    end: '2024-08-03T00:30:00+02:00',
    title: 'Kiss X Sis',
    description: 'Ep. 1, Dt., ca. 25 Min., FSK: 16',
  },
  {
    start: '2024-08-03T11:00:00+02:00',
    end: '2024-08-03T11:45:00+02:00',
    title: 'Lerne Japanisch in Japan mit Go! Go! Nihon',
    description: 'Workshop zum „Leben in Japan“ mit Lisa Laimer',
  },
  {
    start: '2024-08-03T12:00:00+02:00',
    end: '2024-08-03T12:45:00+02:00',
    title: 'JNC Nina: Light Novels auf Deutsch & Digital',
    description: 'Q&A-Panel mit JNC Nina rund ums Thema Light Novels',
  },
  {
    start: '2024-08-03T13:15:00+02:00',
    end: '2024-08-03T14:15:00+02:00',
    title: 'Das ultimative Boys-Love-Quiz von Egmont Manga',
    description: 'Boys-Love-Quizduell mit Egmont Manga',
  },
  {
    start: '2024-08-03T14:45:00+02:00',
    end: '2024-08-03T15:30:00+02:00',
    title: 'Panini-Manga-Panel',
    description: 'Aktuelle Highlights und Infos zum kommenden Line-up',
  },
  {
    start: '2024-08-03T16:00:00+02:00',
    end: '2024-08-03T17:00:00+02:00',
    title: 'TOKYOPOP Verlags-Panel',
    description: 'Aktuelle Highlights und Infos zum neuen Programm',
  },
  {
    start: '2024-08-03T17:30:00+02:00',
    end: '2024-08-03T18:30:00+02:00',
    title: 'Anime House: Synchronsprecher-Q&A-Panel',
    description:
      'Die Synchronsprecher Stefan Müller-Doriat, Nicole Silbermann und Jan Langer beantworten eure Fragen im Q&A.',
  },
  {
    start: '2024-08-03T19:00:00+02:00',
    end: '2024-08-03T19:30:00+02:00',
    title: 'Captain Tsubasa & Die Superkickers',
    description: 'Dt., ca. 25 Min., FSK: 6',
  },
  {
    start: '2024-08-03T19:30:00+02:00',
    end: '2024-08-03T20:00:00+02:00',
    title: 'BOFURI - Season 2',
    description: 'Ep.1, Dt., ca. 25 Min., FSK: 12',
  },
  {
    start: '2024-08-03T20:00:00+02:00',
    end: '2024-08-03T20:30:00+02:00',
    title: 'Unnamed Memory',
    description: 'Ep. 1, OmU, 25 Min., FSK: 12',
  },
  {
    start: '2024-08-03T20:30:00+02:00',
    end: '2024-08-03T21:00:00+02:00',
    title: 'Spirit Chronicles - Season 2',
    description: 'OmU, ca. 54 Min., FSK: 12',
  },
  {
    start: '2024-08-03T21:15:00+02:00',
    end: '2024-08-03T22:30:00+02:00',
    title: 'Senpai is an Otokonoko',
    description: 'Ep. 1–3, OmU, ca. 75 Min., FSK',
  },
  {
    start: '2024-08-03T22:30:00+02:00',
    end: '2024-08-03T23:00:00+02:00',
    title: 'Our Last Crusade or the Rise of a New World – Season 2',
    description: 'Ep. 1, OmU, ca. 25 Min., FSK: 12',
  },
  {
    start: '2024-08-03T23:00:00+02:00',
    end: '2024-08-03T23:30:00+02:00',
    title: 'The Unwanted Undead Adventurer',
    description: 'Ep. 1, OmU, ca. 25 Min., FSK: 16',
  },
  {
    start: '2024-08-03T23:30:00+02:00',
    end: '2024-08-04T00:00:00+02:00',
    title: 'Tales of the Wedding Ring',
    description: 'Ep. 1, OmU, ca. 25 Min., FSK: 16',
  },
  {
    start: '2024-08-04T00:00:00+02:00',
    end: '2024-08-04T00:30:00+02:00',
    title: 'Gushing Over Magical Girls',
    description: 'Ep. 1, Dt., ca. 25 Min., FSK: 16',
  },
  {
    start: '2024-08-04T11:00:00+02:00',
    end: '2024-08-04T11:45:00+02:00',
    title: 'Ren M. Pape: Monster Forest – Egmont-Manga-Panel',
    description:
      'Die Manga-ka Ren M. Pape gibt euch exklusive Einblicke in ihr neues Werk Monster Forest',
  },
  {
    start: '2024-08-04T12:15:00+02:00',
    end: '2024-08-04T13:15:00+02:00',
    title: 'BONES 25th: Signierstunde mit Toshihiro Kawamoto',
    description:
      'Es gibt keine Vorgabe für diese Signierstunde. Es gilt das Prinzip: „First Come, First Served!“',
  },
  {
    start: '2024-08-04T13:30:00+02:00',
    end: '2024-08-04T14:30:00+02:00',
    title: 'Angelina Paustian · Workshop',
    description: 'Thema: Bento! Japanische Lebensfreude in der Box',
  },
  {
    start: '2024-08-04T17:00:00+02:00',
    end: '2024-08-04T17:30:00+02:00',
    title: 'Kizuna No Allele',
    description: 'Ep. 1, Dt., ca. 25 Min., FSK: 6',
  },
  {
    start: '2024-08-04T17:30:00+02:00',
    end: '2024-08-04T18:00:00+02:00',
    title: 'Die kleine Prinzessin Sarah',
    description: 'Dt., ca. 25 Min., FSK: 6',
  },
  {
    start: '2024-08-04T18:00:00+02:00',
    end: '2024-08-04T18:30:00+02:00',
    title: 'Missis Jo und ihre fröhliche Familie',
    description: 'Ep. 1, Dt., ca. 25 Min., FSK: 12',
  },
].map(getMapper('AnimagiC-Kino 3'));

const karaoke: AnimagicEvent[] = [
  {
    start: '2024-08-02T15:30:00+02:00',
    end: '2024-08-02T16:30:00+02:00',
    title: 'Kashitaro Ito: Signierstunde & Merchandise-Sells',
    description:
      'Käufer von Produkten des Künstlers werden bevorzugt. Der Erwerb ist keine Voraussetzung. Es gilt: „First Come, First Served.“',
  },
  {
    start: '2024-08-02T17:00:00+02:00',
    end: '2024-08-02T18:00:00+02:00',
    title: 'Sengoku Youko: Signierstunde',
    description:
      'Achtung: Limitierte Plätze - es gilt: „First Come, First Served.“',
  },
  {
    start: '2024-08-02T18:30:00+02:00',
    end: '2024-08-03T00:30:00+02:00',
    title: 'Ramen-Wok-Wok-Karaoke',
    description: 'Mit dem KOE-Karaoke-Team',
  },
  {
    start: '2024-08-03T11:00:00+02:00',
    end: '2024-08-03T12:00:00+02:00',
    title: 'Sengoku Youko: Signierstunde mit MindaRyn',
    description:
      'Achtung: Limitierte Plätze - es gilt: „First Come, First Served.“',
  },
  {
    start: '2024-08-03T12:45:00+02:00',
    end: '2024-08-03T13:45:00+02:00',
    title: 'BONES 25th: Signierstunde mit Toshihiro Kawamoto',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-03T14:30:00+02:00',
    end: '2024-08-03T15:30:00+02:00',
    title: 'Dice Actors: Signierstunde',
    description:
      'Meldet euch am Merchandise-Stand der Dice Actors Cat in the Dice Bag im Künstlermarkt, um ein Signierticket zu sichern.',
  },
  {
    start: '2024-08-03T16:00:00+02:00',
    end: '2024-08-03T17:00:00+02:00',
    title: 'Kashitaro Ito: Signierstunde & Merchandise-Sells',
    description:
      'Käufer von Produkten des Künstlers werden bevorzugt. Der Erwerb ist keine Voraussetzung. Es gilt: „First Come, First Served.“',
  },
  {
    start: '2024-08-03T17:30:00+02:00',
    end: '2024-08-03T18:30:00+02:00',
    title: 'Miura Ayme: Signierstunde',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-03T19:00:00+02:00',
    end: '2024-08-03T19:45:00+02:00',
    title: 'Ryota Kikuchi: Signierstunde',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-03T20:15:00+02:00',
    end: '2024-08-04T00:30:00+02:00',
    title: 'Ramen-Wok-Wok-Karaoke',
    description: 'Mit dem KOE-Karaoke-Team',
  },
  {
    start: '2024-08-04T11:00:00+02:00',
    end: '2024-08-04T12:00:00+02:00',
    title: 'Kashitaro Ito: Signierstunde & Merchandise-Sells',
    description:
      'Käufer von Produkten des Künstlers werden bevorzugt. Der Erwerb ist keine Voraussetzung. Es gilt: „First Come, First Served.“',
  },
  {
    start: '2024-08-04T12:45:00+02:00',
    end: '2024-08-04T13:45:00+02:00',
    title: 'Miura Ayme: Signierstunde',
    description: 'Es gilt das Prinzip: „First Come, First Served.“',
  },
  {
    start: '2024-08-04T14:30:00+02:00',
    end: '2024-08-04T15:30:00+02:00',
    title: 'Sengoku Youko: Signierstunde',
    description:
      'Achtung: Limitierte Plätze - es gilt: „First Come, First Served.“',
  },
  {
    start: '2024-08-04T16:00:00+02:00',
    end: '2024-08-04T17:00:00+02:00',
    title: 'Blue Exorcist: Signierstunde',
    description:
      'Achtung: Limitierte Plätze - es gilt: „First Come, First Served.“',
  },
  {
    start: '2024-08-04T17:15:00+02:00',
    end: '2024-08-04T18:30:00+02:00',
    title: 'Ramen-Wok-Wok-Karaoke',
    description: 'Mit dem KOE-Karaoke-Team',
  },
].map(getMapper('Ramen-Wok-Wok-Karaoke'));
