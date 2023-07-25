import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: ':type',
        component: CalendarComponent,
      },
    ]),
  ]
})
export class CalendarModule { }
