import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import * as $ from 'jquery'
import { NavParams } from 'ionic-angular';

import { TriviaTres } from '../trivia3/trivia3'

@Component({
  selector: 'page-pregunta2',
  templateUrl: 'trivia2.html'
})
export class TriviaDos {

  contador: any = null;

  constructor(public navCtrl: NavController, private vibration: Vibration, private navParams: NavParams) {
    let contador = navParams.get('contador');
    this.contador = contador;
  }


  pasarPregunta(valor){

  if(valor != "8"){
    this.vibration.vibrate(600);
  } else {
    this.vibration.vibrate(200);
    this.contador++;
  }

  this.navCtrl.push(TriviaTres, {
      contador: this.contador,
  });
  }

}
