import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insert-modal',
  templateUrl: './insert-modal.component.html',
  styleUrls: ['./insert-modal.component.scss']
})
export class InsertModalComponent implements OnInit {

  polishWord: string;
  englishWord: string;
  constructor(
    public dialogRef: MatDialogRef<InsertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onAccept(): void {
    this.dialogRef.close({
      polishWord: this.polishWord,
      englishWord: this.englishWord
    });
  }
  cancel(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
