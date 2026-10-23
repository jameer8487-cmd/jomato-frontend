import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styles: []
})
export class HomePage implements OnInit {
  restaurants: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getRestaurants().subscribe(
      (data) => {
        this.restaurants = data;
      },
      (error) => {
        console.error('Error fetching restaurants from backend:', error);
      }
    );
  }
}
