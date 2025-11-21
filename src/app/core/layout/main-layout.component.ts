import { SidebarComponent } from './../components/sidebar/sidebar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Navbar, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayout {
  isSidebarCollapsed = false;

  onToggleSidebar(): void {
    // On desktop: toggle collapse
    // On mobile: toggle mobile menu
    if (window.innerWidth > 768) {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    } else {
      const sidebar = document.querySelector('.sidebar');
      sidebar?.classList.toggle('mobile-open');
    }
  }
}
