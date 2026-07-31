import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, Phone, MapPin, ShieldCheck, Award, GraduationCap, CheckCircle, 
  Building2, Users, FileText, UserCheck, Landmark, HeartHandshake, 
  BookOpen, ChevronRight, Download, ExternalLink, Sparkles, Layers
} from 'lucide-react';
import { ABOUT_PAGES } from './TopAppBar';

interface AboutUsProps {
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
}

export default function AboutUs({ selectedTab = 'about-trust', setSelectedTab }: AboutUsProps) {
  const [activeSubTab, setActiveSubTab] = useState(selectedTab);
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const currentTab = selectedTab || activeSubTab;

  const handleTabChange = (tabId: string) => {
    setActiveSubTab(tabId);
    if (setSelectedTab) {
      setSelectedTab(tabId);
    }
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmittedMessage(true);
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 bg-white dark:bg-zinc-900 border-b border-rose-50/10 min-h-screen">
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="font-sans font-bold text-xs text-crimson-red uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 px-4 py-1.5 rounded-full border border-rose-200/30">
            About Us Directory
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-3 mb-4">
            Anjuman College of Engineering & Technology
          </h2>
          <div className="h-1 w-20 bg-crimson-red mx-auto rounded-full mb-3"></div>
          <p className="font-sans text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base text-center">
            Managed by Anjuman Hami-E-Islam, Sadar Nagpur. A pioneer in technical education & moral excellence.
          </p>
        </div>

        {/* Horizontal Navigation Pills for About Us pages */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-zinc-100 dark:border-zinc-800">
          {ABOUT_PAGES.map((page) => {
            const isSelected = currentTab === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleTabChange(page.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-crimson-red text-white shadow-md shadow-crimson-red/20 font-bold scale-[1.02]'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-750'
                }`}
              >
                <span>{page.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT VIEWS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            
            {/* 1. ABOUT TRUST */}
            {currentTab === 'about-trust' && (
              <div className="space-y-10">
                <div className="bg-gradient-to-br from-rose-900 to-crimson-red text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                  <div className="max-w-3xl space-y-4 relative z-10">
                    <span className="bg-white/20 text-white font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full">
                      Parent Educational Society
                    </span>
                    <h3 className="font-extrabold text-2xl sm:text-4xl text-white">Anjuman Hami-E-Islam, Nagpur</h3>
                    <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                      Established over 130 years ago (in 1888), Anjuman Hami-E-Islam is a pioneer premier educational trust managing 15+ prestigious educational institutes in Central India, catering to over 50,000+ students.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <div className="p-3 bg-rose-500/10 text-crimson-red rounded-xl w-fit">
                      <Landmark size={22} />
                    </div>
                    <h4 className="font-bold text-lg text-zinc-900 dark:text-white">Rich Legacy (Since 1888)</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Founded by visionary philanthropists to uplift society through high quality secular and technical education.
                    </p>
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <div className="p-3 bg-rose-500/10 text-crimson-red rounded-xl w-fit">
                      <HeartHandshake size={22} />
                    </div>
                    <h4 className="font-bold text-lg text-zinc-900 dark:text-white">Minority Welfare & Mission</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Providing affordable technical education with dedicated scholarship programs for deserving candidates.
                    </p>
                  </div>

                  <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <div className="p-3 bg-rose-500/10 text-crimson-red rounded-xl w-fit">
                      <Building2 size={22} />
                    </div>
                    <h4 className="font-bold text-lg text-zinc-900 dark:text-white">Wide Academic Network</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Managing engineering, polytechnic, schools, degree colleges, and vocational training centers in Nagpur.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ABOUT ACET */}
            {currentTab === 'about-acet' && (
              <div className="space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  <div className="lg:col-span-8 bg-zinc-50 dark:bg-zinc-800/40 p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                    <span className="bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-xs px-3.5 py-1 rounded-full uppercase">
                      Overview
                    </span>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white">
                      Anjuman College of Engineering & Technology (ACET)
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Established in 1999, ACET Nagpur is a premiere NAAC A+ accredited technical institution approved by AICTE New Delhi, recognized by DTE Govt. of Maharashtra, and affiliated to Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU).
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <div>
                        <span className="block font-black text-xl text-crimson-red">1999</span>
                        <span className="text-[11px] text-zinc-500 font-semibold">Established Year</span>
                      </div>
                      <div>
                        <span className="block font-black text-xl text-crimson-red">A+</span>
                        <span className="text-[11px] text-zinc-500 font-semibold">NAAC Grade</span>
                      </div>
                      <div>
                        <span className="block font-black text-xl text-crimson-red">7+</span>
                        <span className="text-[11px] text-zinc-500 font-semibold">UG Programs</span>
                      </div>
                      <div>
                        <span className="block font-black text-xl text-crimson-red">5000+</span>
                        <span className="text-[11px] text-zinc-500 font-semibold">Alumni Network</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-zinc-900 text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
                    <div className="space-y-4">
                      <div className="p-3 bg-rose-500/20 text-rose-300 rounded-xl w-fit">
                        <Award size={24} />
                      </div>
                      <h4 className="font-extrabold text-xl text-white">NAAC A+ Accredited</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Evaluated and awarded A+ Grade by NAAC with high CGPA for academic quality, state-of-the-art laboratories, placement track record, and research output.
                      </p>
                    </div>
                    <div className="pt-6 border-t border-zinc-800 flex items-center justify-between text-xs font-bold text-rose-300">
                      <span>RTMNU Affiliated</span>
                      <span>DTE Code: 4115</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. ORGANIZATION CHART */}
            {currentTab === 'organization-chart' && (
              <div className="space-y-8">
                <div className="bg-zinc-50 dark:bg-zinc-800/40 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center space-y-4">
                  <span className="bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-xs px-3.5 py-1 rounded-full uppercase">
                    Institutional Hierarchy
                  </span>
                  <h3 className="font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white">Organization Chart</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto">
                    The governance and operational structure of Anjuman College of Engineering & Technology, Sadar Nagpur.
                  </p>
                </div>

                <div className="bg-white dark:bg-zinc-900 p-6 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-6">
                  {/* Tier 1 */}
                  <div className="max-w-md mx-auto bg-crimson-red text-white p-4 rounded-2xl text-center shadow-md">
                    <span className="text-[10px] uppercase font-bold text-rose-200 block">Top Governance</span>
                    <span className="font-extrabold text-base sm:text-lg">President & General Secretary (Anjuman Trust)</span>
                  </div>

                  <div className="h-6 w-0.5 bg-crimson-red/30 mx-auto" />

                  {/* Tier 2 */}
                  <div className="max-w-md mx-auto bg-zinc-900 text-white p-4 rounded-2xl text-center shadow-md">
                    <span className="text-[10px] uppercase font-bold text-rose-400 block">Executive Leadership</span>
                    <span className="font-extrabold text-base">Governing Body & College Development Committee (CDC)</span>
                  </div>

                  <div className="h-6 w-0.5 bg-zinc-300 dark:bg-zinc-700 mx-auto" />

                  {/* Tier 3 */}
                  <div className="max-w-md mx-auto bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 p-4 rounded-2xl text-center">
                    <span className="text-[10px] uppercase font-bold text-crimson-red block">Head of Institution</span>
                    <span className="font-extrabold text-base text-zinc-900 dark:text-white">Principal (ACET Nagpur)</span>
                  </div>

                  <div className="h-6 w-0.5 bg-zinc-300 dark:bg-zinc-700 mx-auto" />

                  {/* Tier 4 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                    <div className="bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-xl text-center border border-zinc-200 dark:border-zinc-700">
                      <span className="font-bold text-sm text-zinc-900 dark:text-white block">Dean Academics</span>
                      <span className="text-[11px] text-zinc-500">Curriculum & Examinations</span>
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-xl text-center border border-zinc-200 dark:border-zinc-700">
                      <span className="font-bold text-sm text-zinc-900 dark:text-white block">Dean R & D</span>
                      <span className="text-[11px] text-zinc-500">Research & Innovations</span>
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-xl text-center border border-zinc-200 dark:border-zinc-700">
                      <span className="font-bold text-sm text-zinc-900 dark:text-white block">Heads of Departments (HODs)</span>
                      <span className="text-[11px] text-zinc-500">CE, CS, AI&DS, EE, ETC, ME, Science</span>
                    </div>
                    <div className="bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-xl text-center border border-zinc-200 dark:border-zinc-700">
                      <span className="font-bold text-sm text-zinc-900 dark:text-white block">Training & Placement Cell</span>
                      <span className="text-[11px] text-zinc-500">Corporate & Placements</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. ADMINISTRATOR'S DESK */}
            {currentTab === 'administrators-desk' && (
              <div className="bg-zinc-50 dark:bg-zinc-800/40 p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="h-24 w-24 rounded-2xl bg-crimson-red/10 text-crimson-red flex items-center justify-center font-extrabold text-2xl shrink-0">
                    <UserCheck size={40} />
                  </div>
                  <div className="space-y-2">
                    <span className="bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-xs px-3 py-1 rounded-full uppercase">
                      Management Message
                    </span>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white">Administrator's Desk</h3>
                    <p className="text-xs text-zinc-500 font-semibold">Anjuman Hami-E-Islam Executive Management</p>
                  </div>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-200 dark:border-zinc-700 pt-6">
                  <p>
                    "Welcome to Anjuman College of Engineering & Technology. Our core commitment is to nurture technical talent enriched with human values, professional ethics, and leadership qualities."
                  </p>
                  <p>
                    "Through continuous infrastructure investment, faculty developments, and industry linkages, we strive to empower young minds to become innovative engineers and responsible citizens."
                  </p>
                </div>
              </div>
            )}

            {/* 5. PRINCIPAL'S MESSAGE */}
            {currentTab === 'principals-message' && (
              <div className="bg-zinc-50 dark:bg-zinc-800/40 p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="h-28 w-28 rounded-2xl bg-crimson-red text-white flex items-center justify-center font-extrabold text-3xl shrink-0 shadow-lg">
                    <GraduationCap size={48} />
                  </div>
                  <div className="space-y-2">
                    <span className="bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-xs px-3 py-1 rounded-full uppercase">
                      Principal's Desk
                    </span>
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white">Principal's Message</h3>
                    <p className="text-xs text-zinc-500 font-semibold">Dr. Syed Mohammad Ali — Principal, ACET Nagpur</p>
                  </div>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-200 dark:border-zinc-700 pt-6">
                  <p>
                    "Dear Students and Visitors, It gives me immense pleasure to welcome you to Anjuman College of Engineering & Technology (ACET), Nagpur. Education is not merely the attainment of knowledge; it is the transformation of character and mindset."
                  </p>
                  <p>
                    "Our NAAC A+ accreditation stands testimony to our academic standards, rigorous curriculum execution, state-of-the-art incubation facilities, and exceptional campus placements."
                  </p>
                </div>
              </div>
            )}

            {/* 6. DEAN'S DESK */}
            {currentTab === 'deans-desk' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-50 dark:bg-zinc-800/40 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                  <span className="bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-xs px-3.5 py-1 rounded-full uppercase">
                    Academic Leadership
                  </span>
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white">Dean Academics</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Ensuring high academic standards, continuous internal evaluation, updated outcome-based curriculum execution, and student mentoring across all B.Tech streams.
                  </p>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-800/40 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                  <span className="bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-xs px-3.5 py-1 rounded-full uppercase">
                    Research & Development
                  </span>
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white">Dean R & D</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Promoting faculty publication outputs, patents, funded consultancy projects, and student innovation prototypes at state and national hackathons.
                  </p>
                </div>
              </div>
            )}

            {/* 7. GOVERNANCE BODY */}
            {currentTab === 'governance-body' && (
              <div className="space-y-6">
                <div className="bg-zinc-50 dark:bg-zinc-800/40 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <h3 className="font-extrabold text-2xl text-zinc-900 dark:text-white">Governance Body Members</h3>
                  <p className="text-xs text-zinc-500">Constituted in accordance with AICTE & DTE Maharashtra norms.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Justice (Retd.) A. A. Ginwala', designation: 'Patron / Representative', role: 'Anjuman Trust' },
                    { name: 'Mr. Farooq Shaikh', designation: 'General Secretary', role: 'Anjuman Hami-E-Islam' },
                    { name: 'Dr. Syed Mohammad Ali', designation: 'Member Secretary & Principal', role: 'ACET Nagpur' },
                    { name: 'DTE Nominee', designation: 'Ex-Officio Representative', role: 'Govt. of Maharashtra' },
                    { name: 'AICTE Regional Officer', designation: 'Ex-Officio Representative', role: 'AICTE Western Region' },
                    { name: 'Industry Representative', designation: 'Corporate Advisor', role: 'Industrial Linkages' }
                  ].map((member, index) => (
                    <div key={index} className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <span className="font-bold text-sm text-zinc-900 dark:text-white block">{member.name}</span>
                      <span className="text-xs text-crimson-red font-semibold block">{member.designation}</span>
                      <span className="text-[11px] text-zinc-500 block">{member.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. COLLEGE DEVELOPMENT COMMITTEE */}
            {currentTab === 'college-development-committee' && (
              <div className="space-y-6">
                <div className="bg-zinc-50 dark:bg-zinc-800/40 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <h3 className="font-extrabold text-2xl text-zinc-900 dark:text-white">College Development Committee (CDC)</h3>
                  <p className="text-xs text-zinc-500">As per Maharashtra Public Universities Act Section 97.</p>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white text-xs uppercase font-extrabold border-b border-zinc-200 dark:border-zinc-700">
                        <th className="p-4">Sr No.</th>
                        <th className="p-4">Name</th>
                        <th className="p-4">Designation in CDC</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs text-zinc-700 dark:text-zinc-300 divide-y divide-zinc-100 dark:divide-zinc-800">
                      <tr>
                        <td className="p-4 font-bold">1</td>
                        <td className="p-4 font-bold">Management Representative</td>
                        <td className="p-4 text-crimson-red font-semibold">Chairman</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">2</td>
                        <td className="p-4 font-bold">General Secretary (Anjuman)</td>
                        <td className="p-4">Member</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">3</td>
                        <td className="p-4 font-bold">Head of Department (Nominated)</td>
                        <td className="p-4">Member</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">4</td>
                        <td className="p-4 font-bold">Teachers Representatives</td>
                        <td className="p-4">Members</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">5</td>
                        <td className="p-4 font-bold">Principal (ACET)</td>
                        <td className="p-4 text-crimson-red font-semibold">Member Secretary</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 9. VARIOUS CELLS */}
            {currentTab === 'various-cells' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Anti-Ragging Committee & Squad', desc: 'Ensuring zero tolerance towards ragging with 24x7 monitoring helplines.' },
                  { title: 'Internal Complaints Committee (ICC)', desc: 'Preventing harassment and supporting women safety across campus.' },
                  { title: 'Grievance Redressal Cell', desc: 'Redressing student and faculty academic or administrative grievances promptly.' },
                  { title: 'SC / ST & OBC Welfare Cell', desc: 'Assisting reserved candidates in obtaining state and central scholarships.' },
                  { title: 'Minority Cell', desc: 'Guiding minority students for central government scholarship portals.' },
                  { title: 'Student Council & Advisory', desc: 'Promoting student representation, cultural fests, and sports events.' }
                ].map((cell, idx) => (
                  <div key={idx} className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <div className="p-2.5 bg-rose-500/10 text-crimson-red rounded-xl w-fit">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="font-bold text-base text-zinc-900 dark:text-white">{cell.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{cell.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* 10. COLLEGE MAGAZINE */}
            {currentTab === 'college-magazine' && (
              <div className="space-y-8">
                <div className="bg-zinc-50 dark:bg-zinc-800/40 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center space-y-3">
                  <span className="bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-xs px-3.5 py-1 rounded-full uppercase">
                    Annual Publications
                  </span>
                  <h3 className="font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white">Annual College Magazine "ACETian"</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto">
                    Showcasing literary articles, technical papers, poetry, art, and academic achievements of students and faculty.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['ACETian Edition 2025-26', 'ACETian Edition 2024-25', 'ACETian Edition 2023-24'].map((edition, index) => (
                    <div key={index} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-4 shadow-sm">
                      <div className="space-y-2">
                        <div className="p-3 bg-rose-500/10 text-crimson-red rounded-xl w-fit">
                          <BookOpen size={24} />
                        </div>
                        <h4 className="font-bold text-lg text-zinc-900 dark:text-white">{edition}</h4>
                        <p className="text-xs text-zinc-500">Official Annual Magazine Issue</p>
                      </div>
                      <button
                        onClick={() => alert(`Downloading ${edition} PDF...`)}
                        className="w-full bg-zinc-100 hover:bg-crimson-red hover:text-white text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <Download size={14} />
                        <span>Download PDF Issue</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* Contact Form Section */}
        <div className="mt-20 pt-16 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-sans font-extrabold text-2xl text-zinc-950 dark:text-white tracking-tight">
                Get in Touch with Anjuman
              </h3>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                Our support cells and admission counselors are available at our main Nagpur campus for guiding registrations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800 text-crimson-red rounded-xl shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Nagpur Sadar Campus Address</span>
                  <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                    Mangalwari Bazaar Road, Sadar, Nagpur - 440022, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800 text-crimson-red rounded-xl shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Inquiry Helpline Contacts</span>
                  <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                    +91 712 2582749, +91 712 2583559
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-800 text-crimson-red rounded-xl shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Official Email Addresses</span>
                  <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                    eng_acet@rediffmail.com, principal@anjumancollege.edu.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-800/40 p-6 sm:p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
            <h3 className="font-sans font-extrabold text-lg text-zinc-900 dark:text-white mb-1">Send an Online Inquiry</h3>
            <p className="text-xs text-zinc-400 mb-6">Have questions regarding syllabus, lateral admission entry eligibility, or fees? Drop us a line below.</p>

            <AnimatePresence mode="wait">
              {!submittedMessage ? (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Prasad Zalte"
                        className="w-full bg-white dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Your Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full bg-white dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Subject of Inquiry</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Lateral admissions entry cutoff eligibility"
                      className="w-full bg-white dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Detail Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message or questions here..."
                      className="w-full bg-white dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white resize-none focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-crimson-red hover:bg-[#93000f] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all shadow-md active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4 text-center py-12"
                >
                  <div className="h-12 w-12 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle size={26} />
                  </div>
                  <div>
                    <span className="text-base font-bold text-emerald-600 block">Message Sent!</span>
                    <p className="text-xs text-zinc-400 mt-1.5 max-w-sm mx-auto">Thanks for reaching out to Anjuman College of Engineering (Nagpur). Your inquiry ticket has been assigned to academic guide cell. We will reply to {formData.email} soon.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedMessage(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-bold text-crimson-red hover:underline mt-2"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
