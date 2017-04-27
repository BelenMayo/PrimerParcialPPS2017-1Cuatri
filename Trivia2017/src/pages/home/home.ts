

import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import { Vibration } from '@ionic-native/vibration';
import * as $ from 'jquery'

import { TriviaUno } from '../trivia1/trivia1'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pregunta1: FirebaseListObservable<any>;
  pregunta: string= "";
    
  constructor(public navCtrl: NavController, private vibration: Vibration, public database: AngularFireDatabase,) {
    this.pregunta1 = this.database.list('/Pregunta1')
  }

  pasarPregunta(){
  this.vibration.vibrate(200);
  this.navCtrl.push(TriviaUno);
  }

}
