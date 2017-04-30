import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import * as $ from 'jquery'
import { NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';


import { AboutPage } from '../about/about'

@Component({
  selector: 'page-pregunta3',
  templateUrl: 'trivia3.html'
})
export class TriviaTres {

  contador: any = null;
  usuario: any= null;
  jugadas: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public database: AngularFireDatabase, private vibration: Vibration, private navParams: NavParams) {
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

  if(valor != "cambia de color"){
    this.vibration.vibrate([200,100,200]);
  } else {
    this.vibration.vibrate(300);
    this.contador++;
  }

  this.navCtrl.push(AboutPage, {
      contador: this.contador,
      usuario: this.usuario,
    });
  }

}
