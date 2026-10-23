import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styles: []
})
export class HomePage implements OnInit {
  restaurants: any[] = [];

  constructor() {}

  ngOnInit() {
    // Dummy restaurant data for initial build check
    this.restaurants = [
      { id: 1, name: 'Jomato Kitchen', cuisine: 'Fast Food' },
      { id: 2, name: 'Spice Hub', cuisine: 'Indian' }
    ];
  }
}
