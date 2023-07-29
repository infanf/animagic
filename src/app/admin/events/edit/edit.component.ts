import { Component } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AnimagicEvent } from '@models/event';
import { FirebaseService } from '@services/firebase.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  event?: AnimagicEvent;
  constructor(
    private firebase: FirebaseService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(async (params) => {
      const id = String(params.get('id'));
      console.log(id);
      this.firebase.events$.subscribe((events) => {
        this.event =
          events.find((event) => event.id === id) ??
          ({
            location: 'Mozartsaal',
            title: '',
            start: new Timestamp(0, 0),
            end: new Timestamp(0, 0),
            description: '',
          } as AnimagicEvent);
      });
    });
  }

  async save() {
    if (!this.event) return;
    await this.firebase.updateEvent(this.event);
  }
}
