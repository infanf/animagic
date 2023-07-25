import { Component } from '@angular/core';
import {
  CalendarOptions,
  EventApi,
  EventInput,
  EventSourceInput,
} from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import { eventColor } from '@models/event';
import { FirebaseService } from '@services/firebase.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridThreeDay',
    plugins: [timeGridPlugin],
    headerToolbar: {
      left: '',
      center: 'title',
      right: 'timeGridThreeDay,timeGridDay', // user can switch between the two
    },
    slotMinTime: '11:00:00',
    slotMaxTime: '25:00:00',
    initialDate: '2023-08-04',
    allDaySlot: false,
    views: {
      timeGridThreeDay: {
        buttonText: '3 days',
        type: 'timeGrid',
        duration: { days: 3 },
      },
    },
  };

  events$: Observable<EventInput>;

  constructor(private firebase: FirebaseService) {
    this.events$ = this.firebase.events.pipe(
      map((events) =>
        events.map((event) => {
          const eventApi = {
            id: event.id,
            title: event.title,
            start: event.start.toDate(),
            end: event.end.toDate(),
            extendedProps: {
              description: event.description,
              location: event.location,
            },
            textColor: '#000',
            color: eventColor(event.location)
          } as EventInput;
          return eventApi;
        })
      )
    );
  }

  // get events$(): Observable<EventSourceInput {}
}
