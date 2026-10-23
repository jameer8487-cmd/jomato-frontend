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
            <ion-label position="floating">Password (min 8 chars, letters & numbers)</ion-label>
            <ion-input type="password" [(ngModel)]="password"></ion-input>
          </ion-item>

          <!-- Phone Number field (Required by backend) -->
          <ion-item *ngIf="!isLogin">
            <ion-label position="floating">Phone (10 digits)</ion-label>
            <ion-input type="tel" maxlength="10" [(ngModel)]="phone"></ion-input>
          </ion-item>

          <!-- Role selection (Required by backend) -->
          <ion-item *ngIf="!isLogin">
            <ion-label position="floating">Role</ion-label>
            <ion-select [(ngModel)]="role">
              <ion-select-option value="CUSTOMER">Customer</ion-select-option>
              <ion-select-option value="STORE_KEEPER">Store Keeper</ion-select-option>
              <ion-select-option value="DELIVERY">Delivery Partner</ion-select-option>
            </ion-select>
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
  phone = '';
  role = 'CUSTOMER';

  constructor(private http: HttpClient) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  submit() {
    const url = `https://jomato-backend.onrender.com/api/auth/${this.isLogin ? 'login' : 'register'}`;
    
    // Backend RegisterRequest ke mutabiq saare required fields payload mein bhejna
    const payload = this.isLogin 
      ? { email: this.email, password: this.password } 
      : { 
          name: this.name, 
          email: this.email, 
          password: this.password, 
          phone: this.phone, 
          role: this.role 
        };

    this.http.post(url, payload).subscribe({
      next: (res: any) => {
        alert(this.isLogin ? 'Login Successful!' : 'Registration Successful!');
      },
      error: (err) => {
        alert('Error Status: ' + err.status + ' | Details: ' + JSON.stringify(err.error));
      }
    });
  }
}
