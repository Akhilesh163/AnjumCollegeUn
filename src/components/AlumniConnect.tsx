import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Award, 
  UserPlus, 
  Star, 
  Calendar, 
  Image as ImageIcon, 
  Search, 
  MessageSquare, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Building, 
  GraduationCap, 
  CheckCircle2, 
  Send, 
  ExternalLink, 
  Sparkles, 
  Globe, 
  Briefcase, 
  ChevronRight,
  ShieldCheck,
  Check,
  Clock,
  FileText
} from 'lucide-react';

interface AlumniProps {
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
}

export const ALUMNI_NAVIGATION = [
  { id: 'about-association', label: 'About Association', icon: Users },
  { id: 'executive-committee', label: 'Executive Committee', icon: Award },
  { id: 'registration', label: 'Alumni Registration', icon: UserPlus },
  { id: 'distinguished-alumni', label: 'Distinguished Alumni', icon: Star },
  { id: 'alumni-meets', label: 'Meets & Events', icon: Calendar },
  { id: 'gallery', label: 'Photo Gallery', icon: ImageIcon },
  { id: 'directory', label: 'Alumni Directory', icon: Search },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'giving-back', label: 'Giving Back', icon: Heart },
  { id: 'contacts', label: 'Cell Contacts', icon: Phone }
];

const MOCK_DISTINGUISHED_ALUMNI = [
  {
    name: 'Er. Suhail Ahmed',
    batch: '2012',
    branch: 'Computer Science & Engg.',
    company: 'Google LLC',
    role: 'Staff Software Engineer',
    location: 'Mountain View, USA',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    quote: 'ACET provided me with a strong foundation in algorithmic thinking and practical problem solving that made my journey to Silicon Valley possible.',
    category: 'Tech'
  },
  {
    name: 'Er. Fozia Sheikh',
    batch: '2015',
    branch: 'Electronics & Comm.',
    company: 'Intel Corporation',
    role: 'Principal Hardware Architect',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    quote: 'The hands-on VLSI and microprocessor labs at ACET gave me the confidence to lead chip design teams globally.',
    category: 'Core'
  },
  {
    name: 'Er. Arshad Pathan',
    batch: '2010',
    branch: 'Mechanical Engineering',
    company: 'Tesla Motors',
    role: 'Director of Manufacturing',
    location: 'Austin, Texas, USA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    quote: 'Our robotics and CAD/CAM faculty pushed us to innovate. I proud to carry the ACET legacy in electric mobility innovation.',
    category: 'Core'
  },
  {
    name: 'Er. Aamir Khan',
    batch: '2014',
    branch: 'Civil Engineering',
    company: 'L&T Infra Projects',
    role: 'Senior Project Manager',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    quote: 'Managing multi-crore infrastructure projects requires structural rigor, a virtue instilled in us during our four years at ACET Nagpur.',
    category: 'Infrastructure'
  },
  {
    name: 'Er. Saba Parveen',
    batch: '2016',
    branch: 'Electrical Engineering',
    company: 'Siemens Energy',
    role: 'Lead Smart Grid Engineer',
    location: 'Munich, Germany',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    quote: 'ACET encouraged research papers and technical symposiums that helped me transition seamlessly to renewable energy engineering in Europe.',
    category: 'Core'
  },
  {
    name: 'Er. Rizwan Siddiqui',
    batch: '2018',
    branch: 'Computer Science & Engg.',
    company: 'NextGen AI Labs',
    role: 'Founder & CEO',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300',
    quote: 'The entrepreneurship cell at ACET mentored my first startup prototype. Today we employ over 120 engineers in Dubai & India.',
    category: 'Entrepreneurship'
  }
];

const MOCK_DIRECTORY = [
  { name: 'Suhail Ahmed', class: '2012', branch: 'Computer Science', company: 'Google', location: 'USA', email: 's.ahmed@google.com' },
  { name: 'Fozia Sheikh', class: '2015', branch: 'Electronics & Comm.', company: 'Intel', location: 'India', email: 'fozia.s@intel.com' },
  { name: 'Arshad Pathan', class: '2010', branch: 'Mechanical Engg.', company: 'Tesla', location: 'USA', email: 'apathan@tesla.com' },
  { name: 'Yusuf Ali', class: '2020', branch: 'Civil Engineering', company: 'L&T Infra', location: 'India', email: 'yusuf.ali@lnt.com' },
  { name: 'Nida Mirza', class: '2019', branch: 'Artificial Intelligence', company: 'Microsoft', location: 'Hyderabad, India', email: 'nida.m@microsoft.com' },
  { name: 'Tariq Anwar', class: '2017', branch: 'Electrical Engg.', company: 'Tata Power', location: 'Pune, India', email: 'tariq.a@tatapower.com' },
  { name: 'Zeenat Kausar', class: '2021', branch: 'Data Science', company: 'Amazon', location: 'Bangalore, India', email: 'zeenat.k@amazon.com' },
  { name: 'Mohd Sameer', class: '2013', branch: 'Mechanical Engg.', company: 'Mahindra & Mahindra', location: 'Nagpur, India', email: 'm.sameer@mahindra.com' }
];

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', title: 'Grand Reunion Meet 2025', tag: 'Reunion' },
  { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800', title: 'Alumni Excellence Award Night', tag: 'Awards' },
  { url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800', title: 'Gulf Chapter Alumni Meet - Dubai', tag: 'Global' },
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', title: 'Alumni Interaction with Final Year Students', tag: 'Mentorship' },
  { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', title: 'Silver Jubilee Celebration (Batch 2000)', tag: 'Reunion' },
  { url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800', title: 'Campus Nostalgia Walk & High Tea', tag: 'Campus' }
];

export default function AlumniConnect({ selectedTab = 'about-association', setSelectedTab }: AlumniProps) {
  const [activeSubTab, setActiveSubTab] = useState(selectedTab);

  // Synchronize prop updates
  useEffect(() => {
    if (selectedTab) {
      setActiveSubTab(selectedTab);
    }
  }, [selectedTab]);

  const handleTabChange = (tabId: string) => {
    setActiveSubTab(tabId);
    if (setSelectedTab) {
      setSelectedTab(tabId);
    }
  };

  // State for forms & search
  const [searchQuery, setSearchQuery] = useState('');
  const [branchFilter, setBranchFilter] = useState('ALL');
  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '2020',
    branch: 'Computer Science & Engineering',
    company: '',
    role: '',
    location: '',
    linkedin: '',
    willingness: 'Mentorship'
  });
  const [regSubmitted, setRegSubmitted] = useState(false);
  const [regId, setRegId] = useState('');

  // RSVP state
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  const filteredDirectory = MOCK_DIRECTORY.filter(al => {
    const matchesSearch = al.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          al.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          al.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBranch = branchFilter === 'ALL' || al.branch.toLowerCase().includes(branchFilter.toLowerCase());
    return matchesSearch && matchesBranch;
  });

  const handleRegSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (regForm.name && regForm.email) {
      const generatedId = `ACET-ALM-${Math.floor(100000 + Math.random() * 900000)}`;
      setRegId(generatedId);
      setRegSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-crimson-red via-[#8a141c] to-zinc-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <GraduationCap size={320} />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-rose-200">
              <Sparkles size={14} />
              Anjuman College of Engineering & Technology Alumni Cell
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Global Alumni Network
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Connecting over 15,000+ ACET graduates around the globe. Fostering lifelong relationships, career mentorship, campus reunions, and alumni contribution towards excellence.
            </p>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-white dark:bg-zinc-900 p-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1 min-w-max">
            {ALUMNI_NAVIGATION.map((nav) => {
              const Icon = nav.icon;
              const isActive = activeSubTab === nav.id;
              return (
                <button
                  key={nav.id}
                  onClick={() => handleTabChange(nav.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-crimson-red text-white shadow-md shadow-crimson-red/20' 
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span>{nav.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="transition-all duration-300">
          
          {/* TAB 1: ABOUT ASSOCIATION */}
          {activeSubTab === 'about-association' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 text-left">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="md:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-crimson-red rounded-2xl">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">About ACET Alumni Association</h2>
                      <span className="text-xs text-crimson-red font-semibold">Registered under Societies Registration Act XXI of 1860</span>
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                    The Anjuman College of Engineering & Technology Alumni Association was founded to create an active forum for lifelong engagement between our alma mater and its former students. Registered with the Registrar of Societies, the association serves as a bridge uniting engineers across various industries, research institutions, and global geographies.
                  </p>

                  <div className="space-y-4 pt-2">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">Key Objectives:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Fostering strong professional connections among ACET graduates.',
                        'Providing career guidance and placement opportunities for current students.',
                        'Organizing technical talks, guest lectures, and industrial workshops.',
                        'Sponsoring merit-cum-need scholarships for underprivileged engineering candidates.',
                        'Facilitating alumni reunions, regional chapter meets, and award galas.',
                        'Supporting institutional growth and curriculum alignment with industry demands.'
                      ].map((obj, index) => (
                        <div key={index} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800">
                          <CheckCircle2 size={16} className="text-crimson-red shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Stats Sidebar */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 rounded-3xl shadow-xl space-y-6">
                    <h3 className="text-lg font-bold text-rose-300 uppercase tracking-wider text-xs">Alumni Association Impact</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-extrabold text-white">15,000+</div>
                        <div className="text-xs text-zinc-400 font-medium">Registered Alumni</div>
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-white">25+</div>
                        <div className="text-xs text-zinc-400 font-medium">Countries Worldwide</div>
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-white">12</div>
                        <div className="text-xs text-zinc-400 font-medium">Regional Chapters</div>
                      </div>
                      <div>
                        <div className="text-3xl font-extrabold text-white">450+</div>
                        <div className="text-xs text-zinc-400 font-medium">Active Mentors</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-700/60">
                      <button 
                        onClick={() => handleTabChange('registration')}
                        className="w-full bg-crimson-red hover:bg-rose-700 text-white font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <UserPlus size={16} />
                        Register as Alumni Now
                      </button>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-left">
                    <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">President's Message</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 italic">
                      "As alumni of ACET Nagpur, we carry the flag of ethical engineering and excellence wherever we go. I invite all fellow alumni to register and contribute back to our beloved institution."
                    </p>
                    <div className="mt-3 text-xs font-bold text-crimson-red">
                      Er. Imran Sheikh <span className="font-normal text-zinc-500">(President, ACET Alumni Cell)</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 2: EXECUTIVE COMMITTEE */}
          {activeSubTab === 'executive-committee' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-left">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Executive Committee & Office Bearers</h2>
                  <p className="text-xs text-zinc-500 mt-1">Governing body of Anjuman College of Engineering & Technology Alumni Association</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { role: 'Patron In Chief', name: 'Dr. Syed Mohammad Ali', desc: 'Principal, ACET Nagpur', email: 'principal@anjumanengg.edu.in' },
                    { role: 'President', name: 'Er. Imran Sheikh', desc: 'Batch 2008 (CSE), MD Apex Tech Solutions', email: 'imran.president@acetalumni.in' },
                    { role: 'Vice President', name: 'Er. Sameer Khan', desc: 'Batch 2011 (ETC), Senior Architect Infosys', email: 'sameer.vp@acetalumni.in' },
                    { role: 'Secretary', name: 'Prof. Dr. M. S. Khatib', desc: 'Head of Department, Computer Science', email: 'mskhatib@anjumanengg.edu.in' },
                    { role: 'Joint Secretary', name: 'Er. Shabana Parveen', desc: 'Batch 2014 (Mech), Lead Engineer TCS', email: 'shabana.sec@acetalumni.in' },
                    { role: 'Treasurer', name: 'Er. Zeeshan Ahmed', desc: 'Batch 2012 (Civil), Financial Director Deloitte', email: 'zeeshan.treasurer@acetalumni.in' }
                  ].map((member, idx) => (
                    <div key={idx} className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-crimson-red/40 transition-all flex flex-col justify-between">
                      <div>
                        <span className="bg-rose-100 dark:bg-rose-950/40 text-crimson-red text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {member.role}
                        </span>
                        <h3 className="font-bold text-zinc-900 dark:text-white text-lg mt-3">{member.name}</h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{member.desc}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-700/50 flex items-center gap-2 text-xs text-crimson-red font-medium">
                        <Mail size={14} />
                        <span className="truncate">{member.email}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-3">Departmental Faculty Coordinators</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-zinc-700 dark:text-zinc-300">
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl">Prof. Nazish Khan (CSE)</div>
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl">Prof. Tirupati Goskula (ETC)</div>
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl">Prof. Kamlesh Kelkar (Mech)</div>
                    <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl">Prof. Mohammad Sohail (Civil)</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: ALUMNI REGISTRATION */}
          {activeSubTab === 'registration' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-left">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm max-w-3xl mx-auto">
                
                <div className="text-center mb-8">
                  <span className="bg-rose-50 dark:bg-rose-950/30 text-crimson-red text-xs font-bold px-3 py-1 rounded-full uppercase">Official Registration</span>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mt-2">Alumni Membership Portal</h2>
                  <p className="text-xs text-zinc-500 mt-1">Register your profile to receive alumni privileges, reunion invites, and networking access.</p>
                </div>

                {regSubmitted ? (
                  <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 p-8 rounded-2xl text-center space-y-4">
                    <div className="w-16 h-16 bg-crimson-red text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Registration Successful!</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Welcome to the ACET Alumni Network, <span className="font-bold text-crimson-red">{regForm.name}</span>. Your registration details have been verified and added to the official register.
                    </p>
                    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 max-w-md mx-auto text-left text-xs space-y-1">
                      <div className="text-zinc-400 uppercase text-[10px] font-bold">Alumni ID Card Number</div>
                      <div className="text-lg font-mono font-bold text-crimson-red">{regId}</div>
                      <div className="text-zinc-500 text-[11px]">Batch: {regForm.batch} • Branch: {regForm.branch}</div>
                    </div>
                    <button 
                      onClick={() => setRegSubmitted(false)}
                      className="text-xs text-crimson-red font-bold hover:underline"
                    >
                      Register another profile
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={regForm.name}
                          onChange={(e) => setRegForm({...regForm, name: e.target.value})}
                          placeholder="e.g. Er. Suhail Ahmed"
                          className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={regForm.email}
                          onChange={(e) => setRegForm({...regForm, email: e.target.value})}
                          placeholder="e.g. suhail@example.com"
                          className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Graduation Batch *</label>
                        <select 
                          value={regForm.batch}
                          onChange={(e) => setRegForm({...regForm, batch: e.target.value})}
                          className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                        >
                          {Array.from({ length: 28 }, (_, i) => 1999 + i).reverse().map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Branch / Department *</label>
                        <select 
                          value={regForm.branch}
                          onChange={(e) => setRegForm({...regForm, branch: e.target.value})}
                          className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                        >
                          <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                          <option value="Electronics & Telecomm. Engg.">Electronics & Telecomm. Engg.</option>
                          <option value="Mechanical Engineering">Mechanical Engineering</option>
                          <option value="Civil Engineering">Civil Engineering</option>
                          <option value="Electrical Engineering">Electrical Engineering</option>
                          <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Current Company / Employer</label>
                        <input 
                          type="text" 
                          value={regForm.company}
                          onChange={(e) => setRegForm({...regForm, company: e.target.value})}
                          placeholder="e.g. Google, Tesla, L&T"
                          className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Present Role / Designation</label>
                        <input 
                          type="text" 
                          value={regForm.role}
                          onChange={(e) => setRegForm({...regForm, role: e.target.value})}
                          placeholder="e.g. Senior Software Engineer"
                          className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Current Location (City, Country)</label>
                        <input 
                          type="text" 
                          value={regForm.location}
                          onChange={(e) => setRegForm({...regForm, location: e.target.value})}
                          placeholder="e.g. Bangalore, India or Dubai, UAE"
                          className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">LinkedIn Profile URL</label>
                        <input 
                          type="url" 
                          value={regForm.linkedin}
                          onChange={(e) => setRegForm({...regForm, linkedin: e.target.value})}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">How would you like to contribute to ACET?</label>
                      <select 
                        value={regForm.willingness}
                        onChange={(e) => setRegForm({...regForm, willingness: e.target.value})}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                      >
                        <option value="Mentorship">Deliver Guest Lectures & Student Mentorship</option>
                        <option value="Placements">Provide Internship / Placement Opportunities</option>
                        <option value="R&D">Joint Research & Industry Consultancy</option>
                        <option value="Sponsorship">Sponsor Student Scholarships / Events</option>
                        <option value="General">General Networking & Reunion Meets</option>
                      </select>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-crimson-red hover:bg-rose-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm mt-4 flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      Submit Official Alumni Registration
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 4: DISTINGUISHED ALUMNI */}
          {activeSubTab === 'distinguished-alumni' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-left">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Distinguished Alumni Wall of Honor</h2>
                    <p className="text-xs text-zinc-500 mt-1">Celebrating our proud graduates driving global engineering excellence across world-leading corporations.</p>
                  </div>
                  <div className="flex items-center gap-2 bg-rose-50 dark:bg-rose-950/30 px-3 py-1.5 rounded-full border border-rose-200 dark:border-rose-900 text-xs font-bold text-crimson-red">
                    <Star size={16} />
                    <span>Hall of Fame</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MOCK_DISTINGUISHED_ALUMNI.map((alumni, idx) => (
                    <div key={idx} className="bg-zinc-50 dark:bg-zinc-800/40 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col justify-between hover:border-crimson-red/50 transition-all group">
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={alumni.image} 
                            alt={alumni.name} 
                            className="w-16 h-16 rounded-2xl object-cover border-2 border-crimson-red shadow-md shrink-0" 
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h3 className="font-bold text-zinc-900 dark:text-white text-base group-hover:text-crimson-red transition-colors">{alumni.name}</h3>
                            <span className="text-xs font-semibold text-crimson-red block">{alumni.role}</span>
                            <span className="text-[11px] text-zinc-500 font-medium block">{alumni.company} • {alumni.location}</span>
                          </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-300 italic relative">
                          "{alumni.quote}"
                        </div>
                      </div>

                      <div className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800/80 border-t border-zinc-200 dark:border-zinc-700/50 flex justify-between items-center text-[11px] font-bold text-zinc-500">
                        <span>Batch of {alumni.batch}</span>
                        <span className="text-crimson-red">{alumni.branch}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: ALUMNI MEETS & EVENTS */}
          {activeSubTab === 'alumni-meets' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Upcoming Alumni Meets</h2>
                      <p className="text-xs text-zinc-500">Annual reunions, chapter meets, and networking galas.</p>
                    </div>
                    <span className="bg-rose-100 dark:bg-rose-950/40 text-crimson-red text-xs font-bold px-3 py-1 rounded-full">SMRITI 2026</span>
                  </div>

                  {/* Highlighted Next Event */}
                  <div className="bg-gradient-to-r from-crimson-red to-rose-900 text-white p-6 rounded-2xl shadow-xl space-y-4">
                    <div className="flex items-center gap-2 text-rose-200 text-xs font-bold uppercase tracking-wider">
                      <Calendar size={16} />
                      Flagship Event • December 20, 2026
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">SMRITI 2026: Grand Annual Alumni Reunion</h3>
                    <p className="text-white/80 text-xs leading-relaxed">
                      Join over 800+ alumni, faculty members, and current students at the ACET Nagpur Campus Auditorium. Features Keynote Address, Distinguished Alumni Awards, Cultural Evening, and Gala Dinner.
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs font-semibold pt-2">
                      <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5">
                        <MapPin size={14} /> ACET Campus Auditorium & Taj Hotel Nagpur
                      </div>
                      <div className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5">
                        <Clock size={14} /> 05:00 PM Onwards
                      </div>
                    </div>

                    <div className="pt-2">
                      {rsvpSuccess ? (
                        <div className="bg-white text-crimson-red font-bold text-xs p-3 rounded-xl flex items-center gap-2">
                          <CheckCircle2 size={18} />
                          <span>Your RSVP ticket for SMRITI 2026 has been confirmed! Pass sent to email.</span>
                        </div>
                      ) : (
                        <button 
                          onClick={() => setRsvpSuccess(true)}
                          className="bg-white text-crimson-red hover:bg-rose-50 font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md"
                        >
                          RSVP & Reserve Reunion Pass
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Past Events */}
                  <div className="space-y-4 pt-4">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-sm">Past Chapter Highlights</h3>
                    <div className="space-y-3">
                      {[
                        { title: 'Dubai & Gulf Chapter Meet 2025', date: 'October 12, 2025', location: 'Dubai Marina, UAE', attendees: '140+ Alumni' },
                        { title: 'USA East Coast Alumni Gala', date: 'August 05, 2025', location: 'New York City, USA', attendees: '85+ Alumni' },
                        { title: 'Silver Jubilee Reunion (Batch 2000)', date: 'January 10, 2025', location: 'ACET Campus Sadar', attendees: '220+ Alumni' }
                      ].map((evt, i) => (
                        <div key={i} className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 text-xs">
                          <div>
                            <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{evt.title}</h4>
                            <span className="text-zinc-500">{evt.location} • {evt.date}</span>
                          </div>
                          <span className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-3 py-1 rounded-full font-semibold">
                            {evt.attendees}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">Host a Chapter Meet</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      Are you residing in Bangalore, Pune, Dubai, London, or San Francisco? Reach out to our alumni coordinator to host an official ACET chapter meet in your city.
                    </p>
                    <button 
                      onClick={() => handleTabChange('contacts')}
                      className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs py-3 rounded-xl hover:opacity-90 transition-all"
                    >
                      Contact Chapter Coordinator
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 6: PHOTO GALLERY */}
          {activeSubTab === 'gallery' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-left">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Alumni Photo Memories</h2>
                  <p className="text-xs text-zinc-500 mt-1">Glance through moments from past reunions, award ceremonies, and campus visits.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {GALLERY_IMAGES.map((img, idx) => (
                    <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md border border-zinc-200 dark:border-zinc-800 h-56">
                      <img 
                        src={img.url} 
                        alt={img.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-white">
                        <span className="bg-crimson-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full w-max uppercase mb-1">
                          {img.tag}
                        </span>
                        <h4 className="font-bold text-sm text-white">{img.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 7: ALUMNI DIRECTORY */}
          {activeSubTab === 'directory' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-left">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Searchable Alumni Directory</h2>
                    <p className="text-xs text-zinc-500">Find and connect with fellow graduates across companies, cities, and branches.</p>
                  </div>
                </div>

                {/* Search & Filter Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <div className="relative sm:col-span-2">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search by name, company, or city..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                    />
                  </div>

                  <div>
                    <select 
                      value={branchFilter}
                      onChange={(e) => setBranchFilter(e.target.value)}
                      className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-crimson-red"
                    >
                      <option value="ALL">All Departments</option>
                      <option value="Computer">Computer Science</option>
                      <option value="Electronics">Electronics & Comm.</option>
                      <option value="Mechanical">Mechanical Engg.</option>
                      <option value="Civil">Civil Engg.</option>
                      <option value="Electrical">Electrical Engg.</option>
                    </select>
                  </div>
                </div>

                {/* Directory Table Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredDirectory.map((al, idx) => (
                    <div key={idx} className="bg-zinc-50 dark:bg-zinc-800/40 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{al.name}</h4>
                        <div className="text-xs text-crimson-red font-semibold">{al.company} • {al.location}</div>
                        <div className="text-[11px] text-zinc-500">{al.branch} (Batch '{al.class})</div>
                      </div>
                      <a 
                        href={`mailto:${al.email}`}
                        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-3 py-2 rounded-xl text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-crimson-red hover:text-white hover:border-crimson-red transition-all shrink-0 flex items-center gap-1.5"
                      >
                        <Mail size={14} />
                        Contact
                      </a>
                    </div>
                  ))}

                  {filteredDirectory.length === 0 && (
                    <div className="col-span-2 text-center py-12 text-xs text-zinc-500">
                      No alumni matched your search criteria. Try adjusting the keywords or department filter.
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 8: TESTIMONIALS */}
          {activeSubTab === 'testimonials' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-left">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Alumni Testimonials & Words of Wisdom</h2>
                  <p className="text-xs text-zinc-500 mt-1">Hear how ACET shaped the careers and lives of our successful graduates.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      name: 'Er. Suhail Ahmed',
                      batch: '2012 (CSE)',
                      role: 'Staff Engineer at Google',
                      text: 'The rigorous academic environment and encouraging mentors at ACET instilled in me a passion for constant learning. The campus life in Sadar Nagpur provided a perfect blend of discipline and technical exposure.'
                    },
                    {
                      name: 'Er. Fozia Sheikh',
                      batch: '2015 (ETC)',
                      role: 'Principal Architect at Intel',
                      text: 'ACET labs were equipped with industry-grade software and embedded hardware kits. That practical knowledge gave me a significant headstart when competing for global technology positions.'
                    },
                    {
                      name: 'Er. Arshad Pathan',
                      batch: '2010 (Mech)',
                      role: 'Director at Tesla',
                      text: 'The mechanical engineering workshops at ACET instilled hands-on problem solving. I remain eternally grateful to my professors who guided us beyond standard textbooks.'
                    },
                    {
                      name: 'Er. Rizwan Siddiqui',
                      batch: '2018 (CSE)',
                      role: 'Founder at NextGen AI',
                      text: 'ACET allowed me to incubate my early software ideas. The mentorship from faculty gave me the courage to launch my own artificial intelligence venture in Dubai.'
                    }
                  ].map((t, idx) => (
                    <div key={idx} className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                        "{t.text}"
                      </p>
                      <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700/50">
                        <div className="font-bold text-zinc-900 dark:text-white text-sm">{t.name}</div>
                        <div className="text-xs text-crimson-red font-medium">{t.role} • {t.batch}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 9: GIVING BACK */}
          {activeSubTab === 'giving-back' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-left">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Giving Back & Alumni Endowment</h2>
                  <p className="text-xs text-zinc-500 mt-1">Empower the next generation of ACET engineers through mentorship, scholarships, and lab equipment support.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div className="bg-rose-50 dark:bg-rose-950/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-900 space-y-3">
                    <div className="p-3 bg-crimson-red text-white w-max rounded-xl">
                      <Award size={20} />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">Merit Scholarship Fund</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Sponsor tuition fees for academically outstanding engineering students facing financial hardship.
                    </p>
                    <button onClick={() => handleTabChange('contacts')} className="text-xs font-bold text-crimson-red hover:underline flex items-center gap-1">
                      Sponsor a Student <ChevronRight size={14} />
                    </button>
                  </div>

                  <div className="bg-rose-50 dark:bg-rose-950/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-900 space-y-3">
                    <div className="p-3 bg-crimson-red text-white w-max rounded-xl">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">Placement Referral Desk</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Offer campus recruitment drives or off-campus referrals for final-year ACET students at your company.
                    </p>
                    <button onClick={() => handleTabChange('contacts')} className="text-xs font-bold text-crimson-red hover:underline flex items-center gap-1">
                      Offer Placement Referral <ChevronRight size={14} />
                    </button>
                  </div>

                  <div className="bg-rose-50 dark:bg-rose-950/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-900 space-y-3">
                    <div className="p-3 bg-crimson-red text-white w-max rounded-xl">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">Lab & R&D Sponsorship</h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">
                      Donate specialized hardware, cloud credits, or testing equipment for departmental innovation labs.
                    </p>
                    <button onClick={() => handleTabChange('contacts')} className="text-xs font-bold text-crimson-red hover:underline flex items-center gap-1">
                      Sponsor Innovation Lab <ChevronRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 10: ALUMNI CELL CONTACTS */}
          {activeSubTab === 'contacts' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-left">
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Alumni Cell Office & Contacts</h2>
                  <p className="text-xs text-zinc-500 mt-1">Get in touch for degree transcript verification, alumni ID cards, or campus visit arrangements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-3">
                      <h3 className="font-bold text-zinc-900 dark:text-white text-sm">Alumni Relations Desk</h3>
                      <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-crimson-red shrink-0" />
                          <span>Room 102, Administrative Block, ACET Campus, Sadar, Nagpur - 440001</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={16} className="text-crimson-red shrink-0" />
                          <span>+91 712 2582749 / +91 9822334455</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={16} className="text-crimson-red shrink-0" />
                          <span>alumni@anjumanengg.edu.in</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs">
                      <h4 className="font-bold text-zinc-900 dark:text-white">Transcript & Verification Services</h4>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        Alumni requiring official degree transcripts or employment credential verification can email details directly to <span className="font-bold text-crimson-red">eng_acet@rediffmail.com</span>.
                      </p>
                    </div>
                  </div>

                  {/* Inquiry Form */}
                  <form onSubmit={(e) => { e.preventDefault(); alert('Message sent to Alumni Cell!'); }} className="space-y-3 text-xs bg-zinc-50 dark:bg-zinc-800/30 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">Direct Inquiry to Alumni Cell</h3>
                    <div>
                      <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Your Name</label>
                      <input type="text" required placeholder="Full Name" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-3 py-2 rounded-xl text-zinc-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Email / Phone</label>
                      <input type="text" required placeholder="Contact info" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-3 py-2 rounded-xl text-zinc-900 dark:text-white" />
                    </div>
                    <div>
                      <label className="block font-bold text-zinc-700 dark:text-zinc-300 mb-1">Message / Request</label>
                      <textarea rows={3} required placeholder="How can the Alumni Cell assist you?" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-3 py-2 rounded-xl text-zinc-900 dark:text-white"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-crimson-red text-white font-bold py-2.5 rounded-xl text-xs hover:bg-rose-700 transition-all">
                      Send Inquiry
                    </button>
                  </form>
                </div>

              </div>
            </motion.div>
          )}

        </div>

      </div>
    </div>
  );
}
