import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() drawerEvent = new EventEmitter();
  @Input() connected;
  constructor() { }

  ngOnInit(): void {
  }

}
