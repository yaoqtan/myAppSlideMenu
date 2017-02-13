import { Component,OnInit} from '@angular/core';

import { NavController,AlertController,ActionSheetController,Platform } from 'ionic-angular';


import { TouchID,HTTP } from 'ionic-native';



@Component({
  templateUrl: 'page1.html'
})
export class Page1 implements OnInit{

  touchId = TouchID;
  demo:any;
  demo1:any;

  demoUrl:any = 'http://samplejsonapi.herokuapp.com/posts/1';
  demoData:any;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController,public platform:Platform) {
  this.initApp();


  }

  ngOnInit(){
    //this.touchIDs();
    //this.makeHttp();
  }

  initApp(){
    this.platform.ready().then(() =>{
      this.makeHttp();
    });
  }

  makeHttp(){
    HTTP.get(this.demoUrl, {}, {})
      .then(data => {
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
        this.demoData = data.data;

      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
        this.demoData = error.status;

      });
  }

  touchIDs(){
    TouchID
      .isAvailable()
      .then(
        res => {
          this.demo='available';
          console.log('TouchID is available!');
        },
        err => {
          console.error('TouchID is not available', err);
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

  mySlideOptions = {
    initialSlide: 1,
    loop: true
  };

   showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }



}
