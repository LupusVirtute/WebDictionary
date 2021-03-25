"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FetchDataComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var AppConfiguration_1 = require("../AppConfiguration");
var insert_modal_component_1 = require("./modals/insert-modal/insert-modal.component");
var sort_1 = require("@angular/material/sort");
var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent(http, dialog) {
        var _this = this;
        this.dialog = dialog;
        this.displayedColumns = ['uid', 'polishWord', 'englishWord', '$$edit'];
        this.dataSchema = {
            "uid": "text",
            "polishWord": "text",
            "englishWord": "text"
        };
        this.translatedColumns = {
            'uid': 'UID',
            'polishWord': 'Polskie słowo',
            'englishWord': 'Angielskie słowo',
            '$$edit': 'Opcje dodatkowe'
        };
        http.get(AppConfiguration_1.AppConfiguration.ALL_WORD_ITEMS).subscribe(function (result) {
            _this.dataSource = new table_1.MatTableDataSource(result);
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.error(error); });
        this.httpClient = http;
    }
    FetchDataComponent.prototype.swapEdition = function (element) {
        if (element.isEdit) {
            this.updateElement(element);
        }
        element.isEdit = !element.isEdit;
    };
    FetchDataComponent.prototype.deleteElement = function (element) {
        var endpoint = AppConfiguration_1.AppConfiguration.DELETE_WORD_ITEM;
        this.httpClient["delete"](endpoint, {
            params: element
        }).subscribe(function () {
        }, function (error) { return console.error(error); });
        this.dataSource.data.splice(this.dataSource.data.indexOf(element), 1);
        this.table.renderRows();
    };
    FetchDataComponent.prototype.updateElement = function (element) {
        var endpoint = AppConfiguration_1.AppConfiguration.UPDATE_WORD_ITEM;
        this.httpClient.post(endpoint, element).subscribe(function () {
        }, function (error) { return console.error(error); });
    };
    FetchDataComponent.prototype.valueChanged = function (newValue, elementToChange, column) {
        elementToChange[column] = newValue;
    };
    FetchDataComponent.prototype.addNewElement = function () {
        var _this = this;
        var dialogRef = this.dialog.open(insert_modal_component_1.InsertModalComponent, {
            height: '40vh',
            width: '30vw'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.httpClient.post(AppConfiguration_1.AppConfiguration.ADD_WORD_ITEM, result).subscribe(function (result) {
                _this.dataSource.data.push(result);
                _this.table.renderRows();
            }, function (error) { return console.error(error); });
        });
    };
    __decorate([
        core_1.ViewChild('table')
    ], FetchDataComponent.prototype, "table");
    __decorate([
        core_1.ViewChild(sort_1.MatSort, { static: false })
    ], FetchDataComponent.prototype, "sort");
    FetchDataComponent = __decorate([
        core_1.Component({
            selector: 'app-fetch-data',
            templateUrl: './fetch-data.component.html',
            styleUrls: ['./fetch-data.component.scss']
        })
    ], FetchDataComponent);
    return FetchDataComponent;
}());
exports.FetchDataComponent = FetchDataComponent;
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
