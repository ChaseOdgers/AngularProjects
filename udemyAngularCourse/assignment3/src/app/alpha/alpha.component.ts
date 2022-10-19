import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  showDetails = true;
  clickLog: any[];
  timeboxFlag = 0;
  // currentTime = "";
  // time = new Date();
  // dd = String(this.today.getDate()). padStart(2, '0');
  // mm = String(this.today.getMonth() + 1). padStart(2, '0'); //January is 0!
  // yyyy = this.today.getFullYear();
  // Today = this.mm + '/'+ this.dd + '/'+ this.yyyy;

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetails() {
    this.showDetails = !this.showDetails;
    // this.currentTime = this.time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    this.clickLog.push("hello");
  }

}
