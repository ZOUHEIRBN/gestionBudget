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
  getMarket(id){
    return this._httpClient.get('http://localhost:3000/markets/'+id)
  }
  addMarket(market:Market){
    return this._httpClient.post('http://localhost:3000/markets', market)
  }
  editMarket(market:Market){
    return this._httpClient.put('http://localhost:3000/markets/'+market.id, market)
  }
  deleteMarket(market:Market){
    return this._httpClient.delete('http://localhost:3000/markets/'+market.id)
  }

}
