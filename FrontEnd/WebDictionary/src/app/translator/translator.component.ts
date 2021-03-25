import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AppConfiguration } from '../AppConfiguration';
import { Word } from '../fetch-data/data-types/Word';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  result: Word[];
  @ViewChild('table') table:MatTable<any>;
  wordToCheck: string = 'Polska';
  constructor(public http: HttpClient) {
    this.getResult('Polska');
  }
  getResult(word){
    this.wordToCheck = word;
    this.http.get<Word[]>(AppConfiguration.GET_FROM_POLISH,{params: {polish: this.wordToCheck}}).subscribe(result =>{
      this.result = result;
      if(this.table !== undefined && this.table.dataSource != undefined)
        this.table.renderRows();

    },error=>console.error(error));
  }
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['polishWord','englishWord'];
  dataSchema = {
    "polishWord": "text",
    "englishWord": "text",
  };
  translatedColumns = {
    'polishWord': 'Polskie słowo',
    'englishWord': 'Angielskie słowo'
  }
}
