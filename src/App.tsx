import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TopAppBar from './components/TopAppBar';
import Hero from './components/Hero';
import Departments from './components/Departments';
import IndustryConnect from './components/IndustryConnect';
import Placements from './components/Placements';
import AlumniConnect from './components/AlumniConnect';
import EsteemedVisitors from './components/EsteemedVisitors';
import NoticeBoard from './components/NoticeBoard';
import Testimonials from './components/Testimonials';
import AdmissionsModal from './components/AdmissionsModal';
import LoginModal from './components/LoginModal';
import ResearchPortal from './components/ResearchPortal';
import CampusLife from './components/CampusLife';
import LifeAtACET from './components/LifeAtACET';
import AboutUs from './components/AboutUs';
import QuickLinksBar from './components/QuickLinksBar';
import Chatbot from './components/Chatbot';
import Library from './components/Library';
import Naac from './components/Naac';
import ContactUsPage from './components/ContactUsPage';
import { Phone, Mail, MapPin, ExternalLink, ChevronRight, Award, GraduationCap, FileText, Download, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedDeptId, setSelectedDeptId] = useState('all');
  const [selectedPlacementTab, setSelectedPlacementTab] = useState('about');
  const [selectedAboutTab, setSelectedAboutTab] = useState('about-trust');
  const [selectedResearchTab, setSelectedResearchTab] = useState('vision-mission');
  const [selectedLibraryTab, setSelectedLibraryTab] = useState('about-library');
  const [selectedAlumniTab, setSelectedAlumniTab] = useState('about-association');
  const [selectedNaacTab, setSelectedNaacTab] = useState('iqac');
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [preselectedBranch, setPreselectedBranch] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const downloadResource = (fileName: string, title: string, description: string) => {
    const content = `===========================================================\nANJUMAN COLLEGE OF ENGINEERING & TECHNOLOGY (ACET), NAGPUR\n===========================================================\n\nDOCUMENT: ${title.toUpperCase()}\nRELEASE DATE: Academic Year 2026-27\nSTATUS: Official Release\n\n-----------------------------------------------------------\nDESCRIPTION:\n${description}\n-----------------------------------------------------------\n\nThank you for downloading the official resources. For further assistance or direct admissions counseling, please visit the ACET Sadar Nagpur campus or contact us via our official helplines.\n\nWebsite: https://ai.studio/build\nEmail: eng_acet@rediffmail.com\nHelpline: +91 712 2582749\n\n© 2026 ACET Sadar Nagpur. All rights reserved.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Show visual confirmation toast
    setDownloadSuccess(fileName);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  const triggerBranchApplication = (branchName: string) => {
    setPreselectedBranch(branchName);
    setAdmissionsOpen(true);
  };

  const triggerGlobalApplication = () => {
    setPreselectedBranch('');
    setAdmissionsOpen(true);
  };

  const viewDepartmentProfile = (deptId: string) => {
    setSelectedDeptId(deptId);
    setActiveTab('Academics');
  };

  return (
    <div className="bg-[#fff8f7] text-[#271716] font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-rose-500/10 selection:text-crimson-red dark:bg-zinc-950 dark:text-zinc-100">
      
      {/* Floating NAAC Badge (Fixed on right, exactly matching the HTML specs) */}
      <div className="fixed top-24 right-6 z-40 pointer-events-none hidden md:block">
        <motion.img 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          alt="NAAC A+ accredited" 
          className="h-24 w-auto drop-shadow-2xl opacity-90 select-none" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzLTzICck0GcPqw1e0VycQBvEI3Lx-AhVcxRB5qAZiqmLTiEQNsSL9fFiGQK7vcBxxyLcsmTl-mlhcigY67T3Mjtpd0U5w5zFhUl5AAxtef_Ap2Z3r7JE3NIt2QdYUqQhgy1xHFCTI0of9GnprawOjT6SrFfMbuU_JeTt-UPmSp3JJiSOTqbqhY_T2jstnKzn7U2N-QDps2l0EMHV03bI9VVjWsc4NOL3owSbf4gY0wMa4ElOCGWfQw5I5sCUVvkpJ8Q" 
        />
      </div>

      {/* Main Top Header */}
      <TopAppBar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        selectedDeptId={selectedDeptId}
        setSelectedDeptId={setSelectedDeptId}
        selectedPlacementTab={selectedPlacementTab}
        setSelectedPlacementTab={setSelectedPlacementTab}
        selectedAboutTab={selectedAboutTab}
        setSelectedAboutTab={setSelectedAboutTab}
        selectedResearchTab={selectedResearchTab}
        setSelectedResearchTab={setSelectedResearchTab}
        selectedLibraryTab={selectedLibraryTab}
        setSelectedLibraryTab={setSelectedLibraryTab}
        selectedAlumniTab={selectedAlumniTab}
        setSelectedAlumniTab={setSelectedAlumniTab}
        selectedNaacTab={selectedNaacTab}
        setSelectedNaacTab={setSelectedNaacTab}
        onApplyNow={triggerGlobalApplication}
        onLogin={() => setLoginOpen(true)}
      />

      {/* Main content grid view states */}
      <main className={`flex-1 ${activeTab !== 'Home' ? 'pt-32 sm:pt-36' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            
            {/* VIEW STATE: HOME */}
            {activeTab === 'Home' && (
              <>
                <Hero 
                  onApplyNow={triggerGlobalApplication} 
                  onExplorePrograms={() => setActiveTab('Academics')} 
                />
                <Departments 
                  onApplyForDepartment={triggerBranchApplication} 
                  selectedDeptId="all"
                  setSelectedDeptId={setSelectedDeptId}
                  onViewDept={viewDepartmentProfile}
                />
                <Placements />
                <Testimonials />
                <IndustryConnect />
                <EsteemedVisitors />
                <NoticeBoard />
                <QuickLinksBar onOpenLogin={() => setLoginOpen(true)} />
                <LifeAtACET />
                <AlumniConnect />
              </>
            )}

            {/* VIEW STATE: ADMISSIONS */}
            {activeTab === 'Admissions' && (
              <div className="py-20 bg-zinc-50 dark:bg-zinc-950">
                <div className="max-w-4xl mx-auto px-6 text-left">
                  <div className="text-center mb-12">
                    <span className="bg-rose-50 dark:bg-rose-950/20 text-crimson-red font-bold text-xs px-3.5 py-1.5 rounded-full uppercase">Admissions Hub</span>
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-3">Course Registration Guidelines 2026-27</h2>
                    <p className="text-zinc-500 text-sm mt-2">B.Tech First-Year & Lateral Entry Admissions for meritorious candidates.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl space-y-4">
                      <div className="p-3 bg-rose-500/10 text-crimson-red rounded-xl w-fit">
                        <Award size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Admission Criteria</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Selection is completed under the central CAP rounds governed by the DTE Maharashtra. Candidate must possess valid scores in JEE Mains or MHT-CET, with at least 45% aggregate in 12th Standard board examinations.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl space-y-4">
                      <div className="p-3 bg-rose-500/10 text-crimson-red rounded-xl w-fit">
                        <GraduationCap size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-zinc-900 dark:text-white">Scholarships & Support</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Anjuman provides dedicated minority welfare fee concessions, tuition fee waiver schemes (TFWS), and helps candidates register for regional government scholarships.
                      </p>
                    </div>
                  </div>

                  {/* Enrollment CTA Block */}
                  <div className="bg-crimson-red text-white p-8 rounded-3xl text-center space-y-4 relative overflow-hidden shadow-xl">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl">Ready to enroll for ACET Nagpur batches?</h3>
                    <p className="text-xs text-rose-100 max-w-md mx-auto leading-relaxed">Fill out our multi-step provisional registration wizard online to verify eligibility and generate an admission counseling code.</p>
                    <button
                      onClick={triggerGlobalApplication}
                      className="bg-white hover:bg-zinc-50 text-zinc-950 font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95 inline-block mt-2"
                    >
                      Open Application Wizard
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW STATE: ACADEMICS */}
            {activeTab === 'Academics' && (
              <Departments 
                onApplyForDepartment={triggerBranchApplication} 
                selectedDeptId={selectedDeptId}
                setSelectedDeptId={setSelectedDeptId}
                onViewDept={viewDepartmentProfile}
              />
            )}

            {/* VIEW STATE: RESEARCH */}
            {activeTab === 'Research' && (
              <ResearchPortal 
                selectedTab={selectedResearchTab} 
                setSelectedTab={setSelectedResearchTab} 
              />
            )}

            {/* VIEW STATE: PLACEMENTS */}
            {activeTab === 'Placements' && (
              <Placements 
                selectedTab={selectedPlacementTab} 
                setSelectedTab={setSelectedPlacementTab} 
              />
            )}

            {/* VIEW STATE: CAMPUS LIFE */}
            {activeTab === 'Campus Life' && (
              <>
                <LifeAtACET />
                <CampusLife />
              </>
            )}

            {/* VIEW STATE: ABOUT */}
            {activeTab === 'About' && (
              <AboutUs 
                selectedTab={selectedAboutTab} 
                setSelectedTab={setSelectedAboutTab} 
              />
            )}

            {/* VIEW STATE: LIBRARY */}
            {activeTab === 'Library' && (
              <Library 
                selectedTab={selectedLibraryTab} 
                setSelectedTab={setSelectedLibraryTab} 
              />
            )}

            {/* VIEW STATE: ALUMNI */}
            {activeTab === 'Alumni' && (
              <AlumniConnect 
                selectedTab={selectedAlumniTab} 
                setSelectedTab={setSelectedAlumniTab} 
              />
            )}

            {/* VIEW STATE: NAAC */}
            {activeTab === 'Naac' && (
              <Naac 
                selectedTab={selectedNaacTab} 
                setSelectedTab={setSelectedNaacTab} 
              />
            )}

            {/* VIEW STATE: CONTACT */}
            {activeTab === 'Contact' && (
              <ContactUsPage />
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* College Resources Section */}
      <section id="college-resources-hub" className="bg-zinc-50 dark:bg-zinc-900/40 py-16 px-6 md:px-12 border-t border-zinc-200/50 dark:border-zinc-800/50 relative">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center md:text-left space-y-2">
            <span className="text-crimson-red dark:text-rose-400 font-sans font-extrabold text-xs uppercase tracking-wider bg-rose-500/5 dark:bg-rose-950/20 px-3.5 py-1.5 rounded-full">
              Resources & Publications
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-zinc-900 dark:text-white mt-3">
              Official Academic Downloads
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Access and download official publications, administrative guides, and statistical reports for Anjuman College of Engineering & Technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: College Prospectus */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-crimson-red/30 dark:hover:border-rose-500/30 transition-all duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-rose-500/10 text-crimson-red dark:text-rose-400 rounded-2xl">
                    <FileText size={24} />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                    PDF • 8.4 MB
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-lg text-zinc-900 dark:text-white group-hover:text-crimson-red dark:group-hover:text-rose-400 transition-colors">
                    College Prospectus 2026
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Explore detailed information about ACET Sadar Nagpur, including our campus infrastructure, department portals, elite faculty profiles, rules of conduct, and core curricula.
                  </p>
                </div>
              </div>
              <button
                onClick={() => downloadResource(
                  'College_Prospectus_2026.pdf',
                  'College Prospectus 2026',
                  'This is the official College Prospectus for Anjuman College of Engineering & Technology (ACET) Nagpur for the 2026-2027 academic session. It highlights our NAAC A+ accreditation, NBA-accredited courses, ultra-modern laboratories, spacious central library, active industry-academic partnerships, research accomplishments, and guidelines for student conduct.'
                )}
                className="mt-6 w-full bg-zinc-900 hover:bg-crimson-red text-white dark:bg-zinc-800 dark:hover:bg-rose-600 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              >
                <Download size={14} /> Download Prospectus
              </button>
            </div>

            {/* Card 2: Admission Guidelines */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-crimson-red/30 dark:hover:border-rose-500/30 transition-all duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-rose-500/10 text-crimson-red dark:text-rose-400 rounded-2xl">
                    <FileText size={24} />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                    PDF • 2.1 MB
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-lg text-zinc-900 dark:text-white group-hover:text-crimson-red dark:group-hover:text-rose-400 transition-colors">
                    Admission Guidelines PDF
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Check complete step-by-step admissions procedures under DTE CAP rounds, eligibility criteria for B.Tech First-Year & Lateral Entry, document checklists, and category-wise fee concessions.
                  </p>
                </div>
              </div>
              <button
                onClick={() => downloadResource(
                  'Admission_Guidelines_2026.pdf',
                  'Admission Guidelines PDF',
                  'This contains official Admission Guidelines for the 2026-27 intake at Anjuman College of Engineering & Technology. It covers seat allocation through MHT-CET/JEE Main CAP counseling, reservation policies, minority student enrollment, list of mandatory documents (including leaving certificate, caste certificate, and non-creamy layer), and fee schedules.'
                )}
                className="mt-6 w-full bg-zinc-900 hover:bg-crimson-red text-white dark:bg-zinc-800 dark:hover:bg-rose-600 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              >
                <Download size={14} /> Download Guidelines
              </button>
            </div>

            {/* Card 3: Placement Statistics */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl hover:border-crimson-red/30 dark:hover:border-rose-500/30 transition-all duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-rose-500/10 text-crimson-red dark:text-rose-400 rounded-2xl">
                    <FileText size={24} />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                    PDF • 1.5 MB
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-sans font-bold text-lg text-zinc-900 dark:text-white group-hover:text-crimson-red dark:group-hover:text-rose-400 transition-colors">
                    Placement Statistics Summary
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    View official recruitment reports featuring top companies, package distributions (highest and median CTCs), year-on-year growth trends, and alumni placed across tier-1 software & core engineering fields.
                  </p>
                </div>
              </div>
              <button
                onClick={() => downloadResource(
                  'Placement_Statistics_Summary.pdf',
                  'Placement Statistics Summary',
                  'This document compiles the placement records for Anjuman College of Engineering & Technology Nagpur. It details recruitment drives by giants such as TCS, Cognizant, Infosys, Capgemini, and core organizations, package distribution metrics, percentage of eligible students successfully selected, and special pre-placement training camps.'
                )}
                className="mt-6 w-full bg-zinc-900 hover:bg-crimson-red text-white dark:bg-zinc-800 dark:hover:bg-rose-600 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              >
                <Download size={14} /> Download Summary
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Toast feedback for download */}
      <AnimatePresence>
        {downloadSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-zinc-950 dark:bg-white text-white dark:text-zinc-900 px-5 py-4 rounded-2xl shadow-2xl border border-zinc-800 dark:border-zinc-200 flex items-center gap-3 font-sans font-medium text-xs sm:text-sm"
          >
            <CheckCircle2 className="text-emerald-500 dark:text-emerald-600 shrink-0" size={18} />
            <div>
              <p className="font-bold">Download Completed</p>
              <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">Successfully saved: <span className="text-white dark:text-zinc-900 font-bold">{downloadSuccess}</span></p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Institutional Footer (Exactly reflecting the original HTML) */}
      <footer className="bg-zinc-950 text-white border-t border-zinc-800 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          
          {/* Bottom Branding Column */}
          <div className="space-y-6">
            <div className="space-y-3 flex items-center gap-3">
              <div className="relative p-0.5 rounded-xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 shadow-md">
                <div className="bg-zinc-950 p-1 rounded-lg">
                  <img 
                    alt="ACET Logo Bottom" 
                    className="h-12 w-12 object-contain filter saturate-150 brightness-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQTnI8gCZb_8OaUSL3ipdSFLrEYgOMF9psA6Jm9ajmGrE7Gzth8BBo6q86rVIHDeMp35S_z49fl1MOzrXJ3N-mTbENf5oC7Do7UNB_6R2ko-2dUy5l9eORQReCKzkNb1irWX4zAo_wp8MOpAAHhcDcivwL12tvR0HI7C-s1LN5dUUqeUtvdCGCxGLub3NhUIRcU0aLqvw0YzL1e9t9sjNi-wVa4-IozAUWMpw2PnOQj2uZDK9ck6jbx1TBoZZKi1uhmA" 
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent text-base uppercase tracking-tight leading-none">Anjuman</span>
                <span className="text-zinc-400 text-xs font-semibold tracking-wider">College of Engineering & Technology</span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-zinc-400 leading-relaxed max-w-xs">
              Mangalwari Bazaar Road, Sadar, Nagpur - 440022, Maharashtra, India
            </p>

            <div className="flex gap-4">
              <a className="text-zinc-400 hover:text-white transition-colors" href="tel:+917122582749" aria-label="Call ACET Helpline">
                <Phone size={18} />
              </a>
              <a className="text-zinc-400 hover:text-white transition-colors" href="mailto:eng_acet@rediffmail.com" aria-label="Email ACET Inbox">
                <Mail size={18} />
              </a>
              <a className="text-zinc-400 hover:text-white transition-colors" href="https://maps.google.com" target="_blank" rel="noreferrer" aria-label="Find Sadar Campus on Maps">
                <MapPin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-white text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li>
                <button onClick={() => setActiveTab('Admissions')} className="hover:text-white transition-all hover:translate-x-1 flex items-center gap-1">
                  <ChevronRight size={12} /> Admissions 2026
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Academics')} className="hover:text-white transition-all hover:translate-x-1 flex items-center gap-1">
                  <ChevronRight size={12} /> Academic Departments
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Placements')} className="hover:text-white transition-all hover:translate-x-1 flex items-center gap-1">
                  <ChevronRight size={12} /> Success Placements
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('Research')} className="hover:text-white transition-all hover:translate-x-1 flex items-center gap-1">
                  <ChevronRight size={12} /> Research Publications
                </button>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-white text-base">Governance & Disclosures</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                <ChevronRight size={12} /> AICTE Feedback Desk <ExternalLink size={11} className="opacity-60" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                <ChevronRight size={12} /> Mandatory Public Disclosures <ExternalLink size={11} className="opacity-60" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                <ChevronRight size={12} /> Students Grievance Redressal Cell
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
                <ChevronRight size={12} /> ACET Alumni Directory & Mentor Pool
              </li>
            </ul>
          </div>

          {/* Legal / AICTE accreditation */}
          <div className="space-y-4 text-xs text-zinc-400">
            <h4 className="font-sans font-bold text-white text-base">Accreditation Info</h4>
            <p className="leading-relaxed font-medium">
              Anjuman College of Engineering & Technology (ACET) is recognized by Government of Maharashtra, approved by AICTE, New Delhi, and affiliated to Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU).
            </p>
            <p className="pt-2 text-[11px] text-zinc-500 font-bold border-t border-zinc-800">
              © 2026 ACET Sadar Nagpur. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      {/* Floating Application Wizard Form modal */}
      <AnimatePresence>
        {admissionsOpen && (
          <AdmissionsModal 
            isOpen={admissionsOpen} 
            onClose={() => setAdmissionsOpen(false)} 
            preselectedBranch={preselectedBranch}
          />
        )}
      </AnimatePresence>

      {/* Intranet Faculty/Student Portal login modal */}
      <AnimatePresence>
        {loginOpen && (
          <LoginModal 
            isOpen={loginOpen} 
            onClose={() => setLoginOpen(false)} 
          />
        )}
      </AnimatePresence>

      {/* Floating Chatbot Assistant */}
      <Chatbot onOpenAdmissions={() => setAdmissionsOpen(true)} />

    </div>
  );
}
