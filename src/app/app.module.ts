import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/home/page1';
import { Page2 } from '../pages/list/page2';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { TabPage } from '../pages/tab/tabs';
import { DevicePage } from '../pages/device/device';
import { CameraPage } from '../pages/camera/camera';
import { BarcodePage } from '../pages/barcode/barcode'

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
    BarcodePage
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
    BarcodePage
    //DateTime,
    //Select
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
