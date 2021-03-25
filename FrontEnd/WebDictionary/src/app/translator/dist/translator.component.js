"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TranslatorComponent = void 0;
var core_1 = require("@angular/core");
var AppConfiguration_1 = require("../AppConfiguration");
var TranslatorComponent = /** @class */ (function () {
    function TranslatorComponent(http) {
        this.http = http;
        this.wordToCheck = 'Polska';
        this.displayedColumns = ['polishWord', 'englishWord'];
        this.dataSchema = {
            "polishWord": "text",
            "englishWord": "text"
        };
        this.translatedColumns = {
            'polishWord': 'Polskie słowo',
            'englishWord': 'Angielskie słowo'
        };
        this.getResult('Polska');
    }
    TranslatorComponent.prototype.getResult = function (word) {
        var _this = this;
        this.wordToCheck = word;
        this.http.get(AppConfiguration_1.AppConfiguration.GET_FROM_POLISH, { params: { polish: this.wordToCheck } }).subscribe(function (result) {
            _this.result = result;
            if (_this.table !== undefined && _this.table.dataSource != undefined)
                _this.table.renderRows();
        }, function (error) { return console.error(error); });
    };
    TranslatorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('table')
    ], TranslatorComponent.prototype, "table");
    TranslatorComponent = __decorate([
        core_1.Component({
            selector: 'app-translator',
            templateUrl: './translator.component.html',
            styleUrls: ['./translator.component.css']
        })
    ], TranslatorComponent);
    return TranslatorComponent;
}());
exports.TranslatorComponent = TranslatorComponent;
