import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-jobseeker',
  imports: [NgIf],
  templateUrl: './header-jobseeker.component.html',
  styleUrl: './header-jobseeker.component.css'
})
export class HeaderJobseekerComponent {

  isMenuOpen = false;

}
