import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() isCollapsed = false;
  isMobileMenuOpen = false;

  user = {
    name: 'Markarn Doe',
    email: 'markarn@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Markarn'
  };

  menuSections = [
    {
      title: 'HOME',
      items: [
        { label: 'Home', icon: 'dashboard', route: '/home' },
        { label: 'Dashboard', icon: 'classic', route: '/dashboard' },
        { label: 'Analytical', icon: 'analytics', route: '/analytics' },
        { label: 'Campaign', icon: 'campaign', route: '/campaign' },
        { label: 'Modern', icon: 'modern', route: '/modern' }
      ]
    }
  ];

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
