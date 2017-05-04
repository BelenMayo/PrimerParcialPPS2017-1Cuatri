import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import { Vibration } from '@ionic-native/vibration';
import * as $ from 'jquery'

import { PPT1 } from '../PPT1/PPT1'

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
        this.usuario= valor[0].usuario;
      });

      console.log(this.usuario);
  }
  
  comenzarJuego(){
  this.vibration.vibrate(200);
    this.navCtrl.push(PPT1, {
        usuario: this.usuario,
      });
  }

}
