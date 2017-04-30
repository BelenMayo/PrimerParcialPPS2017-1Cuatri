import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import * as $ from 'jquery'
import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about'

@Component({
  selector: 'page-pregunta3',
  templateUrl: 'trivia3.html'
})
export class TriviaTres {

  contador: any = null;
  respuesta: any= null;

  constructor(public navCtrl: NavController, private vibration: Vibration, private navParams: NavParams) {
    let contador = navParams.get('contador');
    let respuesta = navParams.get('respuesta');
    this.contador = contador;
    this.respuesta = respuesta;
  }

  pasarPregunta(valor){

  if(valor != "cambia de color"){
    this.vibration.vibrate([200,100,200]);
    this.respuesta= valor;
  } else {
    this.vibration.vibrate(300);
    this.respuesta= valor;
    this.contador++;
  }

  this.navCtrl.push(AboutPage, {
      contador: this.contador,
      respuesta: this.respuesta,
    });
  }

}
