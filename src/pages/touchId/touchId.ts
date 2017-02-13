/**
 * Created by gracelai on 9/1/17.
 */
import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';


import { TouchID } from 'ionic-native';

@Component({
  templateUrl: 'touchId.html'
})

export class TouchIdPage {
  title:string = "TouchID";
  touchId = TouchID;
  demo:any;
  demo1:any;


  constructor(public navCtrl: NavController) {
    TouchID
      .isAvailable()
      .then(
        res => {
          this.demo='available';
          console.log('TouchID is available!');
        },
        err => {
          console.error('TouchID is not available', err)
          this.demo='not available';
        }
      );

    TouchID.verifyFingerprint('Scan your fingerprint please')
      .then(
        res => {
          console.log('Ok', res);
          this.demo1='Ok';

        },
        err => {
          console.error('Error', err);
          this.demo1='Error';

        }
      );
  }



}


