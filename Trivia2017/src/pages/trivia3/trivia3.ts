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

  constructor(public navCtrl: NavController, private vibration: Vibration, private navParams: NavParams) {
    let contador = navParams.get('contador');
    this.contador = contador;
  }

  pasarPregunta(valor){

  if(valor != "cambia de color"){
    this.vibration.vibrate(600);
  } else {
    this.vibration.vibrate(200);
    this.contador++;
  }

  this.navCtrl.push(AboutPage, {
      contador: this.contador,
    });
  }

}
