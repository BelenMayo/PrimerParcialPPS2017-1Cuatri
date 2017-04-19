import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Vibration } from '@ionic-native/vibration';
import { Flashlight } from '@ionic-native/flashlight';
import { AngularFireModule } from 'angularfire2';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { TriviaUno } from '../pages/trivia1/trivia1';
import { TriviaDos } from '../pages/trivia2/trivia2';
import { TriviaTres } from '../pages/trivia3/trivia3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
    apiKey: "AIzaSyA1rHekUrgssgismTU39tTK7GelEeyh2FY",
    authDomain: "trivia2017-ed94e.firebaseapp.com",
    databaseURL: "https://trivia2017-ed94e.firebaseio.com",
    projectId: "trivia2017-ed94e",
    storageBucket: "trivia2017-ed94e.appspot.com",
    messagingSenderId: "609382919586"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TriviaUno,
    TriviaDos,
    TriviaTres,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TriviaUno,
    TriviaDos,
    TriviaTres,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    Flashlight,
    AngularFireModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
