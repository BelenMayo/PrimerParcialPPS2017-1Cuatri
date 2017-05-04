import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import * as $ from 'jquery'
import { NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

import { AboutPage } from '../about/about'


@Component({
  selector: 'page-PPT3',
  templateUrl: 'PPT3.html'
})
export class PPT3 {

  contador: any = null;
  usuario: any= null;
  jugadas: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public database: AngularFireDatabase, 
  private vibration: Vibration, private navParams: NavParams, private nativeAudio: NativeAudio) {
    this.jugadas = this.database.list('/jugadas')
    let contador = navParams.get('contador');
    let usuario = navParams.get('usuario');
    this.contador = contador;
    this.usuario = usuario;
    this.nativeAudio.preloadSimple('correcto', 'assets/sound/correcto.mp3');
    this.nativeAudio.preloadSimple('incorrecto', 'assets/sound/incorrecto.mp3');
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

  this.navCtrl.push(AboutPage, {
      contador: this.contador,
      usuario: this.usuario,
    });
  }

}
