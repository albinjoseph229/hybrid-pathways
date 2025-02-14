import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent {
  private router = inject(Router);

  constructor() {
    this.logout();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
