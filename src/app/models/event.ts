import { Timestamp } from '@angular/fire/firestore';

export interface AnimagicEvent {
  id?: string;
  start: Timestamp;
  end: Timestamp;
  title: string;
  description: string;
  location: Location;
}

export function eventColor(location: Location) {
  switch (location) {
    case 'AnimagiC-Kino 1':
      return colors[0];
    case 'AnimagiC-Kino 2':
      return colors[1];
    case 'AnimagiC-Kino 3':
      return colors[2];
    // case 'AnimagiC-Kino 4':
    //   return colors[3];
    // case 'AnimagiC-Kino 5':
    //   return colors[4];
    case 'CineMagic 1':
      return colors[5];
    case 'CineMagic 2':
      return colors[6];
    case 'Mozartsaal':
      return colors[7];
    case 'Musensaal':
      return colors[8];
    case 'Crunchyroll Cinema':
      return colors[9];
  }
  return colors[10];
}

export const locations = [
    'Mozartsaal',
    'Musensaal',
    'Crunchyroll Cinema',
    'CineMagic 1',
    'CineMagic 2',
    'AnimagiC-Kino 1',
    'AnimagiC-Kino 2',
    'AnimagiC-Kino 3',
    // 'AnimagiC-Kino 4',
    // 'AnimagiC-Kino 5',
    'Ramen-Wok-Wok-Karaoke'
] as const;

export type Location = typeof locations[number];

const colors = [
  '#003f5c',
  '#58508d',
  '#bc5090',
  '#ff6361',
  '#ffa600',
  '#805300',
  '#c0a980',
  '#8097c0',
  '#c08097',
  '#ff5e00',
  '#97c080',
];
