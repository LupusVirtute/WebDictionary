import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Word } from './data-types/Word';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AppConfiguration } from '../AppConfiguration';
import { InsertModalComponent } from './modals/insert-modal/insert-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';



@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent {
  public dataSource: MatTableDataSource<Word>;
  
  
  
  httpClient: HttpClient;
  @ViewChild('table') table:MatTable<any>;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  
  constructor(http: HttpClient,public dialog: MatDialog) {
    
    http.get<Word[]>(AppConfiguration.ALL_WORD_ITEMS).subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
    }, error => console.error(error));
    this.httpClient = http;
  }
  
  swapEdition(element){
    if(element.isEdit) {
      this.updateElement(element);
    }
    element.isEdit = !element.isEdit;
    
  }


  deleteElement(element){
    const endpoint = AppConfiguration.DELETE_WORD_ITEM;
    this.httpClient.delete<Word>(endpoint,{
      params: element
      }
      ).subscribe(()=>{

    },error => console.error(error)
    );

    this.dataSource.data.splice(this.dataSource.data.indexOf(element), 1);
    this.table.renderRows();
  }

  updateElement(element){
    const endpoint = AppConfiguration.UPDATE_WORD_ITEM;

    this.httpClient.post<Word>(endpoint,element).subscribe(() => {
        }, error => console.error(error)
      );
  }
  valueChanged(newValue,elementToChange,column){
    elementToChange[column] = newValue;
  }
  addNewElement(){
    let dialogRef = this.dialog.open(InsertModalComponent,
      {
        height: '40vh',
        width: '30vw'
      });
    dialogRef.afterClosed().subscribe(result => {
      this.httpClient.post<Word>(AppConfiguration.ADD_WORD_ITEM,result).subscribe(
        result => {
          this.dataSource.data.push(result);
          this.table.renderRows();
        }
        ,
        error => console.error(error)
        );
    });
  }

  displayedColumns: string[] = ['uid','polishWord','englishWord','$$edit'];
  dataSchema = {
    "uid": "text",
    "polishWord": "text",
    "englishWord": "text",
  };
  translatedColumns = {
    'uid' : 'UID',
    'polishWord': 'Polskie słowo',
    'englishWord': 'Angielskie słowo',
    '$$edit': 'Opcje dodatkowe',
  }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

