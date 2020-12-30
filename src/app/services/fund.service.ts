import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fund } from '../businessObjects/Fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private _httpClient:HttpClient) { }

  getFunds(){
    return this._httpClient.get('http://localhost:3000/funds')
  }
  getFund(id){
    return this._httpClient.get('http://localhost:3000/funds/'+id)
  }
  addFund(fund:Fund){
    return this._httpClient.post('http://localhost:3000/funds', fund)
  }
  editFund(fund:Fund){
    return this._httpClient.put('http://localhost:3000/funds/'+fund.id, fund)
  }
  deleteFund(fund:Fund){
    return this._httpClient.delete('http://localhost:3000/funds/'+fund.id)
  }
}
