import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  field: string;
  description: string;
  image: string;
  author: string;
  time: string;
}

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css'
})
export class CaseStudiesComponent implements OnInit {
  caseStudies: CaseStudy[] = [];
  selectedField: string = 'All';
  fields: string[] = ['All'];
  filteredCaseStudies: CaseStudy[] = [];

  ngOnInit(): void {
    this.loadCaseStudies();
    this.filteredCaseStudies = [...this.caseStudies];

    // Extract unique fields for filter
    const uniqueFields = new Set(this.caseStudies.map(cs => cs.field));
    this.fields = ['All', ...Array.from(uniqueFields)];
  }

  loadCaseStudies(): void {
    this.caseStudies = [
      {
        id: 1,
        title: 'Career Transition Platform: From Academia to Industry',
        client: 'CareerBridge',
        field: 'Education',
        description: 'Helping PhD graduates successfully transition to industry roles with personalized career mapping.',
        image: 'case-studies/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg',
        author: 'Dr. Emily R.',
        time: '6 months ago'
      },
      {
        id: 2,
        title: 'AI-Powered Recruitment Solution for Tech Startups',
        client: 'TalentMatch',
        field: 'Recruitment',
        description: 'Reducing hiring time by 65% through AI-based skill assessment and candidate matching algorithms.',
        image: 'case-studies/john-schnobrich-FlPc9_VocJ4-unsplash.jpg',
        author: 'James L.',
        time: '1 year ago'
      },
      {
        id: 3,
        title: 'Vocational Training Program for Manufacturing Industry',
        client: 'IndustrySkills',
        field: 'Training',
        description: 'Creating sustainable employment pathways through customized vocational training and industry partnerships.',
        image: 'case-studies/vasily-koloda-8CqDvPuo_kI-unsplash.jpg',
        author: 'Sarah M.',
        time: '8 months ago'
      }
    ];
  }

  filterByField(field: string): void {
    this.selectedField = field;
    this.filteredCaseStudies = field === 'All'
      ? [...this.caseStudies]
      : this.caseStudies.filter(cs => cs.field === field);
  }
}
