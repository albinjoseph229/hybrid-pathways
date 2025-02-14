import { Component , inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponentAdmin {
  private router = inject(Router);
    logout() {
      sessionStorage.clear();
      this.router.navigate(['login']);
    }
}
