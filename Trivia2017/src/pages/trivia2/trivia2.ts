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
  respuesta: any= null;

  constructor(public navCtrl: NavController, private vibration: Vibration, private navParams: NavParams) {
    let contador = navParams.get('contador');
    let respuesta = navParams.get('respuesta');
    this.contador = contador;
    this.respuesta = respuesta;
  }


  pasarPregunta(valor){

  if(valor != "8"){
    this.vibration.vibrate([200,100,200]);
    this.respuesta= valor;
  } else {
    this.vibration.vibrate(300);
    this.respuesta= valor;
    this.contador++;
  }

  this.navCtrl.push(TriviaTres, {
      contador: this.contador,
      respuesta: this.respuesta,
  });
  }

}
