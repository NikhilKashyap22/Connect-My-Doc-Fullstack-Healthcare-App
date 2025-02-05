import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

interface NavigationItem {
  name: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone:true,
  imports:[NgClass, RouterModule, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navigation: NavigationItem[] = [
    { name: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { name: 'Doctors', route: '/doctors', icon: 'groups' },
    { name: 'Patients', route: '/patients', icon: 'person' },
    { name: 'Clinic', route: '/clinic', icon: 'business' },
    { name: 'Appointments', route: '/appointments', icon: 'event' },
    { name: 'Doctor Schedule', route: '/schedule', icon: 'assignment' },
    { name: 'Departments', route: '/departments', icon: 'apartment' },
    { name: 'Services', route: '/services', icon: 'work' },
    { name: 'Assets', route: '/assets', icon: 'inventory_2' }
  ];

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
