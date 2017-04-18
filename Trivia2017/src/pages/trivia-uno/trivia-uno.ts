import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TriviaDos } from '../trivia-dos/trivia-dos';

interface Alber { something: string; }

@Component({
  selector: 'page-trivia-uno',
  templateUrl: 'trivia-uno.html',
})
export class TriviaUno {

 preguntas : number;
 trivia : string;
  opcion1 = document.getElementById('opcion1');
  opcion2 = document.getElementById("opcion2");
  opcion3 = document.getElementById("opcion3");
 

 
  constructor(public navCtrl: NavController) {
  }

Opciones(){

  console.log("hols");
  if(this.preguntas == null)
  {
    this.trivia = "¿En que año se celebro el pacto de olivos";
    this.opcion1.setAttribute("value", "en 1995");
    this.opcion2.setAttribute("value","en 1994");
    this.opcion3.setAttribute("value", "en 1996");
    
  }
     
  
  }

}
