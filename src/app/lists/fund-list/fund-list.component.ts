import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fund } from 'src/app/businessObjects/Fund';
import { Market } from 'src/app/businessObjects/Market';
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
  dataSources = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _fundService:FundService, private _dialog:MatDialog) {}

  ngOnInit(): void {
    this._fundService.getFunds().subscribe((response:any[]) => {
      for(let key in response){
        let data = []
        response[key].forEach(element => {
          let f = new Fund()
          f.fillFromJSON(element)
          data.push(f)
        });
        let ds = new MatTableDataSource<Fund>(data)
        ds.paginator = this.paginator;
        ds.sort = this.sort;
        this.dataSources.push({key: key, dataSource: ds});
      }
      console.log(this.dataSources)

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
    this._dialog.open(AddMarketFormComponent, {
      width: '90vw',
      maxHeight: '90vh',
      data: {market: fund, readonly:true}
    })
  }

}
