import { Routes } from '@angular/router';
import { LoginComponent } from './components/common-components/login/login.component';
import { RegisterComponent } from './components/common-components/register/register.component';
import { AdminComponent } from './components/admin-components/admin/admin.component';
import { authGuard } from './guards/auth.guard';
import { LandingPageComponent } from './components/common-components/landing-page/landing-page.component';
import { LogoutComponent } from './components/common-components/logout/logout.component';
import { AboutUsComponent } from './components/common-components/about-us/about-us.component';
import { ContactUsComponent } from './components/common-components/contact-us/contact-us.component';
import { FaqComponent } from './components/common-components/faq/faq.component';
import { StudentHomepageComponent } from './components/hybrid-studyabroad/student-components/student-homepage/student-homepage.component';
import { EmployerHomepageComponent } from './components/hybrid-overseas/employer-components/employer-homepage/employer-homepage.component';
import { JobseekerHomepageComponent } from './components/hybrid-overseas/jobseeker-components/jobseeker-homepage/jobseeker-homepage.component';
import { HomepageStudyabroadComponent } from './components/hybrid-studyabroad/homepage-studyabroad/homepage-studyabroad.component';
import { HomepageOverseasComponent } from './components/hybrid-overseas/homepage-overseas/homepage-overseas.component';
import { AdminViewEmployersComponent } from './components/admin-components/admin-view-employers/admin-view-employers.component';
import { AdminViewJobseekersComponent } from './components/admin-components/admin-view-jobseekers/admin-view-jobseekers.component';
import { AdminViewStudentsComponent } from './components/admin-components/admin-view-students/admin-view-students.component';
import { AdminGiveUpdatesComponent } from './components/admin-components/admin-give-updates/admin-give-updates.component';
import { AdminAddCourseComponent } from './components/admin-components/admin-add-course/admin-add-course.component';
import { AdminPostAdsComponent } from './components/admin-components/admin-post-ads/admin-post-ads.component';
import { AdminPostCaseStudiesComponent } from './components/admin-components/admin-post-case-studies/admin-post-case-studies.component';
import { AdminChangePasswordComponent } from './components/admin-components/admin-change-password/admin-change-password.component';
import { AdminViewCoursesComponent } from './components/admin-components/admin-view-courses/admin-view-courses.component';
import { AdminViewUpdatesComponent } from './components/admin-components/admin-view-updates/admin-view-updates.component';
import { AdminViewCaseStudiesComponent } from './components/admin-components/admin-view-case-studies/admin-view-case-studies.component';
import { AdminViewAdsComponent } from './components/admin-components/admin-view-ads/admin-view-ads.component';
import { JobseekerProfileComponent } from './components/hybrid-overseas/jobseeker-components/jobseeker-profile/jobseeker-profile.component';
import { PostJobOpeningsComponent } from './components/hybrid-overseas/employer-components/post-job-openings/post-job-openings.component';
import { ViewApplicantsComponent } from './components/hybrid-overseas/employer-components/view-applicants/view-applicants.component';
import { EmployerRegistrationComponent } from './components/hybrid-overseas/employer-components/employer-registration/employer-registration.component';
import { PageNotFoundComponent } from './components/common-components/page-not-found/page-not-found.component';
import { JobseekerAppointmentsComponent } from './components/hybrid-overseas/jobseeker-components/jobseeker-appointments/jobseeker-appointments.component';
import { JobseekerJobfinderComponent } from './components/hybrid-overseas/jobseeker-components/jobseeker-jobfinder/jobseeker-jobfinder.component';
import { CaseStudiesComponent } from './components/hybrid-overseas/employer-components/case-studies/case-studies.component';
import {EmployerUpdatesComponent} from './components/hybrid-overseas/employer-components/employer-updates/employer-updates.component'
import { StudentprofileComponent } from './components/hybrid-studyabroad/studentprofile/studentprofile.component';


export const routes: Routes = [
  //Common Module Routes
  { path: 'common/login', component: LoginComponent },
  { path: 'common/register', component: RegisterComponent },
  { path: '', redirectTo: 'common/landing', pathMatch: 'full' },
  { path: 'common/landing', component: LandingPageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'common/about', component: AboutUsComponent },
  { path: 'common/contact', component: ContactUsComponent },
  { path: 'common/faq', component: FaqComponent },

  //Student Routes
  { path: 'student/homepage', component: StudentHomepageComponent },

  //Study Abroad Routes
  { path: 'studyabroad/homepage', component: HomepageStudyabroadComponent },
  { path: 'studyabroad/studentprofile', component: StudentprofileComponent },

  //Overseas Routes
  { path: 'overseas/homepage', component: HomepageOverseasComponent },

  //Admin Routes
  // { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/viewemployers', component: AdminViewEmployersComponent },
  { path: 'admin/viewjobseekers', component: AdminViewJobseekersComponent },
  { path: 'admin/viewstudents', component: AdminViewStudentsComponent },
  { path: 'admin/giveupdates', component: AdminGiveUpdatesComponent },
  { path: 'admin/addcourse', component: AdminAddCourseComponent },
  { path: 'admin/postads', component: AdminPostAdsComponent },
  { path: 'admin/postcasestudies', component: AdminPostCaseStudiesComponent },
  { path: 'admin/changepassword', component: AdminChangePasswordComponent },
  { path: 'admin/viewcourses', component: AdminViewCoursesComponent },
  { path: 'admin/viewupdates', component: AdminViewUpdatesComponent },
  { path: 'admin/viewcasestudies', component: AdminViewCaseStudiesComponent },
  { path: 'admin/viewads', component: AdminViewAdsComponent },

  //Employer Routes
  { path: 'employer/homepage', component: EmployerHomepageComponent },
  { path: 'employer/aboutus', component: AboutUsComponent },
  { path: 'employer/faq', component: FaqComponent },
  { path: 'employer/contactus', component: ContactUsComponent },
  { path: 'employer/postjob', component: PostJobOpeningsComponent },
  { path: 'employer/viewapplicants', component: ViewApplicantsComponent },
  { path: 'employer/registration', component: EmployerRegistrationComponent },
  { path: 'employer/viewcasestudies', component: CaseStudiesComponent},
  { path: 'employer/viewupdates', component: EmployerUpdatesComponent},

  //Jobseeker Routes
  { path: 'jobseeker/homepage', component: JobseekerHomepageComponent },
  { path: 'jobseeker/profile', component: JobseekerProfileComponent },
  { path: 'jobseeker/appointments', component: JobseekerAppointmentsComponent },
  { path: 'jobseeker/jobfinder', component: JobseekerJobfinderComponent },

  // Wildcard Route for 404 Page
  { path: '**', component: PageNotFoundComponent },
];
