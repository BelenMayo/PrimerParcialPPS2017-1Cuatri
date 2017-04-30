import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-jugadas',
  templateUrl: 'jugadas.html'
})
export class Jugadas {

  contador: any = null;
  respuesta: any= null;

  constructor(public navCtrl: NavController, private vibration: Vibration, private navParams: NavParams) {
    let contador = navParams.get('contador');
    let respuesta = navParams.get('respuesta');
    this.contador = contador;
    this.respuesta = respuesta;

    if(this.contador == null){
      this.contador= 0;
    }
  }

  volverAJugar(valor){
    this.navCtrl.push(HomePage);
  }

}
