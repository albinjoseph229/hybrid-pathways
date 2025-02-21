import { Component , inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header-admin',
  imports: [CommonModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponentAdmin {
  isAccordionOpen = false;

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  private router = inject(Router);
    logout() {
      sessionStorage.clear();
      this.router.navigate(['login']);
    }
}
