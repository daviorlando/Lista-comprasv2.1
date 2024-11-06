import { ApplicationConfig, ValueProvider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig,
} from '@angular/material/snack-bar';

import { provideAuth0 } from '@auth0/auth0-angular';


const SNACK_BAR_CONFIG: ValueProvider = {
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  } as MatSnackBarConfig,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth0({
      domain: 'dev-ui0ec42n4w0m11wd.us.auth0.com',
      clientId: 'Pp9fSiwe49yUxhM67NazD9KrXO7ImjB7',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    SNACK_BAR_CONFIG,

  ],
};
