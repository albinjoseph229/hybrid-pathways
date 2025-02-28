import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobseeker-homepage',
  imports: [CommonModule],
  templateUrl: './jobseeker-homepage.component.html',
  styleUrl: './jobseeker-homepage.component.css'
})
export class JobseekerHomepageComponent implements OnInit {
  // Country data
  countries = [
    { name: 'United States', value: 'us' },
    { name: 'United Kingdom', value: 'uk' },
    { name: 'Canada', value: 'ca' },
    { name: 'Australia', value: 'au' },
    { name: 'Germany', value: 'de' },
    { name: 'Singapore', value: 'sg' },
    { name: 'Japan', value: 'jp' },
    { name: 'United Arab Emirates', value: 'ae' },
    { name: 'Netherlands', value: 'nl' },
    { name: 'Switzerland', value: 'ch' }
  ];

  // Industry data
  industries = [
    { name: 'Technology', value: 'tech' },
    { name: 'Healthcare', value: 'healthcare' },
    { name: 'Finance', value: 'finance' },
    { name: 'Education', value: 'education' },
    { name: 'Engineering', value: 'engineering' },
    { name: 'Marketing', value: 'marketing' },
    { name: 'Hospitality', value: 'hospitality' },
    { name: 'Consulting', value: 'consulting' },
    { name: 'Energy', value: 'energy' },
    { name: 'Retail', value: 'retail' }
  ];

  // Statistics data
  statistics = [
    { value: '15K+', label: 'Available Jobs', colorClass: 'border-indigo-500', textClass: 'text-indigo-600' },
    { value: '120+', label: 'Countries', colorClass: 'border-pink-500', textClass: 'text-pink-600' },
    { value: '5.2K+', label: 'Companies', colorClass: 'border-yellow-500', textClass: 'text-amber-600' },
    { value: '750K+', label: 'Job Seekers', colorClass: 'border-green-500', textClass: 'text-emerald-600' }
  ];

  // Featured jobs data
  featuredJobs = [
    {
      title: 'Senior Software Engineer',
      company: 'TechGlobal Inc.',
      logo: 'assets/images/companies/tech-global.jpg',
      location: 'Singapore',
      salary: '$90,000 - $120,000',
      type: 'Full-time',
      skills: ['React', 'Node.js', 'TypeScript'],
      postedTime: '2 days ago',
      tagText: 'Featured',
      tagClass: 'inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium'
    },
    {
      title: 'International Marketing Manager',
      company: 'Global Brands Ltd.',
      logo: 'assets/images/companies/global-brands.jpg',
      location: 'London, UK',
      salary: '£65,000 - £80,000',
      type: 'Full-time',
      skills: ['Digital Marketing', 'Brand Strategy', 'Team Leadership'],
      postedTime: '1 week ago',
      tagText: 'Visa Sponsored',
      tagClass: 'inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium'
    },
    {
      title: 'Financial Analyst',
      company: 'InvestBank International',
      logo: 'assets/images/companies/investbank.jpg',
      location: 'Dubai, UAE',
      salary: '$85,000 - $95,000',
      type: 'Full-time',
      skills: ['Financial Modeling', 'Excel', 'Data Analysis'],
      postedTime: '3 days ago',
      tagText: 'Relocation Package',
      tagClass: 'inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium'
    },
    {
      title: 'Senior UX/UI Designer',
      company: 'Creative Solutions',
      logo: 'assets/images/companies/creative-solutions.jpg',
      location: 'Sydney, Australia',
      salary: 'AUD 95,000 - 115,000',
      type: 'Full-time',
      skills: ['Figma', 'User Research', 'Prototyping'],
      postedTime: '5 days ago',
      tagText: 'Remote Possible',
      tagClass: 'inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium'
    },
    {
      title: 'International Sales Director',
      company: 'Global Trade Inc.',
      logo: 'assets/images/companies/global-trade.jpg',
      location: 'Tokyo, Japan',
      salary: '¥12M - ¥15M',
      type: 'Full-time',
      skills: ['Negotiation', 'Strategic Planning', 'Team Management'],
      postedTime: '1 day ago',
      tagText: 'Executive',
      tagClass: 'inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium'
    },
    {
      title: 'Hospitality Manager',
      company: 'Grand Resort & Spa',
      logo: 'assets/images/companies/grand-resort.jpg',
      location: 'Maldives',
      salary: '$70,000 - $85,000',
      type: 'Full-time',
      skills: ['Customer Service', 'Staff Management', 'Event Planning'],
      postedTime: '1 week ago',
      tagText: 'Housing Included',
      tagClass: 'inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium'
    }
  ];

  // Popular destinations data
  popularDestinations = [
    { name: 'United States', jobCount: '4,526 jobs', image: 'assets/images/countries/usa.jpg' },
    { name: 'UK', jobCount: '3,845 jobs', image: 'assets/images/countries/uk.jpg' },
    { name: 'Singapore', jobCount: '2,390 jobs', image: 'assets/images/countries/singapore.jpg' },
    { name: 'Australia', jobCount: '2,175 jobs', image: 'assets/images/countries/australia.jpg' },
    { name: 'Germany', jobCount: '1,965 jobs', image: 'assets/images/countries/germany.jpg' },
    { name: 'Canada', jobCount: '1,890 jobs', image: 'assets/images/countries/canada.jpg' },
    { name: 'UAE', jobCount: '1,640 jobs', image: 'assets/images/countries/uae.jpg' },
    { name: 'Japan', jobCount: '1,520 jobs', image: 'assets/images/countries/japan.jpg' },
    { name: 'Netherlands', jobCount: '1,245 jobs', image: 'assets/images/countries/netherlands.jpg' },
    { name: 'Switzerland', jobCount: '980 jobs', image: 'assets/images/countries/switzerland.jpg' },
    { name: 'New Zealand', jobCount: '875 jobs', image: 'assets/images/countries/new-zealand.jpg' },
    { name: 'South Korea', jobCount: '745 jobs', image: 'assets/images/countries/south-korea.jpg' }
  ];

  // Features data
  features = [
    {
      title: 'Visa Assistance',
      description: 'Get expert guidance on work visas and immigration requirements for different countries.',
      iconClass: 'fas fa-passport text-white',
      bgClass: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Relocation Support',
      description: 'Access resources and services to help you move and settle in your new country.',
      iconClass: 'fas fa-home text-white',
      bgClass: 'bg-gradient-to-br from-pink-500 to-pink-600'
    },
    {
      title: 'Cultural Training',
      description: 'Prepare for your new environment with cultural orientation and language resources.',
      iconClass: 'fas fa-globe text-white',
      bgClass: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Salary Insights',
      description: 'Get detailed compensation data adjusted for cost of living in different countries.',
      iconClass: 'fas fa-chart-line text-white',
      bgClass: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Verified Employers',
      description: 'All companies are vetted to ensure legitimate job opportunities and fair practices.',
      iconClass: 'fas fa-shield-alt text-white',
      bgClass: 'bg-gradient-to-br from-yellow-500 to-yellow-600'
    },
    {
      title: 'Career Coaching',
      description: 'Connect with coaches who specialize in international career transitions.',
      iconClass: 'fas fa-user-tie text-white',
      bgClass: 'bg-gradient-to-br from-indigo-500 to-indigo-600'
    }
  ];

  // Testimonials data
  testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Software Engineer in Singapore',
      avatar: 'assets/images/testimonials/sarah.jpg',
      quote: 'GlobalCareerLink helped me land my dream job in Singapore. The visa guidance was invaluable, and the relocation support made the transition seamless.',
      rating: 5,
      accentClass: 'bg-gradient-to-br from-indigo-500 to-indigo-600'
    },
    {
      name: 'David Chen',
      position: 'Marketing Director in London',
      avatar: 'assets/images/testimonials/david.jpg',
      quote: 'After searching for months on other job sites, I found the perfect opportunity within weeks. The cultural training prepared me well for my move to the UK.',
      rating: 4.5,
      accentClass: 'bg-gradient-to-br from-pink-500 to-pink-600'
    },
    {
      name: 'Maria Rodriguez',
      position: 'Finance Manager in Dubai',
      avatar: 'assets/images/testimonials/maria.jpg',
      quote: 'The salary insights feature helped me negotiate a better compensation package, and the relocation assistance made moving to Dubai much easier than expected.',
      rating: 5,
      accentClass: 'bg-gradient-to-br from-purple-500 to-purple-600'
    }
  ];

  // Total users
  totalUsers = 750000;

  constructor() { }

  ngOnInit(): void {
    // Any initialization logic can go here
  }
}
