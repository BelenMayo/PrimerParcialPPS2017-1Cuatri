

import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import { Vibration } from '@ionic-native/vibration';

import { TriviaUno } from '../trivia1/trivia1'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public database: AngularFireDatabase,
    private vibration: Vibration
  ) {
    this.tasks = this.database.list('/tasks')
  }

  createTask(){
    let newTaskModal = this.alertCtrl.create({
      title: 'New Task',
      message: "Enter a title for your new task",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.tasks.push({
              title: data.title,
              done: false
            });
          }
        }
      ]
    });
    newTaskModal.present( newTaskModal );
  }

  updateTask( task ){
    setTimeout(()=>{
      this.tasks.update( task.$key,{
        title: task.title,
        done: task.done
      });
    },1);
  }

  removeTask( task ){
    this.tasks.remove( task );
  }

  vibrar(){
    this.vibration.vibrate(3000);
  }

  detenerVibrar(){
    this.vibration.vibrate(0);
  }

  pasarPantalla(){
        this.navCtrl.push(TriviaUno);
  }
}
