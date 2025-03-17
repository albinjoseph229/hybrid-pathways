import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Course {
  id: number;
  name: string;
  university: string;
  country: string;
  language: string;
  credits: number;
  duration: string;
  progress: number;
  status: 'Enrolled' | 'Planned' | 'Completed' | 'Interested';
}

interface University {
  name: string;
  country: string;
  partnershipLevel: string;
  programTypes: string[];
}

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  homeUniversity: string;
  department: string;
  yearOfStudy: number;
  profileImage: string;
  bio: string;
  languageSkills: {language: string, level: string}[];
  targetCountries: string[];
  enrolledCourses: Course[];
  interestedUniversities: University[];
}

@Component({
  selector: 'app-studentprofile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentprofile.component.html',
  styleUrl: './studentprofile.component.css'
})
export class StudentprofileComponent implements OnInit {
  // Initialize the student property with a default value
  student: Student = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    homeUniversity: '',
    department: '',
    yearOfStudy: 0,
    profileImage: '',
    bio: '',
    languageSkills: [],
    targetCountries: [],
    enrolledCourses: [],
    interestedUniversities: []
  };

  // Property to store total credits
  totalCredits: number = 0;

  // Selected tab
  activeTab: 'courses' | 'universities' | 'recommendations' = 'courses';

  constructor() { }

  ngOnInit(): void {
    // Mock data - in a real app, this would come from a service
    this.student = {
      id: 1001,
      name: 'Alex Johnson',
      email: 'alex.johnson@university.edu',
      phone: '(555) 123-4567',
      homeUniversity: 'State University',
      department: 'International Business',
      yearOfStudy: 3,
      profileImage: 'assets/profile.jpg',
      bio: 'Business student with a focus on international trade and cross-cultural management. Looking to study abroad to expand my global perspective and improve language skills.',
      languageSkills: [
        {language: 'English', level: 'Native'},
        {language: 'Spanish', level: 'Intermediate'},
        {language: 'French', level: 'Beginner'}
      ],
      targetCountries: ['Spain', 'France', 'Germany', 'Japan'],
      enrolledCourses: [
        {
          id: 101,
          name: 'International Business Ethics',
          university: 'Universidad de Barcelona',
          country: 'Spain',
          language: 'English/Spanish',
          credits: 4,
          duration: 'Spring 2026',
          progress: 0,
          status: 'Enrolled'
        },
        {
          id: 102,
          name: 'Cross-Cultural Management',
          university: 'HEC Paris',
          country: 'France',
          language: 'English',
          credits: 3,
          duration: 'Fall 2025',
          progress: 0,
          status: 'Planned'
        },
        {
          id: 103,
          name: 'Global Supply Chain',
          university: 'State University',
          country: 'USA',
          language: 'English',
          credits: 3,
          duration: 'Current Semester',
          progress: 65,
          status: 'Enrolled'
        },
        {
          id: 104,
          name: 'Spanish for Business',
          university: 'State University',
          country: 'USA',
          language: 'Spanish/English',
          credits: 2,
          duration: 'Current Semester',
          progress: 70,
          status: 'Enrolled'
        }
      ],
      interestedUniversities: [
        {
          name: 'Universidad de Barcelona',
          country: 'Spain',
          partnershipLevel: 'Full Partner',
          programTypes: ['Semester Exchange', 'Summer Program']
        },
        {
          name: 'HEC Paris',
          country: 'France',
          partnershipLevel: 'Exchange Partner',
          programTypes: ['Semester Exchange']
        },
        {
          name: 'Waseda University',
          country: 'Japan',
          partnershipLevel: 'Affiliate',
          programTypes: ['Summer Program', 'Language Immersion']
        }
      ]
    };

    // Calculate total credits
    this.calculateTotalCredits();
  }

  // Method to calculate total credits
  calculateTotalCredits(): void {
    this.totalCredits = 0;
    for (const course of this.student.enrolledCourses) {
      this.totalCredits += course.credits;
    }
  }

  // Tab selection
  setActiveTab(tab: 'courses' | 'universities' | 'recommendations'): void {
    this.activeTab = tab;
  }

  // Get course status color
  getCourseStatusColor(status: string): string {
    switch(status) {
      case 'Enrolled': return 'bg-green-100 text-green-800';
      case 'Planned': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-purple-100 text-purple-800';
      case 'Interested': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
