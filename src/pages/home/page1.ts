import { Component } from '@angular/core';
import { NavController,AlertController,ActionSheetController  } from 'ionic-angular';

@Component({
  templateUrl: 'page1.html'
})
export class Page1 {
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController) {}
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
