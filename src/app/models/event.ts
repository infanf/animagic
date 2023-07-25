import { Timestamp } from "@angular/fire/firestore";

export interface AnimagicEvent {
  start: Timestamp;
  end: Timestamp;
  title: string;
  description: string;
  location: string;
}
