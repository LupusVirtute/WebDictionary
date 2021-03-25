"use strict";
exports.__esModule = true;
exports.AppConfiguration = void 0;
var AppConfiguration;
(function (AppConfiguration) {
    //export const API_BASE_URL = "https://demo.local/";
    AppConfiguration.API_BASE_URL = "https://localhost:44383/";
    //export const API_BASE_URL = "https://341b58de7271.ngrok.io";
    AppConfiguration.API_WORD_BASE = AppConfiguration.API_BASE_URL + 'api/Word/';
    AppConfiguration.ALL_WORD_ITEMS = AppConfiguration.API_WORD_BASE + 'GetAllWords';
    AppConfiguration.DELETE_WORD_ITEM = AppConfiguration.API_WORD_BASE + 'Delete';
    AppConfiguration.ADD_WORD_ITEM = AppConfiguration.API_WORD_BASE + 'Insert';
    AppConfiguration.UPDATE_WORD_ITEM = AppConfiguration.API_WORD_BASE + 'Update';
    AppConfiguration.GET_RANDOM_WORD = AppConfiguration.API_WORD_BASE + 'GetRandom';
    AppConfiguration.VERIFY_ENGLISH_WORD = AppConfiguration.API_WORD_BASE + 'Verify';
    AppConfiguration.GET_FROM_POLISH = AppConfiguration.API_WORD_BASE + 'GetEnglish';
})(AppConfiguration = exports.AppConfiguration || (exports.AppConfiguration = {}));
