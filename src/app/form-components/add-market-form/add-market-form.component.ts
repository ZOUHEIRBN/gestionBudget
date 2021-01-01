import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Market } from 'src/app/businessObjects/Market';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-add-market-form',
  templateUrl: './add-market-form.component.html',
  styleUrls: ['./add-market-form.component.css']
})
export class AddMarketFormComponent implements OnInit {
  market:Market = new Market()
  mode = 'create';
  @Output() operation_success = new EventEmitter();

  constructor(private _marketService:MarketService, public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    if(this.data){
      if(this.data.market){
        this.market = this.data.market
      }

      if(this.data.mode){
        this.mode = this.data.mode
      }
    }
  }

  addMarket(){
    this._marketService.addMarket(this.market).subscribe(result => {
      console.log(result)
      this.operation_success.emit({market: this.market, message: 'Added market successfully!'})
    })
  }
  editMarket(){
    this._marketService.editMarket(this.market).subscribe(result => {
      console.log(result)
      this.operation_success.emit({market: this.market, message: 'Edited market successfully!'})
    })
  }
  delMarket(){
    this._marketService.deleteMarket(this.market).subscribe(result => {
      console.log(result)
      this.operation_success.emit({market: this.market, message: 'Deleted market successfully!'})
    })
  }

}
