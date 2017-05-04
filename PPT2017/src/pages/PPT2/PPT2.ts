import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import * as $ from 'jquery'
import { NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

import { PPT3 } from '../PPT3/PPT3'

@Component({
  selector: 'page-PPT2',
  templateUrl: 'PPT2.html'
})
export class PPT2 {

  contador: any = null;
  usuario: any= null;
  jugadas: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private vibration: Vibration, public alertCtrl: AlertController,
    public database: AngularFireDatabase, private navParams: NavParams, private nativeAudio: NativeAudio) {
    this.jugadas = this.database.list('/jugadas')
    let contador = navParams.get('contador');
    let usuario = navParams.get('usuario');
    this.contador = contador;
    this.usuario = usuario;
    this.nativeAudio.preloadSimple('incorrecto', 'assets/sound/incorrecto.mp3');
    this.nativeAudio.preloadSimple('correcto', 'assets/sound/correcto.mp3');
  }


  pasarJugada(valor){

      this.jugadas.push({
          jugada: valor,
          usuario: this.usuario,
      });

  if(valor != "Piedra"){
    this.nativeAudio.play('incorrecto',() => console.log("Incorrecto"));
    this.vibration.vibrate([200,100,200]);
  } else {
    this.nativeAudio.play('correcto', () => console.log("Correcto"));
    this.vibration.vibrate(300);
    this.contador++;
  }

  this.navCtrl.push(PPT3, {
      contador: this.contador,
      usuario: this.usuario,
  });
  }

}
