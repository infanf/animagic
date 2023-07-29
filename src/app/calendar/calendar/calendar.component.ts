import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Location, eventColor, locations } from '@models/event';
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
      left: 'prev,next',
      center: 'title',
      right: 'timeGridThreeDay,timeGridDay', // user can switch between the two
    },
    height: 'auto',
    navLinks: true,
    slotMinTime: '11:00:00',
    slotMaxTime: '25:00:00',
    initialDate: '2023-08-04',
    validRange: {
      start: '2023-08-04',
      end: '2023-08-07',
    },
    allDaySlot: false,
    views: {
      timeGridThreeDay: {
        buttonText: '3 days',
        type: 'timeGrid',
        duration: { days: 3 },
      },
    },
  };

  showMyEvents = false;
  locations = locations;
  selectedLocations: Location[] = [];
  events$: Observable<EventInput>;

  constructor(private firebase: FirebaseService) {
    this.events$ = this.firebase.events$.asObservable().pipe(
      map((events) =>
        events.map(
          (event) =>
            ({
              id: event.id,
              title: event.title,
              start: event.start.toDate(),
              end: event.end.toDate(),
              extendedProps: {
                description: event.description,
                location: event.location,
              },
              color: eventColor(event.location),
            } as EventInput)
        )
      )
    );
    const self = this;
    this.calendarOptions.eventClick = function (info) {
      self.toggleEvent(info.event.id);
    };
    this.firebase.locations$.asObservable().subscribe((locations) => {
      this.selectedLocations = locations;
    })
  }

  toggleEvent(eventId: string) {
    this.firebase.myEventsToggle = eventId;
  }

  toggleShowMyEvents() {
    this.showMyEvents = !this.showMyEvents;
    this.firebase.showMyEvents = this.showMyEvents;
  }

  filterLocation(location: Location) {
    this.firebase.toggleLocation = location;
  }

  locationSelected(location: Location) {
    return this.selectedLocations.includes(location);
  }
}
