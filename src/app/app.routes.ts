import { Routes } from '@angular/router';
import { LoginComponent } from './components/common-components/login/login.component';
import { RegisterComponent } from './components/common-components/register/register.component';
import { AdminComponent } from './components/admin-components/admin/admin.component';
import { authGuard } from './guards/auth.guard';
import { LandingPageComponent } from './components/landing-page-components/landing-page/landing-page.component';
import { LogoutComponent } from './components/common-components/logout/logout.component';
import{AboutUsComponent} from './components/common-components/about-us/about-us.component';
import{ContactUsComponent} from './components/common-components/contact-us/contact-us.component';
import{FaqComponent} from './components/common-components/faq/faq.component';

export const routes: Routes = [
  { path: 'common/login', component: LoginComponent },
  { path: 'common/register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'common/landing', pathMatch: 'full' },
  { path: 'common/landing', component: LandingPageComponent },
  { path: 'logout', component: LogoutComponent },
  {path: 'common/about',component:AboutUsComponent},
  {path:'common/contact',component:ContactUsComponent},
  {path:'common/faq',component:FaqComponent}
];
