import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Fund } from 'src/app/businessObjects/Fund';

@Component({
  selector: 'app-add-fund-form',
  templateUrl: './add-fund-form.component.html',
  styleUrls: ['./add-fund-form.component.css']
})
export class AddFundFormComponent implements OnInit {

  fund:Fund = new Fund()
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) { }


  ngOnInit(): void {
  }


}
