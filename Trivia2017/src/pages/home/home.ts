import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { Flashlight } from '@ionic-native/flashlight';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public vibration: Vibration, public flashlight: Flashlight) {

  }

  public HacerVibrar()
  {
    this.vibration.vibrate(3000);
  }

  public Parar()
  {
    this.vibration.vibrate(0);
  }


    public PrenderLinterna()
  {
    this.flashlight.switchOn();
  }

  public ApagarLinterna()
  {
    this.flashlight.switchOff();
  }

}
