import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import * as $ from 'jquery'

import { TriviaDos } from '../trivia2/trivia2'

@Component({
  selector: 'page-pregunta1',
  templateUrl: 'trivia1.html'
})
export class TriviaUno {

  pregunta1: FirebaseListObservable<any>;

  contador: any= null; 

  constructor(public navCtrl: NavController, private vibration: Vibration, public database: AngularFireDatabase,) {
    this.pregunta1 = this.database.list('/Pregunta1')
  }

  pasarPregunta(valor){

  if(valor != "perro"){
    this.vibration.vibrate(600);
  } else {
    this.vibration.vibrate(200);
    this.contador++;
  }
  
  this.navCtrl.push(TriviaDos, {
      contador: this.contador,
    });

  }

}
