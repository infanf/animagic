import { Component, OnDestroy } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from '@services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnDestroy {
  user$: Observable<User | null>;
  userSubscription: Subscription;

  constructor(private auth: AuthService) {
    this.user$ = this.auth.user$;
    this.userSubscription = this.auth.user$.subscribe((aUser: User | null) => {
      console.log(aUser);
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

  logout() {
    this.auth.logout();
  }
}
