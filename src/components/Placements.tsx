import React, { useState, useEffect } from 'react';
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

const PLACED_STUDENTS = [
  { name: 'Ayesha Khan', branch: 'Computer Science & Engineering', company: 'Microsoft', package: '22.0 LPA', year: '2025-26', gender: 'F' },
  { name: 'Rohan Deshpande', branch: 'Artificial Intelligence & Data Science', company: 'Amazon', package: '18.0 LPA', year: '2025-26', gender: 'M' },
  { name: 'Yashwardhan Shukla', branch: 'Computer Science & Engineering', company: 'Google', package: '20.0 LPA', year: '2025-26', gender: 'M' },
  { name: 'Sneha Patil', branch: 'Electronics & Telecommunication', company: 'TCS Digital', package: '7.5 LPA', year: '2025-26', gender: 'F' },
  { name: 'Mohammad Faizan', branch: 'Computer Science & Engineering', company: 'Persistent Systems', package: '9.0 LPA', year: '2025-26', gender: 'M' },
  { name: 'Sara Yasmin', branch: 'Electrical Engineering', company: 'Torrent Power', package: '7.2 LPA', year: '2025-26', gender: 'F' },
  { name: 'Abdur Rahman', branch: 'Mechanical Engineering', company: 'Jindal Steel', package: '8.0 LPA', year: '2025-26', gender: 'M' },
  { name: 'Nikita Borkar', branch: 'Computer Science & Engineering', company: 'Accenture', package: '8.2 LPA', year: '2025-26', gender: 'F' },
  { name: 'Sameer Sheikh', branch: 'Civil Engineering', company: 'L&T Construction', package: '6.5 LPA', year: '2025-26', gender: 'M' },
  { name: 'Huzefa Ahmed', branch: 'Artificial Intelligence & Data Science', company: 'Cognizant', package: '6.2 LPA', year: '2025-26', gender: 'M' }
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

interface PlacementsProps {
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
}

export default function Placements({ selectedTab = 'about', setSelectedTab }: PlacementsProps) {
  
  // Local tab state fallback if props are not connected
  const [localTab, setLocalTab] = useState('about');
  const activeTabId = setSelectedTab ? selectedTab : localTab;
  
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
    <div id="placements-container" className="py-12 px-4 sm:px-6 md:px-12 bg-[#fffbfb] dark:bg-zinc-950 text-left min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        
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
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
            Developing career pathways, industrial readiness, and locking top multinational packages for students at Anjuman Sadar Nagpur campus.
          </p>
        </div>

        {/* Outer Layout Grid: Navigation Sidebar (Left) + Content Stage (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT HAND: 8 Placement Pages Selector Sidebar (Desktop Only) */}
          <div className="hidden lg:col-span-3 lg:flex flex-col gap-1.5 bg-white dark:bg-zinc-900/60 p-4 rounded-3xl border border-rose-100/30 dark:border-zinc-800/80 shadow-md">
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

                    {/* Vision & Mission Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-rose-50/20 dark:bg-rose-950/5 border border-rose-100/40 dark:border-rose-900/10 rounded-2xl space-y-2">
                        <span className="text-[10px] font-black tracking-widest text-crimson-red dark:text-rose-400 uppercase">T&P CELL VISION</span>
                        <h3 className="font-sans font-extrabold text-sm text-zinc-900 dark:text-white">To Build Sustainable Global Careers</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          To establish a strong, unbreakable linkage with elite technology developers and core engineering conglomerates, turning every student into a reliable asset ready to address complex real-world challenges.
                        </p>
                      </div>

                      <div className="p-6 bg-emerald-500/[0.02] dark:bg-emerald-950/5 border border-emerald-500/10 dark:border-emerald-900/10 rounded-2xl space-y-2">
                        <span className="text-[10px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">T&P CELL MISSION</span>
                        <h3 className="font-sans font-extrabold text-sm text-zinc-900 dark:text-white">Continuous Competency Infusion</h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          To infuse high-level numerical aptitude, algorithmic coding, mock presentation experience, and personal interview resilience directly into the student curriculum starting from the very first semester.
                        </p>
                      </div>
                    </div>

                    {/* Head T&P Message Block */}
                    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 rounded-3xl relative overflow-hidden">
                      <div className="absolute top-4 right-4 text-rose-500/5 font-serif text-9xl font-black select-none leading-none">“</div>
                      <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="h-20 w-20 rounded-2xl bg-gradient-to-tr from-[#93000f] to-[#4a0404] text-white flex flex-col items-center justify-center font-extrabold text-xs shrink-0 shadow-md">
                          <span className="text-xl font-black">TPO</span>
                          <span className="text-[9px] tracking-widest">OFFICE</span>
                        </div>
                        <div className="space-y-2 text-left">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-crimson-red dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 px-2 py-0.5 rounded">TPO MESSAGE</span>
                          <h4 className="font-sans font-black text-sm text-zinc-900 dark:text-white">Dr. Sameer G. Kene — T&P Head</h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                            &quot;At Anjuman Nagpur, our core focus lies in providing equal opportunity for excellence. We have designed progressive, semester-wise aptitude pathways that build skills incrementally. This process reduces anxiety and increases candidate acceptance rates across major corporations. We welcome hiring partners to explore our specialized student resource bank.&quot;
                          </p>
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

                  </div>
                )}

                {/* ==================== 3. STUDENTS PLACED ==================== */}
                {activeTabId === 'placed' && (
                  <div className="space-y-6">
                    
                    {/* Header Details */}
                    <div>
                      <h2 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white">
                        Outstanding Placements — Proud of our Achievers
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                        Explore our recently selected students and see where their diligence has taken them.
                      </p>
                    </div>

                    {/* Search & Filter bar */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-rose-100/40 dark:border-zinc-800 pb-5">
                      
                      {/* Search box */}
                      <div className="relative w-full sm:w-72">
                        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                        <input
                          type="text"
                          value={placedSearch}
                          onChange={(e) => setPlacedSearch(e.target.value)}
                          placeholder="Search by name or company..."
                          className="w-full text-xs font-semibold pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white"
                        />
                      </div>

                      {/* Branch selector */}
                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider shrink-0">Branch:</span>
                        <select
                          value={placedBranch}
                          onChange={(e) => setPlacedBranch(e.target.value)}
                          className="text-xs font-semibold bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white"
                        >
                          {studentBranches.map((b, i) => (
                            <option key={i} value={b}>{b}</option>
                          ))}
                        </select>
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
                    ) : (
                      <div className="p-12 text-center text-zinc-400 space-y-1">
                        <Users size={32} className="mx-auto opacity-30 mb-2 text-crimson-red" />
                        <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200">No placements found</h4>
                        <p className="text-xs">Try selecting another branch filter or refining your query.</p>
                      </div>
                    )}

                    {/* Student Testimonials */}
                    <div className="space-y-4 pt-4">
                      <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Student Placement Testimonials</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {STUDENT_TESTIMONIALS.map((t, idx) => (
                          <div 
                            key={idx} 
                            className={`p-5 bg-zinc-50/50 dark:bg-zinc-900/60 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all ${t.color}`}
                          >
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 italic leading-relaxed text-left mb-4">
                              &quot;{t.quote}&quot;
                            </p>
                            <div className="text-left border-t border-zinc-100 dark:border-zinc-800/50 pt-2">
                              <span className="block font-sans font-extrabold text-xs text-zinc-900 dark:text-white">{t.name}</span>
                              <span className="block text-[9px] font-black text-crimson-red dark:text-rose-400 uppercase tracking-widest">{t.company}</span>
                            </div>
                          </div>
                        ))}
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

                    {/* Timeline Grid */}
                    <div className="space-y-6 relative border-l border-rose-100 dark:border-zinc-800 ml-4 pl-6 md:pl-8">
                      {TRAINING_MODULES.map((module, i) => (
                        <div key={i} className="relative space-y-2">
                          
                          {/* Circle node indicator */}
                          <div className="absolute -left-[35px] md:-left-[43px] top-1.5 h-6 w-6 rounded-full bg-white dark:bg-zinc-950 border-2 border-crimson-red flex items-center justify-center font-extrabold text-[10px] text-crimson-red">
                            {i+1}
                          </div>

                          <span className="inline-block bg-rose-50 dark:bg-[#2c1c1b] text-crimson-red dark:text-rose-400 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded">
                            {module.year}
                          </span>
                          
                          <h3 className="font-sans font-black text-sm sm:text-base text-zinc-900 dark:text-white">
                            {module.title}
                          </h3>
                          
                          <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed max-w-3xl text-left">
                            {module.description}
                          </p>

                          {/* Highlights Badges */}
                          <div className="flex flex-wrap gap-1.5 pt-1.5">
                            {module.highlights.map((highlight, idx) => (
                              <span 
                                key={idx} 
                                className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-md"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Partner agencies block */}
                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 space-y-4">
                      <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase block">Hiring Training Partners</span>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {['Global Talent Track', 'FACE Academy', 'AMCAT Evaluations', 'Barclays Training'].map((agency, idx) => (
                          <div key={idx} className="bg-white dark:bg-zinc-950 p-3 rounded-xl border border-zinc-150/40 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300 shadow-sm">
                            {agency}
                          </div>
                        ))}
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
                        T & P Activity Gallery — Capturing Success
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                        A visual capture of our recruitment pool drives, technical bootcamps, industrial interactions, and felicitation events.
                      </p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                )}

                {/* ==================== 8. T & P CONTACTS ==================== */}
                {activeTabId === 'contacts' && (
                  <div className="space-y-8">
                    
                    {/* Header Details */}
                    <div>
                      <h2 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white">
                        Connect with the Placement Desk
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium mt-1">
                        Are you a corporate selector seeking to initiate a pool campus, or a candidate needing support? Reach out to us.
                      </p>
                    </div>

                    {/* 2 Column Layout: Office contact cards (Left) + Corporate Booking Form (Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Office Details Cards (5 Columns) */}
                      <div className="md:col-span-5 space-y-4">
                        
                        {/* Core officers list */}
                        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-150/40 dark:border-zinc-800 p-5 rounded-2xl text-left space-y-4">
                          <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase block border-b border-zinc-150/50 pb-2">Primary Coordinators</span>
                          
                          <div className="space-y-3.5">
                            <div>
                              <h4 className="font-sans font-black text-xs text-zinc-900 dark:text-white">Dr. Sameer G. Kene</h4>
                              <p className="text-[10px] text-crimson-red dark:text-rose-400 font-extrabold uppercase">Head, Training & Placement Cell</p>
                              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold mt-1">Email: tp_eng@anjumanengg.edu.in</p>
                              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold">Phone: +91 98231 66453</p>
                            </div>

                            <div className="border-t border-zinc-150/30 pt-3">
                              <h4 className="font-sans font-black text-xs text-zinc-900 dark:text-white">Prof. Khwaja Ramiz</h4>
                              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-extrabold uppercase">Asst. Placement Coordinator</p>
                              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold mt-1">Email: khwaja.ramiz@anjumanengg.edu.in</p>
                            </div>
                          </div>
                        </div>

                        {/* Physical Address Card */}
                        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 p-5 rounded-2xl text-left space-y-3">
                          <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase block">Cell Location</span>
                          
                          <div className="flex gap-3 text-xs text-zinc-600 dark:text-zinc-400 font-semibold">
                            <MapPin size={18} className="text-crimson-red shrink-0 mt-0.5" />
                            <p className="leading-relaxed text-[11px]">
                              Training & Placement Office, 1st Floor, Admin Block, Anjuman College of Engineering & Technology, Sadar Nagpur, Maharashtra - 440001
                            </p>
                          </div>

                          <div className="flex gap-3 text-xs text-zinc-600 dark:text-zinc-400 font-semibold pt-1 border-t border-zinc-100 dark:border-zinc-800">
                            <Clock size={16} className="text-crimson-red shrink-0 mt-0.5" />
                            <p className="text-[11px]">
                              Office hours: Monday to Saturday — 10:00 AM to 5:30 PM. (Closed on regional holidays).
                            </p>
                          </div>
                        </div>

                      </div>

                      {/* Right: Recruiter Booking Form (7 Columns) */}
                      <div className="md:col-span-7 bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 p-6 rounded-3xl text-left">
                        
                        <div className="mb-4">
                          <h3 className="font-sans font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">Recruitment Drive Invitation Form</h3>
                          <p className="text-[10px] text-zinc-500 mt-1">
                            Interested in initiating virtual or physical hiring loops at ACET Sadar Nagpur campus? Submit this drive invitation checklist.
                          </p>
                        </div>

                        {formSubmitted ? (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-8 bg-emerald-500/10 text-center border border-emerald-500/20 rounded-2xl space-y-3"
                          >
                            <CheckCircle2 className="text-emerald-500 mx-auto" size={40} />
                            <h4 className="font-sans font-black text-lg text-zinc-900 dark:text-white">Invitation Registered!</h4>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm mx-auto">
                              Thank you. Your campus booking slot has been securely logged. Our Placement Officer Dr. Sameer G. Kene will call your HR coordinator directly with custom bios and branch details within 12 hours.
                            </p>
                          </motion.div>
                        ) : (
                          <form onSubmit={handleInquirySubmit} className="space-y-3.5 text-xs">
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="block text-[10px] font-extrabold uppercase text-zinc-400">Company Name *</label>
                                <input
                                  required
                                  type="text"
                                  value={companyName}
                                  onChange={(e) => setCompanyName(e.target.value)}
                                  placeholder="e.g. TCS Digital"
                                  className="w-full font-semibold px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white text-xs"
                                />
                              </div>

                              <div className="space-y-1">
                                <label className="block text-[10px] font-extrabold uppercase text-zinc-400">HR Representative Name *</label>
                                <input
                                  required
                                  type="text"
                                  value={hrName}
                                  onChange={(e) => setHrName(e.target.value)}
                                  placeholder="e.g. Amaan Sheikh"
                                  className="w-full font-semibold px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white text-xs"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="block text-[10px] font-extrabold uppercase text-zinc-400">Corporate Email *</label>
                                <input
                                  required
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="e.g. corporate_hr@company.com"
                                  className="w-full font-semibold px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white text-xs"
                                />
                              </div>

                              <div className="space-y-1">
                                <label className="block text-[10px] font-extrabold uppercase text-zinc-400">Contact Number *</label>
                                <input
                                  required
                                  type="tel"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  placeholder="e.g. +91 9876543210"
                                  className="w-full font-semibold px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white text-xs"
                                />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="block text-[10px] font-extrabold uppercase text-zinc-400">Expected Month of Campus Visit</label>
                              <select
                                value={expectedMonth}
                                onChange={(e) => setExpectedMonth(e.target.value)}
                                className="w-full font-semibold bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white text-xs"
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
                              <label className="block text-[10px] font-extrabold uppercase text-zinc-400">Hiring Criteria / Special Instructions</label>
                              <textarea
                                rows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Describe minimum qualification percentile, branches needed, and any assessment support required..."
                                className="w-full font-semibold px-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white resize-none text-xs"
                              />
                            </div>

                            <button
                              type="submit"
                              className="w-full bg-crimson-red hover:bg-[#93000f] text-white text-[11px] font-extrabold uppercase tracking-widest py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98]"
                            >
                              Register Corporate Invitation
                            </button>

                          </form>
                        )}

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
