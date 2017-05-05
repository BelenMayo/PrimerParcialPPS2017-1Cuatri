import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-jugadas',
  templateUrl: 'jugadas.html'
})
export class Jugadas {

  resultadoJuego: any = null;
  usuario: any= null;

  resultados: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public database: AngularFireDatabase, private vibration: Vibration, private navParams: NavParams) {
    let resultadoJuego = navParams.get('resultadoJuego');
    this.resultadoJuego = resultadoJuego;

    this.resultados = this.database.list('/resultados')
  }

  volverAJugar(){
    this.navCtrl.push(HomePage);
  }

}
