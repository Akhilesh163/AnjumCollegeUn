import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  TrendingUp, 
  Trophy, 
  Building2, 
  Users, 
  ArrowRight, 
  GraduationCap, 
  Briefcase,
  Search,
  BookOpen,
  Calendar,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  Camera,
  Download,
  Building,
  Target,
  ChevronRight,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  ChevronLeft,
  BriefcaseMedical
} from 'lucide-react';

// Placements Navigation Pages structure
const PLACEMENT_PAGES = [
  { id: 'about', label: 'About Training & Placement', icon: Building2 },
  { id: 'recruiters', label: 'Our Recruiters', icon: Building },
  { id: 'placed', label: 'Students Placed', icon: Users },
  { id: 'training', label: 'Training Conducted', icon: Target },
  { id: 'activities', label: 'Placement Activities', icon: Trophy },
  { id: 'higher-studies', label: 'Higher Studies', icon: GraduationCap },
  { id: 'gallery', label: 'Gallery', icon: Camera },
  { id: 'contacts', label: 'T & P Contacts', icon: Phone }
];

const STATS_DATA = [
  { value: '22 LPA', label: 'Highest Package', icon: GraduationCap, desc: 'Secured by CSE Undergrad' },
  { value: '8.7 LPA', label: 'Average Package', icon: TrendingUp, desc: 'Average for CSE & AIDS' },
  { value: '95%', label: 'Placement Rate', icon: Trophy, desc: 'Eligible students placed' },
  { value: '100+', label: 'Companies Visited', icon: Building2, desc: 'Top MNCs & Core Leaders' },
  { value: '1200+', label: 'Offers Made', icon: Award, desc: 'Over the last 5 years' },
  { value: '600+', label: 'Students Placed', icon: Users, desc: 'Across global sectors' }
];

const SECTORS = ['All', 'IT & Software', 'Core Engineering', 'Consulting & Sales'];

const RECRUITERS = [
  { name: 'Microsoft', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo_%282012%29.svg' },
  { name: 'Amazon', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'TCS', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Infosys', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Infosys_logo.svg' },
  { name: 'Accenture', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: 'Capgemini', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_2017_logo.svg' },
  { name: 'Persistent Systems', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Persistent_Systems_logo.svg' },
  { name: 'Wipro', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Logo_%282017%29.svg' },
  { name: 'HCL Technologies', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/HCL_Technologies_logo.svg' },
  { name: 'Tech Mahindra', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Tech_Mahindra_logo.svg' },
  { name: 'Cognizant', sector: 'IT & Software', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Cognizant_logo_2022.svg' },
  { name: 'Jindal Steel & Power', sector: 'Core Engineering', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Jindal_Steel_and_Power_Logo.svg' },
  { name: 'Torrent Power', sector: 'Core Engineering', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Torrent_Power_Logo.svg' },
  { name: 'Triveni Turbines', sector: 'Core Engineering', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Triveni_Group_logo.gif' },
  { name: 'Byju\'s', sector: 'Consulting & Sales', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Byju%27s_Logo.svg' }
];

const PLACED_STUDENTS = [];

const RECOGNITION_PARTNERS = [
  {
    name: 'SHL',
    image: 'https://www.lpu.in/lpu-assets/images/tieups-logo/shl.webp',
    caption: 'National Employability Award 2024.'
  },
  {
    name: 'Bosch',
    image: 'https://www.lpu.in/lpu-assets/images/tieups-logo/bosch.webp',
    caption: 'Highest campus selections in North India.'
  },
  {
    name: 'Infosys',
    image: 'https://www.lpu.in/lpu-assets/images/tieups-logo/infosys.webp',
    caption: 'Strong industry-academia collaboration.'
  },
  {
    name: 'Cognizant',
    image: 'https://www.lpu.in/lpu-assets/images/tieups-logo/cognizant.webp',
    caption: 'Trusted hiring partner for placement offers.'
  },
  {
    name: 'Capgemini',
    image: 'https://www.lpu.in/lpu-assets/images/tieups-logo/capgemini.webp',
    caption: 'Generating highest number of placement offers.'
  },
  {
    name: 'Informatica',
    image: 'https://www.lpu.in/lpu-assets/images/tieups-logo/informatica.webp',
    caption: 'Trusted university hiring partner.'
  }
];

const TOP_PLACEMENTS = [
  {
    name: 'Ritesh Kumar Pandey', degree: 'B.TECH', package: '39 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place1.png', badge: 'https://www.united.ac.in/frontend/images/placem-1.png'
  },
  {
    name: 'Abhishek Singh', degree: 'B.TECH', package: '36 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place2.png', badge: 'https://www.united.ac.in/frontend/images/placem-2.png'
  },
  {
    name: 'Shubham Jaiswal', degree: 'B.TECH', package: '29 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place3.png', badge: 'https://www.united.ac.in/frontend/images/placem-3.png'
  },
  {
    name: 'Vineet Mishra', degree: 'B.TECH', package: '29.5 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place4.png', badge: 'https://www.united.ac.in/frontend/images/placem-4.png'
  },
  {
    name: 'Priya Singh', degree: 'B.TECH', package: '25 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place5.png', badge: 'https://www.united.ac.in/frontend/images/placem-4.png'
  },
  {
    name: 'Himanshu Tewari', degree: 'B.TECH', package: '57.6 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place6.png', badge: 'https://www.united.ac.in/frontend/images/placem-5.png'
  },
  {
    name: 'Shubhra Srivastava', degree: 'B.TECH', package: '50 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place7.png', badge: 'https://www.united.ac.in/frontend/images/placem-6.png'
  },
  {
    name: 'Smriti Das', degree: 'B.TECH', package: '24 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place8.png', badge: 'https://www.united.ac.in/frontend/images/placem-7.png'
  },
  {
    name: 'Prashant Mishra', degree: 'B.TECH', package: '21.30 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place9.png', badge: 'https://www.united.ac.in/frontend/images/placem-8.png'
  },
  {
    name: 'Akansha Singh', degree: 'B.TECH', package: '16.9 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place10.png', badge: 'https://www.united.ac.in/frontend/images/placem-9.png'
  },
  {
    name: 'Aditi Verma', degree: 'B.TECH', package: '14 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place11.png', badge: 'https://www.united.ac.in/frontend/images/placem-10.png'
  },
  {
    name: 'Akansha Shukla', degree: 'B.Pharm', package: '10 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place12.png', badge: 'https://www.united.ac.in/frontend/images/placem-11.png'
  },
  {
    name: 'Amit Kumar', degree: 'B.TECH', package: '10.7 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place13.png', badge: 'https://www.united.ac.in/frontend/images/placem-12.png'
  },
  {
    name: 'Pravisha Jaiswal', degree: 'BBA', package: '10 LPA', avatar: 'https://www.united.ac.in/frontend/images/top-place14.png', badge: 'https://www.united.ac.in/frontend/images/placem-13.png'
  }
];

const STUDENT_TESTIMONIALS = [
  {
    name: 'Ayesha Khan',
    company: 'Microsoft (CSE)',
    quote: 'The rigorous training bootcamps, mock interviews, and personal mentorship from the T&P Head prepared me beautifully. The placement cell guided me at every step of the Microsoft hiring cycle.',
    color: 'border-l-4 border-l-[#00a4ef]'
  },
  {
    name: 'Rohan Deshpande',
    company: 'Amazon (AIDS)',
    quote: 'The focus on quantitative aptitude and advanced algorithms bootcamps during our 3rd year was the game changer. ACET T&P Cell brought exceptional opportunities to our doorsteps.',
    color: 'border-l-4 border-l-[#ff9900]'
  },
  {
    name: 'Sneha Patil',
    company: 'TCS Digital (ETC)',
    quote: 'Being a core engineering student, I was nervous about software rounds. The pre-placement bootcamps on Python and mock coding tests made all the difference. Thank you T&P!',
    color: 'border-l-4 border-l-[#1f57a4]'
  }
];

const STUDENT_PLACEMENT_SUCCESS = [
  {
    name: 'Anubhav Gupta',
    role: 'Technology Consultant',
    company: 'Adidas',
    year: 'B.Tech EE, 2016',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    quote: 'Adidas, Technology Consultant; 34.7 LPA, I would like to extend my heartfelt thanks to United Group of Institutions for their invaluable support extended to me throughout my engineering journey. The knowledge and experiences I have gained have greatly shaped my career and will continue to guide me in the future.'
  },
  {
    name: 'Kavish Srivastava',
    role: 'Senior Technical Lead',
    company: 'Ernst and Young (EY)',
    year: 'B.Tech ECE, 2016',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    quote: 'Ernst and Young (EY), Senior Technical Lead, 18 LPA. The training programs and CRC support were a launchpad for my professional journey. The courses, workshops, and practical exercises were designed to enhance our technical knowledge while emphasizing leadership, communication, and teamwork.'
  },
  {
    name: 'Mayank Shukla',
    role: 'Vice President',
    company: 'Wells Fargo',
    year: 'B.Tech EE, 2012',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    quote: 'Vice President, Wells Fargo, 38 LPA. The training and support from the CRC team played a key role in shaping my professional skills and boosting my confidence. United didn’t just prepare me for a job, it prepared me for a career.'
  },
  {
    name: 'Fahmi Hassan',
    role: 'Manager',
    company: 'Cognizant',
    year: 'B.Tech EE, 2013',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    quote: 'Manager, Cognizant, 32 LPA. UCER prepared me with both technical skills and soft skills. The CRC Department and T&P Cell provided ongoing support beyond academics, empowering me to connect with the real world and succeed.'
  },
  {
    name: 'Bipro Chakraborty',
    role: 'Payment Specialist',
    company: 'Oracle',
    year: 'B.Tech EN, 2019',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote: 'Payment Specialist - IC2, Oracle. The college believed in me and helped me land offers from Wipro and Authbridge. The CRC team’s support and guidance made the difference in my journey.'
  },
  {
    name: 'Smriti Das',
    role: 'Software Engineer',
    company: 'Infosys',
    year: 'B.Tech IT, 2022',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    quote: 'GAIL India Limited, 21.30 LPA. The faculty and CRC support prepared me for top companies and helped me grow beyond academics. I am proud of the support and mentorship from United Group of Institution.'
  }
];

const TRAINING_MODULES = [
  {
    year: 'First Year (Sem I & Sem II)',
    title: 'Foundations of Communication & Logic',
    description: 'Focus is on breaking communication barriers, professional etiquette, public speaking, and building introductory logical aptitude.',
    highlights: ['English Language Proficiency', 'Confidence Building Exercises', 'Ice breaking Sessions', 'Weekly Presentation Skills']
  },
  {
    year: 'Second Year (Sem III & Sem IV)',
    title: 'Aptitude & Interpersonal Dynamics',
    description: 'Nurturing team building, emotional intelligence, intermediate level quantitative aptitude, and general reasoning foundations.',
    highlights: ['Quantitative Aptitude I', 'Logical Reasoning I', 'Group Discussion Basics', 'Resume Layout Modeling']
  },
  {
    year: 'Third Year (Sem V & Sem VI)',
    title: 'Advanced Professional & Technical Mastery',
    description: 'Advanced technical bootcamps, coding logic, and deep mock interviews matching actual company written patterns.',
    highlights: ['Advanced Coding & Algorithms', 'Data Structures Specializations', 'Quantitative Aptitude II', 'Full-Scale Mock GD rounds']
  },
  {
    year: 'Final Year (Sem VII & Sem VIII)',
    title: 'Corporate Interface & Intensive Hiring Prep',
    description: 'Industry-readiness bootcamps, direct corporate mock interview panels, and targeted placement preparation.',
    highlights: ['Company-Specific Aptitude Mocking', 'Domain Technical Reviews', 'Live Corporate HR Panel Mock Interviews', 'Placement counseling']
  }
];

const PLACEMENT_ACTIVITIES = [
  {
    title: 'Pre-Placement Talks (PPT)',
    desc: 'Interactive forums where multinational directors and corporate HR teams visit campus to explain career paths, technical portfolios, and job profiles before final tests.',
    icon: MessageSquare
  },
  {
    title: 'Industrial Visits (IV)',
    desc: 'Regular out-of-station educational trips to major central institutions (NTPC, NEERI, software parks, central factories) to study live systems in action.',
    icon: Building
  },
  {
    title: 'Expert Lectures & Guest Panels',
    desc: 'Monthly campus webinars and physical seminars hosted by corporate engineers, technical leaders, and global alumni sharing current industrial practices.',
    icon: Sparkles
  },
  {
    title: 'Pool Campus Hosting',
    desc: 'ACET Nagpur serves as a premier venue for regional pool drives in Nagpur, organizing mega recruitment drives for 30+ regional engineering campuses.',
    icon: Users
  },
  {
    title: 'Industry MOU Signings',
    desc: 'Strategic partnerships with TCS, Persistent Systems, GTT, and Barclays to design specialized curricula and direct apprenticeship pathways.',
    icon: CheckCircle2
  }
];

const ALUMNI_HIGHER_STUDIES = [
  { name: 'Amaan Ansari', degree: 'MS in Computer Science', university: 'North Carolina State University, USA', branch: 'CSE', year: '2024' },
  { name: 'Shbnam Sheikh', degree: 'M.Tech in VLSI Systems', university: 'IIT Bombay, India', branch: 'ETC', year: '2023' },
  { name: 'Faizan Ahmad', degree: 'MBA (Post Graduate Program)', university: 'IIM Indore, India', branch: 'Mechanical', year: '2024' },
  { name: 'Sanya Khan', degree: 'MS in Cybersecurity', university: 'TU Delft, Netherlands', branch: 'CSE', year: '2023' }
];

const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600',
    caption: 'Inaugural Session of TCS Recruitment Drive',
    desc: 'Over 120 students representing different core/IT departments attended the pre-placement brief.'
  },
  {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600',
    caption: 'Soft Skills Training & Aptitude Bootcamp',
    desc: 'A week-long personality development course led by professional corporate trainers.'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    caption: 'Mock Personal Interview Round',
    desc: 'Industry veterans evaluating 3rd-year engineering candidates in a face-to-face evaluation panel.'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    caption: 'Industrial Visit at NTPC Nagpur',
    desc: 'Core Electrical & Mechanical branch students learning power distribution and boiler mechanics.'
  },
  {
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    caption: 'MOU Signing with Corporate Partners',
    desc: 'Fostering academic collaborations to strengthen specialized technical training and internships.'
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600',
    caption: 'Students Celebrating Microsoft Offers',
    desc: 'Our CSE undergraduate student Dr. Sameer Kene and placement team congratulate candidates.'
  }
];

const CAMPUS_LIFE_GALLERY = [
  {
    src: '/anjumancollegeimage.jpeg',
    alt: 'Campus Gate',
    label: 'Campus Gate',
    featured: true
  },
  {
    src: '/department.jpg',
    alt: 'Canteen Hangout',
    label: 'Canteen Hangout'
  },
  {
    src: '/principle-new-img.jpeg',
    alt: 'Hostel Life',
    label: 'Hostel Life'
  },
  {
    src: '/anjumancollegeimage.jpeg',
    alt: 'Fitness Center',
    label: 'Fitness Center'
  },
  {
    src: '/department.jpg',
    alt: 'Student Life',
    label: 'Student Life'
  },
  {
    src: '/principle-new-img.jpeg',
    alt: 'Friends on Campus',
    label: 'Friends on Campus'
  }
];

const LAB_FACILITY_GALLERY = [
  {
    src: '/anjumancollegeimage.jpeg',
    alt: 'AI Lab – ML Session',
    label: 'AI Lab – ML Session',
    featured: true
  },
  {
    src: '/department.jpg',
    alt: 'AI Lab – Computing Floor',
    label: 'AI Lab – Computing Floor'
  },
  {
    src: '/principle-new-img.jpeg',
    alt: 'AI Lab – Workstations',
    label: 'AI Lab – Workstations'
  },
  {
    src: '/anjumancollegeimage.jpeg',
    alt: 'Advanced Computing Center',
    label: 'Advanced Computing Center'
  },
  {
    src: '/department.jpg',
    alt: 'Tech Innovation Hub',
    label: 'Tech Innovation Hub'
  },
  {
    src: '/principle-new-img.jpeg',
    alt: 'Robotics Workshop',
    label: 'Robotics Workshop'
  },
  {
    src: '/anjumancollegeimage.jpeg',
    alt: 'AI Lab – Practical Class',
    label: 'AI Lab – Practical Class'
  },
  {
    src: '/department.jpg',
    alt: 'Student Development Cell',
    label: 'Student Development Cell'
  },
  {
    src: '/principle-new-img.jpeg',
    alt: 'Robotics & IoT Lab',
    label: 'Robotics & IoT Lab'
  },
  {
    src: '/anjumancollegeimage.jpeg',
    alt: 'Electronics Lab',
    label: 'Electronics Lab'
  },
  {
    src: '/department.jpg',
    alt: 'Microbiology Lab',
    label: 'Microbiology Lab'
  },
  {
    src: '/principle-new-img.jpeg',
    alt: 'Culinary Lab',
    label: 'Culinary Lab'
  },
  {
    src: '/anjumancollegeimage.jpeg',
    alt: 'Hospitality Training',
    label: 'Hospitality Training'
  }
];

const SUPER_ACHIEVERS = [
  { name: 'Himanshu Tewari', degree: '(B.Tech, EE Branch)', company: 'TESLA (57.6 LPA)', image: 'https://www.united.ac.in/frontend/images/himanshu-s.webp' },
  { name: 'Ritesh Kumar Pandey', degree: '(B.Tech, CS Branch)', company: 'CASHFREE PAYMENTS (39 LPA)', image: 'https://www.united.ac.in/frontend/images/Ritesh-s.webp' },
  { name: 'MUKESH YADAV', degree: '(BCA)', company: 'GENPACT (26 LPA)', image: 'https://www.united.ac.in/frontend/images/mukesh-s.webp' },
  { name: 'Mohammad Imran', degree: '(MBA)', company: 'Unilever (13 LPA)', image: 'https://www.united.ac.in/frontend/images/Achiev-4.webp' },
  { name: 'Shivam Bahadur', degree: '(B.Tech., EC Branch)', company: 'Microsoft (25 LPA)', image: 'https://www.united.ac.in/frontend/images/Achiev-5.webp' },
  { name: 'Shubham Gupta', degree: '(B.Tech., CS Branch)', company: 'Amazon (40 LPA)', image: 'https://www.united.ac.in/frontend/images/Achiev-6.webp' }
];

interface PlacementsProps {
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
}

export default function Placements({ selectedTab = 'about', setSelectedTab }: PlacementsProps) {
  
  // Local tab state fallback if props are not connected
  const [localTab, setLocalTab] = useState('about');
  const activeTabId = setSelectedTab ? selectedTab : localTab;

  // Top placements slider state
  const [topPlacementIndex, setTopPlacementIndex] = useState(0);
  const topPlacementCount = TOP_PLACEMENTS.length;
  const currentTopPlacement = TOP_PLACEMENTS[topPlacementIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTopPlacementIndex((current) => (current + 1) % topPlacementCount);
    }, 4200);
    return () => window.clearInterval(interval);
  }, [topPlacementCount]);

  const [successSlideIndex, setSuccessSlideIndex] = useState(0);
  const successCount = STUDENT_PLACEMENT_SUCCESS.length;
  const currentSuccessStory = STUDENT_PLACEMENT_SUCCESS[successSlideIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSuccessSlideIndex((current) => (current + 1) % successCount);
    }, 5200);
    return () => window.clearInterval(interval);
  }, [successCount]);

  // Handles setting the active tab
  const handleTabChange = (id: string) => {
    if (setSelectedTab) {
      setSelectedTab(id);
    } else {
      setLocalTab(id);
    }
    // Smooth scroll to top of placements view
    const element = document.getElementById('placements-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // State managers for recruiter filters
  const [recruiterSearch, setRecruiterSearch] = useState('');
  const [recruiterSector, setRecruiterSector] = useState('All');

  // State managers for student placed search
  const [placedSearch, setPlacedSearch] = useState('');
  const [placedBranch, setPlacedBranch] = useState('All');

  // Recognition carousel state
  const [recognitionIndex, setRecognitionIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRecognitionIndex((current) => (current + 1) % RECOGNITION_PARTNERS.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  const visibleRecognitionPartners = Array.from({ length: 4 }, (_, index) => {
    const partnerIndex = (recognitionIndex + index) % RECOGNITION_PARTNERS.length;
    return RECOGNITION_PARTNERS[partnerIndex];
  });

  const goToRecognitionSlide = (direction: 'prev' | 'next') => {
    setRecognitionIndex((current) => {
      if (direction === 'prev') {
        return (current - 1 + RECOGNITION_PARTNERS.length) % RECOGNITION_PARTNERS.length;
      }
      return (current + 1) % RECOGNITION_PARTNERS.length;
    });
  };

  // Inquiry Form States
  const [companyName, setCompanyName] = useState('');
  const [hrName, setHrName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [expectedMonth, setExpectedMonth] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !hrName || !email || !phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setCompanyName('');
      setHrName('');
      setEmail('');
      setPhone('');
      setExpectedMonth('');
      setMessage('');
    }, 5000);
  };

  // Filter Recruiter List
  const filteredRecruiters = RECRUITERS.filter(rec => {
    const matchesSearch = rec.name.toLowerCase().includes(recruiterSearch.toLowerCase());
    const matchesSector = recruiterSector === 'All' || rec.sector === recruiterSector;
    return matchesSearch && matchesSector;
  });

  // Filter Placed Students List
  const filteredStudents = PLACED_STUDENTS.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(placedSearch.toLowerCase()) || 
                          student.company.toLowerCase().includes(placedSearch.toLowerCase());
    const matchesBranch = placedBranch === 'All' || student.branch === placedBranch;
    return matchesSearch && matchesBranch;
  });

  // Extract unique student branches for filtering
  const studentBranches = ['All', ...Array.from(new Set(PLACED_STUDENTS.map(s => s.branch)))];

  // Helper to render recruiter logo safely with error handling
  function SafeRecruiterLogo({ recruiter }: { recruiter: typeof RECRUITERS[0] }) {
    const [hasError, setHasError] = useState(false);
    if (hasError) {
      return (
        <div className="flex flex-col items-center justify-center text-center p-1 select-none">
          <span className="font-sans font-black text-xs text-zinc-700 dark:text-zinc-300 tracking-tight leading-none">
            {recruiter.name}
          </span>
          <span className="text-[8px] font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest mt-1">
            Hiring Partner
          </span>
        </div>
      );
    }
    return (
      <img 
        src={recruiter.logo} 
        alt={recruiter.name} 
        onError={() => setHasError(true)}
        className="max-h-7 max-w-[85%] object-contain filter hover:scale-105 transition-transform duration-300 dark:brightness-110 dark:contrast-125 dark:saturate-150"
        referrerPolicy="no-referrer"
      />
    );
  }

  // Helper for generating custom student gender avatars
  const renderStudentAvatar = (student: typeof PLACED_STUDENTS[0]) => {
    const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const isFemale = student.gender === 'F';
    return (
      <div className={`w-11 h-11 rounded-full flex items-center justify-center text-xs font-black tracking-wider shrink-0 border ${
        isFemale 
          ? 'bg-rose-50 border-rose-100 text-crimson-red dark:bg-rose-950/25 dark:border-rose-900/35 dark:text-rose-400' 
          : 'bg-emerald-50 border-emerald-100 text-emerald-600 dark:bg-emerald-950/25 dark:border-emerald-900/35 dark:text-emerald-400'
      }`}>
        {initials}
      </div>
    );
  };

  return (
    <div id="placements-container" className="py-12 px-6 md:px-8 lg:px-12 bg-[#fffbfb] dark:bg-zinc-950 text-left min-h-screen">
      <div className="w-full max-w-full mx-auto space-y-8">
        
        {/* Breadcrumb Navigation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-rose-100/40 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">
            <span>Career Hub</span>
            <span>/</span>
            <span>Placements</span>
            <span>/</span>
            <span className="text-crimson-red dark:text-rose-400">
              {PLACEMENT_PAGES.find(p => p.id === activeTabId)?.label || 'About Cell'}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-[10px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Hiring Season 2026 Active
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="space-y-2">
          <h1 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight leading-none">
            Training & Placement <span className="text-crimson-red">Cell</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium max-w-full leading-relaxed">
            Developing career pathways, industrial readiness, and locking top multinational packages for students at Anjuman Sadar Nagpur campus.
          </p>
        </div>

        {/* Outer Layout Grid: Navigation Sidebar (Left) + Content Stage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT HAND: 8 Placement Pages Selector Sidebar (Desktop Only) */}
          <div className="hidden lg:col-span-3 lg:flex flex-col gap-1.5 bg-white dark:bg-zinc-900/60 p-6 md:p-8 rounded-3xl border border-rose-100/30 dark:border-zinc-800/80 shadow-md">
            <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase px-3 pb-2 block border-b border-zinc-100 dark:border-zinc-800/50 mb-1">
              Placements Nav Menu
            </span>
            {PLACEMENT_PAGES.map((page) => {
              const Icon = page.icon;
              const isPageActive = activeTabId === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleTabChange(page.id)}
                  className={`w-full text-left px-4 py-3 text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-3.5 rounded-xl group ${
                    isPageActive
                      ? 'bg-crimson-red text-white shadow-md'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-500/5 dark:hover:bg-zinc-800 hover:text-crimson-red'
                  }`}
                >
                  <Icon size={16} className={`shrink-0 transition-transform group-hover:scale-110 ${isPageActive ? 'text-white' : 'text-zinc-400 dark:text-zinc-500 group-hover:text-crimson-red'}`} />
                  <span>{page.label}</span>
                  {isPageActive ? (
                    <span className="ml-auto text-white">&rarr;</span>
                  ) : (
                    <span className="ml-auto opacity-0 group-hover:opacity-100 text-crimson-red transition-opacity">&rarr;</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* MOBILE ONLY: Horizontal Scroll Tab Bar */}
          <div className="lg:hidden col-span-1 overflow-x-auto pb-2 flex gap-1.5 border-b border-rose-100 dark:border-zinc-800">
            {PLACEMENT_PAGES.map((page) => {
              const Icon = page.icon;
              const isPageActive = activeTabId === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleTabChange(page.id)}
                  className={`px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider shrink-0 rounded-lg flex items-center gap-2 border transition-all ${
                    isPageActive
                      ? 'bg-crimson-red border-crimson-red text-white shadow-sm'
                      : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-crimson-red hover:border-rose-100'
                  }`}
                >
                  <Icon size={12} className="shrink-0" />
                  <span>{page.label}</span>
                </button>
              );
            })}
          </div>

          {/* RIGHT HAND: Content Screen Stage (9 Columns) */}
          <div className="lg:col-span-9 bg-white dark:bg-zinc-900/30 border border-rose-100/30 dark:border-zinc-800/50 rounded-3xl p-6 md:p-8 shadow-sm min-h-[500px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTabId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                
                {/* ==================== 1. ABOUT TRAINING & PLACEMENT ==================== */}
                {activeTabId === 'about' && (
                  <div className="space-y-8">
                    
                    {/* Intro Block */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5">
                        <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                          T & P Cell Overview
                        </span>
                        <span className="text-zinc-300 dark:text-zinc-800 font-extrabold">|</span>
                        <span className="text-zinc-500 text-xs font-semibold">Established 1999</span>
                      </div>
                      
                      <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-zinc-900 dark:text-white">
                        Empowering Student Journeys for Global Engineering Careers
                      </h2>
                      
                      <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                        The Training and Placement Cell of Anjuman College of Engineering & Technology, Sadar Nagpur, operates as a highly specialized core node. It is tasked with aligning undergraduate competencies directly against international recruitment checklists. The cell is staffed by full-time corporate counselors, aptitude coaches, and departmental coordinators who organize year-round preparation.
                      </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {STATS_DATA.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                          <div key={i} className="bg-zinc-50/50 dark:bg-zinc-900/50 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">{stat.label}</span>
                              <div className="p-1.5 bg-rose-50 dark:bg-zinc-800 text-crimson-red dark:text-rose-400 rounded-lg">
                                <Icon size={14} />
                              </div>
                            </div>
                            <div>
                              <span className="block font-sans font-black text-lg sm:text-xl text-zinc-900 dark:text-white leading-tight">
                                {stat.value}
                              </span>
                              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
                                {stat.desc}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Vision & Mission Section */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="bg-rose-600 text-white rounded-[28px] overflow-hidden flex items-center">
                        <div className="p-8 lg:p-12">
                          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-rose-100">T&P CELL VISION</span>
                          <h2 className="mt-4 text-3xl sm:text-4xl font-black">To Build Sustainable Global Careers</h2>
                          <p className="mt-4 text-sm sm:text-base leading-8 text-rose-100/90">
                            To establish a strong, unbreakable linkage with elite technology developers and core engineering conglomerates, turning every student into a reliable asset ready to address complex real-world challenges.
                          </p>
                        </div>
                      </div>

                      <div className="relative hidden lg:block rounded-[28px] overflow-hidden">
                        <img
                          src="https://www.united.ac.in/frontend/images/vision.webp"
                          alt="Vision"
                          className="w-full h-full object-cover min-h-[360px]"
                        />
                      </div>

                      <div className="relative hidden lg:block rounded-[28px] overflow-hidden">
                        <img
                          src="https://www.united.ac.in/frontend/images/mission.webp"
                          alt="Mission"
                          className="w-full h-full object-cover min-h-[360px]"
                        />
                      </div>

                      <div className="bg-emerald-700 text-white rounded-[28px] overflow-hidden flex items-center">
                        <div className="p-8 lg:p-12">
                          <span className="text-[10px] font-black uppercase tracking-[0.35em] text-emerald-100">T&P CELL MISSION</span>
                          <h2 className="mt-4 text-3xl sm:text-4xl font-black">Continuous Competency Infusion</h2>
                          <p className="mt-4 text-sm sm:text-base leading-8 text-emerald-100/90">
                            United Group of Institutions is dedicated to providing world-class education that empowers students to achieve academic, professional, and personal success. We aim to foster an environment that encourages creativity, collaboration, and lifelong learning while preparing students to excel in dynamic global industries. Through a commitment to research, innovation, and social responsibility, UGI aspires to shape future leaders and contribute to the advancement of society.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Head T&P Message Block */}
                    <div className="relative p-6 sm:p-8 lg:p-10 bg-white dark:bg-zinc-950 border border-rose-100 dark:border-zinc-800 rounded-3xl shadow-sm">
                      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                        <div className="lg:col-span-12 space-y-8">
                          <div className="relative p-6 sm:p-8 lg:p-10">
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                              <div className="relative shrink-0">
                                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-crimson-red/25 to-rose-300/10 blur-xl"></div>
                                <div className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-[28px] overflow-hidden border-4 border-white shadow-xl ring-1 ring-zinc-200 bg-zinc-100">
                                  <img alt="Dr. Syed Mohammad Ali" className="h-full w-full object-cover object-center" src="/principle-new-img.jpeg" />
                                </div>
                              </div>

                              <div className="flex-1 space-y-4 pt-1">
                                <span className="inline-flex items-center bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-full uppercase tracking-[0.18em] border border-rose-100 dark:border-rose-900/60">Principal's Desk</span>
                                <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-900 dark:text-white">Principal's Message</h3>
                                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium">Dr. Syed Mohammad Ali — Principal, ACET Nagpur</p>
                              </div>
                            </div>

                            <div className="mt-8 border-t border-zinc-200 dark:border-zinc-700 pt-8">
                              <div className="rounded-3xl border border-rose-100 dark:border-rose-900/60 bg-gradient-to-r from-rose-50 via-white to-rose-50 dark:from-rose-950/30 dark:via-zinc-900 dark:to-rose-950/20 p-5 sm:p-6 shadow-sm">
                                <p className="font-bold italic text-base sm:text-xl leading-relaxed text-zinc-800 dark:text-zinc-100">"Engineers should possess the courage to think different, the courage to invent, the courage to discover the impossible, and the courage to conquer the problems and succeed."</p>
                                <p className="mt-4 text-right font-semibold text-zinc-700 dark:text-zinc-200 text-sm sm:text-base">— Dr. A.P.J. Abdul Kalam</p>
                              </div>

                              <div className="mt-8 space-y-5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-8">
                                <p className="font-semibold text-zinc-800 dark:text-zinc-100 text-base sm:text-lg">Dear Students, Parents and Stakeholders</p>
                                <p>The aim of our institution is to create an environment of high-quality teaching and learning in which students are encouraged to innovate and approach problems with a courageous and creative mindset.</p>
                                <p>We are committed to creating an ecosystem that provides technical skills while also fostering innovation, creativity, and ethical values among students. We are dedicated to building an educational system that inspires and equips students to solve real-world problems and contribute meaningfully to industry and society.</p>
                                <p>Our faculty comprises highly qualified and experienced professionals, passionate about nurturing young minds and helping them achieve their fullest potential.</p>
                                <p>We continuously strive to provide opportunities that strengthen career readiness, leadership, and holistic development for every student.</p>
                                <p>Our alumni hold prominent roles in esteemed organisations both domestically and internationally, reflecting the quality of education and values instilled at ACET.</p>
                                <p>I cordially encourage you to visit our ACET campus and witness the excellence, spirit, and distinction that define our institution.</p>
                              </div>

                              <div className="mt-8 flex justify-end">
                                <div className="text-right border-t border-zinc-200 dark:border-zinc-700 pt-5">
                                  <p className="font-bold text-zinc-900 dark:text-white text-base sm:text-lg">Prof. (Dr.) K. S. Zakiuddin</p>
                                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">Principal, ACET</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 space-y-6">
                            <div className="rounded-[24px] border border-rose-100/50 bg-white p-6 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900/40">
                              <h4 className="text-lg font-black text-zinc-900 dark:text-white">T &amp; P Cell at a Glance</h4>
                              <div className="mt-4 grid grid-cols-1 gap-4">
                                <ul className="space-y-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                  <li>• Exploring placement opportunities by inviting various companies for campus recruitment of students.</li>
                                  <li>• Creating a corporate-friendly atmosphere and preparing students to face the rigours of the professional world.</li>
                                  <li>• Positioning ACET as a preferred destination for MNCs to conduct placement activities.</li>
                                </ul>
                                <img className="w-full rounded-2xl object-cover" src="https://anjumanengg.edu.in/images/Slider/banner/tnp-team1.png" alt="T&P Team" />
                              </div>
                            </div>

                            <div className="rounded-[24px] border border-rose-100/50 bg-rose-50/60 p-6 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900/40">
                              <h4 className="text-lg font-black text-zinc-900 dark:text-white">Placement Objective</h4>
                              <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                <li>• Assisting students in clarifying academic and career interests through counseling and group sessions.</li>
                                <li>• Helping students develop successful job search strategies.</li>
                                <li>• Supporting employers in achieving their hiring goals.</li>
                                <li>• Serving society through campus-wide career resources and opportunities.</li>
                                <li>• Acting as a bridge between students, alumni, and the employment community.</li>
                                <li>• Assisting students in securing final placements with reputed companies.</li>
                              </ul>
                            </div>

                            <div className="rounded-[24px] border border-rose-100/50 bg-white p-6 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900/40">
                              <h4 className="text-lg font-black text-zinc-900 dark:text-white">Highlights</h4>
                              <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                <ul className="space-y-2">
                                  <li>• More than 50 companies visited for recruitment.</li>
                                  <li>• More than 50% students secured roles with leading organisations such as TCS, Coditude, HCLTech, TTEC, Antony Waste Cell, MyCaptain, Volvo, Ashok Leyland, and many more.</li>
                                  <li>• Highest package offered to students was Rs. 7.50 LPA by MyCaptain.</li>
                                </ul>
                                <p>ACET Training &amp; Placement Cell has maintained strong relationships with industries across the country, resulting in an impressive placement record and a growing number of visiting companies.</p>
                                <div className="rounded-2xl border border-rose-100/50 bg-rose-50/60 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/40">
                                  <p className="font-black text-zinc-900 dark:text-white">Training Objective</p>
                                  <p className="mt-2">Training activities are organized throughout the year to prepare students for campus selection programmes, strengthen aptitude, reasoning, soft skills, and communication, and enhance employability.</p>
                                </div>
                                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4 dark:border-zinc-800/70 dark:bg-zinc-900/40">
                                  <p className="font-black text-zinc-900 dark:text-white">Training Highlights</p>
                                  <ul className="mt-2 space-y-2">
                                    <li>• More than 500 students undertook vocational training during winter and summer vacations.</li>
                                    <li>• Branch-specific technical training covered C, C++, Data Structures, Core Java, AutoCAD, ANSYS, CREO, PHP Web Designing, HTML, MATLAB, STAADPRO, and PLC-SCADA.</li>
                                    <li>• Campus-specific training programmes were conducted for dream-company recruitment drives through expert sessions and industry-focused guidance.</li>
                                    <li>• Career counseling seminars and mentorship sessions were organized throughout the year across departments and semesters.</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>

                    {/* Infrastructure Highlights */}
                    <div className="space-y-4">
                      <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Training & Assessment Infrastructure</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { title: 'Computer Labs', value: '150+ PCs', desc: 'Online tests' },
                          { title: 'GD Boardrooms', value: '2 Suites', desc: 'Acoustic design' },
                          { title: 'PI Cabins', value: '4 Cabins', desc: 'Private rooms' },
                          { title: 'Seminar Hall', value: '120+ Seats', desc: 'Pre-placement talks' }
                        ].map((facility, i) => (
                          <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-4 rounded-xl text-center space-y-1 shadow-sm">
                            <span className="block text-[10px] font-extrabold uppercase text-zinc-400">{facility.title}</span>
                            <span className="block text-sm font-black text-zinc-900 dark:text-white leading-tight">{facility.value}</span>
                            <span className="block text-[9px] text-zinc-500 dark:text-zinc-400 font-semibold">{facility.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ==================== 2. OUR RECRUITERS ==================== */}
                {activeTabId === 'recruiters' && (
                  <div className="space-y-6">
                    
                    {/* Header Details */}
                    <div>
                      <h2 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white">
                        Hiring Partners & Corporate Connections
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                        Over 100+ national and global corporate brands visit ACET Sadar Nagpur for placement drives annually.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-[32px] border border-rose-100/80 bg-gradient-to-br from-rose-50/90 via-white to-amber-50/85 p-6 shadow-lg shadow-rose-100/50 dark:border-zinc-800 dark:from-zinc-900/80 dark:via-zinc-900/70 dark:to-zinc-900/80 dark:shadow-none">
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div className="rounded-[24px] border border-rose-100/80 bg-white/90 p-7 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
                          <p className="text-[12px] font-black uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500">Placement Snapshot</p>
                          <h3 className="mt-4 bg-gradient-to-r from-crimson-red via-rose-500 to-amber-500 bg-clip-text text-5xl font-black leading-none text-transparent sm:text-6xl">
                            60 Lacs
                          </h3>
                          <p className="mt-3 text-base font-semibold text-zinc-600 dark:text-zinc-300">Highest package offered</p>
                        </div>

                        <div className="hidden h-24 w-px bg-zinc-200 lg:block dark:bg-zinc-700" />

                        <div className="flex flex-1 flex-col gap-4 sm:flex-row">
                          <div className="flex-1 rounded-[24px] border border-zinc-200/80 bg-white/90 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
                            <p className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">Placed Students</p>
                            <h4 className="mt-4 bg-gradient-to-r from-crimson-red to-amber-500 bg-clip-text text-4xl font-black leading-none text-transparent sm:text-5xl">
                              20,000+
                            </h4>
                          </div>
                          <div className="flex-1 rounded-[24px] border border-zinc-200/80 bg-white/90 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
                            <p className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">Recruiters</p>
                            <h4 className="mt-4 bg-gradient-to-r from-crimson-red to-amber-500 bg-clip-text text-4xl font-black leading-none text-transparent sm:text-5xl">
                              2,200+
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Filter Controls Row */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-rose-100/40 dark:border-zinc-800 pb-5">
                      
                      {/* Search Input */}
                      <div className="relative w-full sm:w-72">
                        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input
                          type="text"
                          value={recruiterSearch}
                          onChange={(e) => setRecruiterSearch(e.target.value)}
                          placeholder="Search partner companies..."
                          className="w-full text-xs font-semibold pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white"
                        />
                      </div>

                      {/* Sector Category Filters */}
                      <div className="flex gap-1 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 shrink-0">
                        {SECTORS.map((sector) => (
                          <button
                            key={sector}
                            onClick={() => setRecruiterSector(sector)}
                            className={`px-3 py-2 text-[10px] font-black tracking-wider uppercase rounded-lg transition-all ${
                              recruiterSector === sector
                                ? 'bg-crimson-red text-white'
                                : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-crimson-red hover:bg-rose-50/50'
                            }`}
                          >
                            {sector}
                          </button>
                        ))}
                      </div>

                    </div>

                    {/* Grid of Partners */}
                    {filteredRecruiters.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {filteredRecruiters.map((rec, i) => (
                          <div 
                            key={i} 
                            className="aspect-video bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center p-4 hover:border-crimson-red/30 hover:shadow-md transition-all group"
                          >
                            <div className="flex flex-col items-center gap-2">
                              <SafeRecruiterLogo recruiter={rec} />
                              <span className="text-[8px] font-black tracking-widest text-zinc-400 uppercase hidden group-hover:block text-center mt-1">
                                {rec.sector}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-12 text-center text-zinc-400 space-y-1">
                        <Building2 size={32} className="mx-auto opacity-30 mb-2 text-crimson-red" />
                        <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">No recruiters match your search</h4>
                        <p className="text-xs">Try adjusting your search query or choosing another sector filter.</p>
                      </div>
                    )}

                    {/* Partnership Details */}
                    <div className="bg-rose-500/[0.02] dark:bg-rose-950/10 border border-rose-200/20 dark:border-rose-900/20 p-5 rounded-2xl space-y-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-crimson-red dark:text-rose-400">Collaborative Alliances & Apprenticeships</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Through signed MoUs with top industry leaders, our final-year candidates gain access to special internships, pre-placement testing, and continuous technology updates. Our campus frequently serves as the designated center for regional corporate evaluations.
                      </p>
                    </div>

                    {/* Recognition Section */}
                    <div className="mt-6 overflow-hidden rounded-[36px] border border-rose-100/60 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/70 p-6 shadow-lg shadow-rose-100/40 dark:border-zinc-800 dark:from-zinc-900/70 dark:via-zinc-900/60 dark:to-zinc-900/80 dark:shadow-none sm:p-8 lg:p-10">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500">Recognition</p>
                          <h3 className="mt-2 text-xl sm:text-2xl font-black leading-tight text-zinc-900 dark:text-white">
                            Highly ranked for placements <br className="hidden sm:block" /> by top organisations
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => goToRecognitionSlide('prev')}
                            className="rounded-full border border-zinc-200 bg-white p-2.5 text-zinc-600 shadow-sm transition hover:border-crimson-red hover:text-crimson-red dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                            aria-label="Previous"
                          >
                            ←
                          </button>
                          <button
                            onClick={() => goToRecognitionSlide('next')}
                            className="rounded-full border border-zinc-200 bg-white p-2.5 text-zinc-600 shadow-sm transition hover:border-crimson-red hover:text-crimson-red dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                            aria-label="Next"
                          >
                            →
                          </button>
                        </div>
                      </div>

                      <div className="mt-6 overflow-hidden">
                        <div className="flex gap-3 sm:gap-4">
                          {visibleRecognitionPartners.map((partner, index) => (
                            <div
                              key={`${partner.name}-${index}`}
                              className="w-full shrink-0 px-1 sm:w-1/2 lg:w-1/4"
                            >
                              <div className="rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/80">
                                <img src={partner.image} alt={partner.name} className="mx-auto h-14 w-full object-contain" />
                                <p className="mt-3 text-center text-[10px] font-semibold leading-5 text-zinc-600 dark:text-zinc-300">
                                  {partner.caption}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex justify-center -mt-6 mb-6">
                        <span className="px-8 py-3 rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-violet-600 to-pink-500 text-white text-2xl font-extrabold">Our Hiring Partners</span>
                      </div>

                      <div className="bg-white dark:bg-zinc-950 py-24 lg:py-28 min-h-[560px]">
                        <div className="max-w-7xl mx-auto px-6">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-16 lg:gap-20 items-center justify-items-center">
                              {[
                                'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_13.png',
                                'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_12.png',
                                'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_11.png',
                                'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_10.png',
                                'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_9.png',
                                'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_8.png'
                              ].map((src, idx) => (
                                <div key={`row1-${idx}`} className="flex items-center justify-center w-72 sm:w-80 md:w-96 h-40 sm:h-48 md:h-56 rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg dark:bg-zinc-900">
                                  <img src={src} alt={`partner-${idx}`} className="max-h-full max-w-full w-auto object-contain px-3" referrerPolicy="no-referrer" />
                                </div>
                              ))}
                          </div>

                          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-16 lg:gap-20 items-center justify-items-center">
                            {[
                              'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_7.png',
                              'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_6.png',
                              'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_5.png',
                              'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_4.png',
                              'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_3.png',
                              'https://www.paruluniversity.ac.in/wp-content/uploads/2026/01/Company_logo_2.png'
                            ].map((src, idx) => (
                              <div key={`row2-${idx}`} className="flex items-center justify-center w-72 sm:w-80 md:w-96 h-40 sm:h-48 md:h-56 rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg dark:bg-zinc-900">
                                <img src={src} alt={`partner-2-${idx}`} className="max-h-full max-w-full w-auto object-contain px-3" referrerPolicy="no-referrer" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}


                
     



                {/* ==================== 3. STUDENTS PLACED ==================== */}
                {activeTabId === 'placed' && (
                  <div className="space-y-6">
                    
                    {/* Top Placements Carousel */}
                    <div className="space-y-6">
                      <div className="widget-title mb-4">
                        <h2 className="font-sans font-black text-2xl sm:text-3xl text-zinc-900 dark:text-white">Our Top Placements</h2>
                      </div>
                      <div className="top-place relative overflow-hidden rounded-[32px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-rose-50 opacity-80 dark:opacity-30" />
                        <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 items-center p-6 sm:p-8">
                          <div className="relative flex items-center justify-center rounded-[36px] bg-rose-100/60 dark:bg-zinc-900/80 p-6 overflow-hidden">
                            <div className="absolute -left-10 top-2 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl" />
                            <div className="absolute -right-8 bottom-4 h-28 w-28 rounded-full bg-rose-500/20 blur-3xl" />
                            <button
                              type="button"
                              onClick={() => setTopPlacementIndex((prev) => (prev - 1 + topPlacementCount) % topPlacementCount)}
                              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-zinc-700 shadow-lg transition hover:bg-white dark:bg-zinc-950 dark:text-white"
                              aria-label="Previous placement"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <div className="relative z-10 flex h-72 w-72 items-center justify-center rounded-full bg-white shadow-2xl overflow-hidden border-8 border-white dark:border-zinc-950">
                              <img
                                src={currentTopPlacement.avatar}
                                alt={currentTopPlacement.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => setTopPlacementIndex((prev) => (prev + 1) % topPlacementCount)}
                              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-zinc-700 shadow-lg transition hover:bg-white dark:bg-zinc-950 dark:text-white"
                              aria-label="Next placement"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </div>
                          <div className="relative overflow-hidden rounded-[36px] bg-zinc-950/95 p-8 shadow-[0_35px_80px_-55px_rgba(15,23,42,0.8)] text-white">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_35%)]" />
                            <div className="relative z-10 space-y-5">
                              <span className="inline-flex items-center rounded-full bg-crimson-red px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-sm">
                                {currentTopPlacement.degree}
                              </span>
                              <h3 className="text-3xl sm:text-4xl font-black tracking-tight uppercase leading-tight">
                                {currentTopPlacement.name}
                              </h3>
                              <div className="text-base font-semibold uppercase tracking-[0.18em] text-rose-200">Package</div>
                              <div className="mt-3 inline-flex items-center rounded-full bg-gradient-to-r from-sky-600 to-sky-400 px-6 py-4 text-2xl font-black text-white shadow-lg">
                                {currentTopPlacement.package}
                              </div>
                              <div className="mt-6 flex items-center gap-4">
                                <div className="h-16 w-36 overflow-hidden rounded-3xl bg-white p-3 shadow-inner">
                                  <img
                                    src={currentTopPlacement.badge}
                                    alt={`${currentTopPlacement.name} badge`}
                                    className="h-full w-full object-contain"
                                  />
                                </div>
                                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                                  Selected through ACET placement excellence
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative z-10 flex justify-center gap-2 pb-6">
                          {TOP_PLACEMENTS.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setTopPlacementIndex(idx)}
                              className={`h-3 w-3 rounded-full transition ${topPlacementIndex === idx ? 'bg-crimson-red shadow-lg' : 'bg-zinc-300 dark:bg-zinc-700'}`}
                              aria-label={`Show slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Student Placement Success */}
                    <div className="relative overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-blue-950 to-slate-950 opacity-95" />
                      <div className="relative p-6 md:p-8 lg:p-10">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                          <div className="max-w-3xl">
                            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Student Placement Success</p>
                            <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">Learners to Leaders</h2>
                            <p className="mt-4 max-w-2xl text-sm text-slate-200 leading-relaxed">
                              Read first-hand accounts from our placed graduates about how ACET Nagpur’s mentoring and technical workshops guided them to premier corporate offers.
                            </p>
                          </div>
                          <div className="flex gap-3 self-start">
                            <button
                              type="button"
                              onClick={() => setSuccessSlideIndex((prev) => (prev - 1 + successCount) % successCount)}
                              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg transition hover:bg-white/20"
                              aria-label="Previous success story"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              type="button"
                              onClick={() => setSuccessSlideIndex((prev) => (prev + 1) % successCount)}
                              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg transition hover:bg-white/20"
                              aria-label="Next success story"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                          <div className="rounded-[28px] bg-slate-900/85 p-8 shadow-2xl ring-1 ring-white/10">
                            <div className="mb-6 text-4xl leading-none opacity-10">“”</div>
                            <p className="text-base leading-relaxed text-slate-100">
                              {currentSuccessStory.quote}
                            </p>
                          </div>

                          <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl">
                            <div className="flex items-center gap-5">
                              <img
                                src={currentSuccessStory.image}
                                alt={currentSuccessStory.name}
                                className="h-24 w-24 rounded-full object-cover ring-2 ring-cyan-400"
                              />
                              <div>
                                <h3 className="text-2xl font-black text-white">{currentSuccessStory.name}</h3>
                                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{currentSuccessStory.role}</p>
                                <p className="mt-2 text-sm text-slate-400">{currentSuccessStory.company}</p>
                                <p className="text-xs uppercase tracking-[0.22em] text-slate-500 mt-1">{currentSuccessStory.year}</p>
                              </div>
                            </div>
                            <div className="mt-6 flex items-center gap-2">
                              {STUDENT_PLACEMENT_SUCCESS.map((_, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => setSuccessSlideIndex(idx)}
                                  className={`h-2.5 w-2.5 rounded-full transition ${successSlideIndex === idx ? 'bg-cyan-300' : 'bg-white/30'}`}
                                  aria-label={`View slide ${idx + 1}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Students Grid List */}
                    {filteredStudents.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredStudents.map((student, i) => (
                          <div 
                            key={i} 
                            className="bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/80 p-4 rounded-2xl shadow-sm flex items-center justify-between hover:border-rose-100 dark:hover:border-rose-900/30 hover:shadow-md transition-all"
                          >
                            <div className="flex items-center gap-4 min-w-0">
                              {renderStudentAvatar(student)}
                              <div className="min-w-0 text-left">
                                <h4 className="font-sans font-black text-sm text-zinc-900 dark:text-white truncate">
                                  {student.name}
                                </h4>
                                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase truncate">
                                  {student.branch}
                                </p>
                                <span className="inline-block bg-rose-50 dark:bg-zinc-800/40 text-crimson-red dark:text-rose-400 text-[9px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded mt-1">
                                  {student.company}
                                </span>
                              </div>
                            </div>
                            <div className="text-right pl-3 shrink-0">
                              <span className="block font-sans font-black text-sm text-zinc-900 dark:text-white">
                                {student.package}
                              </span>
                              <span className="text-[9px] text-zinc-400 font-semibold">Package</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {/* Super Achievers slider (converted from OWL markup) */}
                    <div className="container p-5 pt-0 mt-6">
                      <div className="widget-title mb-4">
                        <h2 className="text-zinc-900 dark:text-white">Super Achievers</h2>
                      </div>
                      <div className="row">
                        <div className="super-achiv-div position-relative">
                          <div className="owl-carousel owl-theme text-center owl-loaded owl-drag" id="super-achive-slider">
                            <div className="flex gap-4 overflow-x-auto py-4">
                              {SUPER_ACHIEVERS.map((a, idx) => (
                                <div key={idx} className="keystone-posetion min-w-[350px] mr-6 bg-white/5 rounded-lg shadow-sm">
                                  <img className="img-fluid w-full h-56 object-cover rounded-t-lg" src={a.image} alt={a.name} />
                                  <div className="keystone-deta p-3">
                                    <span className="block font-bold text-zinc-900 dark:text-white">{a.name}</span>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-300">{a.degree} <br />{a.company}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* ==================== 4. TRAINING CONDUCTED ==================== */}
                {activeTabId === 'training' && (
                  <div className="space-y-8">
                    
                    {/* Header Details */}
                    <div>
                      <h2 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white">
                        Comprehensive Training Methodologies
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                        Our progressive Training Calendar runs continuously, refining skills from freshman entry to final recruitment.
                      </p>
                    </div>

                      {/* ESEP block inserted as requested */}
                      <div className="esep_div bg-white/5 dark:bg-zinc-900/20 p-4 rounded-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                          <div className="md:w-1/2">
                            <div className="widget-title mb-3">
                              <h2 className="text-2xl font-black text-zinc-900 dark:text-white">Employability Skills Enhancement Program (ESEP)</h2>
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-300 mt-2">Under the wide umbrella of ESEP, UGI offers its students a set of 'transferable skills' that are not specific to one particular career path but are generic across all employment sectors.</p>
                            <p className="text-zinc-600 dark:text-zinc-300 mt-2">UGI knows the current market trend &amp; its needs and also its student's interests &amp; potential. With this understanding and emphasis upon a mix of skills required, ESEP@UGI offers all the in-campus opportunities to the career seekers of United:</p>
                            <ul className="list-disc list-inside mt-3 text-zinc-600 dark:text-zinc-300 space-y-1">
                              <li>Gateway to ‘GATE’</li>
                              <li>Verbal Ability Program (VAP)</li>
                              <li>Campus Recruitment Training (CRT)</li>
                              <li>Technical Training (TT)</li>
                            </ul>
                          </div>
                          <div className="md:w-1/2 mt-4 md:mt-0">
                            <div className="esep_imgBox rounded-lg overflow-hidden">
                              <img src="https://www.united.ac.in/frontend/images/esepmg.webp" alt="ESEP" className="w-full h-auto object-cover" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Campus Recruitment Training block moved to Training Conducted */}
                      <div className="mt-6 rounded-3xl border border-rose-100/40 bg-white p-6 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900/30">
                        <div className="space-y-4">
                          <h2 className="text-xl font-black text-zinc-900 dark:text-white">Campus Recruitment Training (CRT)</h2>
                          <p className="text-zinc-600 dark:text-zinc-300">The industry is always on the lookout for students who are vibrant, energetic individuals and ready to accept challenges with good academic background, open to learning even at work and more importantly with good communication skills. The Recruitment process for various companies is rigorous and requires every student to enhance aptitude and attitude skills, for which UNITED has a comprehensive program designed to train students for all the stages of Campus Recruitments.</p>
                          <p className="text-zinc-600 dark:text-zinc-300">This programme is updated on a regular basis to keep pace with the changes in the recruitment procedures adopted by various companies. The program has different modules for preparing the job aspirant to tackle the interview process like:</p>
                          <ul className="list-disc list-inside mt-3 text-zinc-600 dark:text-zinc-300 space-y-1">
                            <li>Written Test or Aptitude Test. (English/Quants/Reasoning)</li>
                            <li>Programming Skills Development (PSD) Program</li>
                            <li>Group Discussions</li>
                            <li>Pre-Placement Interviews</li>
                            <li>Job-specific Interview Prep-Camps</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 rounded-3xl border border-rose-100/40 bg-white p-5 shadow-sm dark:border-zinc-800/50 dark:bg-zinc-900/30">
                        <div className="flex items-start gap-4">
                          <div className="edge_icon flex-shrink-0">
                            <img src="https://www.united.ac.in/frontend/images/book2.png" alt="" className="w-12 h-12 object-contain" />
                          </div>
                          <div className="flex-1">
                            <div className="widget-title mb-3">
                              <h2 className="text-xl font-black text-zinc-900 dark:text-white">Verbal Ability Program (VAP) &amp; Soft Skills Training</h2>
                            </div>
                            <p className="pt-2 text-zinc-600 dark:text-zinc-300">'Verbal Ability Program' (VAP) is another unique feature of UGI which gets motivation from the alarmingly need of improvement in English Proficiency/Communication and Aptitude along with the other Soft Skills, which often limit student's chances of landing a job.</p>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-300">The passionate team of experienced faculty members at United makes the students work upon their Intelligence Quotient (IQ) covering Numerical, Analytical and Reasoning skills along with English Proficiency and also their Emotional Quotient (EQ) covering their Attitude, Communication, Interpersonal and decision-making skills etc.</p>
                          </div>
                        </div>
                      </div>

                      {/* Training Programs - modern card layout */}
                      <div className="mt-6 overflow-hidden rounded-[28px] border border-zinc-200/70 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                        <div className="relative">
                          <img className="h-56 w-full object-cover" src="https://anjumanengg.edu.in/UserData/uploads/pages/1019/ImageMain.jpg" alt="Training Programs" />
                          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-900/50 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                            <div className="inline-flex items-center gap-2 rounded-full bg-crimson-red/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                              <Sparkles size={12} />
                              Career Readiness Journey
                            </div>
                            <h3 className="mt-3 text-2xl font-black text-white">Our Training Programmes</h3>
                            <p className="mt-2 max-w-2xl text-sm text-zinc-200">
                              Training activities are organized throughout the year to prepare students for campus selection programs with strong aptitude, communication, and professional readiness.
                            </p>
                          </div>
                        </div>

                        <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr]">
                          <div className="space-y-6">
                            <div className="rounded-2xl border border-rose-100/50 bg-rose-50/60 p-5 dark:border-zinc-800/70 dark:bg-zinc-900/40">
                              <div className="mb-3 flex items-center gap-2">
                                <Target size={16} className="text-crimson-red" />
                                <h4 className="text-lg font-black text-zinc-900 dark:text-white">Training Objective</h4>
                              </div>
                              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                To succeed in today’s competitive environment, it is essential for students to be technically strong while also excelling in aptitude, reasoning, soft skills, and communication. These programmes are designed to strengthen employability and confidence.
                              </p>
                            </div>

                            <div className="rounded-2xl border border-rose-100/50 bg-rose-50/70 p-5 dark:border-rose-900/20 dark:bg-rose-950/10">
                              <h4 className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">Highlights</h4>
                              <ol className="space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                                <li>More than 500 students undertake minimum vocational training during winter and summer vacations.</li>
                                <li>Branch-specific technical training is provided in areas such as C, C++, Data Structures, Core Java, AutoCAD, ANSYS, CREO, PHP Web Designing, HTML, MATLAB, STAADPRO, and PLC-SCADA.</li>
                                <li>Campus-specific training programmes are organized for dream-company recruitment drives through expert sessions and industry-focused guidance.</li>
                                <li>Career counseling seminars and mentorship programmes are conducted throughout the year for students across departments and semesters.</li>
                              </ol>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div className="rounded-2xl border border-rose-100/40 bg-white p-5 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900/40">
                              <div className="mb-3 flex items-center gap-2">
                                <BookOpen size={16} className="text-crimson-red" />
                                <h4 className="text-lg font-black text-zinc-900 dark:text-white">Core Training Focus</h4>
                              </div>
                              <ul className="space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                                <li>• Integrating career planning with academic curriculum and internship coordination.</li>
                                <li>• Strengthening lifelong career decision-making and professional confidence.</li>
                                <li>• Improving communication skills, personality development, and leadership readiness.</li>
                                <li>• Building aptitude, logical reasoning, verbal ability, and interview preparedness.</li>
                                <li>• Conducting mock interviews aligned with corporate expectations.</li>
                              </ul>
                            </div>

                            <div className="rounded-2xl border border-rose-100/40 bg-zinc-50/80 p-5 dark:border-zinc-800/70 dark:bg-zinc-900/40">
                              <div className="mb-3 flex items-center gap-2">
                                <Download size={16} className="text-crimson-red" />
                                <h4 className="text-lg font-black text-zinc-900 dark:text-white">Training Activities</h4>
                              </div>
                              <div className="space-y-2">
                                {[
                                  { label: 'Training Activity 2024-25', href: 'https://anjumanengg.edu.in/UserData/uploads/pages/1019/Training%20Conducted.pdf' },
                                  { label: 'Training Activity 2022-23', href: 'https://anjumanengg.edu.in/UserData/uploads/pages/1019/T_P_Activities-Report_2022-23(1)-1.pdf' },
                                  { label: 'Training Activity 2021-22', href: 'https://anjumanengg.edu.in/UserData/uploads/pages/1019/TRAINING_PROGRAM_2021-22.pdf' },
                                  { label: 'Training Activity 2019-20', href: 'https://anjumanengg.edu.in/UserData/uploads/pages/1019/TRAINING-ACTIVITIES2019-2020%20.pdf' },
                                  { label: 'Training Activity 2018-19', href: 'https://anjumanengg.edu.in/UserData/uploads/pages/1019/TrainingActivity(18-19).pdf' }
                                ].map((item, index) => (
                                  <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-3 py-3 text-sm font-semibold text-zinc-700 transition hover:border-crimson-red/30 hover:text-crimson-red dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                                  >
                                    <span>{item.label}</span>
                                    <ArrowUpRight size={14} />
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                  </div>
                )}

                {/* ==================== 5. PLACEMENT ACTIVITIES ==================== */}
                {activeTabId === 'activities' && (
                  <div className="space-y-8">
                    
                    {/* Header Details */}
                    <div>
                      <h2 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white">
                        Year-Round Placement Initiatives & Campus Activities
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                        Active student coordination, expert panels, and field trips designed to align technical competence with global realities.
                      </p>
                    </div>

                    {/* Activities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {PLACEMENT_ACTIVITIES.map((act, i) => {
                        const Icon = act.icon;
                        return (
                          <div 
                            key={i} 
                            className="bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 p-6 rounded-2xl flex gap-5 items-start shadow-sm hover:shadow-md transition-all"
                          >
                            <div className="p-3 bg-rose-500/10 text-crimson-red dark:text-rose-400 rounded-xl shrink-0">
                              <Icon size={18} />
                            </div>
                            <div className="space-y-1 text-left min-w-0">
                              <h3 className="font-sans font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">
                                {act.title}
                              </h3>
                              <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                                {act.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Regional Pool Nodal Info */}
                    <div className="p-6 bg-crimson-red text-white rounded-3xl space-y-3 relative overflow-hidden shadow-lg">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-12 -translate-y-12 pointer-events-none" />
                      <span className="inline-block bg-white/10 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-md">
                        Nodal Center
                      </span>
                      <h3 className="font-sans font-extrabold text-lg sm:text-xl">ACET: The Hub of Regional Pool Recruitments</h3>
                      <p className="text-xs text-rose-100 max-w-2xl leading-relaxed">
                        With modern high-speed broadband infrastructures and specialized interview clusters, ACET Nagpur stands selected as the priority nodal center in Sadar Nagpur, enabling students from the entire Vidarbha region to meet multi-national corporate selectors safely.
                      </p>
                    </div>

                    <div className="rounded-[28px] border border-rose-100/40 bg-white p-6 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-900/40">
                      <div className="space-y-8">
                        <div className="space-y-3">
                          <h3 className="text-xl font-black text-zinc-900 dark:text-white">Corporate Relations Centre (CRC)</h3>
                          <img src="https://www.united.ac.in/frontend/images/crc-img.webp" alt="Corporate Relations Centre" className="h-64 w-full rounded-2xl object-cover" />
                          <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                            At United Group, the Corporate Relations Centre (CRC) does far more than place students. While students are annually recruited by Infosys, TCS, Wipro, L&amp;T and other industry giants, CRC goes a step further by ensuring each student becomes 360° employable.
                          </p>
                          <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                            Training forms a major part of the CRC portfolio. Students are assessed in their second year through aptitude and subject tests, strengths and weaknesses are evaluated, and highly individualized training is provided. In the third year, CRC offers programmes to help students crack company interviews as well as competitive exams such as GATE, SAT and GRE.
                          </p>
                          <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                            Our work does not end at graduation. Through a strong alumni network, CRC keeps track of current opportunities in specialized domains and helps deserving students secure placements or pathways for higher studies.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-black text-zinc-900 dark:text-white">Placement Team</h3>
                          <ul className="space-y-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                            <li>• “Be sure you put your feet in the right place, then stand firm” — Abraham Lincoln</li>
                            <li>• “If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe” — Abraham Lincoln</li>
                            <li>• “I will prepare and some day my chance will come” — Abraham Lincoln</li>
                            <li>• CRC believes in preparation for all placement activities through structured initiatives such as aptitude and personality sessions from the second year.</li>
                            <li>• Placement preparation customized for major recruiters based on past test papers.</li>
                            <li>• Session-wise mock tests before every recruitment drive.</li>
                            <li>• Dedicated tutorials by faculty for technical written tests and interviews.</li>
                            <li>• A dedicated student library with books and worksheets on quantitative analysis, reading comprehension, and verbal reasoning.</li>
                            <li>• Compiled question banks based on past recruiter papers.</li>
                            <li>• Actual interview simulations before placement events.</li>
                            <li>• Counseling on CV preparation and general grooming before interviews.</li>
                            <li>• Group discussions on general and technical topics.</li>
                            <li>• Special monitoring for summer training programmes.</li>
                            <li>• Industrial tours to understand real industry requirements.</li>
                            <li>• Collaborations with Infosys for campus placements and Learn programmes.</li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-black text-zinc-900 dark:text-white">Industrial Visits</h3>
                          <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                            Industrial visits are regularly organized. Students are encouraged to visit trade fairs such as Elecrama and The Auto Expo to stay in touch with real industry practices and understand the latest products and technologies being launched.
                          </p>
                          <ul className="space-y-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                            <li>• 200 students travelled to the Asian Institute of Technology, Bangkok for a 15-day short-term course.</li>
                            <li>• 240 B.Tech and MCA students visited Infosys, Chandigarh under SPARK.</li>
                            <li>• Pharmacy students visited manufacturing units of IPCA Laboratories for hands-on training.</li>
                            <li>• Mechanical engineering students completed a 3-day tour of Hindalco, Renukoot.</li>
                            <li>• PGDM and MBA students visited plants of Mother Dairy, Moser Baer, Jacksons Ltd, Parle G, IFFCO, and Honda.</li>
                            <li>• Accredited by Tata Consultancy Services.</li>
                            <li>• Academic alliance partnership with EMC2.</li>
                            <li>• Collaboration with Mahindra Rise for Auto Quotient Quiz.</li>
                            <li>• Collaboration with TCS for CodeVita.</li>
                            <li>• Consultancy Development Centre.</li>
                            <li>• Computer Science Society of India.</li>
                            <li>• Confederation of Indian Industries.</li>
                            <li>• All India Management Association.</li>
                            <li>• Eastern U.P. Chamber of Commerce.</li>
                            <li>• Association of Indian Management Scholars.</li>
                            <li>• Allahabad Management Association.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* ==================== 6. HIGHER STUDIES ==================== */}
                {activeTabId === 'higher-studies' && (
                  <div className="space-y-8">
                    
                    {/* Header Details */}
                    <div>
                      <h2 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white">
                        Pathways to Advanced Learning & Global Research
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                        Encouraging candidates towards higher academic qualifications (M.Tech, MBA, MS, PhD) across notable international colleges.
                      </p>
                    </div>

                    {/* Competitive Exam Coaching */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                      
                      <div className="p-6 bg-rose-50/20 dark:bg-rose-950/5 border border-rose-100/40 dark:border-rose-900/10 rounded-2xl flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className="text-[10px] font-black tracking-widest text-crimson-red dark:text-rose-400 uppercase">GATE PREPARATORY CELL</span>
                          <h3 className="font-sans font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">In-house GATE Mentoring Programs</h3>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed text-left">
                            We host dedicated GATE mentoring circles overseen by specialized PhD faculties in engineering streams. Students get access to past CET/GATE question registries and digital test simulators for systematic practice.
                          </p>
                        </div>
                        <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-semibold pt-4">
                          <li className="flex items-center gap-2">&bull; Free weekly Mock Gate evaluations</li>
                          <li className="flex items-center gap-2">&bull; Access to video lectures by IIT professors</li>
                        </ul>
                      </div>

                      <div className="p-6 bg-emerald-500/[0.02] dark:bg-emerald-950/5 border border-emerald-500/10 dark:border-emerald-900/10 rounded-2xl flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className="text-[10px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">GLOBAL HIGHER STUDIES</span>
                          <h3 className="font-sans font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">GRE, IELTS & TOEFL Support</h3>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed text-left">
                            For candidates aiming for international universities, our cell holds resume counseling sessions, guides letter-of-recommendation processes, and maintains academic resource handbooks to pass English qualification exams.
                          </p>
                        </div>
                        <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-semibold pt-4">
                          <li className="flex items-center gap-2">&bull; Counseling on University shortlisting</li>
                          <li className="flex items-center gap-2">&bull; Direct letter-of-recommendation processing</li>
                        </ul>
                      </div>

                    </div>

                    {/* Notable Higher Studies Achievers */}
                    <div className="space-y-4">
                      <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Noted Achievers in Higher Education</h3>
                      <div className="overflow-x-auto border border-zinc-100 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-zinc-50 dark:bg-zinc-800 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            <tr>
                              <th className="px-6 py-3.5">Student Name</th>
                              <th className="px-6 py-3.5">Pursuing Program</th>
                              <th className="px-6 py-3.5">Target Institution</th>
                              <th className="px-6 py-3.5 text-right">Branch/Year</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 font-semibold text-zinc-600 dark:text-zinc-300">
                            {ALUMNI_HIGHER_STUDIES.map((alumnus, idx) => (
                              <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                                <td className="px-6 py-4 text-zinc-900 dark:text-white font-black">{alumnus.name}</td>
                                <td className="px-6 py-4">{alumnus.degree}</td>
                                <td className="px-6 py-4 flex items-center gap-1.5">
                                  <span>{alumnus.university}</span>
                                  <ArrowUpRight size={11} className="opacity-50 text-crimson-red" />
                                </td>
                                <td className="px-6 py-4 text-right text-[10px] text-zinc-400 uppercase">{alumnus.branch} / {alumnus.year}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                )}

                {/* ==================== 7. GALLERY ==================== */}
                {activeTabId === 'gallery' && (
                  <div className="space-y-6">
                    
                    {/* Header Details */}
                    <div>
                      <h2 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white">
                        T & P Activity Gallery – Capturing Success
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                        A visual capture of our recruitment pool drives, technical bootcamps, industrial interactions, and felicitation events.
                      </p>
                    </div>

                    <div className="rounded-[32px] border border-zinc-200/70 bg-gradient-to-br from-white to-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 sm:p-8">
                      <div className="mx-auto mb-8 max-w-3xl text-center">
                        <h3 className="font-sans text-2xl font-black text-zinc-900 dark:text-white sm:text-3xl">
                          Experience <span className="text-crimson-red">Campus Life</span>
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                          A vibrant campus that inspires growth, creativity, and lifelong friendships.
                        </p>
                      </div>

                      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3">
                        {CAMPUS_LIFE_GALLERY.map((item, idx) => (
                          <div
                            key={idx}
                            className={`group relative overflow-hidden rounded-2xl ${item.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
                          >
                            <img
                              src={item.src}
                              alt={item.alt}
                              className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${item.featured ? 'min-h-[300px]' : 'h-48 md:h-56'}`}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <p className="absolute bottom-4 left-4 translate-y-2 text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 text-center">
                        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson-red px-8 py-3 text-sm font-bold text-white transition hover:bg-[#93000f]">
                          Schedule a Campus Visit <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="rounded-[32px] border border-rose-100/50 bg-gradient-to-br from-rose-50/60 to-white p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 sm:p-8">
                      <div className="mx-auto mb-8 max-w-3xl text-center">
                        <h3 className="font-sans text-2xl font-black text-zinc-900 dark:text-white sm:text-3xl">
                          State of Art <span className="text-crimson-red">Lab Facility</span>
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                          World-class laboratories equipped with modern infrastructure for hands-on learning.
                        </p>
                      </div>

                      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
                        {LAB_FACILITY_GALLERY.map((item, idx) => (
                          <div
                            key={idx}
                            className={`group relative overflow-hidden rounded-2xl ${item.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
                          >
                            <img
                              src={item.src}
                              alt={item.alt}
                              className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${item.featured ? 'min-h-[300px]' : 'h-48 md:h-64'}`}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <p className="absolute bottom-4 left-4 translate-y-2 text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image Grid with subtle overlay */}
                    <div className="relative rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none rounded-3xl" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                        {GALLERY_IMAGES.map((img, idx) => (
                          <div 
                            key={idx} 
                            className="bg-white dark:bg-zinc-900 border border-zinc-150/40 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm group hover:shadow-lg transition-all"
                          >
                            <div className="h-44 overflow-hidden relative">
                              <img 
                                src={img.url} 
                                alt={img.caption} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                  View Capture <ExternalLink size={10} />
                                </span>
                              </div>
                            </div>
                            
                            <div className="p-4 space-y-1 text-left">
                              <h4 className="font-sans font-bold text-xs text-zinc-900 dark:text-white group-hover:text-crimson-red transition-colors">
                                {img.caption}
                              </h4>
                              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-relaxed font-semibold">
                                {img.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ==================== 8. T & P CONTACTS ==================== */}
                {activeTabId === 'contacts' && (
                  <div className="space-y-6">
                    <div className="overflow-hidden rounded-[28px] border border-zinc-200/70 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white shadow-xl">
                      <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-rose-100">
                              Connect With Us
                            </span>
                            <h2 className="font-sans text-2xl font-black leading-tight sm:text-3xl">
                              Connect with the Placement Desk
                            </h2>
                            <p className="max-w-2xl text-sm leading-7 text-zinc-300">
                              Are you a corporate selector looking to initiate a pool campus drive or a candidate needing career support? Our team is here to assist you with a smooth and responsive experience.
                            </p>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                              <div className="mb-2 flex items-center gap-2 text-crimson-red">
                                <Phone size={16} />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Call Us</span>
                              </div>
                              <a href="tel:+919823166453" className="text-sm font-semibold text-white">+91 98231 66453</a>
                              <p className="mt-1 text-xs text-zinc-300">Placement Cell Helpline</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                              <div className="mb-2 flex items-center gap-2 text-crimson-red">
                                <Mail size={16} />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em]">Email</span>
                              </div>
                              <a href="mailto:tp_eng@anjumanengg.edu.in" className="text-sm font-semibold text-white">tp_eng@anjumanengg.edu.in</a>
                              <p className="mt-1 text-xs text-zinc-300">Training & Placement Office</p>
                            </div>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                            <div className="mb-3 flex items-center gap-2 text-crimson-red">
                              <MapPin size={16} />
                              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Office Location</span>
                            </div>
                            <p className="text-sm leading-7 text-zinc-200">
                              Training & Placement Office, 1st Floor, Admin Block, Anjuman College of Engineering & Technology, Sadar Nagpur, Maharashtra - 440001
                            </p>
                            <div className="mt-3 flex items-start gap-2 text-sm text-zinc-300">
                              <Clock size={15} className="mt-0.5 shrink-0 text-crimson-red" />
                              <span>Office hours: Monday to Saturday – 10:00 AM to 5:30 PM. Closed on regional holidays.</span>
                            </div>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                            <div className="mb-2 flex items-center gap-2 text-crimson-red">
                              <Users size={16} />
                              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Primary Coordinators</span>
                            </div>
                            <div className="space-y-3 text-sm text-zinc-200">
                              <div>
                                <p className="font-semibold text-white">Dr. Sameer G. Kene</p>
                                <p className="text-xs text-zinc-300">Head, Training & Placement Cell</p>
                              </div>
                              <div>
                                <p className="font-semibold text-white">Prof. Khwaja Ramiz</p>
                                <p className="text-xs text-zinc-300">Asst. Placement Coordinator</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[24px] border border-white/10 bg-white/95 p-5 text-zinc-900 shadow-lg">
                          <div className="mb-4">
                            <h3 className="font-sans text-lg font-black">Recruitment Drive Invitation Form</h3>
                            <p className="mt-1 text-xs leading-6 text-zinc-500">
                              Interested in initiating virtual or physical hiring loops at ACET Sadar Nagpur campus? Submit your details below.
                            </p>
                          </div>

                          {formSubmitted ? (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="rounded-2xl border border-emerald-500/20 bg-emerald-50 p-6 text-center"
                            >
                              <CheckCircle2 className="mx-auto text-emerald-500" size={42} />
                              <h4 className="mt-3 font-sans text-lg font-black text-zinc-900">Invitation Registered!</h4>
                              <p className="mt-2 text-sm leading-7 text-zinc-600">
                                Thank you. Our placement officer will connect with your team shortly with branch-specific details and scheduling support.
                              </p>
                            </motion.div>
                          ) : (
                            <form onSubmit={handleInquirySubmit} className="space-y-3.5 text-xs">
                              <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1">
                                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.25em] text-zinc-400">Company Name *</label>
                                  <input
                                    required
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    placeholder="e.g. TCS Digital"
                                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 outline-none transition focus:border-crimson-red focus:ring-2 focus:ring-crimson-red/10"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.25em] text-zinc-400">HR Representative *</label>
                                  <input
                                    required
                                    type="text"
                                    value={hrName}
                                    onChange={(e) => setHrName(e.target.value)}
                                    placeholder="e.g. Amaan Sheikh"
                                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 outline-none transition focus:border-crimson-red focus:ring-2 focus:ring-crimson-red/10"
                                  />
                                </div>
                              </div>

                              <div className="grid gap-3 sm:grid-cols-2">
                                <div className="space-y-1">
                                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.25em] text-zinc-400">Corporate Email *</label>
                                  <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="corporate_hr@company.com"
                                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 outline-none transition focus:border-crimson-red focus:ring-2 focus:ring-crimson-red/10"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="block text-[10px] font-extrabold uppercase tracking-[0.25em] text-zinc-400">Contact Number *</label>
                                  <input
                                    required
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="+91 9876543210"
                                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 outline-none transition focus:border-crimson-red focus:ring-2 focus:ring-crimson-red/10"
                                  />
                                </div>
                              </div>

                              <div className="space-y-1">
                                <label className="block text-[10px] font-extrabold uppercase tracking-[0.25em] text-zinc-400">Expected Month of Campus Visit</label>
                                <select
                                  value={expectedMonth}
                                  onChange={(e) => setExpectedMonth(e.target.value)}
                                  className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2.5 text-xs font-semibold text-zinc-700 outline-none transition focus:border-crimson-red focus:ring-2 focus:ring-crimson-red/10"
                                >
                                  <option value="">Select month...</option>
                                  <option value="August 2026">August 2026</option>
                                  <option value="September 2026">September 2026</option>
                                  <option value="October 2026">October 2026</option>
                                  <option value="November 2026">November 2026</option>
                                  <option value="January 2027">January 2027</option>
                                </select>
                              </div>

                              <div className="space-y-1">
                                <label className="block text-[10px] font-extrabold uppercase tracking-[0.25em] text-zinc-400">Hiring Criteria / Special Instructions</label>
                                <textarea
                                  rows={3}
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  placeholder="Describe minimum qualification percentile, branches needed, and any assessment support required..."
                                  className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-xs font-semibold text-zinc-700 outline-none transition focus:border-crimson-red focus:ring-2 focus:ring-crimson-red/10"
                                />
                              </div>

                              <button
                                type="submit"
                                className="w-full rounded-xl bg-crimson-red px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white transition hover:bg-[#93000f]"
                              >
                                Register Corporate Invitation
                              </button>
                            </form>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </div>
  );
}
