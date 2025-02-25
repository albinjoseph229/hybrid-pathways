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

  // Chart data for income (bar chart)
  incomeData: any;
  incomeOptions: any;

  // Chart data for visitors (area chart)
  visitorsData: any;
  visitorsOptions: any;

  ngOnInit() {
    this.initIncomeChart();
    this.initVisitorsChart();
  }

  initIncomeChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#495057';
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#6c757d';
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#dfe7ef';

    this.incomeData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Revenue',
          backgroundColor: documentStyle.getPropertyValue('--primary-color') || '#3B82F6',
          data: [95000, 100000, 115000, 125000, 135000, 140000, 142000, 140000, 138000, 126238, 120000, 115000]
        },
        {
          label: 'Expenses',
          backgroundColor: documentStyle.getPropertyValue('--pink-500') || '#EC4899',
          data: [65000, 70000, 80000, 85000, 90000, 95000, 97000, 95000, 94000, 90000, 86000, 82000]
        }
      ]
    };

    this.incomeOptions = {
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
              return '$' + this.formatCurrency(value);
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

  initVisitorsChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color') || '#495057';
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#6c757d';
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#dfe7ef';

    this.visitorsData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Visitors',
          data: [65000, 68000, 72000, 75000, 79000, 82000, 84000, 83000, 81000, 80300, 79000, 78000],
          fill: true,
          backgroundColor: documentStyle.getPropertyValue('--blue-500-50') || 'rgba(59, 130, 246, 0.2)',
          borderColor: documentStyle.getPropertyValue('--blue-500') || '#3B82F6',
          tension: 0.4
        }
      ]
    };

    this.visitorsOptions = {
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

  formatCurrency(value: number): string {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'k';
    }
    return value.toString();
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
