import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

import { HomePage } from '../home/home';
import { Jugadas } from '../jugadas/jugadas';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  resultados  : FirebaseListObservable<any>;
  usuario: any= null;
  contadorDeEmpates: any= 0;
  contadorDeGanadas: any= 0;
  contadorDePerdidas: any= 0;

  resultadoJuego: any= "";

  constructor(public navCtrl: NavController, private vibration: Vibration, private navParams: NavParams,
      public database: AngularFireDatabase, ) {
    this.resultados = this.database.list('/resultados');
    let usuario = navParams.get('usuario');
    let contadorDeEmpates = navParams.get('contadorDeEmpates');
    let contadorDeGanadas = navParams.get('contadorDeGanadas');
    let contadorDePerdidas = navParams.get('contadorDePerdidas');
    this.usuario = usuario;
    this.contadorDeEmpates = contadorDeEmpates;
    this.contadorDeGanadas = contadorDeGanadas;
    this.contadorDePerdidas= contadorDePerdidas;

      if(this.contadorDeEmpates >= 2){
          this.resultadoJuego= "Empatado";
      }
      else if(this.contadorDeGanadas >= 2){
          this.resultadoJuego= "Ganado";
      }
      else if(this.contadorDePerdidas >= 2){
          this.resultadoJuego= "Perdido";
      }
      else{
          this.resultadoJuego= "Empatado";
      }

      var hoy = new Date();
      var dd = hoy.getDate();
      var mm = hoy.getMonth()+1; 
      var yyyy = hoy.getFullYear();
      var fecha:string;

      if(dd<10) {
        fecha ='0'+ dd + "/"
      } 
      else
        fecha = dd + "/"
      if(mm<10) {
        fecha= fecha + '0' + mm + "/"
      } 
      else
        fecha = fecha + mm + "/"

      fecha = fecha + yyyy;
      
        this.resultados.push({
            usuario: this.usuario,
            resultado: this.resultadoJuego,
            fecha: fecha,
        });
   }

  verJugadas(valor){
    this.navCtrl.push(Jugadas, {
        resultadoJuego: this.resultadoJuego,
    });
  }

  volverAJugar(valor){
    this.navCtrl.push(HomePage);
  }

}