import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Update {
  id: number;
  title: string;
  content: string;
  category: string;
  date: string;
  adminName: string;
  adminRole: string;
  priority: 'high' | 'medium' | 'low';
  read: boolean;
}

@Component({
  selector: 'app-employer-updates',
  imports: [CommonModule],
  templateUrl: './employer-updates.component.html',
  styleUrl: './employer-updates.component.css'
})

export class EmployerUpdatesComponent implements OnInit {
  updates: Update[] = [];
  filteredUpdates: Update[] = [];
  selectedCategory: string = 'All';
  categories: string[] = ['All'];

  ngOnInit(): void {
    this.loadUpdates();
    this.filteredUpdates = [...this.updates];

    // Extract unique categories for filter
    const uniqueCategories = new Set(this.updates.map(update => update.category));
    this.categories = ['All', ...Array.from(uniqueCategories)];
  }

  loadUpdates(): void {
    // In a real application, this would be fetched from a service
    this.updates = [
      {
        id: 1,
        title: 'New Curriculum Changes',
        content: 'We\'re excited to announce updates to our core curriculum starting next semester. The changes focus on industry-aligned skills and practical applications.',
        category: 'Academic',
        date: 'February 24, 2025',
        adminName: 'Dr. Sarah Johnson',
        adminRole: 'Academic Director',
        priority: 'high',
        read: false
      },
      {
        id: 2,
        title: 'Career Fair Registration Open',
        content: 'Registration for the Spring Career Fair is now open. Over 50 companies will be attending. Students can register through the portal until March 15, 2025.',
        category: 'Events',
        date: 'February 20, 2025',
        adminName: 'Michael Roberts',
        adminRole: 'Career Services Manager',
        priority: 'medium',
        read: false
      },
      {
        id: 3,
        title: 'System Maintenance Notice',
        content: 'The student portal will be undergoing maintenance this weekend. Services will be unavailable from Saturday 10 PM to Sunday 2 AM.',
        category: 'Technical',
        date: 'February 18, 2025',
        adminName: 'Tech Support Team',
        adminRole: 'IT Department',
        priority: 'low',
        read: true
      },
      {
        id: 4,
        title: 'New Industry Partnership Announcement',
        content: 'We\'re pleased to announce our new partnership with TechGlobal Inc. This collaboration will provide internship opportunities and specialized training workshops for our students.',
        category: 'Partnerships',
        date: 'February 15, 2025',
        adminName: 'Jennifer Williams',
        adminRole: 'External Relations Director',
        priority: 'medium',
        read: false
      },
      {
        id: 5,
        title: 'Scholarship Application Deadline Extended',
        content: 'Due to high demand, we\'ve extended the deadline for the Excellence Scholarship applications until March 10, 2025. Students who haven\'t applied yet are encouraged to complete their applications.',
        category: 'Financial',
        date: 'February 10, 2025',
        adminName: 'Robert Chen',
        adminRole: 'Financial Aid Coordinator',
        priority: 'high',
        read: true
      }
    ];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredUpdates = category === 'All'
      ? [...this.updates]
      : this.updates.filter(update => update.category === category);
  }

  markAsRead(update: Update): void {
    // In a real application, this would call a service to update the read status
    update.read = true;
  }

  getPriorityClass(priority: string): string {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
