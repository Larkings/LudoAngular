import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  public showDate;
  public options : number = Date.now();
  public dateFormat = 'EEEE, d MMMM y';

  constructor() {

    this.showDate = this.options;

  }

  ngOnInit(): void {
  }
}
