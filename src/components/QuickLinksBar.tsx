import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Users, 
  Trophy, 
  BookOpen, 
  Download, 
  Image as ImageIcon, 
  Star, 
  Award, 
  Building2, 
  Lightbulb, 
  Layers, 
  LogIn, 
  X, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  MapPin,
  Calendar,
  FileText
} from 'lucide-react';

interface LinkItem {
  id: string;
  title: string;
  icon: any;
  color: string;
  actionType: 'scroll' | 'modal' | 'download' | 'triggerLogin';
  targetId?: string;
  modalContent?: {
    title: string;
    subtitle: string;
    description: string;
    bullets?: string[];
    meta?: string;
  };
}

export default function QuickLinksBar({ onOpenLogin }: { onOpenLogin: () => void }) {
  const [activeModal, setActiveModal] = useState<LinkItem | null>(null);
  const [showToast, setShowToast] = useState<string | null>(null);

  const links: LinkItem[] = [
    {
      id: 'scholarship',
      title: 'Scholarship',
      icon: GraduationCap,
      color: 'from-amber-500 to-orange-600',
      actionType: 'modal',
      modalContent: {
        title: 'Scholarship & Financial Aid Schemes',
        subtitle: 'Government & Institutional Support',
        description: 'Anjuman College of Engineering & Technology facilitates various state and central government scholarship schemes to support students from diverse financial backgrounds.',
        bullets: [
          'MAHADBT Rajarshi Chhatrapati Shahu Maharaj Fee Concession Scheme for EBC students.',
          'Post-Matric Scholarship Schemes for SC, ST, VJNT, SBC, and OBC categories.',
          'State Government Minority Scholarship (MahaDBT) for Muslim, Christian, Sikh, Buddhist, and Parsi students.',
          'Prime Minister Special Scholarship Scheme (PMSSS) for Jammu & Kashmir students.',
          'Central Sector Scheme of Scholarship for College and University Students.'
        ],
        meta: 'Apply before October 31, 2026. Visit Administrative Block Window No. 4 for offline verification.'
      }
    },
    {
      id: 'student-section',
      title: 'Student Section',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      actionType: 'modal',
      modalContent: {
        title: 'Student Welfare & Support Center',
        subtitle: 'Administrative Student Services',
        description: 'The Student Section at ACET serves as the primary gateway for all student administration services, academic transcripts, and personal grievance redressals.',
        bullets: [
          'Enrollment Verification, Bonafide Certificates, and Transcript Issuance.',
          'Railway Concession passes and bus pass verifications (MSRTC).',
          'Anti-Ragging Squad Committee contacts and Student Grievance Redressal portal.',
          'Student Council representatives election updates & committee designations.',
          'Youth Red Cross, NSS Cell registration desk, and co-curricular permissions.'
        ],
        meta: 'Operational Hours: Monday to Friday (10:30 AM to 4:30 PM). Contact: studentsection@anjumanengg.edu.in'
      }
    },
    {
      id: 'sports-nss',
      title: 'Sports & NSS',
      icon: Trophy,
      color: 'from-emerald-500 to-teal-600',
      actionType: 'scroll',
      targetId: 'life-at-acet' // Smooth scroll to LifeAtACET
    },
    {
      id: 'magazine-newsletters',
      title: 'Magazine & Newsletters',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
      actionType: 'download',
      modalContent: {
        title: 'ACET Publications & Newsletter Hub',
        subtitle: '"ANKUR" Annual Magazine & Quarterly Bulletin',
        description: 'Download official publications documenting intellectual contributions, faculty research breakthroughs, creative poems, art works, and sports victories.',
        bullets: [
          'ANKUR Annual College Magazine (Academic Year 2025-26 Edition) - PDF',
          'Quarterly Technical Bulletin "ACET Chronicle" - Spring 2026 Edition',
          'Department Newsletters: CSE "ByteCraft", Mechanical "GearShift", Electrical "Spark"'
        ]
      }
    },
    {
      id: 'download',
      title: 'Download Hub',
      icon: Download,
      color: 'from-rose-500 to-red-600',
      actionType: 'scroll',
      targetId: 'college-resources-hub' // Scroll to the newly added resources downloads section
    },
    {
      id: 'gallery',
      title: 'Gallery',
      icon: ImageIcon,
      color: 'from-sky-500 to-blue-600',
      actionType: 'scroll',
      targetId: 'campus-life-gallery' // Scroll to CampusLife
    },
    {
      id: 'achievement',
      title: 'Achievement',
      icon: Star,
      color: 'from-yellow-500 to-amber-600',
      actionType: 'modal',
      modalContent: {
        title: 'Recent Awards & Institutional Laurels',
        subtitle: 'Our Legacy of Excellence',
        description: 'ACET continues to raise the bar of academic, technical, and sports brilliance. Explore the top collective achievements of our faculty and students this semester.',
        bullets: [
          'Awarded "Best Minority Engineering College in Vidarbha Region" at national education summits.',
          'NBA Re-Accreditation secured for Core Engineering disciplines till 2028.',
          'ACET Robowars squad secured 2nd place in the All-India Engineering Robotics League.',
          'Over 45 research patents published by faculty in AI, smart-grid IoT, and composite materials.',
          'ACET Basketball team crowned champions in RTMNU Inter-Collegiate Zonal Tournament.'
        ],
        meta: 'Proud of our team! Have an achievement to report? Send it to awards@anjumanengg.edu.in'
      }
    },
    {
      id: 'toppers',
      title: 'University Toppers',
      icon: Award,
      color: 'from-cyan-500 to-blue-600',
      actionType: 'modal',
      modalContent: {
        title: 'RTMNU University Toppers 2025-26',
        subtitle: 'Academic Vanguard of ACET',
        description: 'Congratulations to our brilliant scholars who secured merit ranks and exceptional SGPA scores in the Rashtrasant Tukadoji Maharaj Nagpur University examinations.',
        bullets: [
          'Mohammad Rehan (CSE) - RTMNU Merit Rank 2 (9.84 CGPA)',
          'Zoya Ansari (Artificial Intelligence) - RTMNU Merit Rank 4 (9.72 CGPA)',
          'Aaquib Javed (Mechanical) - RTMNU Merit Rank 7 (9.58 CGPA)',
          'Sana Khan (Electronics & Communication) - CGPA 9.62',
          'Rohan Deshmukh (Electrical Engineering) - CGPA 9.50'
        ],
        meta: 'ACET continues to deliver outstanding university results with over 88% overall passing rate.'
      }
    },
    {
      id: 'central-facilities',
      title: 'Central Facilities',
      icon: Building2,
      color: 'from-violet-500 to-purple-600',
      actionType: 'modal',
      modalContent: {
        title: 'Central Campus Facilities',
        subtitle: 'Infrastructure Built for Tomorrow',
        description: 'Beyond traditional classrooms, ACET Nagpur offers comprehensive centralized facilities to enhance student research, academic focus, and physical wellbeing.',
        bullets: [
          'Central Library: Housing over 45,000 volumes, 120 National/International Journals, and digital IEEE/Springer subscriptions.',
          'High-Performance Computing Lab: Equipped with Intel Xeon servers, 100 Mbps fiber-optic backup, and proprietary CAD/Matlab packages.',
          'Language & Communication Skills Lab: Facilitating interactive audio-visual modules to hone presentation and soft-skill abilities.',
          'Indoor Sports Complex & Gymnasium: State-of-the-art weights, chess, table tennis setups, and fully certified physical directors.',
          'Smart Seminar Halls: Fully air-conditioned halls equipped with dual-lens projectors, acoustic sound systems, and video conference gear.'
        ]
      }
    },
    {
      id: 'incubation-edc',
      title: 'Incubation & EDC',
      icon: Lightbulb,
      color: 'from-lime-500 to-emerald-600',
      actionType: 'modal',
      modalContent: {
        title: 'Incubation, EDC & III-CELL',
        subtitle: 'Igniting Startups & Industrial Ties',
        description: 'The Entrepreneurship Development Cell (EDC) and Industry-Institute Interaction Cell (III-CELL) foster creativity, startup validation, and professional consulting.',
        bullets: [
          'ACET Incubation Center: Providing fully-funded work spaces, Wi-Fi, cloud credits, and legal registration mentorship for student startups.',
          'Regular ideation bootcamps and expert guidance from seasoned Vidarbha Industries Association (VIA) veterans.',
          'Over 18 active MOUs with multinational companies including TCS, Tech Mahindra, and local engineering organizations.',
          'Annual Startup Fest "Anjuman Launchpad" hosting venture capitalists and seed-investors.',
          'Live consultancy projects undertaken by senior professors in collaboration with Nagpur Municipal Corporation (NMC).'
        ]
      }
    },
    {
      id: 'professional-chapters',
      title: 'Professional Chapters',
      icon: Layers,
      color: 'from-indigo-500 to-violet-600',
      actionType: 'modal',
      modalContent: {
        title: 'Professional Societies & Technical Chapters',
        subtitle: 'Global Standards, Local Action',
        description: 'Enriching technical knowledge, student publications, and project guidelines through globally recognized professional engineering chapters.',
        bullets: [
          'IEEE Student Branch: Organizing international seminars, paper-presentations, and IoT design challenges.',
          'ISTE (Indian Society for Technical Education) Chapter: Regular faculty development programs and student coding hackathons.',
          'CSI (Computer Society of India) Student Cell: Facilitating cyber-security drills and data structures workshops.',
          'SAE India (Society of Automotive Engineers) Collegiate Club: Powering student formula racing and electric go-kart blueprints.',
          'IEI (Institution of Engineers India) Student Chapter: Arranging site-visits, concrete-mix workshops, and smart-grid simulations.'
        ]
      }
    },
    {
      id: 'mis-login',
      title: 'MIS Login',
      icon: LogIn,
      color: 'from-red-600 to-crimson-red',
      actionType: 'triggerLogin'
    }
  ];

  const handleLinkClick = (item: LinkItem) => {
    if (item.actionType === 'scroll' && item.targetId) {
      const element = document.getElementById(item.targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (item.actionType === 'triggerLogin') {
      onOpenLogin();
    } else if (item.actionType === 'download') {
      // Simulate download
      const content = `===========================================================\nANJUMAN COLLEGE OF ENGINEERING & TECHNOLOGY (ACET), NAGPUR\n===========================================================\n\nPUBLICATIONS: ANKUR MAGAZINE & ACET QUARTERLY BULLETIN\nRELEASE DATE: Spring Academic Term 2026\nSTATUS: Official PDF Copy\n\nThis package contains access tokens to read full-length publications including:\n- ANKUR Annual College Magazine 2025-26 (PDF)\n- ACET quarterly technical bulletin "ACET Chronicle"\n- Department newsletters: CSE "ByteCraft", Mechanical "GearShift", Electrical "Spark"\n\nDownload Link: https://ai.studio/build\nEmail Support: eng_acet@rediffmail.com\n\n© 2026 ACET Sadar Nagpur. All rights reserved.`;
      
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ACET_Publications_Index_2026.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setShowToast('ACET_Publications_Index_2026.txt');
      setTimeout(() => setShowToast(null), 3500);
    } else {
      setActiveModal(item);
    }
  };

  return (
    <section id="quick-links-bar" className="relative py-16 px-6 md:px-12 border-y border-rose-950 overflow-hidden min-h-[500px] flex items-center justify-center">
      
      {/* Dynamic Background Image with Academic Crimson Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600"
          alt="Campus Academic Life"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Luxury Crimson-Red Brand Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a0104]/95 via-[#80070d]/90 to-[#1e0002]/98 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />
      </div>
      
      {/* Decorative vector overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-20 w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="font-mono text-[10px] sm:text-xs font-bold text-rose-300 uppercase tracking-widest bg-rose-950/60 px-3.5 py-1.5 rounded-full border border-rose-500/20 shadow-md">
            Quick Navigation Hub
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-4xl text-white tracking-tight leading-none drop-shadow-md">
            Anjuman Campus Portals
          </h2>
          <div className="h-1.5 w-16 bg-white mx-auto rounded-full shadow-sm"></div>
          <p className="font-sans text-rose-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Directly access academic registries, student committees, sports updates, newsletters, and digital MIS facilities below.
          </p>
        </div>

        {/* 2-Row Grid Layout (6 Columns on large screens, highly responsive on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-10 gap-x-6 sm:gap-x-10 max-w-5xl mx-auto justify-items-center">
          {links.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => handleLinkClick(item)}
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center text-center group cursor-pointer w-full max-w-[150px] outline-none"
              >
                {/* Stunning white circle container with premium shadows & borders */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center shadow-xl border-2 border-zinc-200/50 dark:border-zinc-800 group-hover:border-rose-500 group-hover:shadow-[0_0_20px_rgba(225,29,72,0.35)] transition-all duration-300 relative overflow-hidden">
                  {/* Subtle color highlight glow inside */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <IconComponent className="text-zinc-800 dark:text-zinc-100 group-hover:text-crimson-red dark:group-hover:text-rose-400 w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 relative z-10 shrink-0" />
                </div>
                
                {/* Title */}
                <span className="mt-3.5 font-sans font-bold text-xs sm:text-sm text-zinc-300 group-hover:text-white dark:text-zinc-400 dark:group-hover:text-white transition-colors leading-tight tracking-tight min-h-[36px] flex items-center justify-center max-w-[120px]">
                  {item.title}
                </span>
              </motion.button>
            );
          })}
        </div>

      </div>

      {/* Modern Modal Overlay */}
      <AnimatePresence>
        {activeModal && activeModal.modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 text-left z-10 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors bg-zinc-100 dark:bg-zinc-800 p-2 rounded-full cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 bg-gradient-to-br ${activeModal.color} text-white rounded-2xl`}>
                    <activeModal.icon size={28} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                      {activeModal.modalContent.subtitle}
                    </span>
                    <h3 className="font-sans font-black text-xl sm:text-2xl text-zinc-900 dark:text-white mt-1">
                      {activeModal.modalContent.title}
                    </h3>
                  </div>
                </div>

                <div className="h-px bg-zinc-100 dark:bg-zinc-800"></div>

                <p className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {activeModal.modalContent.description}
                </p>

                {activeModal.modalContent.bullets && (
                  <ul className="space-y-3.5">
                    {activeModal.modalContent.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 items-start">
                        <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeModal.modalContent.meta && (
                  <div className="p-4 bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-zinc-100 dark:border-zinc-800/80 flex gap-3 items-start">
                    <ShieldAlert className="text-crimson-red dark:text-rose-400 shrink-0 mt-0.5" size={18} />
                    <p className="font-sans text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">Note: </span>
                      {activeModal.modalContent.meta}
                    </p>
                  </div>
                )}

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="bg-zinc-900 hover:bg-crimson-red dark:bg-zinc-800 dark:hover:bg-rose-600 text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    Understood
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating toast notification for downloads */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-zinc-950 dark:bg-white text-white dark:text-zinc-900 px-5 py-4 rounded-2xl shadow-2xl border border-zinc-800 dark:border-zinc-200 flex items-center gap-3 font-sans font-medium text-xs sm:text-sm"
          >
            <CheckCircle2 className="text-emerald-500 dark:text-emerald-600 shrink-0" size={18} />
            <div>
              <p className="font-bold">Newsletter Saved</p>
              <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">Successfully saved: <span className="text-white dark:text-zinc-900 font-bold">{showToast}</span></p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
