import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  //pregunta1: FirebaseListObservable<any>;

  //onSuccess: any= null; 
  //onError: any= null; 

  contador: any= null; 
  respuesta: any= null;

  constructor(public navCtrl: NavController, private vibration: Vibration, private nativeAudio: NativeAudio,public database: AngularFireDatabase,) {
    //this.pregunta1 = this.database.list('/Pregunta1')
  }

  pasarPregunta(valor){

  if(valor != "perro"){
    this.vibration.vibrate([200,100,200]);
    this.respuesta= valor;
    //this.nativeAudio.preloadSimple('melodia', './assets/sound/sonido.mp3')
    //this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(this.onSuccess, this.onError);
    //this.nativeAudio.play('melodia')
  } else {
    this.vibration.vibrate(300);
    this.respuesta= valor;
    //this.nativeAudio.preloadSimple('melodia', './assets/sound/sonido.mp3')
    //this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(this.onSuccess, this.onError);
    //this.nativeAudio.play('melodia');
    this.contador++;
  }
  
  this.navCtrl.push(TriviaDos, {
      contador: this.contador,
      respuesta: this.respuesta,
    });

  }

}
