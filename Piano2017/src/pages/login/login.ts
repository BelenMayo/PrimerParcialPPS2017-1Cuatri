import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

usuario: string;
clave: string;

  constructor(public navCtrl: NavController) {  
  
  }

Login(){
if(this.usuario != "" && this.clave != "")
{
  this.navCtrl.push(TabsPage);
} else {
  alert("Ingrese usuario y clave");
}

}
}
