import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/businessObjects/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user:User = new User();
  @Output() userEvent = new EventEmitter()
  constructor(private _userService:UserService, public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  register(){
    this._userService.addUser(this.user).subscribe(e => {
      this.userEvent.emit(<User>e)
    })
  }
}
