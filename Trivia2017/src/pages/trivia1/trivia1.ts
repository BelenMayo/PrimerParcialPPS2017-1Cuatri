import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { TriviaDos } from '../trivia2/trivia2'

@Component({
  selector: 'page-about',
  templateUrl: 'trivia1.html'
})
export class TriviaUno {

  constructor(public navCtrl: NavController, private vibration: Vibration) {

  }

  pasarPregunta(){
  this.vibration.vibrate(500);
  this.navCtrl.push(TriviaDos);
  }

}
