import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: '',
            redirectTo: 'calendar',
            pathMatch: 'full',
        },
        {
            path: 'calendar',
            loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
