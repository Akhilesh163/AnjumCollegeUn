import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Eye, 
  BookOpen, 
  FileCheck, 
  Users, 
  Award, 
  Search, 
  Building2, 
  Sparkles, 
  GraduationCap, 
  DollarSign, 
  CheckCircle2, 
  FileText, 
  BrainCircuit, 
  Check, 
  ExternalLink, 
  ChevronRight, 
  Download, 
  Mail, 
  ShieldCheck, 
  Layers, 
  Lightbulb, 
  Filter
} from 'lucide-react';

export const RESEARCH_PAGES = [
  { id: 'vision-mission', label: 'Vision & Mission', icon: Eye },
  { id: 'aims-objectives', label: 'Aims & Objectives', icon: Target },
  { id: 'code-of-ethics', label: 'Code of Ethics', icon: ShieldCheck },
  { id: 'rnd-committee', label: 'R and D Committee', icon: Users },
  { id: 'research-publication', label: 'Research Publication', icon: BookOpen },
  { id: 'patents', label: 'Patents', icon: Award },
  { id: 'research-activities', label: 'Research Activities', icon: Sparkles },
  { id: 'research-grants', label: 'Research Grants', icon: DollarSign },
  { id: 'phd-faculty', label: 'Faculty with Ph.Ds & PhD Supervisor', icon: GraduationCap }
];

// Data structures for Research directory
const RND_COMMITTEE = [
  { name: 'Dr. Mohammad Ali', role: 'Chairman & Principal', dept: 'Administration', email: 'principal@anjumanengg.edu.in', phone: '+91 712 2582749' },
  { name: 'Dr. Akash Langde', role: 'Dean (Research & Development)', dept: 'Mechanical Engineering', email: 'rnd.dean@anjumanengg.edu.in', phone: '+91 98223 41102' },
  { name: 'Dr. Sayyad Naimuddin', role: 'R&D Co-Coordinator', dept: 'Electronics & Telecomm.', email: 's.naimuddin@anjumanengg.edu.in', phone: '+91 94228 01234' },
  { name: 'Prof. Anup Gade', role: 'Member Coordinator', dept: 'Computer Science & Engg.', email: 'anup.gade@anjumanengg.edu.in', phone: '+91 98230 55432' },
  { name: 'Dr. Nazish Khan', role: 'Member Coordinator', dept: 'Artificial Intelligence & Data Sci.', email: 'nazish.khan@anjumanengg.edu.in', phone: '+91 97640 12890' },
  { name: 'Dr. S. M. Ali', role: 'Member Coordinator', dept: 'Civil Engineering', email: 'sm.ali@anjumanengg.edu.in', phone: '+91 93701 44556' },
  { name: 'Dr. Rashmi Jain', role: 'Member Coordinator', dept: 'Basic Sciences & Humanities', email: 'rashmi.jain@anjumanengg.edu.in', phone: '+91 98231 22334' },
];

const PUBLICATIONS_DATA = [
  { title: 'Optimization of Solar Photovoltaic Grid Systems Using Deep Q-Learning', authors: 'Dr. Akash Langde, Prof. S. Sheikh', journal: 'IEEE Transactions on Sustainable Energy', year: '2025', indexing: 'Scopus / SCI', doi: '10.1109/TSTE.2025.3214567' },
  { title: 'AI-Based Crop Yield Prediction Model for Vidarbha Cotton Farmers', authors: 'Prof. Anuradha Kumar, Dr. Nazish Khan', journal: 'Elsevier Computers and Electronics in Agriculture', year: '2026', indexing: 'SCI Index', doi: '10.1016/j.compag.2026.108422' },
  { title: 'Self-Healing Bio-Concrete Structures Using Bacterial Mineralization', authors: 'Dr. S. M. Ali, Prof. Mohammad Faizan', journal: 'Springer Construction & Building Materials', year: '2025', indexing: 'Scopus / Web of Science', doi: '10.1007/s10706-025-01988-x' },
  { title: 'Ultra-Low Power VLSI Architecture for Biomedical Signal Processors', authors: 'Dr. Sayyad Naimuddin, Prof. R. Deshmukh', journal: 'IET Circuits, Devices & Systems', year: '2024', indexing: 'Scopus Index', doi: '10.1049/cds2.12098' },
  { title: 'Cybersecurity Threat Detection in IoT Networks Using Federated Learning', authors: 'Prof. Anup Gade, Er. Ayesha Khan', journal: 'Journal of Network and Computer Applications', year: '2025', indexing: 'UGC Care Group II', doi: '10.1016/j.jnca.2025.103982' },
  { title: 'Thermal Efficiency Enhancement in Solar Air Heaters with Artificial Roughness', authors: 'Dr. Akash Langde, Prof. M. Farooque', journal: 'International Journal of Thermal Sciences', year: '2024', indexing: 'SCI Index', doi: '10.1016/j.ijthermalsci.2024.108112' }
];

const PATENTS_DATA = [
  { id: 'pat-1', title: 'Intelligent Solar Tracking Canopy System with Battery Management', inventor: 'Dr. Akash Langde (ME)', status: 'Granted', year: '2025', patentNo: 'IN398201', dept: 'Mechanical' },
  { id: 'pat-2', title: 'AI-Based Regional Crop Yield and Pest Infestation Modeling Framework', inventor: 'Prof. Anuradha Kumar (AI&DS)', status: 'Published', year: '2026', patentNo: '202621004821', dept: 'AI & Data Science' },
  { id: 'pat-3', title: 'Fuzzy-Logic Optimized Electric Vehicle Grid Charging System', inventor: 'Dr. Sayyad Naimuddin (ETC)', status: 'Published', year: '2024', patentNo: '202421098112', dept: 'Electronics & Comm.' },
  { id: 'pat-4', title: 'Self-Healing Concrete Mix Utilizing Bio-Chemical Mineralizer', inventor: 'Dr. S. M. Ali (CE)', status: 'Granted', year: '2025', patentNo: 'IN410298', dept: 'Civil' },
  { id: 'pat-5', title: 'IoT-Enabled Automated Water Quality Monitoring Buoy for Lakes', inventor: 'Prof. Anup Gade (CSE)', status: 'Granted', year: '2024', patentNo: 'IN389102', dept: 'Computer Science' }
];

const ACTIVITIES_DATA = [
  { title: 'National Conference on Recent Advances in Engineering & Tech (NCRAET 2026)', date: 'February 18-19, 2026', org: 'R&D Cell in association with IEEE Nagpur Subsection', type: 'Conference' },
  { title: 'STTP on Generative AI & Deep Learning for Multidisciplinary Research', date: 'January 12-17, 2026', org: 'Department of CSE & AI-DS', type: 'Short Term Training' },
  { title: 'Workshop on Patent Drafting, IPR Procedures and Commercialization', date: 'December 05, 2025', org: 'R&D Cell & RGNIIPM Nagpur', type: 'IPR Workshop' },
  { title: 'AICTE Sponsored Faculty Development Program on Smart Energy Systems', date: 'November 20-25, 2025', org: 'Department of Electrical Engineering', type: 'FDP' }
];

const GRANTS_DATA = [
  { title: 'Design and Fabrication of Hybrid Solar-Wind Rooftop Power Generator', pi: 'Dr. Akash Langde', agency: 'AICTE MODROB Scheme', amount: '₹ 18.50 Lakhs', status: 'Ongoing', year: '2024-2026' },
  { title: 'Development of Low-Cost Sensor Networks for Municipal Water Quality in Nagpur', pi: 'Dr. S. M. Ali & Prof. Anup Gade', agency: 'RGSTC Govt. of Maharashtra', amount: '₹ 12.80 Lakhs', status: 'Ongoing', year: '2025-2027' },
  { title: 'Modernization of VLSI Design and Embedded Systems Laboratory', pi: 'Dr. Sayyad Naimuddin', agency: 'AICTE RPS', amount: '₹ 15.00 Lakhs', status: 'Completed', year: '2023-2025' },
  { title: 'AI-Based Traffic Density Management System for Sadar Nagpur Corridors', pi: 'Prof. Anuradha Kumar', agency: 'Nagpur Smart City Mission Project', amount: '₹ 8.20 Lakhs', status: 'Completed', year: '2024-2025' }
];

const PHD_FACULTY_DATA = [
  { name: 'Dr. Mohammad Ali', dept: 'Mechanical Engineering', specialization: 'Thermal Engineering & Energy Systems', guideStatus: 'Recognized Ph.D. Supervisor (RTMNU)', scholarsCount: '6 Scholars' },
  { name: 'Dr. Akash Langde', dept: 'Mechanical Engineering', specialization: 'Solar Energy & Heat Transfer', guideStatus: 'Recognized Ph.D. Supervisor (RTMNU)', scholarsCount: '4 Scholars' },
  { name: 'Dr. Sayyad Naimuddin', dept: 'Electronics & Telecomm.', specialization: 'VLSI Design & Signal Processing', guideStatus: 'Recognized Ph.D. Supervisor (RTMNU)', scholarsCount: '5 Scholars' },
  { name: 'Dr. S. M. Ali', dept: 'Civil Engineering', specialization: 'Structural Engineering & Concrete Tech', guideStatus: 'Recognized Ph.D. Supervisor (RTMNU)', scholarsCount: '3 Scholars' },
  { name: 'Dr. Nazish Khan', dept: 'Artificial Intelligence & DS', specialization: 'Machine Learning & Computer Vision', guideStatus: 'Ph.D. Supervisor Applicant', scholarsCount: '2 Scholars' },
  { name: 'Dr. Rashmi Jain', dept: 'Basic Sciences & Humanities', specialization: 'Applied Chemistry & Polymer Science', guideStatus: 'Recognized Ph.D. Supervisor (RTMNU)', scholarsCount: '4 Scholars' }
];

interface ResearchPortalProps {
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
}

export default function ResearchPortal({ selectedTab = 'vision-mission', setSelectedTab }: ResearchPortalProps) {
  const [localTab, setLocalTab] = useState('vision-mission');
  const activeTabId = setSelectedTab ? selectedTab : localTab;

  const handleTabChange = (id: string) => {
    if (setSelectedTab) {
      setSelectedTab(id);
    } else {
      setLocalTab(id);
    }
    const el = document.getElementById('research-container');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // State for search filters inside tabs
  const [pubSearch, setPubSearch] = useState('');
  const [patSearch, setPatSearch] = useState('');
  const [submittedAbstract, setSubmittedAbstract] = useState(false);
  const [abstractData, setAbstractData] = useState({ title: '', author: '', content: '' });

  const filteredPublications = PUBLICATIONS_DATA.filter(p => 
    p.title.toLowerCase().includes(pubSearch.toLowerCase()) ||
    p.authors.toLowerCase().includes(pubSearch.toLowerCase()) ||
    p.journal.toLowerCase().includes(pubSearch.toLowerCase())
  );

  const filteredPatents = PATENTS_DATA.filter(p => 
    p.title.toLowerCase().includes(patSearch.toLowerCase()) ||
    p.inventor.toLowerCase().includes(patSearch.toLowerCase()) ||
    p.dept.toLowerCase().includes(patSearch.toLowerCase())
  );

  return (
    <div id="research-container" className="py-12 px-4 sm:px-6 md:px-12 bg-[#fffbfb] dark:bg-zinc-950 text-left min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumb Navigation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-rose-100/40 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">
            <span>Academic Portal</span>
            <span>/</span>
            <span>Research</span>
            <span>/</span>
            <span className="text-crimson-red dark:text-rose-400">
              {RESEARCH_PAGES.find(p => p.id === activeTabId)?.label || 'Directory'}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-rose-500 rounded-full animate-ping" />
            <span className="text-[10px] font-black tracking-widest text-crimson-red dark:text-rose-400 uppercase">
              RTMNU Approved Research Center
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="space-y-2">
          <h1 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight leading-none">
            Research & Innovation <span className="text-crimson-red">Cell</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium max-w-2xl leading-relaxed">
            Fostering advanced scientific inquiry, patent filings, multi-disciplinary journal publications, and funded research grants at ACET Nagpur.
          </p>
        </div>

        {/* Outer Layout Grid: Navigation Sidebar (Left 3 cols) + Main Stage (Right 9 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT HAND SIDEBAR: 9 Pages Nav Menu (Desktop) */}
          <div className="hidden lg:col-span-3 lg:flex flex-col gap-1.5 bg-white dark:bg-zinc-900/60 p-4 rounded-3xl border border-rose-100/30 dark:border-zinc-800/80 shadow-md">
            <span className="text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase px-3 pb-2 block border-b border-zinc-100 dark:border-zinc-800/50 mb-1">
              Research Navigation
            </span>
            {RESEARCH_PAGES.map((page) => {
              const Icon = page.icon;
              const isPageActive = activeTabId === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleTabChange(page.id)}
                  className={`w-full text-left px-3.5 py-3 text-[11px] font-extrabold uppercase tracking-wider transition-all flex items-center gap-3 rounded-xl group ${
                    isPageActive
                      ? 'bg-crimson-red text-white shadow-md'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-rose-500/5 dark:hover:bg-zinc-800 hover:text-crimson-red'
                  }`}
                >
                  <Icon size={15} className={`shrink-0 transition-transform group-hover:scale-110 ${isPageActive ? 'text-white' : 'text-zinc-400 dark:text-zinc-500 group-hover:text-crimson-red'}`} />
                  <span className="truncate">{page.label}</span>
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
            {RESEARCH_PAGES.map((page) => {
              const Icon = page.icon;
              const isPageActive = activeTabId === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleTabChange(page.id)}
                  className={`px-3.5 py-2.5 text-[10px] font-extrabold uppercase tracking-wider shrink-0 rounded-lg flex items-center gap-2 border transition-all ${
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

          {/* RIGHT HAND CONTENT STAGE */}
          <div className="lg:col-span-9 bg-white dark:bg-zinc-900/30 border border-rose-100/30 dark:border-zinc-800/50 rounded-3xl p-6 md:p-8 shadow-sm min-h-[500px]">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTabId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >

                {/* ==================== 1. VISION & MISSION ==================== */}
                {activeTabId === 'vision-mission' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                        Research Directive
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white">
                        Research Vision & Mission
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                        Driving scientific breakthroughs and patentable technological solutions for regional and global industrial challenges.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Vision Card */}
                      <div className="p-6 bg-rose-50/20 dark:bg-rose-950/5 border border-rose-100/50 dark:border-rose-900/20 rounded-2xl space-y-3">
                        <div className="p-3 bg-crimson-red text-white rounded-xl w-fit shadow-md">
                          <Eye size={20} />
                        </div>
                        <span className="text-[10px] font-black tracking-widest text-crimson-red dark:text-rose-400 uppercase block">RESEARCH VISION</span>
                        <h3 className="font-sans font-extrabold text-base text-zinc-900 dark:text-white">Center of Research Excellence</h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          To evolve into a nationally recognized center of research excellence that nurtures innovative thinking, encourages multidisciplinary research, and produces patentable technologies that solve critical industrial and societal problems.
                        </p>
                      </div>

                      {/* Mission Card */}
                      <div className="p-6 bg-emerald-500/[0.02] dark:bg-emerald-950/5 border border-emerald-500/15 dark:border-emerald-900/20 rounded-2xl space-y-3">
                        <div className="p-3 bg-emerald-600 text-white rounded-xl w-fit shadow-md">
                          <Target size={20} />
                        </div>
                        <span className="text-[10px] font-black tracking-widest text-emerald-600 dark:text-emerald-400 uppercase block">RESEARCH MISSION</span>
                        <h3 className="font-sans font-extrabold text-base text-zinc-900 dark:text-white">Empowering Faculty & Scholars</h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          To provide state-of-the-art laboratory infrastructure, financial incentive schemes for high-impact journal publications, dedicated seed money grants, and active industry-academia collaborative platforms for faculty and student scholars.
                        </p>
                      </div>
                    </div>

                    {/* Thrust Areas */}
                    <div className="space-y-4 pt-2">
                      <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Core Research Thrust Areas</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { title: 'Artificial Intelligence & IoT', desc: 'Predictive modeling, smart sensors & agricultural AI.' },
                          { title: 'Renewable & Solar Energy', desc: 'PV optimization, solar trackers & grid storage.' },
                          { title: 'Smart Materials & Structures', desc: 'Self-healing concrete, geo-polymers & nanocomposites.' },
                          { title: 'VLSI & Embedded Systems', desc: 'Ultra-low power circuits & biomedical IoT chips.' },
                          { title: 'Thermal & Fluid Engineering', desc: 'Heat exchangers, computational fluid dynamics.' },
                          { title: 'Cybersecurity & Blockchain', desc: 'Federated learning, privacy & network safety.' }
                        ].map((item, idx) => (
                          <div key={idx} className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl space-y-1">
                            <span className="font-sans font-extrabold text-xs text-zinc-900 dark:text-white block">{item.title}</span>
                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block leading-normal">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ==================== 2. AIMS & OBJECTIVES ==================== */}
                {activeTabId === 'aims-objectives' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                        Strategic Roadmaps
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white">
                        Aims & Strategic Objectives
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                        Defined targets aimed at increasing research volume, patent filings, and externally funded projects.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { num: '01', title: 'Enhance Publication Quality', desc: 'Promote faculty and PG scholar publications in SCI, Scopus, IEEE, and Web of Science indexed journals with high impact factors.' },
                        { num: '02', title: 'Incentivize Patent Filings', desc: 'Provide financial support for patent filing fees, drafting assistance, and intellectual property protection through our dedicated IPR cell.' },
                        { num: '03', title: 'Attract External Research Grants', desc: 'Encourage departments to submit research proposals to government bodies like AICTE, DST, RGSTC, and CSIR.' },
                        { num: '04', title: 'Establish Center of Excellence', desc: 'Create specialized research centers in AI, VLSI, and Renewable Energy in collaboration with leading technology companies.' },
                        { num: '05', title: 'Promote Student Research', desc: 'Involve undergraduate B.Tech students in real-world consultancy projects, hackathons, and national paper presentations.' },
                        { num: '06', title: 'Industry-Academia Alliances', desc: 'Sign MoUs with industrial corporations to undertake sponsored consultancy research and commercialize campus inventions.' }
                      ].map((obj, i) => (
                        <div key={i} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex gap-4 items-start">
                          <span className="font-sans font-black text-xl text-crimson-red dark:text-rose-400 shrink-0">{obj.num}</span>
                          <div className="space-y-1">
                            <h3 className="font-sans font-extrabold text-sm text-zinc-900 dark:text-white">{obj.title}</h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{obj.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ==================== 3. CODE OF ETHICS ==================== */}
                {activeTabId === 'code-of-ethics' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                        Institutional Compliance
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white">
                        Code of Research Ethics
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                        Strict guidelines upholding academic honesty, anti-plagiarism protocols, and ethical conduct in research.
                      </p>
                    </div>

                    <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl space-y-4">
                      <div className="flex items-center gap-3">
                        <ShieldCheck size={20} className="text-crimson-red" />
                        <h3 className="font-sans font-extrabold text-base text-zinc-900 dark:text-white">Plagiarism Policy & Turnitin Verification</h3>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        Anjuman College of Engineering & Technology enforces a zero-tolerance policy towards academic dishonesty and data fabrication. All research manuscripts, doctoral dissertations, and B.Tech project reports must undergo plagiarism screening via Turnitin or iThenticate before publication or submission.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        <div className="p-3 bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800 rounded-xl text-center">
                          <span className="block font-black text-sm text-crimson-red dark:text-rose-400">&lt; 10%</span>
                          <span className="text-[10px] text-zinc-500 font-bold uppercase">Similarity Permitted</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800 rounded-xl text-center">
                          <span className="block font-black text-sm text-emerald-600">Turnitin</span>
                          <span className="text-[10px] text-zinc-500 font-bold uppercase">Official Software</span>
                        </div>
                        <div className="p-3 bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800 rounded-xl text-center">
                          <span className="block font-black text-sm text-zinc-900 dark:text-white">RTMNU</span>
                          <span className="text-[10px] text-zinc-500 font-bold uppercase">UGC Approved Norms</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-zinc-400">Core Principles of Ethics</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { title: 'Honesty in Data Reporting', desc: 'Investigators must accurately report experimental findings without fabrication or selective suppression.' },
                          { title: 'IPR & Attribution Integrity', desc: 'All co-authors, student contributors, and funding agencies must be given explicit credit.' },
                          { title: 'Conflict of Interest Disclosure', desc: 'Researchers must disclose any financial or commercial conflicts prior to publication.' },
                          { title: 'Environmental & Human Safety', desc: 'Experimental procedures must conform to national safety, chemical disposal, and bio-safety standards.' }
                        ].map((rule, idx) => (
                          <div key={idx} className="p-4 bg-white dark:bg-zinc-900/60 border border-zinc-150/60 dark:border-zinc-800 rounded-xl space-y-1">
                            <span className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-crimson-red shrink-0" />
                              {rule.title}
                            </span>
                            <p className="text-[11px] text-zinc-500 leading-relaxed pl-5">{rule.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ==================== 4. R AND D COMMITTEE ==================== */}
                {activeTabId === 'rnd-committee' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                        Governance
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white">
                        Research & Development Committee
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                        The executive committee responsible for sanctioning seed grants, reviewing proposals, and overseeing research activities.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {RND_COMMITTEE.map((member, i) => (
                        <div key={i} className="p-5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex items-start gap-4 shadow-sm">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-[#93000f] to-[#4a0404] text-white flex items-center justify-center font-black text-sm shrink-0 shadow">
                            {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </div>
                          <div className="space-y-1 min-w-0 text-left">
                            <h3 className="font-sans font-black text-sm text-zinc-900 dark:text-white truncate">{member.name}</h3>
                            <span className="text-[10px] font-extrabold text-crimson-red dark:text-rose-400 uppercase block tracking-wider">{member.role}</span>
                            <span className="text-[10px] text-zinc-400 block font-semibold">{member.dept}</span>
                            <div className="flex items-center gap-3 pt-1 text-[10px] text-zinc-500">
                              <span className="flex items-center gap-1"><Mail size={10} /> {member.email}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ==================== 5. RESEARCH PUBLICATION ==================== */}
                {activeTabId === 'research-publication' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                        Academic Directory
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white">
                        Faculty & Student Journal Publications
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                        High-impact articles published in Scopus, IEEE, Springer, Elsevier, and Web of Science index journals.
                      </p>
                    </div>

                    {/* Search filter */}
                    <div className="relative w-full sm:w-80">
                      <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                      <input
                        type="text"
                        value={pubSearch}
                        onChange={(e) => setPubSearch(e.target.value)}
                        placeholder="Search title, author or journal..."
                        className="w-full text-xs font-semibold pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white"
                      />
                    </div>

                    {/* List of Publications */}
                    <div className="space-y-4">
                      {filteredPublications.map((pub, idx) => (
                        <div key={idx} className="p-5 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 rounded-2xl space-y-2 hover:border-rose-200 transition-all">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span className="text-[10px] font-black tracking-widest text-crimson-red dark:text-rose-400 uppercase bg-rose-50 dark:bg-rose-950/20 px-2.5 py-0.5 rounded w-fit">
                              {pub.indexing}
                            </span>
                            <span className="text-[10px] font-bold text-zinc-400">Published {pub.year}</span>
                          </div>
                          <h3 className="font-sans font-bold text-sm text-zinc-900 dark:text-white leading-snug">{pub.title}</h3>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">Authors: <span className="font-semibold text-zinc-700 dark:text-zinc-200">{pub.authors}</span></p>
                          <p className="text-[11px] text-zinc-400 italic">{pub.journal}</p>
                          <div className="pt-1 flex items-center gap-2 text-[10px] text-zinc-400">
                            <span>DOI: {pub.doi}</span>
                          </div>
                        </div>
                      ))}

                      {filteredPublications.length === 0 && (
                        <div className="text-center py-12 text-zinc-400 text-xs">No research publications found matching your search term.</div>
                      )}
                    </div>
                  </div>
                )}

                {/* ==================== 6. PATENTS ==================== */}
                {activeTabId === 'patents' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                        IPR Directory
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white">
                        Patents Granted & Published
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                        Innovative technological designs registered with the Indian Patent Office (IPO) Kolkata.
                      </p>
                    </div>

                    {/* Filter */}
                    <div className="relative w-full sm:w-80">
                      <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                      <input
                        type="text"
                        value={patSearch}
                        onChange={(e) => setPatSearch(e.target.value)}
                        placeholder="Search patents or inventors..."
                        className="w-full text-xs font-semibold pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-rose-500/10 dark:text-white"
                      />
                    </div>

                    {/* Patent List */}
                    <div className="grid grid-cols-1 gap-4">
                      {filteredPatents.map((pat) => (
                        <div key={pat.id} className="p-5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-black uppercase text-zinc-400">{pat.dept}</span>
                              <span className="text-[10px] font-bold text-zinc-300">•</span>
                              <span className="text-[10px] font-bold text-zinc-500">Patent No: {pat.patentNo}</span>
                            </div>
                            <h3 className="font-sans font-black text-sm text-zinc-900 dark:text-white">{pat.title}</h3>
                            <p className="text-xs text-zinc-500">Lead Inventor: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{pat.inventor}</span> ({pat.year})</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0 ${
                            pat.status === 'Granted' ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-200/40' : 'bg-amber-500/10 text-amber-600 border border-amber-200/40'
                          }`}>
                            {pat.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Call for Abstracts Form */}
                    <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 space-y-4">
                      <h3 className="font-sans font-extrabold text-base text-zinc-900 dark:text-white">Submit Invention / Thesis Abstract to R&D Cell</h3>
                      <p className="text-xs text-zinc-500">ACET students and faculty can submit prospective invention summaries for internal patent evaluation & filing support.</p>
                      
                      {!submittedAbstract ? (
                        <form 
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (abstractData.title && abstractData.author) setSubmittedAbstract(true);
                          }}
                          className="space-y-3"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="Invention Title"
                              value={abstractData.title}
                              required
                              onChange={(e) => setAbstractData({ ...abstractData, title: e.target.value })}
                              className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-900 dark:text-white outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Lead Author / Department"
                              value={abstractData.author}
                              required
                              onChange={(e) => setAbstractData({ ...abstractData, author: e.target.value })}
                              className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-900 dark:text-white outline-none"
                            />
                          </div>
                          <textarea
                            rows={3}
                            placeholder="Brief description of novelty and experimental parameters..."
                            value={abstractData.content}
                            onChange={(e) => setAbstractData({ ...abstractData, content: e.target.value })}
                            className="w-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-900 dark:text-white outline-none resize-none"
                          />
                          <button
                            type="submit"
                            className="bg-crimson-red hover:bg-[#93000f] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl shadow transition-all"
                          >
                            Submit for Patent Evaluation
                          </button>
                        </form>
                      ) : (
                        <div className="p-4 bg-emerald-500/10 border border-emerald-200 rounded-2xl text-center space-y-2">
                          <CheckCircle2 size={24} className="text-emerald-600 mx-auto" />
                          <span className="block font-bold text-xs text-emerald-700 dark:text-emerald-400">Invention Abstract Submitted Successfully!</span>
                          <p className="text-[10px] text-zinc-500">Ref ID: ACET/IPR-2026/719. R&D Cell will contact you within 5 working days.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ==================== 7. RESEARCH ACTIVITIES ==================== */}
                {activeTabId === 'research-activities' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                        Scientific Initiatives
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white">
                        Research Activities & Events
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                        Workshops, national conferences, faculty development programs, and IPR awareness sessions.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {ACTIVITIES_DATA.map((act, idx) => (
                        <div key={idx} className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-black uppercase bg-rose-50 dark:bg-rose-950/30 text-crimson-red px-2.5 py-0.5 rounded">
                              {act.type}
                            </span>
                            <span className="text-[10px] font-semibold text-zinc-400">{act.date}</span>
                          </div>
                          <h3 className="font-sans font-black text-sm text-zinc-900 dark:text-white leading-snug">{act.title}</h3>
                          <p className="text-xs text-zinc-500">Organized by: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{act.org}</span></p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ==================== 8. RESEARCH GRANTS ==================== */}
                {activeTabId === 'research-grants' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                        Sponsored Projects
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white">
                        Funded Research Grants & Consultancy
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                        Grants sanctioned by AICTE, DST, Rajiv Gandhi Science & Tech Commission (RGSTC), and government bodies.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {GRANTS_DATA.map((grant, idx) => (
                        <div key={idx} className="p-5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="space-y-1">
                            <span className="text-[10px] font-extrabold text-crimson-red dark:text-rose-400 uppercase">{grant.agency}</span>
                            <h3 className="font-sans font-black text-sm text-zinc-900 dark:text-white">{grant.title}</h3>
                            <p className="text-xs text-zinc-500">Principal Investigator: <span className="font-semibold text-zinc-700 dark:text-zinc-200">{grant.pi}</span> ({grant.year})</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="block font-sans font-black text-base text-emerald-600 dark:text-emerald-400">{grant.amount}</span>
                            <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 mt-1 inline-block">
                              {grant.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ==================== 9. FACULTY WITH PH.DS & PHD SUPERVISOR ==================== */}
                {activeTabId === 'phd-faculty' && (
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-200/20">
                        Doctoral Scholars & Guides
                      </span>
                      <h2 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white">
                        Faculty with Ph.Ds & Approved PhD Supervisors
                      </h2>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                        Doctorate holders approved by Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU) to guide doctoral research.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {PHD_FACULTY_DATA.map((fac, idx) => (
                        <div key={idx} className="p-5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-crimson-red dark:text-rose-400 uppercase bg-rose-50 dark:bg-rose-950/20 px-2 py-0.5 rounded">
                              {fac.dept}
                            </span>
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">{fac.scholarsCount}</span>
                          </div>
                          <h3 className="font-sans font-black text-sm text-zinc-900 dark:text-white">{fac.name}</h3>
                          <p className="text-xs text-zinc-500">Specialization: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{fac.specialization}</span></p>
                          <span className="text-[10px] font-bold text-zinc-400 block pt-1">{fac.guideStatus}</span>
                        </div>
                      ))}
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
