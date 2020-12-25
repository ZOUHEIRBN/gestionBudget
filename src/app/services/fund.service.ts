import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private _httpClient:HttpClient) { }

  getFunds(){
    return this._httpClient.get('http://localhost:3000/funds')
  }
}
