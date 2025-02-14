import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { HeaderComponentAdmin } from './components/common-components/header-admin/header.component';
import { FooterComponentAdmin } from './components/common-components/footer-admin/footer.component';
import{HeaderComponentCommon} from './components/common-components/header-common/header.component';
import{FooterComponentCommon} from './components/common-components/footer-common/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    ToastModule,
    HeaderComponentAdmin,
    HeaderComponentCommon,
    FooterComponentAdmin,
    FooterComponentCommon,
    CommonModule
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signuploginapp';

  constructor(private router: Router) {}
  isAdmin(): boolean {
    return this.router.url.startsWith('/admin',);
  }

  isCommon(): boolean {
    return this.router.url.startsWith('/common');
  }
}
