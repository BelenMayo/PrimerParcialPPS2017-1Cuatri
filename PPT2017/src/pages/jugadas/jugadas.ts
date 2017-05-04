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

  contador: any = null;
  usuario: any= null;

  jugadas: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public database: AngularFireDatabase, private vibration: Vibration, private navParams: NavParams) {
    let contador = navParams.get('contador');
    this.contador = contador;

    this.jugadas = this.database.list('/jugadas')

    if(this.contador == null){
      this.contador= 0;
    }
  }

  volverAJugar(valor){
    this.navCtrl.push(HomePage);
  }

}
