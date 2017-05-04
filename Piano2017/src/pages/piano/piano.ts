import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import * as $ from 'jquery'

@Component({
  selector: 'page-piano',
  templateUrl: 'piano.html'
})
export class Piano {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private vibration: Vibration) {
  }

  pasarPregunta(valor){

  if(valor != "perro"){
    this.vibration.vibrate([200,100,200]);
  } else {
    this.vibration.vibrate(300);
  }

  }
}
