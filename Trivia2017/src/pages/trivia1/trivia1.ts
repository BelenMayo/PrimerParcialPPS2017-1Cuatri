import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import * as $ from 'jquery'

import { TriviaDos } from '../trivia2/trivia2'

@Component({
  selector: 'page-pregunta1',
  templateUrl: 'trivia1.html'
})
export class TriviaUno {

  //onSuccess: any= null; 
  //onError: any= null; 

  contador: any= null; 
  usuario: any= null;
  jugadas: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private navParams: NavParams,
    public database: AngularFireDatabase, private vibration: Vibration, private nativeAudio: NativeAudio) {
      this.jugadas = this.database.list('/jugadas');
      let usuario = navParams.get('usuario');
      this.usuario= usuario;
      this.nativeAudio.preloadSimple('incorrecto', 'assets/sound/incorrecto.mp3');
      this.nativeAudio.preloadSimple('correcto', 'assets/sound/correcto.mp3');
  }

  pasarPregunta(valor){

      this.jugadas.push({
          jugada: valor,
          usuario: this.usuario,
      });

  if(valor != "perro"){
    this.nativeAudio.play('incorrecto',() => console.log("Incorrecto"));
    this.vibration.vibrate([200,100,200]);
  } else {
    this.nativeAudio.play('correcto', () => console.log("Correcto"));
    this.vibration.vibrate(300);
    this.contador++;
  }
  
  this.navCtrl.push(TriviaDos, {
      contador: this.contador,
      usuario: this.usuario,
    });

  }

}
