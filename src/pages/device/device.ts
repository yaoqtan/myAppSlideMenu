import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';


import { AppVersion,Device } from 'ionic-native';//AppVersion

@Component({
 templateUrl: 'device.html'
})

export class DevicePage {
	appName=AppVersion.getAppName();
	PackageName=AppVersion.getPackageName();
	VersionCode = AppVersion.getVersionCode();
	VersionNumber = AppVersion.getVersionNumber();
  deviceUuid = Device.uuid;
  deviceModel = Device.model;
  deviceCordova = Device.cordova;
  devicePlatform = Device.platform;
  deviceVersion = Device.version;
  deviceManufacturer = Device.manufacturer;
  deviceIsVirtual = Device.isVirtual;
  deviceSerial = Device.serial;
	constructor(public navCtrl: NavController) {
		console.log(Device.uuid);
		console.log(Device.uuid);
		console.log(this.appName);
	}


}


