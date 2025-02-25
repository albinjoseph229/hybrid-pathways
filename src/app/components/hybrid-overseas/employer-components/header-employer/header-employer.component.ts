import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-employer',
  imports: [CommonModule],
  templateUrl: './header-employer.component.html',
  styleUrl: './header-employer.component.css'
})
export class HeaderEmployerComponent {
  isPagesDropdownOpen = false;

  togglePagesDropdown() {
    this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
  }

}
