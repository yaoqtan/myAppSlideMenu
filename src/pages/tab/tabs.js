var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Page1 } from '../home/page1';
import { Page2 } from '../list/page2';
import { CheckboxPage } from '../checkbox/checkbox';
var TabPage = (function () {
    function TabPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        //tab1Root: any = HelloIonicPage;
        this.tab1Root = Page1;
        this.tab2Root = Page2;
        this.tab3Root = CheckboxPage;
    }
    return TabPage;
}());
TabPage = __decorate([
    Component({
        templateUrl: 'tabs.html'
    }),
    __metadata("design:paramtypes", [])
], TabPage);
export { TabPage };
//# sourceMappingURL=tabs.js.map