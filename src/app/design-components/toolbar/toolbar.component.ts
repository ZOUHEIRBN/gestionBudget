import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/businessObjects/User';
import { UserConnectComponent } from 'src/app/form-components/user-connect/user-connect.component';
import { UserRegisterComponent } from 'src/app/form-components/user-register/user-register.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() drawerEvent = new EventEmitter();
  @Input() connected = false;
  search_value = ''
  user_btn_text = 'Bienvenue!'
  constructor(private _dialog:MatDialog, private _userService:UserService) { }

  ngOnInit(): void {
  }

  userConnect(){
    let dialog = this._dialog.open(UserConnectComponent, {
      maxHeight: '90vh',
      maxWidth: '90vw'
    })
    dialog.componentInstance.userEvent.subscribe(e => {
      this._userService._user.next(<User>e)
      this.connected = true
      this.user_btn_text = e.username
      dialog.close()
    })

  }
  userDisconnect(){
    this._userService._user.next(null)
    this.connected = false
    this.user_btn_text = 'Bienvenue!'
    this.userConnect()
  }
  userRegister(){
    let dialog = this._dialog.open(UserRegisterComponent, {
      maxHeight: '90vh',
      maxWidth: '90vw'
    })
    dialog.componentInstance.userEvent.subscribe(e => {
      this._userService._user.next(<User>e)
      this.connected = true
    })
  }

}
