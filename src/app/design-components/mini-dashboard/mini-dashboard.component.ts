import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mini-dashboard',
  templateUrl: './mini-dashboard.component.html',
  styleUrls: ['./mini-dashboard.component.css']
})
export class MiniDashboardComponent implements OnInit {
  plotted_data = 'Marchés';
  data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
