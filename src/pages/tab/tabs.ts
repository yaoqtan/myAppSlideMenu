import { Component } from '@angular/core';

import { Page1 } from '../home/page1';
import { Page2 } from '../list/page2';
import { CheckboxPage } from '../checkbox/checkbox';


@Component({
	selector:'gt-tab',
  	templateUrl: 'tabs.html'
})
export class TabPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  //tab1Root: any = HelloIonicPage;
  tab1Root: any = Page1;
  tab2Root: any = Page2;
  tab3Root: any = CheckboxPage;

  constructor() {

  }
}
