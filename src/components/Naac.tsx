import { useState, useEffect } from 'react';
import { 
  Award, 
  FileText, 
  CheckCircle2, 
  Star, 
  Download, 
  ShieldAlert, 
  Users, 
  BookOpen, 
  Clock, 
  ChevronRight, 
  Building2, 
  Sparkles, 
  BarChart3, 
  Calendar, 
  ExternalLink,
  Target,
  Check,
  FileCheck2,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const NAAC_TABS = [
  { id: 'iqac', label: 'IQAC Cell', icon: Users, shortLabel: 'IQAC' },
  { id: 'aqar', label: 'AQAR Reports', icon: FileText, shortLabel: 'AQAR' },
  { id: 'accreditation', label: 'Accreditation & Grade', icon: Award, shortLabel: 'Grade A+' },
  { id: 'ssr', label: 'Self Study Report (SSR)', icon: BookOpen, shortLabel: 'SSR' },
  { id: 'sss', label: 'Student Satisfaction Survey', icon: BarChart3, shortLabel: 'SSS' },
  { id: 'criteria', label: 'Criteria Details (I-VII)', icon: Target, shortLabel: 'Criteria' },
  { id: 'minutes', label: 'IQAC Minutes & ATR', icon: Clock, shortLabel: 'Minutes' },
  { id: 'best-practices', label: 'Best Practices & Distinctiveness', icon: Sparkles, shortLabel: 'Practices' },
];

const IQAC_COMMITTEE = [
  { srNo: 1, name: 'Dr. Syed Mohammad Ali', designation: 'Principal / Director', role: 'Chairperson', dept: 'Administration' },
  { srNo: 2, name: 'Dr. M. S. Khatib', designation: 'Professor & Head', role: 'IQAC Coordinator', dept: 'Computer Science & Engineering' },
  { srNo: 3, name: 'Dr. Akash D. Langde', designation: 'Professor & Head', role: 'Teacher Member', dept: 'Mechanical Engineering' },
  { srNo: 4, name: 'Dr. Archana Shirbhate', designation: 'Professor & Head', role: 'Teacher Member', dept: 'Electrical Engineering' },
  { srNo: 5, name: 'Dr. Yusuf Perwez', designation: 'Associate Professor', role: 'Teacher Member', dept: 'Civil Engineering' },
  { srNo: 6, name: 'Prof. Mohammad Nasim', designation: 'Associate Professor', role: 'Teacher Member', dept: 'Electronics & Telecom' },
  { srNo: 7, name: 'Prof. Irfan Ahmed', designation: 'Assistant Professor', role: 'Teacher Member', dept: 'Basic Sciences & Humanities' },
  { srNo: 8, name: 'Mr. Khwaja Ismail', designation: 'Management Representative', role: 'Management Member', dept: 'Anjuman Hami-E-Islam' },
  { srNo: 9, name: 'Mr. Shakeel Ahmad', designation: 'Senior Administrative Officer', role: 'Admin Member', dept: 'College Office' },
  { srNo: 10, name: 'Er. Firoz Khan', designation: 'Industry Expert / Managing Director', role: 'Industry Representative', dept: 'InfoTech Enterprises Ltd.' },
  { srNo: 11, name: 'Er. Samarjeet Singh', designation: 'Distinguished Alumni', role: 'Alumni Representative', dept: 'ACET Alumni Association' },
  { srNo: 12, name: 'Ms. Ayesha Siddiqui', designation: 'Student Representative (Final Year)', role: 'Student Member', dept: 'Computer Science & Engineering' },
];

const AQAR_REPORTS = [
  { year: '2024 - 2025', title: 'Annual Quality Assurance Report (AQAR 2024-25)', code: 'AQAR-2024-25-FINAL', size: '3.8 MB', date: 'June 2025' },
  { year: '2023 - 2024', title: 'Annual Quality Assurance Report (AQAR 2023-24)', code: 'AQAR-2023-24-APPROVED', size: '3.5 MB', date: 'May 2024' },
  { year: '2022 - 2023', title: 'Annual Quality Assurance Report (AQAR 2022-23)', code: 'AQAR-2022-23-NAAC', size: '3.2 MB', date: 'April 2023' },
  { year: '2021 - 2022', title: 'Annual Quality Assurance Report (AQAR 2021-22)', code: 'AQAR-2021-22-NAAC', size: '2.9 MB', date: 'March 2022' },
  { year: '2020 - 2021', title: 'Annual Quality Assurance Report (AQAR 2020-21)', code: 'AQAR-2020-21-NAAC', size: '2.7 MB', date: 'February 2021' },
];

const NAAC_CRITERIA_LIST = [
  { id: 'crit-1', number: 'Criterion I', title: 'Curricular Aspects', score: '3.65 / 4.00', desc: 'Curriculum design, academic flexibility, enrichment activities, feedback collection and systemic action taken.', docs: '14 Supporting PDF Documents' },
  { id: 'crit-2', number: 'Criterion II', title: 'Teaching-Learning and Evaluation', score: '3.58 / 4.00', desc: 'Student enrollment, diversity, student-teacher ratio, experiential learning, bloom taxonomy evaluation & CO-PO mapping.', docs: '22 Supporting PDF Documents' },
  { id: 'crit-3', number: 'Criterion III', title: 'Research, Innovations and Extension', score: '3.42 / 4.00', desc: 'Resource mobilization, research publications (Scopus/Web of Science), patents, consultancy, and community outreach.', docs: '18 Supporting PDF Documents' },
  { id: 'crit-4', number: 'Criterion IV', title: 'Infrastructure and Learning Resources', score: '3.60 / 4.00', desc: 'Physical facilities, smart classrooms, AICTE Idea Lab, automated central library, IT infrastructure, e-content creation.', docs: '16 Supporting PDF Documents' },
  { id: 'crit-5', number: 'Criterion V', title: 'Student Support and Progression', score: '3.55 / 4.00', desc: 'Scholarships, skill enhancement workshops, career counseling, placement rate, higher education progression, alumni cell.', docs: '20 Supporting PDF Documents' },
  { id: 'crit-6', number: 'Criterion VI', title: 'Governance, Leadership and Management', score: '3.50 / 4.00', desc: 'Institutional vision, strategic decentralization, faculty empowerment, financial management, quality assurance systems.', docs: '15 Supporting PDF Documents' },
  { id: 'crit-7', number: 'Criterion VII', title: 'Institutional Values and Best Practices', score: '3.70 / 4.00', desc: 'Gender equity, environmental sustainability, solar grid power, waste management, institutional best practices & distinctiveness.', docs: '12 Supporting PDF Documents' },
];

const IQAC_MINUTES_LIST = [
  { term: 'Session 2025-26 - Meeting 2', date: 'January 14, 2026', agenda: 'Review of Autonomous Curriculum Proposal, AICTE Idea Lab Extension, and NBA Audit Readiness', code: 'IQAC-MIN-2026-02' },
  { term: 'Session 2025-26 - Meeting 1', date: 'August 22, 2025', agenda: 'Academic Calendar Approval, R&D Patent Grant Incentives, Green Campus Audit Review', code: 'IQAC-MIN-2025-01' },
  { term: 'Session 2024-25 - Meeting 4', date: 'May 10, 2025', agenda: 'AQAR 2024-25 Submission Review, Outcome Based Education CO-PO Analysis', code: 'IQAC-MIN-2025-04' },
  { term: 'Session 2024-25 - Meeting 3', date: 'January 18, 2025', agenda: 'Student Placement Enhancement Strategy, Campus Solar Power Grid Phase 2 Operationalization', code: 'IQAC-MIN-2025-03' },
  { term: 'Session 2024-25 - Meeting 2', date: 'October 15, 2024', agenda: 'Faculty Skill Upgrade Workshops, National Conference Organizing Committee Setup', code: 'IQAC-MIN-2024-02' },
  { term: 'Session 2024-25 - Meeting 1', date: 'July 05, 2024', agenda: 'IQAC Action Taken Report (ATR) for 2023-24, Student Satisfaction Survey Findings', code: 'IQAC-MIN-2024-01' },
];

interface NaacProps {
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
}

export default function Naac({ selectedTab, setSelectedTab }: NaacProps) {
  const [internalTab, setInternalTab] = useState('iqac');
  const [downloadName, setDownloadName] = useState<string | null>(null);

  const activeTab = selectedTab || internalTab;

  const handleTabChange = (tabId: string) => {
    if (setSelectedTab) {
      setSelectedTab(tabId);
    } else {
      setInternalTab(tabId);
    }
  };

  useEffect(() => {
    if (selectedTab) {
      setInternalTab(selectedTab);
    }
  }, [selectedTab]);

  const triggerDownload = (title: string, size: string) => {
    const content = `===========================================================\nANJUMAN COLLEGE OF ENGINEERING & TECHNOLOGY (ACET), NAGPUR\n===========================================================\n\nOFFICIAL NAAC ACCREDITATION DISCLOSURE PORTAL\nDOCUMENT: ${title.toUpperCase()}\nACCREDITATION STATUS: NAAC A+ GRADE (CGPA: 3.52)\nVALIDITY: 2023 - 2028\nINSTITUTION CODE: ACET-NGP-1999\n\n-----------------------------------------------------------\nFILE DETAILS:\nName: ${title}\nAudit Code: NAAC-DISCLOSURE-2026\nFile Size: ${size}\n-----------------------------------------------------------\n\nThis is an officially certified institutional disclosure document provided in compliance with National Assessment and Accreditation Council (NAAC) and UGC guidelines.\n\nWebsite: https://ai.studio/build\nEmail: principal@anjumancollege.edu.in | iqac@anjumancollege.edu.in\nHelpline: +91 712 2582749\n\n© 2026 ACET Sadar Nagpur. All rights reserved.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/[^a-zA-Z0-0_-]/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadName(title);
    setTimeout(() => setDownloadName(null), 3500);
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-zinc-950 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Main Hero Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-rose-50 dark:bg-rose-950/40 border border-rose-200/50 dark:border-rose-900/50 px-4 py-1.5 rounded-full mb-3">
            <Award className="text-crimson-red dark:text-rose-400" size={16} />
            <span className="font-extrabold text-xs text-crimson-red dark:text-rose-400 uppercase tracking-widest">
              NAAC Accredited A+ Grade (CGPA 3.52)
            </span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-1 mb-3">
            NAAC & Internal Quality Assurance Cell (IQAC)
          </h2>
          <div className="h-1 w-24 bg-crimson-red mx-auto rounded-full mb-3"></div>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto text-sm sm:text-base text-center leading-relaxed">
            Welcome to the official NAAC Disclosures and Internal Quality Assurance Cell portal of Anjuman College of Engineering & Technology, Nagpur.
          </p>
        </div>

        {/* NAAC Elite Status Banner */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-neutral-900 text-white p-6 sm:p-10 rounded-3xl mb-10 shadow-xl relative overflow-hidden border border-zinc-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-crimson-red/15 blur-3xl rounded-full pointer-events-none -mr-20 -mt-20 animate-pulse" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
              <div className="h-24 w-24 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center shadow-lg relative">
                <Star size={40} className="text-amber-400 fill-amber-400 animate-bounce" />
                <span className="absolute -top-2 -right-2 bg-crimson-red text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full border border-zinc-950">
                  Grade A+
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">NAAC Accreditation Cycle-I</h3>
                <span className="text-xs font-bold text-amber-400 block mt-0.5">National Assessment and Accreditation Council</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-black text-white">3.52</span>
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block">Cumulative Grade Point Average (CGPA)</span>
                  <span className="text-xs font-extrabold text-white">3.52 out of 4.00 (Grade A+)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block">Validity Period</span>
                  <span className="text-xs font-bold text-white">5 Years (2023 - 2028)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center shrink-0">
                  <Award size={16} className="text-rose-400" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block">Affiliated & Approved</span>
                  <span className="text-xs font-bold text-white">Affiliated to RTM Nagpur University | AICTE Approved</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-2">
              <button
                onClick={() => triggerDownload('NAAC A+ Official Grade Certificate', '1.4 MB')}
                className="w-full bg-crimson-red hover:bg-rose-700 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Download size={14} />
                <span>Download NAAC Certificate</span>
              </button>
              <button
                onClick={() => handleTabChange('ssr')}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/10"
              >
                <FileText size={14} />
                <span>View Cycle-I SSR Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Buttons / Tabs */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-2 mb-10 shadow-sm overflow-x-auto">
          <div className="flex items-center gap-1 min-w-max">
            {NAAC_TABS.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-crimson-red text-white shadow-md shadow-rose-900/20'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {/* 1. IQAC CELL OVERVIEW & COMMITTEE */}
            {activeTab === 'iqac' && (
              <div className="space-y-10">
                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="p-3 bg-rose-50 dark:bg-rose-950/40 text-crimson-red rounded-xl w-fit mb-4">
                      <Target size={22} />
                    </div>
                    <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white mb-2">IQAC Vision</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                      To establish a system for conscious, consistent, and catalytic action to improve the academic and administrative performance of ACET.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-600 rounded-xl w-fit mb-4">
                      <Sparkles size={22} />
                    </div>
                    <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white mb-2">Primary Objectives</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                      To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 rounded-xl w-fit mb-4">
                      <ShieldAlert size={22} />
                    </div>
                    <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white mb-2">IQAC Coordinator</h3>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">Dr. M. S. Khatib</p>
                    <p className="text-[11px] text-zinc-500 mb-2">Professor & Head, CSE Dept.</p>
                    <p className="text-[11px] text-crimson-red dark:text-rose-400 font-semibold">Email: iqac@anjumancollege.edu.in</p>
                  </div>
                </div>

                {/* IQAC Committee Table */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                    <div>
                      <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white">Internal Quality Assurance Cell (IQAC) Committee</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Constituted in accordance with UGC and NAAC guidelines</p>
                    </div>
                    <button
                      onClick={() => triggerDownload('IQAC Constitution & Committee Members List', '1.2 MB')}
                      className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-crimson-red hover:text-white text-zinc-800 dark:text-zinc-200 text-xs font-bold px-4 py-2 rounded-xl transition-all"
                    >
                      <Download size={14} />
                      <span>Download Constitution PDF</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-zinc-50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-800">
                          <th className="py-3 px-4 font-extrabold uppercase text-[10px]">#</th>
                          <th className="py-3 px-4 font-extrabold uppercase text-[10px]">Name of Member</th>
                          <th className="py-3 px-4 font-extrabold uppercase text-[10px]">Designation & Department</th>
                          <th className="py-3 px-4 font-extrabold uppercase text-[10px]">Role in IQAC</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                        {IQAC_COMMITTEE.map((member) => (
                          <tr key={member.srNo} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                            <td className="py-3 px-4 font-bold text-zinc-400">{member.srNo}</td>
                            <td className="py-3 px-4 font-bold text-zinc-900 dark:text-white">{member.name}</td>
                            <td className="py-3 px-4 text-zinc-600 dark:text-zinc-300">{member.designation} ({member.dept})</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                                member.role.includes('Chairperson') 
                                  ? 'bg-rose-100 text-crimson-red dark:bg-rose-950 dark:text-rose-300'
                                  : member.role.includes('Coordinator')
                                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                                  : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                              }`}>
                                {member.role}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 2. AQAR REPORTS */}
            {activeTab === 'aqar' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white mb-2">
                    Annual Quality Assurance Reports (AQAR)
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-6">
                    As mandated by NAAC, the Annual Quality Assurance Report (AQAR) details the academic, administrative, research, and infrastructure enhancements executed by ACET every academic year.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {AQAR_REPORTS.map((report, idx) => (
                      <div
                        key={idx}
                        className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 flex justify-between items-center hover:border-crimson-red/40 transition-all group"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-crimson-red dark:text-rose-400 uppercase tracking-widest block">
                            Academic Year: {report.year}
                          </span>
                          <h4 className="font-extrabold text-sm text-zinc-900 dark:text-white group-hover:text-crimson-red transition-colors">
                            {report.title}
                          </h4>
                          <span className="text-[11px] text-zinc-400 font-mono block">
                            Code: {report.code} • {report.size} • Submitted: {report.date}
                          </span>
                        </div>

                        <button
                          onClick={() => triggerDownload(report.title, report.size)}
                          className="p-3 bg-white dark:bg-zinc-900 hover:bg-crimson-red hover:text-white text-zinc-700 dark:text-zinc-200 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700 transition-all shrink-0 ml-4"
                          title="Download AQAR Report"
                        >
                          <Download size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. NAAC ACCREDITATION & CERTIFICATE */}
            {activeTab === 'accreditation' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-rose-50/50 dark:bg-rose-950/20 rounded-2xl border border-rose-100 dark:border-rose-900/30 text-center">
                    <div className="h-32 w-32 bg-white dark:bg-zinc-900 rounded-full border-4 border-amber-400 flex items-center justify-center shadow-xl mb-4 relative">
                      <Award size={60} className="text-crimson-red dark:text-rose-400" />
                      <span className="absolute -bottom-2 bg-amber-400 text-zinc-950 font-black text-xs px-3 py-1 rounded-full uppercase">
                        Grade A+
                      </span>
                    </div>
                    <h3 className="font-extrabold text-2xl text-zinc-900 dark:text-white">NAAC Accredited</h3>
                    <p className="text-xs font-bold text-crimson-red dark:text-rose-400 mt-1">CGPA: 3.52 / 4.00</p>
                    <p className="text-[11px] text-zinc-500 mt-2">Validity: 2023 to 2028</p>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="font-extrabold text-2xl text-zinc-900 dark:text-white">Official NAAC Grade & Accreditation Details</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                      Anjuman College of Engineering & Technology was evaluated and accredited by the National Assessment and Accreditation Council (NAAC) Peer Team. The institution achieved **Grade A+ with a CGPA of 3.52 on a 4-point scale**.
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-3 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                        <Check className="text-emerald-500" size={16} />
                        <span>Cycle-I Peer Team Audit Successfully Completed</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                        <Check className="text-emerald-500" size={16} />
                        <span>Approved by AICTE, New Delhi & DTE Maharashtra</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                        <Check className="text-emerald-500" size={16} />
                        <span>Affiliated to Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => triggerDownload('NAAC A+ Accreditation Official Certificate (2023-2028)', '1.4 MB')}
                        className="bg-crimson-red hover:bg-rose-700 text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
                      >
                        <Download size={15} />
                        <span>Download Official NAAC Certificate</span>
                      </button>
                      <button
                        onClick={() => triggerDownload('NAAC Peer Team Recommendations & Executive Report', '2.1 MB')}
                        className="bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 text-zinc-900 dark:text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2"
                      >
                        <FileText size={15} />
                        <span>Peer Team Executive Report</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. SELF STUDY REPORT (SSR) */}
            {activeTab === 'ssr' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white mb-2">Self-Study Report (SSR) - Cycle I</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-6">
                    Download the comprehensive Self-Study Report (SSR) submitted to NAAC, featuring institutional profile, evaluative reports of all engineering departments, and compliance matrices.
                  </p>

                  <div className="space-y-3">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                      <div>
                        <h4 className="font-extrabold text-sm text-zinc-900 dark:text-white">Complete Cycle-I Self Study Report (Full SSR)</h4>
                        <p className="text-[11px] text-zinc-500 font-mono">Size: 12.8 MB • PDF Document • Published 2023</p>
                      </div>
                      <button
                        onClick={() => triggerDownload('ACET NAAC Self Study Report Cycle-I', '12.8 MB')}
                        className="p-2.5 bg-crimson-red text-white hover:bg-rose-700 rounded-lg transition-all flex items-center gap-1.5 text-xs font-bold"
                      >
                        <Download size={14} />
                        <span>Download SSR</span>
                      </button>
                    </div>

                    <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                      <div>
                        <h4 className="font-extrabold text-sm text-zinc-900 dark:text-white">SSR Executive Summary & Institutional Eligibility (IIQA)</h4>
                        <p className="text-[11px] text-zinc-500 font-mono">Size: 2.4 MB • PDF Document</p>
                      </div>
                      <button
                        onClick={() => triggerDownload('SSR Executive Summary & IIQA Approval', '2.4 MB')}
                        className="p-2.5 bg-zinc-200 dark:bg-zinc-700 hover:bg-crimson-red hover:text-white text-zinc-800 dark:text-zinc-200 rounded-lg transition-all flex items-center gap-1.5 text-xs font-bold"
                      >
                        <Download size={14} />
                        <span>Download Executive Summary</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. STUDENT SATISFACTION SURVEY (SSS) */}
            {activeTab === 'sss' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white mb-2">Student Satisfaction Survey (SSS)</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-6">
                    In compliance with NAAC Criterion II, ACET conducts annual Student Satisfaction Surveys assessing teaching quality, laboratory facilities, mentorship, and career support.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-2xl border border-rose-100 dark:border-rose-900/30 text-center">
                      <span className="text-2xl font-black text-crimson-red dark:text-rose-400 block">94.2%</span>
                      <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-300">Overall Teaching Satisfaction</span>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-100 dark:border-amber-900/30 text-center">
                      <span className="text-2xl font-black text-amber-600 block">91.8%</span>
                      <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-300">Lab & Smart Infrastructure Rating</span>
                    </div>
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 text-center">
                      <span className="text-2xl font-black text-emerald-600 block">95.6%</span>
                      <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-300">Placement & Mentorship Satisfaction</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => triggerDownload('Student Satisfaction Survey (SSS) Comprehensive Analysis Report 2024-25', '2.1 MB')}
                      className="bg-crimson-red text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2"
                    >
                      <Download size={14} />
                      <span>Download SSS Analysis Report (PDF)</span>
                    </button>
                    <button
                      onClick={() => triggerDownload('SSS Questionnaire Format', '540 KB')}
                      className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2"
                    >
                      <FileText size={14} />
                      <span>Download SSS Questionnaire</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 6. NAAC CRITERIA DETAILS (I-VII) */}
            {activeTab === 'criteria' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm mb-6">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white mb-2">Seven Criteria of Assessment</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                    Detailed metric breakdown and downloadable supporting documents across all seven NAAC criteria.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {NAAC_CRITERIA_LIST.map((crit) => (
                    <div
                      key={crit.id}
                      className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-crimson-red/40 transition-all"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-black text-crimson-red dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-full border border-rose-200/40">
                            {crit.number}
                          </span>
                          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-md">
                            Score: {crit.score}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-base text-zinc-900 dark:text-white mb-2">{crit.title}</h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-4">
                          {crit.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center text-xs">
                        <span className="text-[11px] font-bold text-zinc-400">{crit.docs}</span>
                        <button
                          onClick={() => triggerDownload(`${crit.number} - ${crit.title} Metrics & Documentation`, '4.2 MB')}
                          className="p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-crimson-red hover:text-white text-zinc-800 dark:text-zinc-200 rounded-lg transition-all flex items-center gap-1 font-bold text-[11px]"
                        >
                          <Download size={13} />
                          <span>Docs</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. IQAC MINUTES & ATR */}
            {activeTab === 'minutes' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <h3 className="font-extrabold text-xl text-zinc-900 dark:text-white mb-2">IQAC Meeting Minutes & Action Taken Reports (ATR)</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-6">
                    Minutes of statutory quarterly meetings of the IQAC along with corresponding Action Taken Reports (ATR).
                  </p>

                  <div className="space-y-3">
                    {IQAC_MINUTES_LIST.map((meeting, idx) => (
                      <div
                        key={idx}
                        className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 flex justify-between items-center group hover:border-crimson-red/30 transition-all"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-zinc-900 dark:text-white">{meeting.term}</span>
                            <span className="text-[10px] text-zinc-400 font-medium">• {meeting.date}</span>
                          </div>
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 font-medium">Agenda: {meeting.agenda}</p>
                          <span className="text-[10px] text-zinc-400 font-mono block">Code: {meeting.code}</span>
                        </div>

                        <button
                          onClick={() => triggerDownload(`${meeting.term} Minutes & Action Taken Report`, '1.1 MB')}
                          className="p-2 bg-white dark:bg-zinc-900 hover:bg-crimson-red hover:text-white text-zinc-700 dark:text-zinc-200 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 transition-all shrink-0 ml-4"
                          title="Download Minutes PDF"
                        >
                          <Download size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 8. BEST PRACTICES & INSTITUTIONAL DISTINCTIVENESS */}
            {activeTab === 'best-practices' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Best Practice 1 */}
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <span className="text-xs font-extrabold text-crimson-red uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 px-3 py-1 rounded-full border border-rose-200/30 inline-block mb-3">
                      Institutional Best Practice 1
                    </span>
                    <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white mb-2">
                      Hands-On Skill Development through AICTE Idea Lab
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-4">
                      ACET established a state-of-the-art AICTE Idea Lab providing 24x7 prototyping facilities, 3D printing, laser cutting, and IoT testing for all engineering disciplines.
                    </p>
                    <button
                      onClick={() => triggerDownload('Best Practice 1 - AICTE Idea Lab & Prototyping Writeup', '1.8 MB')}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-crimson-red dark:text-rose-400 hover:underline"
                    >
                      <span>Download Best Practice 1 Details</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  {/* Best Practice 2 */}
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200/30 inline-block mb-3">
                      Institutional Best Practice 2
                    </span>
                    <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white mb-2">
                      Environmental Sustainability & Solar Green Campus
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-4">
                      100 kW rooftop solar installation, zero-waste rainwater harvesting system, and extensive community outreach via NSS & Unnat Bharat Abhiyan.
                    </p>
                    <button
                      onClick={() => triggerDownload('Best Practice 2 - Green Campus & Solar Energy Writeup', '1.6 MB')}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>Download Best Practice 2 Details</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Institutional Distinctiveness */}
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-200/30 inline-block mb-3">
                    Institutional Distinctiveness
                  </span>
                  <h3 className="font-extrabold text-2xl text-zinc-900 dark:text-white mb-3">
                    Empowering Diverse Youth through Affordable Quality Technical Education
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-6">
                    Managed by Anjuman Hami-E-Islam, ACET stands distinct in providing tier-1 accredited technical education with generous fee concessions, minority scholarships, and specialized mentorship programs ensuring zero dropouts and 88%+ campus placement rates.
                  </p>
                  <button
                    onClick={() => triggerDownload('Institutional Distinctiveness Official NAAC Writeup', '2.0 MB')}
                    className="bg-crimson-red text-white text-xs font-extrabold px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <Download size={15} />
                    <span>Download Institutional Distinctiveness Document</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Download Confirmation Toast */}
        <AnimatePresence>
          {downloadName && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-6 right-6 z-50 bg-zinc-950 text-white px-5 py-4 rounded-2xl shadow-2xl border border-zinc-800 flex items-center gap-3 text-xs sm:text-sm font-medium"
            >
              <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
              <div>
                <p className="font-bold">Official Document Generated</p>
                <p className="text-[11px] text-zinc-400 font-medium">Saved: {downloadName}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
