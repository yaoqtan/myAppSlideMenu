import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/home/page1';
import { Page2 } from '../pages/list/page2';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { TabPage } from '../pages/tab/tabs';
import { DevicePage } from '../pages/device/device';
import { CameraPage } from '../pages/camera/camera';
import { BarcodePage } from '../pages/barcode/barcode'

//import { DateTime } from '../pages/date/date';
//import { Select } from '../pages/select/select';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  //rootPage:any = CheckboxPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    //this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'home apge', component: Page1 },
      { title: 'list', component: Page2 },
      { title: 'checkbox',component:CheckboxPage},
      {title:'device',component:DevicePage},
      {title:'camera',component:CameraPage},
      {title:'barcode',component:BarcodePage},
      {title:'tab',component:TabPage}
      //{title: 'date',component:DateTime},
      //{title: 'search',component:Search}
      //{title: 'select',component:Select}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
