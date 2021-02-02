import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fund } from 'src/app/businessObjects/Fund';
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
  displayedColumns: string[] = ['budget_type', 'date', 'total_sum', 'actions'];
  dataSource: MatTableDataSource<Fund> = new MatTableDataSource();
  fromDate = new Date("12/1/2020");
  toDate = new Date();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _fundService:FundService, private _dialog:MatDialog) {}

  ngOnInit(): void {

    this._fundService.getFundsDateRange(this.fromDate, this.toDate).subscribe((data:any) => {
      this.setData(data)
    })
  }
  setData(data){
    let data_array:Fund[] = [];
    data = data['funds']
    data.forEach(e => {
      let m = new Fund()
      m.fillFromJSON(e)
      data_array.push(m);
    })
    this.pgSizeOptions = this.pgSizeOptions.filter(n => n < data_array.length)
    this.pgSizeOptions.push(data_array.length)
    this.dataSource = new MatTableDataSource(data_array);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  dateChanged(){
    this._fundService.getFundsDateRange(this.fromDate, this.toDate).subscribe(data => {
      this.setData(data)
    })
  }
  setGlobalObject() {
    return this.dataSource.data.map(t => t.total_sum).reduce((acc, value) => acc + value, 0);
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
    console.log(fund)
    this._fundService.deleteFund(fund).subscribe(_ =>{
      ds = ds.filter(e => e !== fund)
    })

  }

}
