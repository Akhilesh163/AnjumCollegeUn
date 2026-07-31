import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEPARTMENTS } from '../data';
import { Department } from '../types';
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Cpu, 
  FileSpreadsheet, 
  X, 
  HelpCircle, 
  GraduationCap, 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  Award, 
  ExternalLink, 
  Mail, 
  Phone,
  BookOpenCheck
} from 'lucide-react';

interface DepartmentsProps {
  onApplyForDepartment: (deptName: string) => void;
  selectedDeptId?: string;
  setSelectedDeptId?: (id: string) => void;
  onViewDept?: (id: string) => void;
}

export default function Departments({ 
  onApplyForDepartment, 
  selectedDeptId = 'all', 
  setSelectedDeptId,
  onViewDept
}: DepartmentsProps) {
  
  // Local state as a fallback if props are not fully connected
  const [localSelectedDeptId, setLocalSelectedDeptId] = useState<string | null>(null);
  
  // Use the prop-provided state if available, otherwise fallback to local
  const currentDeptId = selectedDeptId !== 'all' ? selectedDeptId : localSelectedDeptId;
  const isDetailedView = !!currentDeptId;

  // Selected department details
  const activeDept = DEPARTMENTS.find(d => d.id === currentDeptId);

  // Sub-tabs for the detailed department profile page
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'labs' | 'features' | 'inquire'>('overview');
  
  // Inquiry form states
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryPhone('');
      setInquiryMsg('');
    }, 4000);
  };

  const handleBackToAll = () => {
    if (setSelectedDeptId) {
      setSelectedDeptId('all');
    } else {
      setLocalSelectedDeptId(null);
    }
    setActiveSubTab('overview');
  };

  const handleViewDetails = (deptId: string) => {
    if (onViewDept) {
      onViewDept(deptId);
    } else if (setSelectedDeptId) {
      setSelectedDeptId(deptId);
    } else {
      setLocalSelectedDeptId(deptId);
    }
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  // If detailed view is active, render the dedicated high-fidelity Department Profile Page
  if (isDetailedView && activeDept) {
    const isFirstYear = activeDept.id === 'firstyear';

    return (
      <section className="py-12 px-6 md:px-12 bg-white dark:bg-zinc-950 text-left min-h-screen">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Breadcrumb Navigation & Back Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">
              <span>Academics</span>
              <span>/</span>
              <span>Our Departments</span>
              <span>/</span>
              <span className="text-crimson-red dark:text-rose-400">{activeDept.name}</span>
            </div>
            
            <button
              onClick={handleBackToAll}
              className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 hover:text-crimson-red dark:hover:text-rose-400 transition-colors w-fit group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to All Departments
            </button>
          </div>

          {/* Spectacular Department Profile Hero Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80 flex items-end">
            <img 
              alt={activeDept.fullName} 
              className="absolute inset-0 w-full h-full object-cover filter brightness-95" 
              src={activeDept.image} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/45 to-transparent"></div>
            
            <div className="relative p-6 md:p-10 text-white space-y-2 max-w-4xl">
              <span className="bg-crimson-red text-[10px] sm:text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full border border-rose-400/30">
                Department Profile
              </span>
              <h1 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-none pt-2">
                {activeDept.fullName}
              </h1>
              <p className="text-zinc-200 text-xs sm:text-sm max-w-3xl font-medium leading-relaxed drop-shadow-sm">
                {activeDept.description}
              </p>
            </div>

            {/* floating badges */}
            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2">
              <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg border border-white/10">
                Accredited Course
              </span>
              <span className="bg-emerald-500 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg">
                NAAC A+ Approved
              </span>
            </div>
          </div>

          {/* Quick Statistics Dashboard Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-4 shadow-sm">
              <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-crimson-red dark:text-rose-400 rounded-xl">
                <Users size={22} />
              </div>
              <div>
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Student Intake</span>
                <span className="font-sans font-black text-lg text-zinc-900 dark:text-white leading-tight">{activeDept.intake} Seats/Yr</span>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-4 shadow-sm">
              <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-crimson-red dark:text-rose-400 rounded-xl">
                <Calendar size={22} />
              </div>
              <div>
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Course Duration</span>
                <span className="font-sans font-black text-base text-zinc-900 dark:text-white leading-tight">{activeDept.duration}</span>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-4 shadow-sm">
              <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-crimson-red dark:text-rose-400 rounded-xl">
                <BookOpen size={22} />
              </div>
              <div>
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Department Head</span>
                <span className="font-sans font-black text-sm text-zinc-900 dark:text-white leading-tight truncate max-w-[160px] block">{activeDept.hodName}</span>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-4 shadow-sm">
              <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-crimson-red dark:text-rose-400 rounded-xl">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Avg Placement</span>
                <span className="font-sans font-black text-lg text-zinc-900 dark:text-white leading-tight">{activeDept.averagePlacement}</span>
              </div>
            </div>

          </div>

          {/* Main 2-Column Academic content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Hand: Sub-Tabs and detailed data (8 Columns) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Profile Sub-Navigation Tabs */}
              <div className="flex border-b border-zinc-100 dark:border-zinc-800 gap-1.5 overflow-x-auto pb-0.5">
                {[
                  { id: 'overview', label: 'Overview', icon: BookOpen },
                  { id: 'labs', label: 'Laboratories', icon: Cpu },
                  { id: 'features', label: 'Key Highlights', icon: FileSpreadsheet },
                  { id: 'inquire', label: 'Quick Inquiry', icon: HelpCircle }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isTabActive = activeSubTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveSubTab(tab.id as any);
                        setInquirySubmitted(false);
                      }}
                      className={`flex items-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all border-b-2 shrink-0 ${
                        isTabActive
                          ? 'border-crimson-red text-crimson-red font-black'
                          : 'border-transparent text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                      }`}
                    >
                      <Icon size={14} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Display Area */}
              <div className="bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-100/80 dark:border-zinc-900 rounded-3xl p-6 md:p-8 min-h-[300px]">
                
                {/* 1. OVERVIEW TAB */}
                {activeSubTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-sans font-extrabold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
                        <Award size={18} className="text-crimson-red" />
                        About {activeDept.fullName}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                        The {activeDept.fullName} at Anjuman College of Engineering & Technology, Nagpur, is renowned for its exceptional pedagogy, hands-on lab instructions, and dedicated mentoring setups. Our engineering streams are designed to address both foundational principles and emerging technological disruption.
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                        Through close partnerships with central government forums, industrial corporations, and national coding registries, our undergraduates are equipped with problem-solving acumen, social responsibilities, and industry readiness.
                      </p>
                    </div>

                    {/* HOD Statement Card */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 rounded-2xl shadow-sm relative overflow-hidden">
                      <div className="absolute top-4 right-4 text-rose-500/10 dark:text-rose-500/5 font-serif text-8xl font-black select-none leading-none">“</div>
                      <div className="flex flex-col sm:flex-row gap-5 items-start">
                        <div className="h-16 w-16 rounded-full bg-rose-500/10 text-crimson-red flex items-center justify-center font-extrabold text-xl shrink-0 border border-rose-200/20">
                          {activeDept.hodName.split(' ').pop()?.substring(0,2).toUpperCase() || 'HOD'}
                        </div>
                        <div className="space-y-2 text-left">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-crimson-red dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 px-2 py-0.5 rounded">HOD MESSAGE</span>
                          <h4 className="font-sans font-bold text-sm text-zinc-900 dark:text-white">Message from {activeDept.hodName}</h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 italic leading-relaxed">
                            &quot;Welcome to our department profile page. We aim to nurture competent and technically sound engineers equipped with leadership skills and ethical values. Our world-class infrastructure, sophisticated laboratories, and regular skill development forums ensure our graduates make a meaningful impact across industrial environments globally.&quot;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. LABORATORIES TAB */}
                {activeSubTab === 'labs' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-sans font-extrabold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
                        <Cpu size={18} className="text-crimson-red" />
                        State-of-the-art Infrastructure
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                        We host specialized experimental domains equipped with modern testing units, software simulators, and hardware apparatus.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeDept.labs.map((lab, idx) => (
                        <div 
                          key={idx} 
                          className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 rounded-2xl flex gap-4 items-start shadow-sm hover:shadow-md transition-all border-l-4 border-l-crimson-red"
                        >
                          <div className="p-2.5 bg-rose-500/10 text-crimson-red dark:text-rose-400 rounded-xl shrink-0">
                            <BookOpenCheck size={18} />
                          </div>
                          <div className="text-left">
                            <h4 className="font-sans font-bold text-sm text-zinc-900 dark:text-white mb-1.5">{lab}</h4>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              Equipped with cutting-edge experimental kits, licensed simulation suites, and high-speed broadband lines to complete advanced university coursework and independent project research.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. KEY HIGHLIGHTS TAB */}
                {activeSubTab === 'features' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-sans font-extrabold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
                        <FileSpreadsheet size={18} className="text-crimson-red" />
                        Key Branch Features & Strengths
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                        Unique learning strategies and industrial capabilities taught exclusively inside our branch.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {activeDept.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="bg-white dark:bg-zinc-900 border border-zinc-100/50 dark:border-zinc-800/80 p-4 rounded-xl flex gap-3.5 items-start text-zinc-700 dark:text-zinc-300 shadow-sm"
                        >
                          <CheckCircle2 className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" size={16} />
                          <span className="text-xs font-semibold leading-relaxed text-left">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-rose-500/5 dark:bg-rose-950/10 border border-rose-200/20 dark:border-rose-900/20 p-5 rounded-2xl space-y-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-crimson-red dark:text-rose-400">Continuous Industry Mentorship</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        We regularly hold value-added courses, software workshops, bootcamps on latest coding systems, and host expert talks from corporate directors so that candidates stay aligned with global technology requirements.
                      </p>
                    </div>
                  </div>
                )}

                {/* 4. QUICK INQUIRY TAB */}
                {activeSubTab === 'inquire' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-sans font-extrabold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
                        <HelpCircle size={18} className="text-crimson-red" />
                        Quick Admissions Inquiry
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                        Submit a fast inquiry to the {activeDept.name} admissions coordinator. We will reply within 24 hours.
                      </p>
                    </div>

                    {inquirySubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-8 bg-emerald-500/10 text-center border border-emerald-500/20 rounded-2xl space-y-3"
                      >
                        <CheckCircle2 className="text-emerald-500 mx-auto" size={40} />
                        <h4 className="font-sans font-black text-lg text-zinc-900 dark:text-white">Inquiry Received Successfully!</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                          Your branch counseling code has been registered. An admissions officer for the {activeDept.name} department will contact you at your provided phone number shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleInquirySubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="block text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Full Name *</label>
                            <input 
                              required
                              value={inquiryName}
                              onChange={(e) => setInquiryName(e.target.value)}
                              placeholder="e.g. Amaan Sheikh" 
                              className="w-full text-xs font-semibold px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-rose-500/15 outline-none transition-all dark:text-white"
                            />
                          </div>
                          
                          <div className="space-y-1">
                            <label className="block text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Contact Number *</label>
                            <input 
                              required
                              type="tel"
                              value={inquiryPhone}
                              onChange={(e) => setInquiryPhone(e.target.value)}
                              placeholder="e.g. +91 9876543210" 
                              className="w-full text-xs font-semibold px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-rose-500/15 outline-none transition-all dark:text-white"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Email Address</label>
                          <input 
                            type="email"
                            value={inquiryEmail}
                            onChange={(e) => setInquiryEmail(e.target.value)}
                            placeholder="e.g. candidate@domain.com" 
                            className="w-full text-xs font-semibold px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-rose-500/15 outline-none transition-all dark:text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Inquiry Message</label>
                          <textarea 
                            rows={3}
                            value={inquiryMsg}
                            onChange={(e) => setInquiryMsg(e.target.value)}
                            placeholder="State your entry query, CET/JEE percentile, or specific seat inquiry..." 
                            className="w-full text-xs font-semibold px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-rose-500/15 outline-none transition-all dark:text-white resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-crimson-red hover:bg-[#93000f] text-white text-xs font-extrabold uppercase tracking-widest py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98]"
                        >
                          Submit Branch Inquiry
                        </button>
                      </form>
                    )}
                  </div>
                )}

              </div>

            </div>

            {/* Right Hand Column: CTA, Download Documents and HOD Helpline (4 Columns) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Floating Action Registry Card */}
              <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 text-center space-y-5 shadow-lg">
                <span className="inline-block bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border border-emerald-200/20">
                  Admissions Open 2026-27
                </span>
                
                <div className="space-y-2">
                  <h3 className="font-sans font-black text-xl text-zinc-900 dark:text-white">Apply for this Branch</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Verify eligibility & reserve your B.Tech counseling slot in {activeDept.name} under DTE CAP rounds securely online.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onApplyForDepartment(activeDept.name)}
                    className="w-full bg-crimson-red hover:bg-[#93000f] text-white text-xs font-extrabold uppercase tracking-widest py-4 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    Apply for {isFirstYear ? 'Foundation' : 'Branch'}
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-4 text-left">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 mb-2">Required Credentials</span>
                  <ul className="space-y-1.5 text-[11px] text-zinc-600 dark:text-zinc-400 font-semibold">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-crimson-red rounded-full" />
                      MHT-CET / JEE Score Card
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-crimson-red rounded-full" />
                      HSC (12th) Board Certificate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-crimson-red rounded-full" />
                      Domicile / Minority Proof (If applicable)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Department Contacts Block */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-6 rounded-2xl shadow-sm text-left space-y-4">
                <h4 className="font-sans font-extrabold text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Department Coordinator Helpdesk</h4>
                
                <div className="space-y-3">
                  <div className="flex gap-3 items-center text-xs text-zinc-600 dark:text-zinc-300 font-semibold">
                    <div className="p-2 bg-rose-50 dark:bg-zinc-800 text-crimson-red dark:text-rose-400 rounded-lg">
                      <Phone size={14} />
                    </div>
                    <a href="tel:+917122582749" className="hover:text-crimson-red transition-colors">+91 712 2582749</a>
                  </div>

                  <div className="flex gap-3 items-center text-xs text-zinc-600 dark:text-zinc-300 font-semibold">
                    <div className="p-2 bg-rose-50 dark:bg-zinc-800 text-crimson-red dark:text-rose-400 rounded-lg">
                      <Mail size={14} />
                    </div>
                    <a href="mailto:eng_acet@rediffmail.com" className="hover:text-crimson-red transition-colors truncate">eng_acet@rediffmail.com</a>
                  </div>
                </div>

                <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">
                  For physical counseling or lab tours, please report to the Department Head, Second Floor, Academic Building 1, ACET Sadar Nagpur campus.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    );
  }

  // STANDARD VIEW: Render the beautiful Grid list of all 7 Academic Departments
  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-zinc-900 border-b border-rose-50/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-xs text-crimson-red uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 px-3.5 py-1.5 rounded-full border border-rose-200/30">
            Academics
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-3 mb-4">
            Our Academic Departments
          </h2>
          <div className="h-1 w-20 bg-crimson-red mx-auto rounded-full mb-4"></div>
          <p className="font-sans text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto text-base">
            Explore our state-of-the-art engineering streams designed to empower students with technical competence, industrial readiness, and ethical standards.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              id={`dept-card-${dept.id}`}
            >
              <div>
                {/* Department Banner Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    alt={dept.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={dept.image} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                    <span className="bg-crimson-red text-white text-[10px] font-bold px-2.5 py-1 rounded">
                      Intake: {dept.intake} seats
                    </span>
                    <span className="text-xs font-semibold backdrop-blur-md bg-white/20 px-2.5 py-1 rounded">
                      {dept.id === 'firstyear' ? 'Foundation Stream' : 'B.Tech Full-Time'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 text-left">
                  <h3 className="font-sans font-black text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-crimson-red transition-colors">
                    {dept.name}
                  </h3>
                  <p className="font-sans text-zinc-600 dark:text-zinc-300 text-xs mb-4 line-clamp-3 leading-relaxed font-semibold">
                    {dept.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-zinc-100/50 dark:border-zinc-800/35 flex justify-between items-center">
                <button
                  onClick={() => handleViewDetails(dept.id)}
                  className="text-crimson-red hover:text-[#93000f] font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  id={`learn-more-${dept.id}`}
                >
                  View Details 
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => onApplyForDepartment(dept.name)}
                  className="bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/20 dark:hover:bg-rose-900/30 text-crimson-red font-sans font-bold text-xs px-3.5 py-2 rounded-lg transition-all"
                >
                  Apply Branch
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
