import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ArrowRight, LogIn, Home, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DEPARTMENTS } from '../data';

export const ABOUT_PAGES = [
  { id: 'about-trust', label: 'About Trust' },
  { id: 'about-acet', label: 'About ACET' },
  { id: 'organization-chart', label: 'Organization Chart' },
  { id: 'administrators-desk', label: "Administrator's Desk" },
  { id: 'principals-message', label: "Principal's Message" },
  { id: 'deans-desk', label: "Dean's Desk" },
  { id: 'governance-body', label: 'Governance Body' },
  { id: 'college-development-committee', label: 'College Development Committee' },
  { id: 'various-cells', label: 'Various Cells' },
  { id: 'college-magazine', label: 'College Magazine' }
];

export const PLACEMENT_PAGES = [
  { id: 'about', label: 'About Training & Placement' },
  { id: 'recruiters', label: 'Our Recruiters' },
  { id: 'placed', label: 'Students Placed' },
  { id: 'training', label: 'Training Conducted' },
  { id: 'activities', label: 'Placement Activities' },
  { id: 'higher-studies', label: 'Higher Studies' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contacts', label: 'T & P Contacts' }
];

export const RESEARCH_PAGES = [
  { id: 'vision-mission', label: 'Vision & Mission' },
  { id: 'aims-objectives', label: 'Aims & Objectives' },
  { id: 'code-of-ethics', label: 'Code of Ethics' },
  { id: 'rnd-committee', label: 'R and D Committee' },
  { id: 'research-publication', label: 'Research Publication' },
  { id: 'patents', label: 'Patents' },
  { id: 'research-activities', label: 'Research Activities' },
  { id: 'research-grants', label: 'Research Grants' },
  { id: 'phd-faculty', label: 'Faculty with Ph.Ds & PhD Supervisor' }
];

export const LIBRARY_PAGES = [
  { id: 'about-library', label: 'About Library' },
  { id: 'mode-of-conduct', label: 'Mode Of Conduct' },
  { id: 'facilities', label: 'Library Facilities' },
  { id: 'digital-library', label: 'Digital Library' },
  { id: 'e-resources', label: 'E.Journals & E.Resources' },
  { id: 'printed-journals', label: 'Printed Journals' },
  { id: 'newspapers-magazines', label: 'News Papers & Magazine' },
  { id: 'statistics', label: 'Statistical Information' },
  { id: 'events', label: 'Events Conducted' },
  { id: 'staff-contacts', label: 'Library Staffs & Contacts' }
];

export const ALUMNI_PAGES = [
  { id: 'about-association', label: 'About Alumni Association' },
  { id: 'executive-committee', label: 'Executive Committee' },
  { id: 'registration', label: 'Alumni Registration' },
  { id: 'distinguished-alumni', label: 'Distinguished Alumni' },
  { id: 'alumni-meets', label: 'Alumni Meets & Events' },
  { id: 'gallery', label: 'Alumni Photo Gallery' },
  { id: 'directory', label: 'Alumni Directory' },
  { id: 'testimonials', label: 'Alumni Testimonials' },
  { id: 'giving-back', label: 'Giving Back & Contributions' },
  { id: 'contacts', label: 'Alumni Cell Contacts' }
];

export const NAAC_PAGES = [
  { id: 'iqac', label: 'Internal Quality Assurance Cell (IQAC)' },
  { id: 'aqar', label: 'Annual Quality Assurance Report (AQAR)' },
  { id: 'accreditation', label: 'NAAC Accreditation & Certificate' },
  { id: 'ssr', label: 'Self Study Report (SSR)' },
  { id: 'sss', label: 'Student Satisfaction Survey (SSS)' },
  { id: 'criteria', label: 'NAAC Criteria Details (Criteria I - VII)' },
  { id: 'minutes', label: 'IQAC Minutes & ATR' },
  { id: 'best-practices', label: 'Best Practices & Distinctiveness' }
];

interface TopAppBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedDeptId: string;
  setSelectedDeptId: (id: string) => void;
  selectedPlacementTab: string;
  setSelectedPlacementTab: (tab: string) => void;
  selectedAboutTab?: string;
  setSelectedAboutTab?: (tab: string) => void;
  selectedResearchTab?: string;
  setSelectedResearchTab?: (tab: string) => void;
  selectedLibraryTab?: string;
  setSelectedLibraryTab?: (tab: string) => void;
  selectedAlumniTab?: string;
  setSelectedAlumniTab?: (tab: string) => void;
  selectedNaacTab?: string;
  setSelectedNaacTab?: (tab: string) => void;
  onApplyNow: () => void;
  onLogin: () => void;
}

export default function TopAppBar({ 
  activeTab, 
  setActiveTab, 
  selectedDeptId, 
  setSelectedDeptId, 
  selectedPlacementTab,
  setSelectedPlacementTab,
  selectedAboutTab = 'about-trust',
  setSelectedAboutTab,
  selectedResearchTab = 'vision-mission',
  setSelectedResearchTab,
  selectedLibraryTab = 'about-library',
  setSelectedLibraryTab,
  selectedAlumniTab = 'about-association',
  setSelectedAlumniTab,
  selectedNaacTab = 'iqac',
  setSelectedNaacTab,
  onApplyNow, 
  onLogin 
}: TopAppBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileDeptsOpen, setMobileDeptsOpen] = useState(false);
  const [mobilePlacementsOpen, setMobilePlacementsOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [mobileLibraryOpen, setMobileLibraryOpen] = useState(false);
  const [mobileAlumniOpen, setMobileAlumniOpen] = useState(false);
  const [mobileNaacOpen, setMobileNaacOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'Home', label: 'Home', isIcon: true, hasDropdown: false },
    { id: 'About', label: 'ABOUT US', isIcon: false, hasDropdown: true },
    { id: 'Academics', label: 'DEPARTMENTS', isIcon: false, hasDropdown: true },
    { id: 'Placements', label: 'PLACEMENTS', isIcon: false, hasDropdown: true },
    { id: 'Research', label: 'RESEARCH', isIcon: false, hasDropdown: true },
    { id: 'Library', label: 'LIBRARY', isIcon: false, hasDropdown: true },
    { id: 'Alumni', label: 'ALUMNI', isIcon: false, hasDropdown: true },
    { id: 'Naac', label: 'NAAC', isIcon: false, hasDropdown: true },
    { id: 'Contact', label: 'CONTACT US', isIcon: false, hasDropdown: false },
  ];

  const departmentPageLinks: Record<string, { label: string; href: string }[]> = {
    firstyear: [
      { label: 'About First Year (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1345' },
      { label: 'UG Program (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1346' },
      { label: 'Staff Profile (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1347' },
      { label: 'ICT Teaching Faculty (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1348' },
      { label: 'Staff Blogs (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1349' },
      { label: 'Laboratory Details (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1350' },
      { label: 'Events (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1351' },
      { label: 'Student Activities (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1352' },
      { label: 'Topper (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1353' },
      { label: 'Media Coverage (B.Tech)', href: 'https://anjumanengg.edu.in/page/?id=1354' }
    ],
    aids: [
      { label: 'About Department (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1124' },
      { label: 'UG Programme (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1125' },
      { label: 'Staff Profile (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1126' },
      { label: 'ICT Teaching Faculty (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1127' },
      { label: 'Staff Blogs (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1128' },
      { label: 'Laboratory Details (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1129' },
      { label: 'Events (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1130' },
      { label: 'Students Activities (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1131' },
      { label: 'Topper (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1132' },
      { label: 'Media Coverage (AI&DSc.)', href: 'https://anjumanengg.edu.in/page/?id=1133' }
    ],
    civil: [
      { label: 'About Department (CE)', href: 'https://anjumanengg.edu.in/page/?id=1071' },
      { label: 'UG Programme (CE)', href: 'https://anjumanengg.edu.in/page/?id=1072' },
      { label: 'Staff Profile (CE)', href: 'https://anjumanengg.edu.in/page/?id=1073' },
      { label: 'ICT Teaching Faculty (CE)', href: 'https://anjumanengg.edu.in/page/?id=1074' },
      { label: 'Staff Blogs (CE)', href: 'https://anjumanengg.edu.in/page/?id=1075' },
      { label: 'Laboratory Details (CE)', href: 'https://anjumanengg.edu.in/page/?id=1076' },
      { label: 'Events (CE)', href: 'https://anjumanengg.edu.in/page/?id=1077' },
      { label: 'Students Achievements (CE)', href: 'https://anjumanengg.edu.in/page/?id=1078' },
      { label: 'Topper Result (CE)', href: 'https://anjumanengg.edu.in/page/?id=1079' },
      { label: 'Media Coverage (CE)', href: 'https://anjumanengg.edu.in/page/?id=1080' }
    ],
    cse: [
      { label: 'About Department (CS)', href: 'https://anjumanengg.edu.in/page/?id=1081' },
      { label: 'UG Programme (CS)', href: 'https://anjumanengg.edu.in/page/?id=1082' },
      { label: 'Staff Profile (CS)', href: 'https://anjumanengg.edu.in/page/?id=1083' },
      { label: 'ICT Teaching Faculty (CS)', href: 'https://anjumanengg.edu.in/page/?id=1084' },
      { label: 'Staff Blogs (CS)', href: 'https://anjumanengg.edu.in/page/?id=1085' },
      { label: 'Laboratory Details (CS)', href: 'https://anjumanengg.edu.in/page/?id=1086' },
      { label: 'Events (CS)', href: 'https://anjumanengg.edu.in/page/?id=1087' },
      { label: 'Students Activities (CS)', href: 'https://anjumanengg.edu.in/page/?id=1088' },
      { label: 'Topper Results (CS)', href: 'https://anjumanengg.edu.in/page/?id=1089' },
      { label: 'Media Coverage (CS)', href: 'https://anjumanengg.edu.in/page/?id=1090' }
    ],
    electrical: [
      { label: 'About Department (EE)', href: 'https://anjumanengg.edu.in/page/?id=1091' },
      { label: 'UG Programme (EE)', href: 'https://anjumanengg.edu.in/page/?id=1092' },
      { label: 'Staff Profile (EE)', href: 'https://anjumanengg.edu.in/page/?id=1093' },
      { label: 'ICT Teaching Faculty (EE)', href: 'https://anjumanengg.edu.in/page/?id=1094' },
      { label: 'Staff Blogs (EE)', href: 'https://anjumanengg.edu.in/page/?id=1095' },
      { label: 'Laboratory Details (EE)', href: 'https://anjumanengg.edu.in/page/?id=1096' },
      { label: 'Events (EE)', href: 'https://anjumanengg.edu.in/page/?id=1097' },
      { label: 'Students Activities (EE)', href: 'https://anjumanengg.edu.in/page/?id=1098' },
      { label: 'Topper (EE)', href: 'https://anjumanengg.edu.in/page/?id=1099' },
      { label: 'Media Coverage (EE)', href: 'https://anjumanengg.edu.in/page/?id=1100' }
    ],
    etc: [
      { label: 'About Department (ET)', href: 'https://anjumanengg.edu.in/page/?id=1101' },
      { label: 'UG Programme (ET)', href: 'https://anjumanengg.edu.in/page/?id=1102' },
      { label: 'PG Programme (ET)', href: 'https://anjumanengg.edu.in/page/?id=1103' },
      { label: 'Research Programme (ET)', href: 'https://anjumanengg.edu.in/page/?id=1383' },
      { label: 'Staff Profile (ET)', href: 'https://anjumanengg.edu.in/page/?id=1104' },
      { label: 'ICT Teaching Faculty (ET)', href: 'https://anjumanengg.edu.in/page/?id=1105' },
      { label: 'Staff Blogs (ET)', href: 'https://anjumanengg.edu.in/page/?id=1106' },
      { label: 'Laboratory Details (EE)', href: 'https://anjumanengg.edu.in/page/?id=1107' },
      { label: 'Events (ET)', href: 'https://anjumanengg.edu.in/page/?id=1108' },
      { label: 'Students Activities (ET)', href: 'https://anjumanengg.edu.in/page/?id=1109' },
      { label: 'Topper Result (ET)', href: 'https://anjumanengg.edu.in/page/?id=1110' },
      { label: 'Media coverage (ET)', href: 'https://anjumanengg.edu.in/page/?id=1111' }
    ],
    mechanical: [
      { label: 'About Department (ME)', href: 'https://anjumanengg.edu.in/page/?id=1112' },
      { label: 'UG Programme (ME)', href: 'https://anjumanengg.edu.in/page/?id=1113' },
      { label: 'PG Programme (ME)', href: 'https://anjumanengg.edu.in/page/?id=1114' },
      { label: 'Research Programme (ME)', href: 'https://anjumanengg.edu.in/page/?id=1115' },
      { label: 'Staff Profile (ME)', href: 'https://anjumanengg.edu.in/page/?id=1116' },
      { label: 'ICT Teaching Faculty (ME)', href: 'https://anjumanengg.edu.in/page/?id=1117' },
      { label: 'Staff Blogs (ME)', href: 'https://anjumanengg.edu.in/page/?id=1118' },
      { label: 'Laboratory Details (ME)', href: 'https://anjumanengg.edu.in/page/?id=1119' },
      { label: 'Events (ME)', href: 'https://anjumanengg.edu.in/page/?id=1120' },
      { label: 'Students Activities (ME)', href: 'https://anjumanengg.edu.in/page/?id=1121' },
      { label: 'Topper Result (ME)', href: 'https://anjumanengg.edu.in/page/?id=1122' },
      { label: 'Media coverage (ME)', href: 'https://anjumanengg.edu.in/page/?id=1123' }
    ]
  };

  const [expandedDeptId, setExpandedDeptId] = useState<string | null>(null);
  const [isDepartmentsDropdownOpen, setIsDepartmentsDropdownOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-charcoal-black/95 backdrop-blur-md border-b border-rose-100 dark:border-zinc-800 shadow-md' 
          : 'bg-transparent backdrop-blur-none border-b border-transparent shadow-none'
      }`}
    >
      
      {/* Official Top Branding Header */}
      <div 
        className={`py-3 px-4 sm:px-8 transition-colors duration-300 ${
          isScrolled 
            ? 'bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto gap-4">
          
          {/* LEFT: College Logo with Continuously Rotating Outer Ring & Formatted Name */}
          <button 
            onClick={() => {
              setActiveTab('Home');
              setMobileMenuOpen(false);
            }} 
            className="flex items-center gap-3.5 text-left focus:outline-none group py-0.5"
            id="acet-logo-btn"
          >
            {/* Logo Container */}
            <div className="relative flex items-center justify-center p-2 shrink-0">
              {/* Inner College Logo Emblem */}
              <div className="relative z-0 p-1 bg-white dark:bg-zinc-950 rounded-full shadow-inner border border-zinc-100 dark:border-zinc-800">
                <motion.img 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  alt="Anjuman College Logo" 
                  className="h-11 w-11 sm:h-14 sm:w-14 object-contain rounded-full transition-transform duration-300 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjhJ1TOmBicb2t2QkF-A7qyhcrlVUJMdNz-HB3O8Wg0B02yxyl8EhbUyw9_Rob6Lq-OajVqfrBNMWvqqAIaG0fVIU_CtKL3OxDWVqw4rYlPwe6aoFcSGnKQv3TSKfnlEAuzSdKVOJvEkSYjifODunHjbRBEhEr31DLnS85tAXL47DeLVjeZqC6UCaWQrT6QPXtxFR_Jrdaa23PY6zLX_NJnG_WFrd-yyyAM0_KF7ttilbxNu65Mnvgokkynipq09ZvqA" 
                />
              </div>
            </div>

            {/* College Title Block formatted matching photograph */}
            <div className="flex flex-col text-left">
              <span className="font-black text-2xl sm:text-3xl lg:text-3xl text-[#8B0000] dark:text-rose-500 tracking-tight leading-none uppercase filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.06)]">
                ANJUMAN
              </span>
              
              <span className="font-extrabold text-[11px] sm:text-xs lg:text-sm text-zinc-900 dark:text-zinc-100 tracking-wider uppercase leading-snug mt-0.5">
                COLLEGE OF ENGINEERING & TECHNOLOGY
              </span>
              
              <span className="font-bold text-[9px] sm:text-[10px] text-zinc-600 dark:text-zinc-400 tracking-wide uppercase leading-tight mt-0.5">
                (MANAGED BY : ANJUMAN HAMI-E-ISLAM, NAGPUR)
              </span>
            </div>
          </button>

          {/* CENTER: Official Affiliations (Visible on lg+) */}
          <div className="hidden xl:flex flex-col text-[10px] xl:text-[11px] leading-relaxed text-zinc-700 dark:text-zinc-300 font-semibold border-l border-zinc-200 dark:border-zinc-800 pl-5">
            <div>
              <span className="text-zinc-500 dark:text-zinc-400 font-normal">Approved by : </span>
              <span className="font-extrabold text-zinc-900 dark:text-white">All India Council for Technical Education, New Delhi (AICTE)</span>
            </div>
            <div>
              <span className="text-zinc-500 dark:text-zinc-400 font-normal">Recognized by : </span>
              <span className="font-extrabold text-zinc-900 dark:text-white">Directorate of Technical Education, Mumbai (DTE)</span>
            </div>
            <div>
              <span className="text-zinc-500 dark:text-zinc-400 font-normal">Affiliated to : </span>
              <span className="font-extrabold text-zinc-900 dark:text-white">Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur (M.S.)</span>
            </div>
          </div>

          {/* RIGHT: NAAC Logo */}
          <div className="hidden md:flex items-center shrink-0">
            <img 
              alt="NAAC A+ accredited" 
              className="h-16 lg:h-20 w-auto object-contain drop-shadow-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzLTzICck0GcPqw1e0VycQBvEI3Lx-AhVcxRB5qAZiqmLTiEQNsSL9fFiGQK7vcBxxyLcsmTl-mlhcigY67T3Mjtpd0U5w5zFhUl5AAxtef_Ap2Z3r7JE3NIt2QdYUqQhgy1xHFCTI0of9GnprawOjT6SrFfMbuU_JeTt-UPmSp3JJiSOTqbqhY_T2jstnKzn7U2N-QDps2l0EMHV03bI9VVjWsc4NOL3owSbf4gY0wMa4ElOCGWfQw5I5sCUVvkpJ8Q" 
            />
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="flex justify-between items-center w-full px-4 sm:px-8 md:px-12 py-2 max-w-7xl mx-auto">
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-5 items-center text-[11px] xl:text-xs font-bold tracking-wider uppercase">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            
            // Custom dropdown implementation for About Us
            if (item.id === 'About') {
              return (
                <div key={item.id} className="relative group/dropdown py-2">
                  <button
                    onClick={() => {
                      setActiveTab('About');
                      if (setSelectedAboutTab) setSelectedAboutTab('about-trust');
                      setMobileMenuOpen(false);
                    }}
                    className={`relative transition-colors focus:outline-none flex items-center gap-1 group ${
                      isActive 
                        ? 'text-crimson-red font-extrabold' 
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-crimson-red dark:hover:text-rose-400'
                    }`}
                    id={`nav-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={10} className="opacity-60 group-hover/dropdown:translate-y-0.5 transition-transform" />
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-crimson-red rounded-full"
                      />
                    )}
                  </button>

                  {/* Dropdown Menu Container */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-96 opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden py-2">
                      <button
                        onClick={() => {
                          setActiveTab('About');
                          if (setSelectedAboutTab) setSelectedAboutTab('about-trust');
                        }}
                        className="w-full text-left px-4 py-3 text-xs font-bold tracking-wider text-crimson-red dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors uppercase border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between"
                      >
                        <span>ABOUT ACET DIRECTORY</span>
                        <span>&rarr;</span>
                      </button>
                      
                      <div className="max-h-[380px] overflow-y-auto py-1">
                        {ABOUT_PAGES.map((page) => {
                          const isPageSelected = activeTab === 'About' && selectedAboutTab === page.id;
                          return (
                            <button
                              key={page.id}
                              onClick={() => {
                                setActiveTab('About');
                                if (setSelectedAboutTab) setSelectedAboutTab(page.id);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between group/item ${
                                isPageSelected 
                                  ? 'bg-rose-50/50 text-crimson-red dark:bg-rose-950/10 dark:text-rose-400 font-bold'
                                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-crimson-red dark:hover:text-rose-400'
                              }`}
                            >
                              <span className="truncate pr-2">{page.label}</span>
                              <span className="opacity-0 group-hover/item:opacity-100 text-crimson-red dark:text-rose-400 transition-opacity text-xs font-bold">&rarr;</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Custom dropdown implementation for Departments
            if (item.id === 'Academics') {
              return (
                <div
                  key={item.id}
                  className="relative group/dropdown py-2"
                  onMouseEnter={() => setIsDepartmentsDropdownOpen(true)}
                  onMouseLeave={() => {
                    setIsDepartmentsDropdownOpen(false);
                    setExpandedDeptId(null);
                  }}
                >
                  <button
                    onMouseEnter={() => setIsDepartmentsDropdownOpen(true)}
                    onClick={() => {
                      setActiveTab('Academics');
                      setSelectedDeptId('all');
                      setMobileMenuOpen(false);
                    }}
                    className={`relative transition-colors focus:outline-none flex items-center gap-1 group ${
                      isActive 
                        ? 'text-crimson-red font-extrabold' 
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-crimson-red dark:hover:text-rose-400'
                    }`}
                    id={`nav-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={10} className="opacity-60 group-hover/dropdown:translate-y-0.5 transition-transform" />
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-crimson-red rounded-full"
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {isDepartmentsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[760px] z-50"
                        onMouseEnter={() => setIsDepartmentsDropdownOpen(true)}
                        onMouseLeave={() => {
                          setIsDepartmentsDropdownOpen(false);
                          setExpandedDeptId(null);
                        }}
                      >
                        <div
                          className="bg-gradient-to-br from-white via-rose-50/30 to-white dark:from-zinc-900 dark:via-zinc-950/80 dark:to-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl shadow-[0_22px_70px_-20px_rgba(0,0,0,0.35)] overflow-hidden"
                          onMouseLeave={() => setExpandedDeptId(null)}
                        >
                          <div className="flex min-h-[420px]">
                            <div className="w-full max-w-[320px] border-r border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/60">
                              <button
                                onClick={() => {
                                  setActiveTab('Academics');
                                  setSelectedDeptId('all');
                                }}
                                className="w-full text-left px-4 py-3 text-[10px] font-extrabold tracking-[0.22em] text-crimson-red dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors uppercase border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between"
                              >
                                <span>VIEW ALL DEPARTMENTS</span>
                                <span>&rarr;</span>
                              </button>

                              <div className="max-h-[380px] overflow-y-auto py-1">
                                {DEPARTMENTS.map((dept) => {
                                  const isDeptSelected = activeTab === 'Academics' && selectedDeptId === dept.id;
                                  const isExpanded = expandedDeptId === dept.id;

                                  return (
                                    <button
                                      key={dept.id}
                                      onClick={() => {
                                        setExpandedDeptId(dept.id);
                                        setActiveTab('Academics');
                                        setSelectedDeptId(dept.id);
                                      }}
                                      onMouseEnter={() => setExpandedDeptId(dept.id)}
                                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center justify-between group/item border-b border-zinc-100 dark:border-zinc-800/60 last:border-b-0 ${
                                        isDeptSelected || isExpanded
                                          ? 'bg-rose-50/90 text-crimson-red dark:bg-rose-950/20 dark:text-rose-400 font-semibold shadow-[inset_2px_0_0_0_#b91c1c]'
                                          : 'text-zinc-700 dark:text-zinc-300 hover:bg-white/80 dark:hover:bg-zinc-800/70 hover:text-crimson-red dark:hover:text-rose-400'
                                      }`}
                                    >
                                      <span className="truncate pr-2">{dept.name}</span>
                                      <span className="text-crimson-red dark:text-rose-400 text-xs font-bold opacity-70 group-hover/item:opacity-100 transition-opacity">→</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="flex-1 bg-white/80 dark:bg-zinc-900/70 p-3">
                              <div className="max-h-[360px] overflow-y-auto py-1 space-y-1">
                                {expandedDeptId ? (
                                  (departmentPageLinks[expandedDeptId] ?? []).map((item) => (
                                    <a
                                      key={item.href}
                                      href={item.href}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-700 dark:text-zinc-300 hover:bg-rose-50 dark:hover:bg-rose-950/10 hover:text-crimson-red dark:hover:text-rose-400 transition-all duration-200"
                                    >
                                      <span>{item.label}</span>
                                      <span className="text-crimson-red dark:text-rose-400">→</span>
                                    </a>
                                  ))
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Custom dropdown implementation for Placements
            if (item.id === 'Placements') {
              return (
                <div key={item.id} className="relative group/dropdown py-2">
                  <button
                    onClick={() => {
                      setActiveTab('Placements');
                      setSelectedPlacementTab('about');
                      setMobileMenuOpen(false);
                    }}
                    className={`relative transition-colors focus:outline-none flex items-center gap-1 group ${
                      isActive 
                        ? 'text-crimson-red font-extrabold' 
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-crimson-red dark:hover:text-rose-400'
                    }`}
                    id={`nav-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={10} className="opacity-60 group-hover/dropdown:translate-y-0.5 transition-transform" />
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-crimson-red rounded-full"
                      />
                    )}
                  </button>

                  {/* Dropdown Menu Container */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-96 opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden py-2">
                      <button
                        onClick={() => {
                          setActiveTab('Placements');
                          setSelectedPlacementTab('about');
                        }}
                        className="w-full text-left px-4 py-3 text-xs font-bold tracking-wider text-crimson-red dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors uppercase border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between"
                      >
                        <span>ABOUT T & P CELL</span>
                        <span>&rarr;</span>
                      </button>
                      
                      <div className="max-h-[360px] overflow-y-auto py-1">
                        {PLACEMENT_PAGES.map((page) => {
                          const isPageSelected = activeTab === 'Placements' && selectedPlacementTab === page.id;
                          return (
                            <button
                              key={page.id}
                              onClick={() => {
                                setActiveTab('Placements');
                                setSelectedPlacementTab(page.id);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between group/item ${
                                isPageSelected 
                                  ? 'bg-rose-50/50 text-crimson-red dark:bg-rose-950/10 dark:text-rose-400 font-bold'
                                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-crimson-red dark:hover:text-rose-400'
                              }`}
                            >
                              <span className="truncate pr-2">{page.label}</span>
                              <span className="opacity-0 group-hover/item:opacity-100 text-crimson-red dark:text-rose-400 transition-opacity text-xs font-bold">&rarr;</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Custom dropdown implementation for Research
            if (item.id === 'Research') {
              return (
                <div key={item.id} className="relative group/dropdown py-2">
                  <button
                    onClick={() => {
                      setActiveTab('Research');
                      if (setSelectedResearchTab) setSelectedResearchTab('vision-mission');
                      setMobileMenuOpen(false);
                    }}
                    className={`relative transition-colors focus:outline-none flex items-center gap-1 group ${
                      isActive 
                        ? 'text-crimson-red font-extrabold' 
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-crimson-red dark:hover:text-rose-400'
                    }`}
                    id={`nav-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={10} className="opacity-60 group-hover/dropdown:translate-y-0.5 transition-transform" />
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-crimson-red rounded-full"
                      />
                    )}
                  </button>

                  {/* Dropdown Menu Container */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-96 opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden py-2">
                      <button
                        onClick={() => {
                          setActiveTab('Research');
                          if (setSelectedResearchTab) setSelectedResearchTab('vision-mission');
                        }}
                        className="w-full text-left px-4 py-3 text-xs font-bold tracking-wider text-crimson-red dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors uppercase border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between"
                      >
                        <span>RESEARCH DIRECTORY</span>
                        <span>&rarr;</span>
                      </button>
                      
                      <div className="max-h-[380px] overflow-y-auto py-1">
                        {RESEARCH_PAGES.map((page) => {
                          const isPageSelected = activeTab === 'Research' && selectedResearchTab === page.id;
                          return (
                            <button
                              key={page.id}
                              onClick={() => {
                                setActiveTab('Research');
                                if (setSelectedResearchTab) setSelectedResearchTab(page.id);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between group/item ${
                                isPageSelected 
                                  ? 'bg-rose-50/50 text-crimson-red dark:bg-rose-950/10 dark:text-rose-400 font-bold'
                                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-crimson-red dark:hover:text-rose-400'
                              }`}
                            >
                              <span className="truncate pr-2">{page.label}</span>
                              <span className="opacity-0 group-hover/item:opacity-100 text-crimson-red dark:text-rose-400 transition-opacity text-xs font-bold">&rarr;</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Custom dropdown implementation for Library
            if (item.id === 'Library') {
              return (
                <div key={item.id} className="relative group/dropdown py-2">
                  <button
                    onClick={() => {
                      setActiveTab('Library');
                      if (setSelectedLibraryTab) setSelectedLibraryTab('about-library');
                      setMobileMenuOpen(false);
                    }}
                    className={`relative transition-colors focus:outline-none flex items-center gap-1 group ${
                      isActive 
                        ? 'text-crimson-red font-extrabold' 
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-crimson-red dark:hover:text-rose-400'
                    }`}
                    id={`nav-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={10} className="opacity-60 group-hover/dropdown:translate-y-0.5 transition-transform" />
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-crimson-red rounded-full"
                      />
                    )}
                  </button>

                  {/* Dropdown Menu Container */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-96 opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden py-2">
                      <button
                        onClick={() => {
                          setActiveTab('Library');
                          if (setSelectedLibraryTab) setSelectedLibraryTab('about-library');
                        }}
                        className="w-full text-left px-4 py-3 text-xs font-bold tracking-wider text-crimson-red dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors uppercase border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between"
                      >
                        <span>CENTRAL LIBRARY DIRECTORY</span>
                        <span>&rarr;</span>
                      </button>
                      
                      <div className="max-h-[380px] overflow-y-auto py-1">
                        {LIBRARY_PAGES.map((page) => {
                          const isPageSelected = activeTab === 'Library' && selectedLibraryTab === page.id;
                          return (
                            <button
                              key={page.id}
                              onClick={() => {
                                setActiveTab('Library');
                                if (setSelectedLibraryTab) setSelectedLibraryTab(page.id);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between group/item ${
                                isPageSelected 
                                  ? 'bg-rose-50/50 text-crimson-red dark:bg-rose-950/10 dark:text-rose-400 font-bold'
                                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-crimson-red dark:hover:text-rose-400'
                              }`}
                            >
                              <span className="truncate pr-2">{page.label}</span>
                              <span className="opacity-0 group-hover/item:opacity-100 text-crimson-red dark:text-rose-400 transition-opacity text-xs font-bold">&rarr;</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Custom dropdown implementation for Alumni
            if (item.id === 'Alumni') {
              return (
                <div key={item.id} className="relative group/dropdown py-2">
                  <button
                    onClick={() => {
                      setActiveTab('Alumni');
                      if (setSelectedAlumniTab) setSelectedAlumniTab('about-association');
                      setMobileMenuOpen(false);
                    }}
                    className={`relative transition-colors focus:outline-none flex items-center gap-1 group ${
                      isActive 
                        ? 'text-crimson-red font-extrabold' 
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-crimson-red dark:hover:text-rose-400'
                    }`}
                    id={`nav-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={10} className="opacity-60 group-hover/dropdown:translate-y-0.5 transition-transform" />
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-crimson-red rounded-full"
                      />
                    )}
                  </button>

                  {/* Dropdown Menu Container */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-96 opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden py-2">
                      <button
                        onClick={() => {
                          setActiveTab('Alumni');
                          if (setSelectedAlumniTab) setSelectedAlumniTab('about-association');
                        }}
                        className="w-full text-left px-4 py-3 text-xs font-bold tracking-wider text-crimson-red dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors uppercase border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between"
                      >
                        <span>ACET ALUMNI CELL</span>
                        <span>&rarr;</span>
                      </button>
                      
                      <div className="max-h-[380px] overflow-y-auto py-1">
                        {ALUMNI_PAGES.map((page) => {
                          const isPageSelected = activeTab === 'Alumni' && selectedAlumniTab === page.id;
                          return (
                            <button
                              key={page.id}
                              onClick={() => {
                                setActiveTab('Alumni');
                                if (setSelectedAlumniTab) setSelectedAlumniTab(page.id);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between group/item ${
                                isPageSelected 
                                  ? 'bg-rose-50/50 text-crimson-red dark:bg-rose-950/10 dark:text-rose-400 font-bold'
                                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-crimson-red dark:hover:text-rose-400'
                              }`}
                            >
                              <span className="truncate pr-2">{page.label}</span>
                              <span className="opacity-0 group-hover/item:opacity-100 text-crimson-red dark:text-rose-400 transition-opacity text-xs font-bold">&rarr;</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Custom dropdown implementation for NAAC
            if (item.id === 'Naac') {
              return (
                <div key={item.id} className="relative group/dropdown py-2">
                  <button
                    onClick={() => {
                      setActiveTab('Naac');
                      if (setSelectedNaacTab) setSelectedNaacTab('iqac');
                      setMobileMenuOpen(false);
                    }}
                    className={`relative transition-colors focus:outline-none flex items-center gap-1 group ${
                      isActive 
                        ? 'text-crimson-red font-extrabold' 
                        : 'text-zinc-600 dark:text-zinc-300 hover:text-crimson-red dark:hover:text-rose-400'
                    }`}
                    id={`nav-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={10} className="opacity-60 group-hover/dropdown:translate-y-0.5 transition-transform" />
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-2 left-0 right-0 h-[2.5px] bg-crimson-red rounded-full"
                      />
                    )}
                  </button>

                  {/* Dropdown Menu Container */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-96 opacity-0 translate-y-3 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden py-2">
                      <button
                        onClick={() => {
                          setActiveTab('Naac');
                          if (setSelectedNaacTab) setSelectedNaacTab('iqac');
                        }}
                        className="w-full text-left px-4 py-3 text-xs font-bold tracking-wider text-crimson-red dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors uppercase border-b border-zinc-100 dark:border-zinc-800/50 flex items-center justify-between"
                      >
                        <span>NAAC & IQAC PORTAL</span>
                        <span>&rarr;</span>
                      </button>
                      
                      <div className="max-h-[380px] overflow-y-auto py-1">
                        {NAAC_PAGES.map((page) => {
                          const isPageSelected = activeTab === 'Naac' && selectedNaacTab === page.id;
                          return (
                            <button
                              key={page.id}
                              onClick={() => {
                                setActiveTab('Naac');
                                if (setSelectedNaacTab) setSelectedNaacTab(page.id);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center justify-between group/item ${
                                isPageSelected 
                                  ? 'bg-rose-50/50 text-crimson-red dark:bg-rose-950/10 dark:text-rose-400 font-bold'
                                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-crimson-red dark:hover:text-rose-400'
                              }`}
                            >
                              <span className="truncate pr-2">{page.label}</span>
                              <span className="opacity-0 group-hover/item:opacity-100 text-crimson-red dark:text-rose-400 transition-opacity text-xs font-bold">&rarr;</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`relative py-2 px-0.5 transition-colors focus:outline-none flex items-center gap-1 group ${
                  isActive 
                    ? 'text-crimson-red font-extrabold' 
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-crimson-red dark:hover:text-rose-400'
                }`}
                id={`nav-${item.id}`}
              >
                {item.isIcon ? (
                  <Home size={16} className="shrink-0 text-crimson-red dark:text-rose-400" />
                ) : (
                  <span>{item.label}</span>
                )}
                {item.hasDropdown && (
                  <ChevronDown size={10} className="opacity-60 group-hover:translate-y-0.5 transition-transform" />
                )}
                {isActive && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-crimson-red rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onLogin}
            className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-300 hover:text-primary hover:bg-zinc-100 dark:hover:bg-zinc-800 px-4 py-2.5 rounded-lg transition-all border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
            id="desktop-login-btn"
          >
            <LogIn size={15} />
            Login
          </button>
          
          <button 
            onClick={onApplyNow}
            className="flex items-center gap-2 bg-crimson-red text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-[#93000f] transition-all shadow-md active:scale-95"
            id="desktop-apply-btn"
          >
            Admissions 2026-27
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-primary focus:outline-none"
          id="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-rose-100 dark:border-zinc-800 bg-white dark:bg-charcoal-black overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => {
                if (item.id === 'About') {
                  return (
                    <div key={item.id} className="flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setMobileAboutOpen(!mobileAboutOpen);
                        }}
                        className={`text-left font-bold text-sm uppercase py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                          activeTab === 'About' 
                            ? 'bg-rose-50 text-crimson-red dark:bg-[#2c1c1b]' 
                            : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                        id={`mobile-nav-${item.id}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={14} 
                          className={`opacity-60 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180 text-crimson-red' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {mobileAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-1 border-l border-rose-100 dark:border-zinc-800 ml-3.5 my-1"
                          >
                            {ABOUT_PAGES.map((page) => {
                              const isPageSelected = activeTab === 'About' && selectedAboutTab === page.id;
                              return (
                                <button
                                  key={page.id}
                                  onClick={() => {
                                    setActiveTab('About');
                                    if (setSelectedAboutTab) setSelectedAboutTab(page.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                                    isPageSelected
                                      ? 'text-crimson-red dark:text-rose-400 font-extrabold bg-rose-50/40 dark:bg-rose-950/10'
                                      : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                                  }`}
                                >
                                  {page.label}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.id === 'Academics') {
                  return (
                    <div key={item.id} className="flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setMobileDeptsOpen(!mobileDeptsOpen);
                        }}
                        className={`text-left font-bold text-sm uppercase py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                          activeTab === 'Academics' 
                            ? 'bg-rose-50 text-crimson-red dark:bg-[#2c1c1b]' 
                            : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                        id={`mobile-nav-${item.id}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={14} 
                          className={`opacity-60 transition-transform duration-200 ${mobileDeptsOpen ? 'rotate-180 text-crimson-red' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {mobileDeptsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-1 border-l border-rose-100 dark:border-zinc-800 ml-3.5 my-1"
                          >
                            <button
                              onClick={() => {
                                setActiveTab('Academics');
                                setSelectedDeptId('all');
                                setMobileMenuOpen(false);
                              }}
                              className={`text-left text-xs font-extrabold uppercase py-2 px-3 rounded-lg transition-all text-crimson-red dark:text-rose-400`}
                            >
                              View All Departments &rarr;
                            </button>
                            {DEPARTMENTS.map((dept) => {
                              const isDeptSelected = activeTab === 'Academics' && selectedDeptId === dept.id;
                              return (
                                <button
                                  key={dept.id}
                                  onClick={() => {
                                    setActiveTab('Academics');
                                    setSelectedDeptId(dept.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                                    isDeptSelected
                                      ? 'text-crimson-red dark:text-rose-400 font-extrabold bg-rose-50/40 dark:bg-rose-950/10'
                                      : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                                  }`}
                                >
                                  {dept.name}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.id === 'Placements') {
                  return (
                    <div key={item.id} className="flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setMobilePlacementsOpen(!mobilePlacementsOpen);
                        }}
                        className={`text-left font-bold text-sm uppercase py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                          activeTab === 'Placements' 
                            ? 'bg-rose-50 text-crimson-red dark:bg-[#2c1c1b]' 
                            : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                        id={`mobile-nav-${item.id}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={14} 
                          className={`opacity-60 transition-transform duration-200 ${mobilePlacementsOpen ? 'rotate-180 text-crimson-red' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {mobilePlacementsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-1 border-l border-rose-100 dark:border-zinc-800 ml-3.5 my-1"
                          >
                             {PLACEMENT_PAGES.map((page) => {
                              const isPageSelected = activeTab === 'Placements' && selectedPlacementTab === page.id;
                              return (
                                <button
                                  key={page.id}
                                  onClick={() => {
                                    setActiveTab('Placements');
                                    setSelectedPlacementTab(page.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                                    isPageSelected
                                      ? 'text-crimson-red dark:text-rose-400 font-extrabold bg-rose-50/40 dark:bg-rose-950/10'
                                      : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                                  }`}
                                >
                                  {page.label}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.id === 'Research') {
                  return (
                    <div key={item.id} className="flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setMobileResearchOpen(!mobileResearchOpen);
                        }}
                        className={`text-left font-bold text-sm uppercase py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                          activeTab === 'Research' 
                            ? 'bg-rose-50 text-crimson-red dark:bg-[#2c1c1b]' 
                            : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                        id={`mobile-nav-${item.id}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={14} 
                          className={`opacity-60 transition-transform duration-200 ${mobileResearchOpen ? 'rotate-180 text-crimson-red' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {mobileResearchOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-1 border-l border-rose-100 dark:border-zinc-800 ml-3.5 my-1"
                          >
                            {RESEARCH_PAGES.map((page) => {
                              const isPageSelected = activeTab === 'Research' && selectedResearchTab === page.id;
                              return (
                                <button
                                  key={page.id}
                                  onClick={() => {
                                    setActiveTab('Research');
                                    if (setSelectedResearchTab) setSelectedResearchTab(page.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                                    isPageSelected
                                      ? 'text-crimson-red dark:text-rose-400 font-extrabold bg-rose-50/40 dark:bg-rose-950/10'
                                      : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                                  }`}
                                >
                                  {page.label}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.id === 'Library') {
                  return (
                    <div key={item.id} className="flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setMobileLibraryOpen(!mobileLibraryOpen);
                        }}
                        className={`text-left font-bold text-sm uppercase py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                          activeTab === 'Library' 
                            ? 'bg-rose-50 text-crimson-red dark:bg-[#2c1c1b]' 
                            : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                        id={`mobile-nav-${item.id}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={14} 
                          className={`opacity-60 transition-transform duration-200 ${mobileLibraryOpen ? 'rotate-180 text-crimson-red' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {mobileLibraryOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-1 border-l border-rose-100 dark:border-zinc-800 ml-3.5 my-1"
                          >
                            {LIBRARY_PAGES.map((page) => {
                              const isPageSelected = activeTab === 'Library' && selectedLibraryTab === page.id;
                              return (
                                <button
                                  key={page.id}
                                  onClick={() => {
                                    setActiveTab('Library');
                                    if (setSelectedLibraryTab) setSelectedLibraryTab(page.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                                    isPageSelected
                                      ? 'text-crimson-red dark:text-rose-400 font-extrabold bg-rose-50/40 dark:bg-rose-950/10'
                                      : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                                  }`}
                                >
                                  {page.label}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.id === 'Alumni') {
                  return (
                    <div key={item.id} className="flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setMobileAlumniOpen(!mobileAlumniOpen);
                        }}
                        className={`text-left font-bold text-sm uppercase py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                          activeTab === 'Alumni' 
                            ? 'bg-rose-50 text-crimson-red dark:bg-[#2c1c1b]' 
                            : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                        id={`mobile-nav-${item.id}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={14} 
                          className={`opacity-60 transition-transform duration-200 ${mobileAlumniOpen ? 'rotate-180 text-crimson-red' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {mobileAlumniOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-1 border-l border-rose-100 dark:border-zinc-800 ml-3.5 my-1"
                          >
                            {ALUMNI_PAGES.map((page) => {
                              const isPageSelected = activeTab === 'Alumni' && selectedAlumniTab === page.id;
                              return (
                                <button
                                  key={page.id}
                                  onClick={() => {
                                    setActiveTab('Alumni');
                                    if (setSelectedAlumniTab) setSelectedAlumniTab(page.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                                    isPageSelected
                                      ? 'text-crimson-red dark:text-rose-400 font-extrabold bg-rose-50/40 dark:bg-rose-950/10'
                                      : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                                  }`}
                                >
                                  {page.label}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.id === 'Naac') {
                  return (
                    <div key={item.id} className="flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setMobileNaacOpen(!mobileNaacOpen);
                        }}
                        className={`text-left font-bold text-sm uppercase py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                          activeTab === 'Naac' 
                            ? 'bg-rose-50 text-crimson-red dark:bg-[#2c1c1b]' 
                            : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                        }`}
                        id={`mobile-nav-${item.id}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={14} 
                          className={`opacity-60 transition-transform duration-200 ${mobileNaacOpen ? 'rotate-180 text-crimson-red' : ''}`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {mobileNaacOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-1 border-l border-rose-100 dark:border-zinc-800 ml-3.5 my-1"
                          >
                            {NAAC_PAGES.map((page) => {
                              const isPageSelected = activeTab === 'Naac' && selectedNaacTab === page.id;
                              return (
                                <button
                                  key={page.id}
                                  onClick={() => {
                                    setActiveTab('Naac');
                                    if (setSelectedNaacTab) setSelectedNaacTab(page.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`text-left text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                                    isPageSelected
                                      ? 'text-crimson-red dark:text-rose-400 font-extrabold bg-rose-50/40 dark:bg-rose-950/10'
                                      : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                                  }`}
                                >
                                  {page.label}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left font-bold text-sm uppercase py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                      activeTab === item.id 
                        ? 'bg-rose-50 text-crimson-red dark:bg-[#2c1c1b]' 
                        : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                    id={`mobile-nav-${item.id}`}
                  >
                    {item.isIcon ? (
                      <div className="flex items-center gap-2">
                        <Home size={16} className="text-crimson-red dark:text-rose-400" />
                        <span>HOME</span>
                      </div>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {item.hasDropdown && (
                      <ChevronDown size={14} className="opacity-50" />
                    )}
                  </button>
                );
              })}

              <div className="border-t border-rose-50 dark:border-zinc-800 pt-3 flex flex-col gap-2 mt-2">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogin();
                  }}
                  className="flex items-center justify-center gap-2 font-bold text-sm uppercase text-zinc-600 dark:text-zinc-300 py-3 border border-zinc-200 dark:border-zinc-700 rounded-xl"
                  id="mobile-login-btn"
                >
                  <LogIn size={16} />
                  Student/Staff Login
                </button>
                
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onApplyNow();
                  }}
                  className="flex items-center justify-center gap-2 bg-crimson-red text-white font-bold text-sm uppercase py-3.5 rounded-xl shadow-md"
                  id="mobile-apply-btn"
                >
                  Apply Now 2026
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
