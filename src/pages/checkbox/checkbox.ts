import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

export class Gender{
	value:string;
	name:string
}

const GenderData:Gender[] = [
	{value:'f',name:'male1'},
	{value:'m',name:'famale1'}
]

@Component({
 templateUrl: 'checkbox.html'
})

export class CheckboxPage {
	public gender;
	constructor(public navCtrl: NavController) {
    	this.gender = 'female1';
  	}

   	public event = {
	    month: '1990-02-19',
	    timeStarts: '07:43',
	    timeEnds: '1990-02-20'
  	}

  	
  	genders = GenderData

}