import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'This is the home page';

  constructor() { }

  ngOnInit() {
  }

}