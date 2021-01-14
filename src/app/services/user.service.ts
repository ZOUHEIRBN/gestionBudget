import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../businessObjects/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _user = new BehaviorSubject<User>(new User())
  $user = this._user.asObservable()
  constructor(private _httpClient:HttpClient) { }

  getUsers(){
    return this._httpClient.get('http://localhost:3000/users')
  }

  getUser(id){
    return this._httpClient.get('http://localhost:3000/users/'+id)
  }

  authenticate(user:User){
    return this._httpClient.put('http://localhost:3000/users', user)
  }

  addUser(user:User){
    return this._httpClient.post('http://localhost:3000/users', user)
  }

  editUser(user:User){
    return this._httpClient.put('http://localhost:3000/users/'+user.id, user)
  }

  deleteUser(user:User){
    return this._httpClient.delete('http://localhost:3000/users/'+user.id)
  }
}
