import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Education {
  institution: string;
  degree: string;
  graduationYear: number;
  additionalInfo: string;
  editing: boolean;
}

interface WorkExperience {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  editing: boolean;
}

interface ProfileDocument {
  id: string;
  name: string;
  type: string;
  uploadDate: Date;
  url: string;
}

@Component({
  selector: 'app-jobseeker-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './jobseeker-profile.component.html',
  styleUrl: './jobseeker-profile.component.css'
})
export class JobseekerProfileComponent implements OnInit {
  // Profile photo
  profilePhoto: string | null = null;
  
  // Editing states
  isEditingAll: boolean = false;
  editingSections: {
    personal: boolean;
    contact: boolean;
    address: boolean;
    travel: boolean;
    education: boolean;
    work: boolean;
  } = {
    personal: false,
    contact: false,
    address: false,
    travel: false,
    education: false,
    work: false
  };

  // Personal Information
  personalInfo = {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: new Date('1990-01-01'),
    gender: 'Male',
    nationality: 'American',
    maritalStatus: 'Single'
  };

  // Contact Information
  contactInfo = {
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    alternativeEmail: 'johndoe@gmail.com',
    emergencyContact: '+1 (555) 987-6543'
  };

  // Address Information
  addressInfo = {
    streetAddress: '123 Main St, Apt 4B',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'USA'
  };

  // List of countries for dropdown
  countries: string[] = [
    'USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Japan', 'China', 
    'India', 'Brazil', 'Mexico', 'South Africa', 'Russia'
  ];

  // Travel Documents
  travelDocuments = {
    passportNumber: 'P12345678',
    passportExpiryDate: new Date('2028-12-31'),
    visaType: 'Work',
    visaNumber: 'V87654321',
    visaExpiryDate: new Date('2026-06-30')
  };

  // Educational Qualifications
  educationList: Education[] = [
    {
      institution: 'University of California',
      degree: 'Bachelor of Science in Computer Science',
      graduationYear: 2015,
      additionalInfo: 'GPA: 3.8/4.0, Dean\'s List',
      editing: false
    },
    {
      institution: 'Massachusetts Institute of Technology',
      degree: 'Master of Science in Data Science',
      graduationYear: 2018,
      additionalInfo: 'Research Assistant, Machine Learning Lab',
      editing: false
    }
  ];

  // Work Experience
  workExperienceList: WorkExperience[] = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Software Engineer',
      startDate: new Date('2018-07-01'),
      endDate: new Date('2021-08-31'),
      description: 'Developed scalable web applications using Angular and Node.js. Led a team of 3 junior developers.',
      editing: false
    },
    {
      company: 'Data Dynamics Corp.',
      position: 'Senior Developer',
      startDate: new Date('2021-09-15'),
      endDate: null,
      description: 'Currently working on big data solutions and cloud architecture. Implementing CI/CD pipelines.',
      editing: false
    }
  ];

  // Documents
  documents: ProfileDocument[] = [
    {
      id: 'doc1',
      name: 'Resume.pdf',
      type: 'application/pdf',
      uploadDate: new Date('2023-11-15'),
      url: '/assets/docs/resume.pdf'
    },
    {
      id: 'doc2',
      name: 'Passport.jpg',
      type: 'image/jpeg',
      uploadDate: new Date('2023-10-05'),
      url: '/assets/docs/passport.jpg'
    },
    {
      id: 'doc3',
      name: 'University Degree.pdf',
      type: 'application/pdf',
      uploadDate: new Date('2023-09-20'),
      url: '/assets/docs/degree.pdf'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize component or load user data
    this.loadUserData();
  }

  loadUserData(): void {
    // In a real application, this would fetch data from a service
    console.log('Loading user data...');
    // Here you would call your user service to get the data
    // this.userService.getUserProfile().subscribe(data => { ... });
  }

  // Section editing
  toggleSectionEdit(section: keyof typeof this.editingSections): void {
    this.editingSections[section] = !this.editingSections[section];
  }

  editAll(): void {
    this.isEditingAll = true;
    Object.keys(this.editingSections).forEach(key => {
      this.editingSections[key as keyof typeof this.editingSections] = true;
    });
  }

  saveAll(): void {
    this.isEditingAll = false;
    Object.keys(this.editingSections).forEach(key => {
      this.editingSections[key as keyof typeof this.editingSections] = false;
    });
    this.saveChanges();
  }

  // Education methods
  addEducation(): void {
    const newEducation: Education = {
      institution: '',
      degree: 'New Degree',
      graduationYear: new Date().getFullYear(),
      additionalInfo: '',
      editing: true
    };
    this.educationList.push(newEducation);
  }

  toggleEducationEdit(index: number): void {
    this.educationList[index].editing = !this.educationList[index].editing;
  }

  removeEducation(index: number): void {
    if (confirm('Are you sure you want to delete this education entry?')) {
      this.educationList.splice(index, 1);
    }
  }

  // Work experience methods
  addWorkExperience(): void {
    const newWorkExperience: WorkExperience = {
      company: '',
      position: 'New Position',
      startDate: new Date(),
      endDate: null,
      description: '',
      editing: true
    };
    this.workExperienceList.push(newWorkExperience);
  }

  toggleWorkEdit(index: number): void {
    this.workExperienceList[index].editing = !this.workExperienceList[index].editing;
  }

  removeWorkExperience(index: number): void {
    if (confirm('Are you sure you want to delete this work experience entry?')) {
      this.workExperienceList.splice(index, 1);
    }
  }

  // Document management
  uploadPhoto(): void {
    // In a real application, this would open a file picker and handle the upload
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      const file = (target.files as FileList)[0];
      if (file) {
        // Here you would upload the file to your server
        // For demo purposes, we'll use a FileReader to create a data URL
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.profilePhoto = reader.result as string;
        };
      }
    };
    fileInput.click();
  }

  uploadDocument(): void {
    // In a real application, this would open a file picker and handle the upload
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.jpg,.jpeg,.png';
    fileInput.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      const file = (target.files as FileList)[0];
      if (file) {
        // Here you would upload the file to your server
        // For demo purposes, we'll just add it to the documents array
        const newDoc: ProfileDocument = {
          id: 'doc' + (this.documents.length + 1),
          name: file.name,
          type: file.type,
          uploadDate: new Date(),
          url: URL.createObjectURL(file)
        };
        this.documents.push(newDoc);
      }
    };
    fileInput.click();
  }

  // uploadNewVersion(document: Document): void {
  //   // In a real application, this would open a file picker and handle the upload
  //   const fileInput = document.createElement('input') as HTMLInputElement;
  //   fileInput.type = 'file';
  //   fileInput.accept = '.pdf,.jpg,.jpeg,.png';
  //   fileInput.onchange = (event: Event) => {
  //     const target = event.target as HTMLInputElement;
  //     const file = target.files?.[0];
  //     if (file) {
  //       // Here you would upload the file to your server
  //       // For demo purposes, we'll just update the document in the array
  //       const index = this.documents.findIndex(doc => doc.id === document.id);
  //       if (index !== -1) {
  //         this.documents[index] = {
  //           ...document,
  //           name: file.name,
  //           type: file.type,
  //           uploadDate: new Date(),
  //           url: URL.createObjectURL(file)
  //         };
  //       }
  //     }
  //   };
  //   fileInput.click();
  // }

  //while enabling the above code, change the html file line 328 into this to make it functional:
  // <button class="text-blue-600 hover:text-blue-800 (click)="uploadNewVersion(doc)">
  //     <i class="fas fa-upload"></i>
  // </button>

  downloadDocument(document: ProfileDocument): void {
    // In a real application, this would trigger a download
    window.open(document.url, '_blank');
  }

  // Navigation
  backToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  // Save all changes
  saveChanges(): void {
    // In a real application, this would send all data to your backend
    console.log('Saving changes...');
    
    // Reset all editing states
    Object.keys(this.editingSections).forEach(key => {
      this.editingSections[key as keyof typeof this.editingSections] = false;
    });
    
    this.educationList.forEach(edu => {
      edu.editing = false;
    });
    
    this.workExperienceList.forEach(exp => {
      exp.editing = false;
    });
    
    // Here you would call your user service to save the data
    // this.userService.updateUserProfile(profileData).subscribe(response => { ... });
    
    // Show success message
    alert('Profile updated successfully!');
  }
}
