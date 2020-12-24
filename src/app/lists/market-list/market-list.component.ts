import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Market } from 'src/app/businessObjects/Market';
import { MarketService } from 'src/app/services/market.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})
export class MarketListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['owner', 'mo', 'market_no', 'object'];
  dataSource: MatTableDataSource<Market>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _marketService:MarketService) {}

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    let data_array:Market[] = [];
    this._marketService.getMarkets().subscribe((data:any[]) => {
      data.forEach(e => {
        let m = new Market()
        m.fillFromJSON(e)
        data_array.push(m);
      })
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
}
