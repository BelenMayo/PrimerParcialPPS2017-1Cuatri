import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

import { TriviaDos } from '../trivia2/trivia2'

@Component({
  selector: 'page-about',
  templateUrl: 'trivia1.html'
})
export class TriviaUno {

  pregunta1: FirebaseListObservable<any>;
  pregunta: string= "";

  constructor(public navCtrl: NavController, private vibration: Vibration, public database: AngularFireDatabase,) {
    this.pregunta1 = this.database.list('/Pregunta1')

    this.pregunta = this.pregunta;

    this.pregunta1.subscribe(console.log);
  }

  //updateTask( task ){
  //  setTimeout(()=>{
  //    this.Pregunta1.update( task.$key,{
  //      title: task.title,
  //    done: task.done
  //    });
  //  },1);
  //}

  pasarPregunta(){
  this.vibration.vibrate(500);
  this.navCtrl.push(TriviaDos);
  }

}
