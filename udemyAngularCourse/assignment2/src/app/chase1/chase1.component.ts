import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-chase1',
  templateUrl: './chase1.component.html',
  styleUrls: ['./chase1.component.css']
})
export class Chase1Component implements OnInit {
  chasesUsername = '';
  constructor() { }

  ngOnInit(): void {
  }

onUpdateUsername(event: any) {
  this.chasesUsername = (<HTMLInputElement>event.target).value;
}

onSubmitClick() {
  this.chasesUsername = ''
}

}
