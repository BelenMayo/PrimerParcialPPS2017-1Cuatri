import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import * as $ from 'jquery'

import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

usuario: string= null;
titulo: string= "Atención"
mensaje:string= "Ingrese usuario y contraseña"
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {  
  
  }

Login(){

if($("#usuario").val() != "" && $("#clave").val() != "")
{
  this.usuario= $("#usuario").val();

  this.navCtrl.push(TabsPage, {
      usuario: this.usuario,
    });
} else {
  let ventana = this.alertCtrl.create({
      title: this.titulo,
      message: this.mensaje,
      buttons:[
        {
          text: "Aceptar",
          handler: data => {
            console.log('Mensaje de Alerta');
            }
          }
        ]

      });
      ventana.present(ventana);
    }
}

}
