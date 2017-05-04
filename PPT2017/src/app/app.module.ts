import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PPT1 } from '../pages/PPT1/PPT1';
import { PPT2 } from '../pages/PPT2/PPT2';
import { PPT3 } from '../pages/PPT3/PPT3';
import { Jugadas } from '../pages/jugadas/jugadas';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
    apiKey: "AIzaSyDfqEvLRgSAean-jPjhZv7EtUjDBNe8Qio",
    authDomain: "ppt2017-77a09.firebaseapp.com",
    databaseURL: "https://ppt2017-77a09.firebaseio.com",
    projectId: "ppt2017-77a09",
    storageBucket: "ppt2017-77a09.appspot.com",
    messagingSenderId: "357475799541"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    PPT1,
    PPT2,
    PPT3,
    Jugadas
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
    LoginPage,
    TabsPage,
    PPT1,
    PPT2,
    PPT3,
    Jugadas
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
