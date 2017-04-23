import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
foto:string="assets/image/IMG_20160816_012249.JPG";
  constructor(public navCtrl: NavController) {

  }

}
