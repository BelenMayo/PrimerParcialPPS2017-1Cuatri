
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

  usuarioFB:  FirebaseListObservable<any>;
  usuario: string= null;

  constructor(public navCtrl: NavController, private vibration: Vibration, public database: AngularFireDatabase, 
    private navParams: NavParams) {
      this.usuarioFB = this.database.list('/usuarioFB')

      var traerPreg = this.database.list("/usuarioFB").subscribe(valor => {
      valor.forEach(v =>{

      });
        //this.usuario= valor[0].usuario;
        this.usuario= valor[valor.length-1].usuario;
      });

      console.log(this.usuario);
  }

  pasarPregunta(){
  this.vibration.vibrate(200);
    this.navCtrl.push(TriviaUno, {
        usuario: this.usuario,
      });
  }
}
