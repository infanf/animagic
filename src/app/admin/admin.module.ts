import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import { EditComponent } from './events/edit/edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full',
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'events/:id',
        component: EditComponent,
      },
    ]),
  ]
})
export class AdminModule { }
