import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header-admin',
  imports: [CommonModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponentAdmin {
  isAccordionOpen: { [key: string]: boolean } = {
    usersAccordion: false,
    adminActionsAccordion: false,
    accountAccordion:false,

  };

  toggleAccordion(accordion: 'usersAccordion' | 'adminActionsAccordion'|'accountAccordion') {
    for (let key in this.isAccordionOpen) {
      if (key === accordion) {
        this.isAccordionOpen[key] = !this.isAccordionOpen[key];
      } else {
        this.isAccordionOpen[key] = false;
      }
    }
  }

  private router = inject(Router);

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
