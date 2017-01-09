import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';

@Component({
  templateUrl: 'barcode.html'
})
export class BarcodePage {
  public text: String;
  public format: String;
  constructor(public navCtrl: NavController) {
  }
  scan() {
     BarcodeScanner.scan().then((result) => {
      if (!result.cancelled) {
        alert("text:" + result.text);
        alert("format: " + result.format);
      }
      alert("success");
    }).catch((err) => {
      alert(err);
    })
  }
  scan1(){
    BarcodeScanner.scan().then((barcodeData) => {
     alert("success");
    }, (err) => {
      alert(err);
    });
  }

}