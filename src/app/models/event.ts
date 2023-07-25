import { Timestamp } from "@angular/fire/firestore";

export interface AnimagicEvent {
    id?: string;
  start: Timestamp;
  end: Timestamp;
  title: string;
  description: string;
  location: string;
}

export function eventColor(location: string) {
    return location === 'Kino 1' ? colors[0] : colors[1];
}

const colors = [
    "#70d6ff",
    "#ff70a6",
    "#ff9770",
    "#ffd670",
    "#e9ff70",
]
