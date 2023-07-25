import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { UserComponent } from './user/user.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  exports: [UserComponent],
})
export class AuthModule {}
