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
import { NavController } from 'ionic-angular';
var Gender = (function () {
    function Gender() {
    }
    return Gender;
}());
export { Gender };
var GenderData = [
    { value: 'f', name: 'male1' },
    { value: 'm', name: 'famale1' }
];
var CheckboxPage = (function () {
    function CheckboxPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
        this.genders = GenderData;
        this.gender = 'female1';
    }
    return CheckboxPage;
}());
CheckboxPage = __decorate([
    Component({
        templateUrl: 'checkbox.html'
    }),
    __metadata("design:paramtypes", [NavController])
], CheckboxPage);
export { CheckboxPage };
//# sourceMappingURL=checkbox.js.map