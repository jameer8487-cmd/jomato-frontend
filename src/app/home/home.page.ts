import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  restaurants = [
    { id: 1, name: 'Pizza Paradise', cuisine: 'Italian, Fast Food', rating: 4.5, image: 'https://via.placeholder.com/300x150' },
    { id: 2, name: 'Burger Hub', cuisine: 'American, Burgers', rating: 4.2, image: 'https://via.placeholder.com/300x150' },
    { id: 3, name: 'Spice of India', cuisine: 'North Indian, Biryani', rating: 4.7, image: 'https://via.placeholder.com/300x150' }
  ];

  constructor() {}

  ngOnInit() {}
}
