import { Component, OnDestroy } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnDestroy {
  user$: Observable<User | null>;
  userSubscription: Subscription;
  
  constructor(private auth: Auth) {
    const { user } = require('@angular/fire/auth') as typeof import('@angular/fire/auth');
    this.user$ = user(this.auth);
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(aUser);
    });
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.userSubscription.unsubscribe();
  }

  async loginWithGoogle() {
    const { GoogleAuthProvider, signInWithPopup } = await import(
      '@angular/fire/auth'
    );
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider);
  }

  async logout() {
    const { signOut } = await import('@angular/fire/auth');
    await signOut(this.auth);
  }
}
