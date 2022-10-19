import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timebox',
  templateUrl: './timebox.component.html',
  styleUrls: ['./timebox.component.css']
})
export class TimeboxComponent implements OnInit {
  time = new Date();
  currentTime = "";
  timeboxCounter = "0";

  constructor() { }

  ngOnInit(): void {
    this.currentTime = this.time.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
  }

}
