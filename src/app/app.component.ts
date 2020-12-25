import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestion-budget';
  currentRoute: any;
  constructor(private _router:Router){
    console.log(this._router.url);
    _router.events
          .subscribe(event =>
           {
             if(event instanceof NavigationEnd){
              this.currentRoute = event.url;
             }
           });
    }
  ngOnInit(): void {

  }





}
