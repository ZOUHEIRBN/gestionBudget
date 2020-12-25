import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Market } from 'src/app/businessObjects/Market';

@Component({
  selector: 'app-add-market-form',
  templateUrl: './add-market-form.component.html',
  styleUrls: ['./add-market-form.component.css']
})
export class AddMarketFormComponent implements OnInit {
  market:Market = new Market()
  readonly = false;
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    if(this.data){
      if(this.data.market){
        this.market = this.data.market
      }

      if(this.data.readonly){
        this.readonly = this.data.readonly
      }
    }
  }

}
