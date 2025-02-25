import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

interface Consultant {
  id: string;
  name: string;
  photoUrl: string;
  title?: string;
}

interface Company {
  id: string;
  name: string;
  location: string;
  logoUrl: string;
}

interface Appointment {
  id: string;
  title: string;
  type: string;
  colorScheme: string;
  date: Date;
  duration: number;
  description?: string;
  consultant?: Consultant;
  company?: Company;
  actionType: 'join' | 'prepare' | 'confirm';
  confirmBy?: Date;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}

interface AvailableSlot {
  id: string;
  title: string;
  description: string;
  date: Date;
  duration: number;
}

interface AppointmentType {
  value: string;
  label: string;
}

interface Service {
  id: string;
  typeId: string;
  name: string;
  duration: number;
  description?: string;
}

interface TimeSlot {
  value: string;
  label: string;
}

interface CommunicationMethod {
  value: string;
  label: string;
}

@Component({
  selector: 'app-jobseeker-appointments',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './jobseeker-appointments.component.html',
  styleUrl: './jobseeker-appointments.component.css'
})
export class JobseekerAppointmentsComponent implements OnInit {
  activeTab: 'upcoming' | 'past' = 'upcoming';
  isModalOpen = false;
  appointmentForm: FormGroup;

  upcomingAppointments: Appointment[] = [];
  pastAppointments: Appointment[] = [];
  availableSlots: AvailableSlot[] = [];

  appointmentTypes: AppointmentType[] = [
    { value: 'career', label: 'Career Consultation' },
    { value: 'mock', label: 'Mock Interview' },
    { value: 'document', label: 'Document Review' }
  ];

  services: Service[] = [];
  filteredServices: Service[] = [];

  availableTimeSlots: TimeSlot[] = [];
  
  communicationMethods: CommunicationMethod[] = [
    { value: 'video', label: 'Video Call' },
    { value: 'phone', label: 'Phone Call' }
  ];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      type: ['career', Validators.required],
      service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      communicationMethod: ['video', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAppointments();
    this.loadAvailableSlots();
    this.loadServices();
    this.generateTimeSlots();
    
    // Listen for type changes to filter services
    this.appointmentForm.get('type')?.valueChanges.subscribe(type => {
      this.filterServicesByType(type);
    });
    
    // Initial filter
    this.filterServicesByType('career');
  }

  loadAppointments(): void {
    // This would normally be an API call
    this.upcomingAppointments = [
      {
        id: '1',
        title: 'Initial Career Assessment',
        type: 'Career Consultation',
        colorScheme: 'blue',
        date: new Date('2025-02-26T10:00:00'),
        duration: 30,
        consultant: {
          id: '101',
          name: 'Sarah Johnson',
          photoUrl: '/assets/images/placeholder.png',
          title: 'Senior Career Consultant'
        },
        actionType: 'join',
        status: 'confirmed'
      },
      {
        id: '2',
        title: 'Technical Interview Practice',
        type: 'Mock Interview',
        colorScheme: 'indigo',
        date: new Date('2025-02-28T14:30:00'),
        duration: 45,
        consultant: {
          id: '102',
          name: 'Michael Chen',
          photoUrl: '/assets/images/placeholder.png',
          title: 'Technical Interview Coach'
        },
        actionType: 'prepare',
        status: 'confirmed'
      },
      {
        id: '3',
        title: 'Interview with TechCorp Inc.',
        type: 'Employer Interview',
        colorScheme: 'purple',
        date: new Date('2025-03-05T11:15:00'),
        duration: 60,
        company: {
          id: '201',
          name: 'TechCorp Inc.',
          location: 'San Francisco, CA (Remote)',
          logoUrl: '/assets/images/placeholder.png'
        },
        actionType: 'confirm',
        confirmBy: new Date('2025-02-28'),
        status: 'pending'
      }
    ];
    
    this.pastAppointments = [
      {
        id: '4',
        title: 'Resume Review',
        type: 'Document Review',
        colorScheme: 'gray',
        date: new Date('2025-02-18T14:30:00'),
        duration: 30,
        consultant: {
          id: '103',
          name: 'Priya Patel',
          photoUrl: '/assets/images/placeholder.png',
          title: 'Resume Specialist'
        },
        actionType: 'join',
        status: 'completed'
      }
    ];
  }

  loadAvailableSlots(): void {
    // This would normally be an API call
    this.availableSlots = [
      {
        id: 'slot1',
        title: 'Resume Review Session',
        description: 'Professional feedback on your resume.',
        date: new Date('2025-03-01T09:00:00'),
        duration: 45
      },
      {
        id: 'slot2',
        title: 'LinkedIn Profile Optimization',
        description: 'Enhance your LinkedIn profile.',
        date: new Date('2025-03-02T13:30:00'),
        duration: 30
      },
      {
        id: 'slot3',
        title: 'Job Application Strategy',
        description: 'Develop an effective job search strategy.',
        date: new Date('2025-03-03T10:00:00'),
        duration: 60
      }
    ];
  }

  loadServices(): void {
    // This would normally be an API call
    this.services = [
      {
        id: 'service1',
        typeId: 'career',
        name: 'Initial Career Assessment',
        duration: 30
      },
      {
        id: 'service2',
        typeId: 'career',
        name: 'Career Transition Strategy',
        duration: 45
      },
      {
        id: 'service3',
        typeId: 'career',
        name: 'Salary Negotiation Coaching',
        duration: 60
      },
      {
        id: 'service4',
        typeId: 'mock',
        name: 'Technical Interview Practice',
        duration: 45
      },
      {
        id: 'service5',
        typeId: 'mock',
        name: 'Behavioral Interview Practice',
        duration: 30
      },
      {
        id: 'service6',
        typeId: 'document',
        name: 'Resume Review',
        duration: 30
      },
      {
        id: 'service7',
        typeId: 'document',
        name: 'Cover Letter Review',
        duration: 30
      }
    ];
  }

  generateTimeSlots(): void {
    // Generate time slots from 9:00 AM to 5:00 PM in 30-minute increments
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute of [0, 30]) {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        const displayMinute = minute === 0 ? '00' : minute;
        const label = `${displayHour}:${displayMinute} ${period}`;
        const value = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push({ value, label });
      }
    }
    this.availableTimeSlots = slots;
  }

  filterServicesByType(typeId: string): void {
    this.filteredServices = this.services.filter(service => service.typeId === typeId);
    
    // Reset service selection if current selection is not in filtered services
    const currentService = this.appointmentForm.get('service')?.value;
    const serviceExists = this.filteredServices.some(s => s.id === currentService);
    
    if (!serviceExists && this.filteredServices.length > 0) {
      this.appointmentForm.patchValue({ service: this.filteredServices[0].id });
    }
  }

  setActiveTab(tab: 'upcoming' | 'past'): void {
    this.activeTab = tab;
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.appointmentForm.reset({
      type: 'career',
      communicationMethod: 'video'
    });
  }

  closeModalOnOutsideClick(event: Event): void {
    if ((event.target as HTMLElement).classList.contains('bg-black')) {
      this.closeModal();
    }
  }

  setAppointmentType(type: string): void {
    this.appointmentForm.patchValue({ type });
  }

  joinMeeting(appointmentId: string): void {
    // Logic to join the meeting
    console.log(`Joining meeting for appointment ${appointmentId}`);
  }

  prepareForAppointment(appointmentId: string): void {
    // Logic to prepare for the appointment
    console.log(`Preparing for appointment ${appointmentId}`);
  }

  viewSummary(appointmentId: string): void {
    // Logic to view the appointment summary
    console.log(`Viewing summary for appointment ${appointmentId}`);
  }

  bookSlot(slotId: string): void {
    // Logic to book a specific slot
    console.log(`Booking slot ${slotId}`);
    
    // Find the slot
    const slot = this.availableSlots.find(s => s.id === slotId);
    if (slot) {
      // Open modal and pre-fill with slot data
      this.openModal();
      
      // Find appropriate service based on slot title
      const serviceType = slot.title.toLowerCase().includes('resume') ? 'document' : 'career';
      let matchingService = this.services.find(s => 
        s.typeId === serviceType && s.name.toLowerCase().includes(slot.title.toLowerCase())
      );
      
      if (!matchingService && this.services.length > 0) {
        // Default to first service of the determined type
        matchingService = this.services.find(s => s.typeId === serviceType);
      }
      
      // Set form values
      this.appointmentForm.patchValue({
        type: serviceType,
        service: matchingService?.id || '',
        date: this.formatDateForInput(slot.date),
        time: this.formatTimeForInput(slot.date)
      });
    }
  }

  formatDateForInput(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  formatTimeForInput(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  submitAppointment(): void {
    if (this.appointmentForm.valid) {
      // Process form submission
      console.log('Appointment booked:', this.appointmentForm.value);
      
      // Close modal and show confirmation
      this.closeModal();
      
      // In a real app, you would make an API call here and then update the UI
      alert('Appointment booked successfully!');
    }
  }
}
