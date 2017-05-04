
import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import { Vibration } from '@ionic-native/vibration';
import * as $ from 'jquery'

import { Piano } from '../piano/piano'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private vibration: Vibration, private navParams: NavParams) {
  }

  comenzarJuego(){
    this.vibration.vibrate(200);
    this.navCtrl.push(Piano);
  }
}
