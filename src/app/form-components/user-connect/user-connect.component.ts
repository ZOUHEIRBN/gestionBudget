import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/businessObjects/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-connect',
  templateUrl: './user-connect.component.html',
  styleUrls: ['./user-connect.component.css']
})
export class UserConnectComponent implements OnInit {
  user:User = new User();
  @Output() userEvent = new EventEmitter()
  constructor(private _userService:UserService, public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  attemptConnect(){
    this._userService.authenticate(this.user).subscribe(e => {
      e = e['user']
      if(e){
        this.userEvent.emit(<User>e)
      }
    })
  }
}
