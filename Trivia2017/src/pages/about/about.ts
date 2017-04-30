import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { HomePage } from '../home/home';
import { Jugadas } from '../jugadas/jugadas';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

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

  verJugadas(valor){
    this.navCtrl.push(Jugadas, {
      contador: this.contador,
      respuesta: this.respuesta,
    });
  }

  volverAJugar(valor){
    this.navCtrl.push(HomePage);
  }

}
