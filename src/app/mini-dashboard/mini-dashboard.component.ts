import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFundFormComponent } from '../form-components/add-fund-form/add-fund-form.component';
import { AddMarketFormComponent } from '../form-components/add-market-form/add-market-form.component';

@Component({
  selector: 'mini-dashboard',
  templateUrl: './mini-dashboard.component.html',
  styleUrls: ['./mini-dashboard.component.css']
})
export class MiniDashboardComponent implements OnInit {
  plotted_data = 'Marchés';
  data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
    {"Framework": "Bootstrap", "Stars": "21471", "Released": "2011"},
    {"Framework": "jQuery", "Stars": "21471", "Released": "2011"}
]
  constructor(private _dialog:MatDialog) { }

  ngOnInit(): void {
    //this.addMarketDialog()
  }

  addMarketDialog(){
    this._dialog.open(AddMarketFormComponent, {
      width: '90vw',
      maxHeight: '90vh'
    })
  }

  addFundDialog(){
    this._dialog.open(AddFundFormComponent, {
      width: '90vw',
      maxHeight: '90vh'
    })
  }
}
