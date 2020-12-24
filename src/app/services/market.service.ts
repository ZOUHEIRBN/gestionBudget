import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';

import { SQL_CONFIG } from 'src/environments/environment';
import { Market } from '../businessObjects/Market';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private _httpClient:HttpClient) { }


  getMarkets(){
    return this._httpClient.get('http://localhost:3000/markets')
  }

}
