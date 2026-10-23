import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  template: `
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>Jomato Account 🍕</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>{{ isLogin ? 'Login' : 'Register' }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item *ngIf="!isLogin">
            <ion-label position="floating">Name</ion-label>
            <ion-input [(ngModel)]="name"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" [(ngModel)]="email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" [(ngModel)]="password"></ion-input>
          </ion-item>

          <ion-button expand="block" color="danger" class="ion-margin-top" (click)="submit()">
            {{ isLogin ? 'Sign In' : 'Sign Up' }}
          </ion-button>

          <ion-button expand="block" fill="clear" (click)="toggleMode()">
            {{ isLogin ? 'Need an account? Register' : 'Already have an account? Login' }}
          </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `
})
export class LoginPage {
  isLogin = true;
  name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  submit() {
    const url = `https://jomato-backend.onrender.com/api/auth/${this.isLogin ? 'login' : 'register'}`;
    const payload = this.isLogin 
      ? { email: this.email, password: this.password } 
      : { name: this.name, email: this.email, password: this.password };

    this.http.post(url, payload).subscribe({
      next: (res: any) => {
        alert(this.isLogin ? 'Login Successful!' : 'Registration Successful!');
      },
      error: (err) => {
        alert('Action Failed: ' + (err.error?.message || 'Error connecting to server'));
      }
    });
  }
}
