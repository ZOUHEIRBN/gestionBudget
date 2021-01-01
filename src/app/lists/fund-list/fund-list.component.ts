import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fund, FundList } from 'src/app/businessObjects/Fund';
import { Market } from 'src/app/businessObjects/Market';
import { AddFundFormComponent } from 'src/app/form-components/add-fund-form/add-fund-form.component';
import { AddMarketFormComponent } from 'src/app/form-components/add-market-form/add-market-form.component';
import { FundService } from 'src/app/services/fund.service';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {
  pgSizeOptions = [5, 10, 25, 100]
  displayedColumns: string[] = ['budget_type', 'total_sum', 'actions'];
  dataSource = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _fundService:FundService, private _dialog:MatDialog) {}

  ngOnInit(): void {
    this._fundService.getFunds().subscribe((response:any) => {
      response = response['funds']
      for(let r of response){
        let funds = []
        if(r['entries']){
          for(let f of r['entries']){
            let jsonf = f
            jsonf['date'] = r['date']

            let fund = new Fund()
            fund.fillFromJSON(jsonf)
            funds.push(fund)
          }
        }
        let fundlist = {date: r.date, funds:funds}
        this.dataSource.push(<FundList>fundlist)
      }
      console.log(this.dataSource)


    })
  }

  applyFilter(event: Event, ds) {
    const filterValue = (event.target as HTMLInputElement).value;
    ds.filter = filterValue.trim().toLowerCase();

    if (ds.paginator) {
      ds.paginator.firstPage();
    }
  }
  view(fund){
    this._dialog.open(AddFundFormComponent, {
      width: '90vw',
      maxHeight: '90vh',
      data: {fund: fund, mode:'readonly'}
    })
  }
  edit(fund){
    this._dialog.open(AddFundFormComponent, {
      width: '90vw',
      maxHeight: '90vh',
      data: {fund: fund, mode:'edit'}
    })
  }
  del(ds, fund){
    this._fundService.deleteFund(fund).subscribe(_ =>{
      ds.funds = ds.funds.filter(e => e !== fund)
    })

  }

}
