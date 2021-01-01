import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Market } from 'src/app/businessObjects/Market';
import { AddMarketFormComponent } from 'src/app/form-components/add-market-form/add-market-form.component';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit, AfterViewInit {
  pgSizeOptions = [5, 10, 25, 100]
  displayedColumns: string[] = ['owner', 'mo', 'market_no', 'actions'];
  // , 'object', 'begin_date','deadline',  'end_date', 'def_caution', 'total_sum', 'trimester_sum', 'agents_number'
  dataSource: MatTableDataSource<Market>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _marketService:MarketService, private _dialog:MatDialog) {}

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    let data_array:Market[] = [];
    this._marketService.getMarkets().subscribe((data:any) => {
      data = data['markets']
      data.forEach(e => {
        let m = new Market()
        m.fillFromJSON(e)
        data_array.push(m);
      })
      this.pgSizeOptions = this.pgSizeOptions.filter(n => n < data_array.length)
      this.pgSizeOptions.push(data_array.length)
      this.dataSource = new MatTableDataSource(data_array);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  view(market){
    const dialog = this._dialog.open(AddMarketFormComponent, {
      width: '90vw',
      maxHeight: '90vh',
      data: {market: market, mode:'readonly'}
    })
    dialog.componentInstance.operation_success.subscribe(event => {
      console.log(event)
    })
  }
  edit(market){
    const dialog = this._dialog.open(AddMarketFormComponent, {
      width: '90vw',
      maxHeight: '90vh',
      data: {market: market, mode:'edit'}
    })
    dialog.componentInstance.operation_success.subscribe(event => {
      console.log(event)
    })
  }
  del(market){
    this._marketService.deleteMarket(market).subscribe(_ =>{
      //
    })

  }
}
