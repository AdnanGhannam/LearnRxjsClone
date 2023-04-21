import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIComponentsModule } from './ui-components/ui-components.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';

const firebaseConfig = {
  apiKey: "AIzaSyDO9aZnZt8AIWvZ96pFUbVeSi6U3KPrWwc",
  authDomain: "angular-485f2.firebaseapp.com",
  projectId: "angular-485f2",
  storageBucket: "angular-485f2.appspot.com",
  messagingSenderId: "437904535116",
  appId: "1:437904535116:web:26117f8c4c90c6f04c0ee9"
};

const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
      {
        scopes: [
          'public_profile',
          'email',
          'user_likes',
          'user_friends'
        ],
        customParameters: {
          'auth_type': 'reauthenticate'
        },
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
      },
      {
        requireDisplayName: false,
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
      },
    ],
    // //term of service
    // tosUrl: '<your-tos-link>',
    // //privacy url
    // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    //credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIComponentsModule,
    SharedModule,
    FormsModule,
    // firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
