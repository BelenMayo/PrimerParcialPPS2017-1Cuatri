import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { AboutPage } from '../about/about'

@Component({
  selector: 'page-about',
  templateUrl: 'trivia3.html'
})
export class TriviaTres {

  constructor(public navCtrl: NavController, private vibration: Vibration) {

  }

  pasarPregunta(){
    this.vibration.vibrate(500);
    this.navCtrl.push(AboutPage);
  }

}
