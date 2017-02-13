import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/home/page1';
import { Page2 } from '../pages/list/page2';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { TabPage } from '../pages/tab/tabs';
import { DevicePage } from '../pages/device/device';
import { CameraPage } from '../pages/camera/camera';
import { BarcodePage } from '../pages/barcode/barcode';
import { TouchIdPage } from '../pages/touchId/touchId';
import { LoginOut } from '../pages/Fail/loginOut'

//import {TouchID} from 'ionic-native';

//import { DateTime } from '../pages/date/date';
//import { Select } from '../pages/select/select';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    CheckboxPage,
    TabPage,
    DevicePage,
    CameraPage,
    BarcodePage,
    TouchIdPage,
    LoginOut
    //DateTime,
    //Select
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    CheckboxPage,
    TabPage,
    DevicePage,
    CameraPage,
    BarcodePage,
    TouchIdPage,
    LoginOut
    //DateTime,
    //Select
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
  //demo:any;
  //demo1:any;
  constructor(){
    //this.touchIDs()
  }
  /*touchIDs(){
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
          alert(2);
          console.error('Error', err);
          this.demo1='Error';

        }
      );
  }*/
}
