import { Component } from '@angular/core';
import 'rxjs/Rx'; 
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { TriviaUno } from '../trivia-uno/trivia-uno';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class Inicio {
  usuario = { nombre:''};
user : FirebaseListObservable<any[]>;

 constructor(public navCtrl: NavController,af: AngularFire) {
  this.user= af.database.list('/Usuarios');
  }

         Ingreso(){
           
          this.user.push({
            nombre:this.usuario.nombre
          })

          this.navCtrl.setRoot(TriviaUno);
        }
}
