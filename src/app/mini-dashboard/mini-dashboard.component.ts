import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFundFormComponent } from '../form-components/add-fund-form/add-fund-form.component';
import { AddMarketFormComponent } from '../form-components/add-market-form/add-market-form.component';

@Component({
  selector: 'mini-dashboard',
  templateUrl: './mini-dashboard.component.html',
  styleUrls: ['./mini-dashboard.component.css']
})
export class MiniDashboardComponent implements OnInit {
  @Input() data;
  @Input() plotted_data = 'Marchés';

  constructor() { }

  ngOnInit(): void {
    //this.addMarketDialog()
  }


}
