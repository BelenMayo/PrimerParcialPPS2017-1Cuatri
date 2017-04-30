import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import * as $ from 'jquery'
import { NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

import { TriviaTres } from '../trivia3/trivia3'

@Component({
  selector: 'page-pregunta2',
  templateUrl: 'trivia2.html'
})
export class TriviaDos {

  contador: any = null;
  usuario: any= null;
  jugadas: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, private vibration: Vibration, public alertCtrl: AlertController,
    public database: AngularFireDatabase, private navParams: NavParams) {
    this.jugadas = this.database.list('/jugadas')
    let contador = navParams.get('contador');
    let usuario = navParams.get('usuario');
    this.contador = contador;
    this.usuario = usuario;
  }


  pasarPregunta(valor){

      this.jugadas.push({
          jugada: valor,
          usuario: this.usuario,
      });

  if(valor != "8"){
    this.vibration.vibrate([200,100,200]);
  } else {
    this.vibration.vibrate(300);
    this.contador++;
  }

  this.navCtrl.push(TriviaTres, {
      contador: this.contador,
      usuario: this.usuario,
  });
  }

}
