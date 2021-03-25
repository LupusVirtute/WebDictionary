"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var table_1 = require("@angular/material/table");
var input_1 = require("@angular/material/input");
var core_2 = require("@angular/material/core");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var fetch_data_component_1 = require("./fetch-data/fetch-data.component");
var animations_1 = require("@angular/platform-browser/animations");
var button_1 = require("@angular/material/button");
var insert_modal_component_1 = require("./fetch-data/modals/insert-modal/insert-modal.component");
var dialog_1 = require("@angular/material/dialog");
var play_component_1 = require("./play/play.component");
var sort_1 = require("@angular/material/sort");
var paginator_1 = require("@angular/material/paginator");
var translator_component_1 = require("./translator/translator.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                fetch_data_component_1.FetchDataComponent,
                insert_modal_component_1.InsertModalComponent,
                play_component_1.PlayComponent,
                translator_component_1.TranslatorComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'fetch-data', component: fetch_data_component_1.FetchDataComponent },
                    { path: 'play', component: play_component_1.PlayComponent },
                    { path: 'translate', component: translator_component_1.TranslatorComponent },
                ]),
                animations_1.BrowserAnimationsModule,
                dialog_1.MatDialogModule,
                table_1.MatTableModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                sort_1.MatSortModule,
                paginator_1.MatPaginatorModule,
                core_2.MatNativeDateModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
