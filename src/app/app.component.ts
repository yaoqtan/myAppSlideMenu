import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/home/page1';
import { Page2 } from '../pages/list/page2';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { TabPage } from '../pages/tab/tabs';
import { DevicePage } from '../pages/device/device';
import { CameraPage } from '../pages/camera/camera';
import { BarcodePage } from '../pages/barcode/barcode';
import { TouchIdPage } from '../pages/touchId/touchId';
import { LoginOut } from '../pages/Fail/loginOut';

//import { DateTime } from '../pages/date/date';
//import { Select } from '../pages/select/select';

import { TouchID } from 'ionic-native';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  //rootPage:any = CheckboxPage;
  pages: Array<{title: string, component: any}>;

  demo:any;
  demo1:any;

  constructor(public platform: Platform) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'home apge', component: Page1 },
      { title: 'list', component: Page2 },
      { title: 'checkbox',component:CheckboxPage},
      {title:'device',component:DevicePage},
      {title:'camera',component:CameraPage},
      {title:'barcode',component:BarcodePage},
      {title:'tab',component:TabPage},
      {title:'touchId',component:TouchIdPage}
      //{title: 'date',component:DateTime},
      //{title: 'search',component:Search}
      //{title: 'select',component:Select}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.touchIDs();
      StatusBar.styleDefault();
      Splashscreen.hide();
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
       this.rootPage = Page1;

       },
       err => {
       console.error('Error', err);
       this.demo1='Error';
       this.rootPage = LoginOut;
       }
     );
   }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
