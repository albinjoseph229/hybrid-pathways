import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    ButtonModule,
    ChartModule,
    CommonModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  private router = inject(Router);

  // Chart data for users (employers and job seekers)
  usersData: any;
  usersOptions: any;

  // Chart data for students (replacing visitors)
  studentsData: any;
  studentsOptions: any;

  // Total counts
  totalEmployers: number = 2145;
  totalJobSeekers: number = 14368;
  totalStudents: number = 32450;

  ngOnInit() {
    this.initUsersChart();
    this.initStudentsChart();
  }

  initUsersChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#495057';
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#6c757d';
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#dfe7ef';

    this.usersData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Employers',
          backgroundColor: documentStyle.getPropertyValue('--orange-500') || '#F97316',
          data: [1250, 1380, 1520, 1650, 1780, 1850, 1920, 1980, 2045, 2100, 2130, 2145]
        },
        {
          label: 'Job Seekers',
          backgroundColor: documentStyle.getPropertyValue('--purple-500') || '#8B5CF6',
          data: [8200, 8950, 9600, 10200, 10950, 11500, 12100, 12650, 13200, 13700, 14150, 14368]
        }
      ]
    };

    this.usersOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary,
            callback: (value: any) => {
              return this.formatNumber(value);
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  initStudentsChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#495057';
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#6c757d';
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#dfe7ef';

    this.studentsData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Students',
          data: [24500, 25800, 27200, 28100, 29000, 29800, 30500, 31200, 31800, 32100, 32300, 32450],
          fill: true,
          backgroundColor: documentStyle.getPropertyValue('--teal-500-50') || 'rgba(20, 184, 166, 0.2)',
          borderColor: documentStyle.getPropertyValue('--teal-500') || '#14B8A6',
          tension: 0.4
        }
      ]
    };

    this.studentsOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary,
            callback: (value: any) => {
              return this.formatNumber(value);
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  formatNumber(value: number): string {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'k';
    }
    return value.toString();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
