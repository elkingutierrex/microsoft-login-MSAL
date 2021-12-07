import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';


export function MsalInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth:{
      clientId : 'a37db82c-e5c5-42ce-ab58-7b333367261a',
      redirectUri: 'http://localhost:4200',
      // tenantId

    }

  })
}

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    RestrictedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MsalInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
