import { Component } from '@angular/core';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  events$ = this.firebase.events$;
  constructor(private firebase: FirebaseService) {
  }
}
