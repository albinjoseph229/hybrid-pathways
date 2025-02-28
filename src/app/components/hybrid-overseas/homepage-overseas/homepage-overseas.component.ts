import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-overseas',
  imports: [CommonModule],
  templateUrl: './homepage-overseas.component.html',
  styleUrl: './homepage-overseas.component.css'
})
export class HomepageOverseasComponent implements OnInit {
  // Feature section data
  features = [
    {
      icon: 'fas fa-search',
      title: 'Job Search',
      description: 'Search through thousands of international job opportunities',
      bgColor: 'bg-blue-100',
      hoverBgColor: 'group-hover:bg-blue-200',
      textColor: 'text-blue-600',
      hoverTextColor: 'group-hover:text-blue-700'
    },
    {
      icon: 'fas fa-blog',
      title: 'Career Blog',
      description: 'Stay updated with the latest career advice and industry insights',
      bgColor: 'bg-indigo-100',
      hoverBgColor: 'group-hover:bg-indigo-200',
      textColor: 'text-indigo-600',
      hoverTextColor: 'group-hover:text-indigo-700'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Direct Hiring',
      description: 'Connect directly with employers for seamless hiring process',
      bgColor: 'bg-purple-100',
      hoverBgColor: 'group-hover:bg-purple-200',
      textColor: 'text-purple-600',
      hoverTextColor: 'group-hover:text-purple-700'
    }
  ];

  // Plan features
  basicPlanFeatures = [
    'Basic profile listing',
    'Apply to 10 jobs/month',
    'Email support',
    'Basic job alerts'
  ];

  premiumPlanFeatures = [
    'Featured profile listing',
    'Unlimited job applications',
    'Priority application status',
    'CV/Resume review',
    'Advanced job alerts',
    'Interview preparation'
  ];

  professionalPlanFeatures = [
    'All Premium features',
    '1-on-1 career counseling',
    'Visa application assistance',
    'Document verification',
    'Relocation assistance',
    '24/7 priority support'
  ];

  // News items
  newsItems = [
    {
      title: 'Tech Hiring Boom in Silicon Valley',
      date: 'Feb 19, 2025',
      author: 'Admin',
      excerpt: 'Major tech companies announce plans to increase their workforce by 30% in the coming months...',
      category: 'Technology'
    },
    {
      title: 'Healthcare Professionals in High Demand',
      date: 'Feb 18, 2025',
      author: 'Admin',
      excerpt: 'European countries seeking experienced healthcare workers with attractive packages...',
      category: 'Healthcare'
    },
    {
      title: 'New Work Visa Policies Announced',
      date: 'Feb 17, 2025',
      author: 'Admin',
      excerpt: 'Several countries implement favorable visa policies for skilled international workers...',
      category: 'Immigration'
    }
  ];

  // Testimonials
  testimonials = [
    {
      name: 'John Doe',
      title: 'Founder of Rubik',
      imageUrl: '/api/placeholder/100/100',
      comment: 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.'
    },
    {
      name: 'Mark Adair',
      title: 'Founder of Alpha',
      imageUrl: '/api/placeholder/100/100',
      comment: 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.'
    },
    {
      name: 'Simon Konecki',
      title: 'Founder of Labar',
      imageUrl: '/api/placeholder/100/100',
      comment: 'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.'
    }
  ];

  // Intersection Observer for scroll animations
  visibleElements: Set<Element> = new Set();
  observer: IntersectionObserver | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.visibleElements.add(entry.target);
          // Adding Tailwind classes instead of custom animation classes
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, options);

    // Observe elements for animation
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        if (this.observer) this.observer.observe(el);
      });
    }, 100);
  }

  // Method to handle navigation
  navigate(path: string) {
    this.router.navigateByUrl(path);
  }
}
