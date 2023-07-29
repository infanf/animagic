import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    const { user } =
      require('@angular/fire/auth') as typeof import('@angular/fire/auth');
    this.user$ = user(this.auth);
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
