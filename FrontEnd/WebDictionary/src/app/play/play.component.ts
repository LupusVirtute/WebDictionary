import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConfiguration } from '../AppConfiguration';
import { Word } from '../fetch-data/data-types/Word';

let REPLACEMENT_TABLE = [
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

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  testedWord: Word;
  correctWord: Word;
  lastAnswer: string;
  answer: string;
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
    this.testedWord = {
      uid: '',
      polishWord:'',
      englishWord: ''
    };
    this.correctWord = {
      uid:'',
      polishWord: '',
      englishWord:''
    }
    this.getNext();
  }
  getNext(){
    this.correctWord = this.testedWord;
    this.lastAnswer = this.answer;
    this.http.get<Word>(AppConfiguration.GET_RANDOM_WORD).subscribe(result =>{
      console.log(result);
      this.testedWord = result;
    },
    error => console.error(error));
  }
  neutralizePolishString(stringToNeutralize): string {
    const table = REPLACEMENT_TABLE;
    table.forEach((k)=>{
      stringToNeutralize = stringToNeutralize.replace(k[0],k[1]);  
    });
    return stringToNeutralize;
  }
  checkIfCorrect() : boolean {
    let pl = this.correctWord.polishWord.slice().toLowerCase();
    pl = this.neutralizePolishString(pl);
    let answer = this.neutralizePolishString(this.lastAnswer.slice().toLowerCase());
    return pl == answer;
  }

  ngOnInit(): void {
  }

}
