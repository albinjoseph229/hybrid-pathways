import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  experience: string;
  postedDate: string;
  description: string;
  applied: boolean;
}

@Component({
  selector: 'app-jobseeker-jobfinder',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './jobseeker-jobfinder.component.html',
  styleUrl: './jobseeker-jobfinder.component.css'
})
export class JobseekerJobfinderComponent implements OnInit {
  jobs: Job[] = [];
  appliedJobs: Job[] = [];
  filteredJobs: Job[] = [];
  searchForm: FormGroup;
  
  // Filter options
  jobTypes: string[] = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'];
  experienceLevels: string[] = ['Entry level', '1-3 years', '3-5 years', '5+ years'];
  salaryRanges: string[] = ['$0-$50k', '$50k-$80k', '$80k-$120k', '$120k+'];
  
  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
      jobType: [''],
      experienceLevel: [''],
      salaryRange: [''],
      location: ['']
    });
  }

  ngOnInit(): void {
    // In a real app, you'd fetch this data from a service
    this.loadMockData();
    
    // Subscribe to form changes to filter jobs
    this.searchForm.valueChanges.subscribe(() => {
      this.filterJobs();
    });
  }

  loadMockData(): void {
    const mockJobs: Job[] = [
      {
        id: 1,
        title: 'Frontend Developer',
        company: 'TechCorp',
        location: 'New York, NY',
        salary: '$80,000 - $100,000',
        jobType: 'Full-time',
        experience: '1-3 years',
        postedDate: '2025-02-20',
        description: 'Looking for a skilled Angular developer to join our team.',
        applied: true
      },
      {
        id: 2,
        title: 'Senior Angular Engineer',
        company: 'WebSolutions',
        location: 'Remote',
        salary: '$120,000 - $150,000',
        jobType: 'Full-time',
        experience: '5+ years',
        postedDate: '2025-02-22',
        description: 'Looking for a senior developer with extensive Angular experience.',
        applied: true
      },
      {
        id: 3,
        title: 'UI/UX Designer',
        company: 'DesignHub',
        location: 'San Francisco, CA',
        salary: '$90,000 - $110,000',
        jobType: 'Full-time',
        experience: '3-5 years',
        postedDate: '2025-02-15',
        description: 'Join our design team to create intuitive user experiences.',
        applied: false
      },
      {
        id: 4,
        title: 'Backend Developer',
        company: 'ServerLogic',
        location: 'Austin, TX',
        salary: '$95,000 - $120,000',
        jobType: 'Full-time',
        experience: '3-5 years',
        postedDate: '2025-02-18',
        description: 'Develop and maintain server-side applications using modern technologies.',
        applied: false
      },
      {
        id: 5,
        title: 'DevOps Engineer',
        company: 'CloudTech',
        location: 'Remote',
        salary: '$110,000 - $140,000',
        jobType: 'Contract',
        experience: '3-5 years',
        postedDate: '2025-02-25',
        description: 'Implement and manage CI/CD pipelines and cloud infrastructure.',
        applied: false
      }
    ];

    this.jobs = mockJobs;
    this.appliedJobs = this.jobs.filter(job => job.applied);
    this.filteredJobs = this.jobs;
  }

  filterJobs(): void {
    const { searchQuery, jobType, experienceLevel, salaryRange, location } = this.searchForm.value;
    
    this.filteredJobs = this.jobs.filter(job => {
      let matchesSearch = true;
      let matchesType = true;
      let matchesExperience = true;
      let matchesSalary = true;
      let matchesLocation = true;
      
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        matchesSearch = job.title.toLowerCase().includes(query) || 
                       job.company.toLowerCase().includes(query) ||
                       job.description.toLowerCase().includes(query);
      }
      
      if (jobType) {
        matchesType = job.jobType === jobType;
      }
      
      if (experienceLevel) {
        matchesExperience = job.experience === experienceLevel;
      }
      
      if (salaryRange) {
        // This is a simple implementation - in a real app you might need more complex logic
        matchesSalary = job.salary.includes(salaryRange);
      }
      
      if (location) {
        matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());
      }
      
      return matchesSearch && matchesType && matchesExperience && matchesSalary && matchesLocation;
    });
  }

  applyForJob(job: Job): void {
    // In a real app, you'd make an API call here
    job.applied = true;
    this.appliedJobs = this.jobs.filter(j => j.applied);
  }

  resetFilters(): void {
    this.searchForm.reset();
    this.filteredJobs = this.jobs;
  }
}
