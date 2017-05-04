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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private vibration: Vibration,
    private nativeAudio: NativeAudio) {
      this.nativeAudio.preloadSimple('caballo', 'assets/sound/caballo.mp3');
      this.nativeAudio.preloadSimple('vaca', 'assets/sound/vaca.mp3');
      this.nativeAudio.preloadSimple('oveja', 'assets/sound/oveja.mp3');
      this.nativeAudio.preloadSimple('cerdo', 'assets/sound/cerdo.mp3');
      this.nativeAudio.preloadSimple('gallo', 'assets/sound/gallo.mp3');
      this.nativeAudio.preloadSimple('pato', 'assets/sound/pato.mp3');
  }

  reproducirSonido(valor){

  if(valor == "Caballo"){
    this.nativeAudio.play('caballo', () => console.log("Caballo"));
    this.vibration.vibrate(300);
  }
  if(valor == "Vaca"){
    this.nativeAudio.play('vaca', () => console.log("Vaca"));
    this.vibration.vibrate(300);
  }
  if(valor == "Oveja"){
    this.nativeAudio.play('oveja', () => console.log("Oveja"));
    this.vibration.vibrate(300);
  }
  if(valor == "Cerdo"){
    this.nativeAudio.play('cerdo', () => console.log("Cerdo"));
    this.vibration.vibrate(300);
  }
  if(valor == "Gallo"){
    this.nativeAudio.play('gallo', () => console.log("Gallo"));
    this.vibration.vibrate(300);
  }
  if(valor == "Pato"){
    this.nativeAudio.play('pato', () => console.log("Pato"));
    this.vibration.vibrate(300);
  }

  }
}
