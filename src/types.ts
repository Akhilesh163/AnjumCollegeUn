export interface Department {
  id: string;
  name: string;
  fullName: string;
  description: string;
  image: string;
  intake: number;
  duration: string;
  labs: string[];
  features: string[];
  averagePlacement: string;
  hodName: string;
}

export interface IndustryEvent {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  venue: string;
  highlights: string[];
}

export interface StudentPlacement {
  name: string;
  company: string;
  branch: string;
  image: string;
  package?: string;
  role?: string;
}

export interface Visitor {
  name: string;
  designation: string;
  image: string;
  quote: string;
  speechTopic?: string;
}

export interface Notice {
  id: string;
  title: string;
  category: 'exam' | 'general' | 'admission';
  date: string;
  description?: string;
  fileSize?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  company: string;
  text: string;
}
