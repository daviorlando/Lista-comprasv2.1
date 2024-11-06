import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button mat-raised-button (click)="auth.logout({ logoutParams: { returnTo: document.location.origin } })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button mat-raised-button (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>
  `,
  // templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
    constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
  }
