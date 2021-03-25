export module AppConfiguration {
    //export const API_BASE_URL = "https://demo.local/";
    export const API_BASE_URL = "https://localhost:44383/";
    //export const API_BASE_URL = "https://341b58de7271.ngrok.io";
    export const API_WORD_BASE = API_BASE_URL+'api/Word/';
    export const ALL_WORD_ITEMS = API_WORD_BASE+'GetAllWords';
    export const DELETE_WORD_ITEM = API_WORD_BASE+'Delete';
    export const ADD_WORD_ITEM = API_WORD_BASE+'Insert';
    export const UPDATE_WORD_ITEM = API_WORD_BASE+'Update';
    export const GET_RANDOM_WORD = API_WORD_BASE+'GetRandom';
    export const VERIFY_ENGLISH_WORD = API_WORD_BASE+'Verify';
    export const GET_FROM_POLISH = API_WORD_BASE+'GetEnglish';
}