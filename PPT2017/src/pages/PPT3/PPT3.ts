import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import * as $ from 'jquery'
import { NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

import { AboutPage } from '../about/about'


@Component({
  selector: 'page-PPT3',
  templateUrl: 'PPT3.html'
})
export class PPT3 {

  contador: any= null; 
  usuario: any= null;

  titulo: string= "Resultado"
  mensaje: string= ""
  
  eleccionMaquina: any= null;
  contadorDeEmpates: any= 0;
  contadorDeGanadas: any= 0;
  contadorDePerdidas: any= 0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private vibration: Vibration, 
      private navParams: NavParams, private nativeAudio: NativeAudio) {
    let usuario = navParams.get('usuario');
    let contadorDeEmpates = navParams.get('contadorDeEmpates');
    let contadorDeGanadas = navParams.get('contadorDeGanadas');
    let contadorDePerdidas = navParams.get('contadorDePerdidas');
    this.usuario = usuario;
    this.contadorDeEmpates = contadorDeEmpates;
    this.contadorDeGanadas = contadorDeGanadas;
    this.contadorDePerdidas= contadorDePerdidas;
    this.nativeAudio.preloadSimple('correcto', 'assets/sound/correcto.mp3');
    this.nativeAudio.preloadSimple('incorrecto', 'assets/sound/incorrecto.mp3');
  }

 /* Siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió. */
jugar(valor){

   this.eleccionMaquina = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   //alert("Maquina: "+ this.eleccionMaquina);

      if(valor == ("Piedra")){
        switch(this.eleccionMaquina) {
          case 1:
            this.mensaje= "Hubo un empate!! La maquina habia seleccionado Piedra."
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
            this.contadorDeEmpates++;
            break;
          case 2:
            this.mensaje= "Perdiste!! La maquina habia seleccionado Papel.";
                  let ventana2 = this.alertCtrl.create({
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
                  ventana2.present(ventana2);
            this.nativeAudio.play('incorrecto',() => console.log("Incorrecto"));
            this.vibration.vibrate([200,100,200]);
            this.contadorDePerdidas++;
            break;
          case 3:
          this.mensaje= "Ganaste!! La maquina habia seleccionado Tijera.";
                  let ventana3 = this.alertCtrl.create({
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
                  ventana3.present(ventana3);
            this.nativeAudio.play('correcto', () => console.log("Correcto"));
            this.vibration.vibrate(300);
            this.contadorDeGanadas++;
          break; 
        }
      }

      if(valor == ("Papel")){
        switch(this.eleccionMaquina) {
          case 1:     
          this.mensaje= "Ganaste!! La maquina habia seleccionado Piedra.";
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
            this.nativeAudio.play('correcto', () => console.log("Correcto"));
            this.vibration.vibrate(300);
            this.contadorDeGanadas++;
            break;
          case 2:
          this.mensaje= "Hubo un empate!! La maquina habia seleccionado Papel.";
                  let ventana2 = this.alertCtrl.create({
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
                  ventana2.present(ventana2);
            this.contadorDeEmpates++;
            break;
          case 3:
          this.mensaje= "Perdiste!! La maquina habia seleccionado Tijera.";
                  let ventana3 = this.alertCtrl.create({
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
                  ventana3.present(ventana3);
            this.nativeAudio.play('incorrecto',() => console.log("Incorrecto"));
            this.vibration.vibrate([200,100,200]);
            this.contadorDePerdidas++;
            break; 
        }
      }

      if(valor == ("Tijera")){
        switch(this.eleccionMaquina) {
          case 1:
            this.mensaje= "Perdiste!! La maquina habia seleccionado Piedra.";
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
            this.nativeAudio.play('incorrecto',() => console.log("Incorrecto"));
            this.vibration.vibrate([200,100,200]);
            this.contadorDePerdidas++;
            break;
          case 2:
          this.mensaje= "Ganaste!! La maquina habia seleccionado Papel.";
                  let ventana2 = this.alertCtrl.create({
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
                  ventana2.present(ventana2);
            this.nativeAudio.play('correcto', () => console.log("Correcto"));
            this.vibration.vibrate(300);
            this.contadorDeGanadas++;
            break;
          case 3:
          this.mensaje= "Hubo un empate!! La maquina habia seleccionado Tijera.";
                  let ventana3 = this.alertCtrl.create({
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
                  ventana3.present(ventana3);
            this.contadorDeEmpates++;
            break; 
        }
      }

        this.navCtrl.push(AboutPage, {
            usuario: this.usuario,
            contadorDeEmpates: this.contadorDeEmpates,
            contadorDeGanadas: this.contadorDeGanadas,
            contadorDePerdidas: this.contadorDePerdidas
          });
  }
}
