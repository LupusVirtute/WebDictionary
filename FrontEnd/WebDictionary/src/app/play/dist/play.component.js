"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlayComponent = void 0;
var core_1 = require("@angular/core");
var AppConfiguration_1 = require("../AppConfiguration");
var REPLACEMENT_TABLE = [
    ['ą', 'a'],
    ['ę', 'e'],
    ['ó', 'o'],
    ['u', 'o'],
    ['ć', 'c'],
    ['ł', 'l'],
    ['ń', 'n'],
    ['ś', 's'],
    ['ź', 'z'],
    ['ż', 'z']
];
var PlayComponent = /** @class */ (function () {
    function PlayComponent(http) {
        this.http = http;
        this.testedWord = {
            uid: '',
            polishWord: '',
            englishWord: ''
        };
        this.correctWord = {
            uid: '',
            polishWord: '',
            englishWord: ''
        };
        this.getNext();
    }
    PlayComponent.prototype.getNext = function () {
        var _this = this;
        this.correctWord = this.testedWord;
        this.lastAnswer = this.answer;
        this.http.get(AppConfiguration_1.AppConfiguration.GET_RANDOM_WORD).subscribe(function (result) {
            console.log(result);
            _this.testedWord = result;
        }, function (error) { return console.error(error); });
    };
    PlayComponent.prototype.neutralizePolishString = function (stringToNeutralize) {
        var table = REPLACEMENT_TABLE;
        table.forEach(function (k) {
            stringToNeutralize = stringToNeutralize.replace(k[0], k[1]);
        });
        return stringToNeutralize;
    };
    PlayComponent.prototype.checkIfCorrect = function () {
        var pl = this.correctWord.polishWord.slice().toLowerCase();
        pl = this.neutralizePolishString(pl);
        var answer = this.neutralizePolishString(this.lastAnswer.slice().toLowerCase());
        return pl == answer;
    };
    PlayComponent.prototype.ngOnInit = function () {
    };
    PlayComponent = __decorate([
        core_1.Component({
            selector: 'app-play',
            templateUrl: './play.component.html',
            styleUrls: ['./play.component.scss']
        })
    ], PlayComponent);
    return PlayComponent;
}());
exports.PlayComponent = PlayComponent;
