import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private router: Router) {}

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('remember');
    this.router.navigate(['/login']);
  }
}
