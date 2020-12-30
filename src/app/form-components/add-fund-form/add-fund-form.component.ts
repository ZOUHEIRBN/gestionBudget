import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Fund } from 'src/app/businessObjects/Fund';
import { FundService } from 'src/app/services/fund.service';

@Component({
  selector: 'app-add-fund-form',
  templateUrl: './add-fund-form.component.html',
  styleUrls: ['./add-fund-form.component.css']
})
export class AddFundFormComponent implements OnInit {
  readonly = false
  fund:Fund = new Fund()
  operation_success = new EventEmitter()
  constructor(private _fundService:FundService, public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) { }


  ngOnInit(): void {
    if(this.data){
      if(this.data.fund){
        this.fund = this.data.fund
      }

      if(this.data.readonly){
        this.readonly = this.data.readonly
      }
    }
    console.log(this.fund)
  }

  addFund(){
    this._fundService.addFund(this.fund).subscribe(result => {
      console.log(result)
      this.operation_success.emit({fund: this.fund, message: 'Added fund successfully!'})
    })
  }

  delFund(){
    this._fundService.deleteFund(this.fund).subscribe(result => {
      console.log(result)
      this.operation_success.emit({fund: this.fund, message: 'Deleted fund successfully!'})
    })
  }


}
