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
  deviceUuid = Device.device.uuid;
  deviceModel = Device.device.model;
  deviceCordova = Device.device.cordova;
  devicePlatform = Device.device.platform;
  deviceVersion = Device.device.version;
  deviceManufacturer = Device.device.manufacturer;
  deviceIsVirtual = Device.device.isVirtual;
  deviceSerial = Device.device.serial;
	constructor(public navCtrl: NavController) {
		console.log(Device.device.uuid);
		console.log(Device.device.uuid);
		console.log(this.appName);
	}


}


