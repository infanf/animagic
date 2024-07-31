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
    this.firebase.addEvents(mozartsaal);
    this.firebase.addEvents(musensaal);
    this.firebase.addEvents(crunchyroll);
    this.firebase.addEvents(cinemagic1);
    this.firebase.addEvents(cinemagic2);
  }

  clear() {
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
    description: 'Live-Musik-Performance, Talk, Q&A & Gewinnspiel mit dem [Oshi No Ko]-Anime-Team',
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
    start: '2024-08-04T15:30:00+02:00',
    end: '2024-08-04T16:15:00+02:00',
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
    description: 'Ep. 1 & 13 A+B, OmU, ca. 50 Min., FSK: 16'
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
    start: '2024-08-03T20:0:00+02:00',
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
