"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavMenuComponent = void 0;
var core_1 = require("@angular/core");
var NavItem_1 = require("./NavItem");
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
        this.navItems = [
            new NavItem_1.NavItem('fa-home', 'Strona główna', ''),
            new NavItem_1.NavItem('fa-spell-check', 'Rozwijaj się', '/play'),
            new NavItem_1.NavItem('fa-clipboard-list', 'Baza Słów', '/fetch-data'),
            new NavItem_1.NavItem('fa-clipboard-list', 'Translator', '/translate'),
        ];
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.scss']
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
