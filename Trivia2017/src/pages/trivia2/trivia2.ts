import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { TriviaTres } from '../trivia3/trivia3'

@Component({
  selector: 'page-about',
  templateUrl: 'trivia2.html'
})
export class TriviaDos {

  constructor(public navCtrl: NavController, private vibration: Vibration) {

  }

  pasarPregunta(){
    this.vibration.vibrate(500);
    this.navCtrl.push(TriviaTres);
  }

}
