
import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import { Vibration } from '@ionic-native/vibration';
import * as $ from 'jquery'

import { TriviaUno } from '../trivia1/trivia1'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: string= null;

  constructor(public navCtrl: NavController, private vibration: Vibration, public database: AngularFireDatabase, 
    private navParams: NavParams) {
      let usuario = navParams.get('usuario');
      this.usuario= "Fernando";
  }

  pasarPregunta(){
  this.vibration.vibrate(200);
  this.navCtrl.push(TriviaUno, {
      usuario: this.usuario,
    });
  }
}
