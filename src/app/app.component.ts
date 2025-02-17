import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { HeaderComponentAdmin } from './components/admin-components/header-admin/header.component';
import { FooterComponentAdmin } from './components/admin-components/footer-admin/footer.component';
import{HeaderComponentCommon} from './components/common-components/header-common/header.component';
import{FooterComponentCommon} from './components/common-components/footer-common/footer.component';
import{HeaderStudentComponent} from './components/hybrid-studyabroad/student-components/header-student/header-student.component';
import{FooterStudentComponent} from './components/hybrid-studyabroad/student-components/footer-student/footer-student.component';
import { HeaderEmployerComponent } from './components/hybrid-overseas/employer-components/header-employer/header-employer.component';
import { FooterEmployerComponent } from './components/hybrid-overseas/employer-components/footer-employer/footer-employer.component';
import{HeaderJobseekerComponent} from './components/hybrid-overseas/jobseeker-components/header-jobseeker/header-jobseeker.component';
import{FooterJobseekerComponent} from './components/hybrid-overseas/jobseeker-components/footer-jobseeker/footer-jobseeker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    ToastModule,
    CommonModule,
    HeaderComponentAdmin,
    HeaderComponentCommon,
    FooterComponentAdmin,
    FooterComponentCommon,
    HeaderStudentComponent,
    FooterStudentComponent,
    HeaderEmployerComponent,
    FooterEmployerComponent,
    HeaderJobseekerComponent,
    FooterJobseekerComponent,
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
  isStudent(): boolean {
    return this.router.url.startsWith('/student');
  }
  isEmployer(): boolean {
    return this.router.url.startsWith('/employer');
  }
  isJobSeeker(): boolean {
    return this.router.url.startsWith('/jobseeker');
  }

}
