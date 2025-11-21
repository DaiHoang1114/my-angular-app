import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router: Router) {}

  login() {
    // Simple mock authentication
    localStorage.setItem('token', 'mock-token');
    this.router.navigate(['/home']);
  }
}
