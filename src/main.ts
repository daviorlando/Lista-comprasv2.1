import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAuth0 } from '@auth0/auth0-angular';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// bootstrapApplication(AppComponent,  {
//   providers: [
//     provideAuth0({
//       domain: 'dev-ui0ec42n4w0m11wd.us.auth0.com',
//       clientId: 'Pp9fSiwe49yUxhM67NazD9KrXO7ImjB7',
//       authorizationParams: {
//         redirect_uri: window.location.origin
//       }
//     }),
//   ]
// });