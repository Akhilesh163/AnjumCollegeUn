import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  ShieldCheck, 
  Database, 
  ExternalLink, 
  Calendar, 
  Users, 
  Clock, 
  Layers, 
  Monitor, 
  Newspaper, 
  BarChart3, 
  Award, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  BookMarked,
  Globe,
  HardDrive,
  Download,
  Filter,
  ChevronRight
} from 'lucide-react';

interface LibraryProps {
  selectedTab?: string;
  setSelectedTab?: (tab: string) => void;
}

export const LIBRARY_NAVIGATION = [
  { id: 'about-library', label: 'About Library', icon: BookOpen },
  { id: 'mode-of-conduct', label: 'Mode Of Conduct', icon: ShieldCheck },
  { id: 'facilities', label: 'Library Facilities', icon: Layers },
  { id: 'digital-library', label: 'Digital Library', icon: Monitor },
  { id: 'e-resources', label: 'E.Journals & E.Resources', icon: Database },
  { id: 'printed-journals', label: 'Printed Journals', icon: BookMarked },
  { id: 'newspapers-magazines', label: 'News Papers & Magazine', icon: Newspaper },
  { id: 'statistics', label: 'Statistical Information', icon: BarChart3 },
  { id: 'events', label: 'Events Conducted', icon: Calendar },
  { id: 'staff-contacts', label: 'Library Staffs & Contacts', icon: Users }
];

export default function Library({ selectedTab = 'about-library', setSelectedTab }: LibraryProps) {
  const [activeSubTab, setActiveSubTab] = useState(selectedTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [checkResult, setCheckResult] = useState<string | null>(null);
  const [selectedJournalBranch, setSelectedJournalBranch] = useState('ALL');

  // Sync state if prop changes
  const currentTab = selectedTab || activeSubTab;

  const handleTabChange = (tabId: string) => {
    setActiveSubTab(tabId);
    if (setSelectedTab) {
      setSelectedTab(tabId);
    }
  };

  const handleBookSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const books = [
      { title: 'Advanced Engineering Mathematics', author: 'E. Kreyzig', location: 'Row B, Shelf 4', code: '620.001 KRE' },
      { title: 'Software Engineering: A Practitioner Approach', author: 'R. S. Pressman', location: 'Row C, Shelf 2', code: '005.1 PRE' },
      { title: 'Database System Concepts', author: 'A. Silberschatz & H. Korth', location: 'Row A, Shelf 6', code: '005.74 SIL' },
      { title: 'Digital Design and Computer Architecture', author: 'M. Morris Mano', location: 'Row D, Shelf 1', code: '621.391 MAN' },
      { title: 'Modern Control Engineering', author: 'K. Ogata', location: 'Row E, Shelf 3', code: '629.8 OGA' },
      { title: 'Data Structures using C', author: 'A. M. Tanenbaum', location: 'Row A, Shelf 3', code: '005.73 TAN' },
      { title: 'Artificial Intelligence: A Modern Approach', author: 'S. Russell & P. Norvig', location: 'Row B, Shelf 1', code: '006.3 RUS' },
      { title: 'Theory of Machines', author: 'S. S. Rattan', location: 'Row F, Shelf 5', code: '621.8 RAT' },
      { title: 'Basic Electrical Engineering', author: 'D. P. Kothari & I. J. Nagrath', location: 'Row E, Shelf 1', code: '621.3 KOT' }
    ];
    
    const found = books.find(b => 
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      b.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (found) {
      setCheckResult(`📚 AVAILABLE IN STACKS: "${found.title}" by ${found.author} [Acc No. ${found.code}] → Location: ${found.location}.`);
    } else {
      setCheckResult(`🔍 Catalog Query: We found related engineering titles matching "${searchQuery}" in Central Stacks. Please visit Circulation Desk for reservation.`);
    }
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-zinc-950 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 font-sans font-extrabold text-xs text-crimson-red uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 px-4 py-1.5 rounded-full border border-rose-200/40 dark:border-rose-900/40 shadow-2xs">
            <Sparkles size={13} className="text-crimson-red" />
            Central Learning Resource Centre
          </span>
          <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-zinc-900 dark:text-white mt-3 mb-3 tracking-tight">
            ACET Central Library
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-crimson-red to-rose-400 mx-auto rounded-full mb-4"></div>
          <p className="font-sans text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Empowering technical education and research at Anjuman College of Engineering & Technology, Sadar, Nagpur with 38,500+ physical volumes, digital portals, and IEEE e-journals.
          </p>
        </div>

        {/* Quick Navigation Tabs bar for 10 Pages */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-2 shadow-sm mb-10 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max">
            {LIBRARY_NAVIGATION.map((nav) => {
              const Icon = nav.icon;
              const isSelected = currentTab === nav.id;
              return (
                <button
                  key={nav.id}
                  onClick={() => handleTabChange(nav.id)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-crimson-red text-white shadow-md shadow-crimson-red/20 dark:bg-rose-600'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Icon size={15} />
                  <span>{nav.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Dynamic View Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >

            {/* 1. ABOUT LIBRARY */}
            {currentTab === 'about-library' && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { label: 'Total Volumes', value: '38,542+', desc: 'Across all engineering branches', icon: BookOpen },
                    { label: 'Total Titles', value: '8,460+', desc: 'Standard & reference books', icon: BookMarked },
                    { label: 'E-Journals', value: '250+', desc: 'IEEE, Springer, DELNET', icon: Database },
                    { label: 'Reading Capacity', value: '150+ Seats', desc: 'Air-cooled quiet study hall', icon: Users }
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-5 rounded-2xl shadow-xs relative overflow-hidden group">
                        <div className="p-2.5 bg-rose-50 dark:bg-rose-950/40 text-crimson-red dark:text-rose-400 rounded-xl w-fit mb-3">
                          <Icon size={20} />
                        </div>
                        <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white block group-hover:text-crimson-red dark:group-hover:text-rose-400 transition-colors">
                          {stat.value}
                        </span>
                        <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 block mt-1">{stat.label}</span>
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-0.5">{stat.desc}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Vision, Mission & Profile */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xs">
                      <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                        <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                          Knowledge Infrastructure
                        </span>
                        <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1">
                          Welcome to Learning Resource Centre
                        </h2>
                      </div>

                      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        The Central Library of Anjuman College of Engineering & Technology (ACET) was established in 1999 to cater to the academic and research needs of faculty, research scholars, and undergraduate/postgraduate students. Situated on the 1st floor of the Main Academic Block, the library acts as a gateway to technical information in engineering, computer science, artificial intelligence, basic sciences, and humanities.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-5 bg-rose-50/50 dark:bg-zinc-800/60 rounded-2xl border border-rose-100 dark:border-zinc-700/50">
                          <h3 className="font-extrabold text-sm text-crimson-red dark:text-rose-400 mb-2 flex items-center gap-2">
                            <Award size={16} /> Vision
                          </h3>
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            To serve as an exemplary knowledge center equipped with modern technologies, fostering innovation, continuous learning, and technical research among engineering students.
                          </p>
                        </div>

                        <div className="p-5 bg-zinc-50 dark:bg-zinc-800/60 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/50">
                          <h3 className="font-extrabold text-sm text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                            <ShieldCheck size={16} className="text-crimson-red" /> Mission
                          </h3>
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            To acquire, organize, and provide seamless access to high-quality information resources, both print and digital, supporting academic excellence and lifelong learning.
                          </p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <h3 className="font-extrabold text-base text-zinc-900 dark:text-white mb-3">Key Features & Highlights</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-600 dark:text-zinc-300 font-medium">
                          {[
                            'Fully automated with Auto-Lib software & barcode technology',
                            'Open Access System allowing direct browsing of stacks',
                            'OPAC terminals for rapid book query & status check',
                            'Book Bank scheme for all semester students',
                            'Subscribed to IEEE, Springer, and DELNET digital networks',
                            '25 Multimedia PCs in dedicated Digital Library wing',
                            'Reprographic, printing & scanning facilities available',
                            'Comprehensive collection of GATE & MPSC/UPSC study guides'
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-zinc-50 dark:bg-zinc-800/40 p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-800">
                              <CheckCircle2 size={15} className="text-crimson-red shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Working Hours & Quick OPAC Search */}
                  <div className="space-y-6">
                    {/* Working Hours Card */}
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 rounded-3xl shadow-xs space-y-4">
                      <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-3">
                        <div className="p-2.5 bg-rose-50 dark:bg-rose-950/40 text-crimson-red rounded-xl">
                          <Clock size={20} />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-zinc-900 dark:text-white">Working Hours</h3>
                          <span className="text-[11px] text-zinc-500">ACET Central Library Schedule</span>
                        </div>
                      </div>

                      <div className="space-y-3 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                        <div className="flex justify-between items-center p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
                          <span>Circulation Counter</span>
                          <span className="font-bold text-zinc-900 dark:text-white">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50">
                          <span>Reading Hall</span>
                          <span className="font-bold text-zinc-900 dark:text-white">8:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 text-crimson-red dark:text-rose-400 font-bold">
                          <span>Exam Period Hours</span>
                          <span>8:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500">
                          <span>Sundays & Public Holidays</span>
                          <span className="font-bold text-rose-600 dark:text-rose-400">Closed</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Catalog Search */}
                    <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 text-white p-6 rounded-3xl space-y-4 shadow-md">
                      <div className="flex items-center gap-2">
                        <Search size={18} className="text-rose-400" />
                        <h3 className="font-extrabold text-base">Quick OPAC Search</h3>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Search book availability in physical central stack halls by title, author or keyword.
                      </p>
                      <form onSubmit={handleBookSearch} className="space-y-2">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="e.g. Pressman, Kreyzig, AI, Java..."
                          className="w-full text-xs bg-zinc-800 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-400 focus:outline-none focus:border-rose-400"
                        />
                        <button
                          type="submit"
                          className="w-full bg-crimson-red hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all"
                        >
                          Check Catalog
                        </button>
                      </form>

                      {checkResult && (
                        <div className="p-3 bg-rose-950/60 border border-rose-500/30 rounded-xl text-xs text-rose-200 leading-relaxed">
                          {checkResult}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. MODE OF CONDUCT */}
            {currentTab === 'mode-of-conduct' && (
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-10 rounded-3xl space-y-8 shadow-xs">
                <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                  <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                    Library Discipline & Policies
                  </span>
                  <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1 flex items-center gap-2">
                    <ShieldCheck size={24} className="text-crimson-red" />
                    Mode of Conduct & Rules Regulations
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* General Rules */}
                  <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/50 space-y-3">
                    <h3 className="font-extrabold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-crimson-red text-white flex items-center justify-center text-xs font-bold">1</span>
                      General Discipline Rules
                    </h3>
                    <ul className="text-xs text-zinc-600 dark:text-zinc-300 space-y-2.5 list-disc pl-5 leading-relaxed">
                      <li>Strict silence must be observed at all times inside the Reading Hall and Stack Area.</li>
                      <li>Valid College ID Card with barcode is mandatory for entry and issuing books.</li>
                      <li>Mobile phones must be switched off or kept in silent mode. Phone conversations inside the library are strictly prohibited.</li>
                      <li>Personal books, bags, umbrellas, and coats must be deposited at the Property Counter at the entrance.</li>
                      <li>Eatables, tea, coffee, or cold drinks are strictly forbidden inside library premises.</li>
                    </ul>
                  </div>

                  {/* Circulation & Lending Policy */}
                  <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/50 space-y-3">
                    <h3 className="font-extrabold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-crimson-red text-white flex items-center justify-center text-xs font-bold">2</span>
                      Book Borrowing Limits & Duration
                    </h3>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Undergraduate (B.Tech) Students</span>
                        <span className="font-bold text-crimson-red dark:text-rose-400">3 Books for 14 Days</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Postgraduate (M.Tech) Students</span>
                        <span className="font-bold text-crimson-red dark:text-rose-400">5 Books for 14 Days</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Teaching Faculty Members</span>
                        <span className="font-bold text-crimson-red dark:text-rose-400">10 Books per Session</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                        <span className="font-medium text-zinc-700 dark:text-zinc-300">Non-Teaching Supporting Staff</span>
                        <span className="font-bold text-crimson-red dark:text-rose-400">3 Books for 14 Days</span>
                      </div>
                    </div>
                  </div>

                  {/* Overdue Fine & Loss of Book */}
                  <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/50 space-y-3">
                    <h3 className="font-extrabold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-crimson-red text-white flex items-center justify-center text-xs font-bold">3</span>
                      Overdue Fines & Late Return
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Books must be returned on or before the due date stamped on the slip inside the back cover. 
                      An overdue fine of <strong>₹2.00 per book per day</strong> will be charged for delayed returns beyond 14 days.
                    </p>
                  </div>

                  {/* Loss or Damage Policy */}
                  <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/50 space-y-3">
                    <h3 className="font-extrabold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-crimson-red text-white flex items-center justify-center text-xs font-bold">4</span>
                      Loss or Damage Policy
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      Borrowers are responsible for the physical safety of books. If a book is lost, torn, or damaged, the borrower must replace it with the latest edition of the same title or pay <strong>double the current market price</strong> plus 10% processing fee.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. LIBRARY FACILITIES */}
            {currentTab === 'facilities' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xs">
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
                    <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                      Student Services & Infrastructures
                    </span>
                    <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1">
                      Library Facilities & Amenities
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: 'Central Stack Room',
                        desc: '38,500+ volume stacks organized systematically by Dewey Decimal Classification (DDC) with barcode indexing.',
                        icon: BookOpen
                      },
                      {
                        title: 'Reading Hall',
                        desc: 'Comfortable, well-lit air-cooled reading space accommodating 150+ students simultaneously for undisturbed self-study.',
                        icon: Users
                      },
                      {
                        title: 'Book Bank Scheme',
                        desc: 'Supplies complete sets of core subject textbooks to eligible SC/ST and needy students for the entire semester.',
                        icon: Layers
                      },
                      {
                        title: 'Reprographic & Print Hub',
                        desc: 'Photocopying, scanning, and document printing services available inside library for syllabus & reference notes.',
                        icon: FileText
                      },
                      {
                        title: 'GATE & Reference Corner',
                        desc: 'Dedicated section featuring GATE guides, IS Codes, handbooks, dictionaries, encyclopedias, and career manuals.',
                        icon: Award
                      },
                      {
                        title: 'Digital Terminals',
                        desc: '25 high-speed desktop nodes providing access to DELNET, NPTEL videos, e-journals, and web archives.',
                        icon: Monitor
                      }
                    ].map((facility, i) => {
                      const Icon = facility.icon;
                      return (
                        <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 hover:border-rose-300 dark:hover:border-rose-800 transition-all group">
                          <div className="p-3 bg-rose-50 dark:bg-rose-950/40 text-crimson-red dark:text-rose-400 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                            <Icon size={22} />
                          </div>
                          <h3 className="font-extrabold text-base text-zinc-900 dark:text-white mb-2">{facility.title}</h3>
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">{facility.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 4. DIGITAL LIBRARY */}
            {currentTab === 'digital-library' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xs">
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
                    <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                      Digital Knowledge Portal
                    </span>
                    <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1 flex items-center gap-2">
                      <Monitor size={24} className="text-crimson-red" />
                      ACET Digital Library Wing
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        The ACET Digital Library Wing is equipped with 25 high-performance computer terminals connected via 1 Gbps high-speed optical fiber LAN. It offers seamless access to national digital repositories, e-learning courses, electronic databases, and digitised past examination papers.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/10 border border-rose-200/60 dark:border-rose-900/40">
                          <h3 className="font-extrabold text-sm text-crimson-red dark:text-rose-400 mb-2 flex items-center gap-2">
                            <Globe size={18} /> National Digital Library (NDLI)
                          </h3>
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            ACET is an institutional member of NDLI, providing access to over 7 crore digital educational resources including thesis, technical reports, and video lectures.
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/50">
                          <h3 className="font-extrabold text-sm text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                            <HardDrive size={18} className="text-crimson-red" /> NPTEL Local Video Server
                          </h3>
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            Local intranet server hosting over 500 NPTEL web and video courses by IIT faculty for fast buffering-free learning inside campus.
                          </p>
                        </div>
                      </div>

                      <div className="p-6 bg-zinc-900 text-white rounded-2xl space-y-3">
                        <h3 className="font-extrabold text-sm text-rose-300 flex items-center gap-2">
                          <Download size={16} /> RTMNU Past Question Papers & Syllabus Archive
                        </h3>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Students can browse, view, and download digitized question papers from past 10 RTMNU examinations for B.Tech & M.Tech across all departments.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-6 bg-rose-500/10 rounded-2xl border border-rose-500/20 space-y-3">
                        <h3 className="font-extrabold text-sm text-crimson-red dark:text-rose-400">Digital Library Usage Rules</h3>
                        <ul className="text-xs text-zinc-700 dark:text-zinc-300 space-y-2 list-disc pl-4 font-medium">
                          <li>Digital nodes are reserved exclusively for academic & research queries.</li>
                          <li>Pen drives & external flash drives must be scanned for viruses before insert.</li>
                          <li>Gaming, social media, or streaming non-academic content is strictly prohibited.</li>
                          <li>Reprographic print quota: Max 20 pages per session per student.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. E.JOURNALS & E.RESOURCES */}
            {currentTab === 'e-resources' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xs">
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
                    <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                      Online Databases & Consortiums
                    </span>
                    <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1 flex items-center gap-2">
                      <Database size={24} className="text-crimson-red" />
                      E-Journals & E-Resources Consortiums
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: 'IEEE All-Society Periodicals Package (ASPP)',
                        type: 'International Research Journals',
                        desc: 'Complete access to 200+ IEEE journals, transactions, and magazines in Electrical, Electronics, CS, AI, and Telecommunication.',
                        link: 'https://ieeexplore.ieee.org',
                        badge: 'Subscribed'
                      },
                      {
                        name: 'DELNET (Developing Library Network)',
                        type: 'Library Network & Inter-Library Loan',
                        desc: 'Offers access to over 3 Crore bibliographic records, 40,000+ e-books, and full-text e-journals across technical disciplines.',
                        link: 'https://delnet.in',
                        badge: 'Consortium'
                      },
                      {
                        name: 'Springer Nature Engineering',
                        type: 'Peer-Reviewed E-Journals',
                        desc: 'Global research journals in Mechanical, Civil, Thermal, and Materials Engineering.',
                        link: 'https://link.springer.com',
                        badge: 'Subscribed'
                      },
                      {
                        name: 'Knimbus Digital Library Portal',
                        type: 'Cloud Access Platform',
                        desc: 'Provides seamless single-sign-on (SSO) off-campus remote access to all subscribed library databases for students & staff.',
                        link: 'https://www.knimbus.com',
                        badge: 'Cloud Portal'
                      },
                      {
                        name: 'National Digital Library of India (NDLI)',
                        type: 'National Repository',
                        desc: 'Integrated virtual repository developed by IIT Kharagpur under Ministry of Education.',
                        link: 'https://ndl.gov.in',
                        badge: 'Govt. Node'
                      },
                      {
                        name: 'NPTEL E-Learning Courses',
                        type: 'Video Lecture Repository',
                        desc: 'Video lectures and web courses developed by premier IITs and IISc Bangalore.',
                        link: 'https://nptel.ac.in',
                        badge: 'Open Access'
                      }
                    ].map((res, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 flex flex-col justify-between hover:shadow-md transition-all">
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-crimson-red dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-md">
                              {res.badge}
                            </span>
                            <ExternalLink size={15} className="text-zinc-400" />
                          </div>
                          <h3 className="font-extrabold text-base text-zinc-900 dark:text-white mb-1">{res.name}</h3>
                          <span className="text-xs text-zinc-400 block mb-2 font-medium">{res.type}</span>
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">{res.desc}</p>
                        </div>
                        <a
                          href={res.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-crimson-red hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300 transition-colors"
                        >
                          Access Portal <ChevronRight size={14} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 6. PRINTED JOURNALS */}
            {currentTab === 'printed-journals' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xs">
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                        Hardcopy Subscriptions
                      </span>
                      <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1 flex items-center gap-2">
                        <BookMarked size={24} className="text-crimson-red" />
                        National & International Printed Journals
                      </h2>
                    </div>

                    {/* Department Filter Pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                      {['ALL', 'CSE & AI', 'MECH', 'CIVIL', 'ETC', 'ELECT'].map((dept) => (
                        <button
                          key={dept}
                          onClick={() => setSelectedJournalBranch(dept)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            selectedJournalBranch === dept
                              ? 'bg-crimson-red text-white'
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200'
                          }`}
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="border-b border-zinc-200 dark:border-zinc-800 text-[11px] font-extrabold uppercase text-zinc-400 tracking-wider">
                          <th className="py-3 px-4">Journal Title</th>
                          <th className="py-3 px-4">Department / Domain</th>
                          <th className="py-3 px-4">Frequency</th>
                          <th className="py-3 px-4">Type</th>
                          <th className="py-3 px-4">ISSN</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60 text-xs">
                        {[
                          { title: 'Journal of Computer Science & Technology', dept: 'CSE & AI', freq: 'Bi-Monthly', type: 'National', issn: '0973-1245' },
                          { title: 'IEEE Transactions on Artificial Intelligence (Print Selection)', dept: 'CSE & AI', freq: 'Monthly', type: 'International', issn: '2691-4581' },
                          { title: 'Indian Journal of Civil Engineering & Structures', dept: 'CIVIL', freq: 'Quarterly', type: 'National', issn: '0972-2311' },
                          { title: 'Journal of Structural Engineering (SERC)', dept: 'CIVIL', freq: 'Bi-Monthly', type: 'National', issn: '0970-0137' },
                          { title: 'Indian Journal of Mechanical Engineering & Thermal Science', dept: 'MECH', freq: 'Quarterly', type: 'National', issn: '0974-3200' },
                          { title: 'Journal of Manufacturing Processes & Metallurgy', dept: 'MECH', freq: 'Bi-Monthly', type: 'National', issn: '0971-5521' },
                          { title: 'Journal of VLSI Design & Embedded Systems', dept: 'ETC', freq: 'Quarterly', type: 'National', issn: '0973-8891' },
                          { title: 'Indian Journal of Telecommunications', dept: 'ETC', freq: 'Bi-Monthly', type: 'National', issn: '0970-1122' },
                          { title: 'Journal of Power Electronics & Renewable Energy', dept: 'ELECT', freq: 'Quarterly', type: 'National', issn: '0972-8811' },
                          { title: 'Indian Journal of Pure & Applied Physics', dept: 'BASIC SCI', freq: 'Monthly', type: 'National', issn: '0019-5596' }
                        ]
                        .filter(j => selectedJournalBranch === 'ALL' || j.dept.includes(selectedJournalBranch))
                        .map((journal, idx) => (
                          <tr key={idx} className="hover:bg-rose-50/30 dark:hover:bg-zinc-800/40 transition-colors">
                            <td className="py-3.5 px-4 font-bold text-zinc-900 dark:text-white">{journal.title}</td>
                            <td className="py-3.5 px-4 text-zinc-600 dark:text-zinc-300 font-semibold">{journal.dept}</td>
                            <td className="py-3.5 px-4 text-zinc-500">{journal.freq}</td>
                            <td className="py-3.5 px-4">
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                journal.type === 'International' 
                                  ? 'bg-rose-100 text-crimson-red dark:bg-rose-950 dark:text-rose-300' 
                                  : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                              }`}>
                                {journal.type}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-zinc-400 font-mono text-[11px]">{journal.issn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 7. NEWSPAPERS & MAGAZINES */}
            {currentTab === 'newspapers-magazines' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xs space-y-6">
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                    <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                      Daily & Monthly Subscriptions
                    </span>
                    <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1 flex items-center gap-2">
                      <Newspaper size={24} className="text-crimson-red" />
                      News Papers & Magazines Section
                    </h2>
                  </div>

                  {/* Daily Newspapers Grid */}
                  <div>
                    <h3 className="text-base font-extrabold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-crimson-red"></span>
                      Daily Newspapers Collection
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: 'The Hitavada', lang: 'English', type: 'Central India Leading Daily' },
                        { name: 'The Times of India', lang: 'English', type: 'National Daily' },
                        { name: 'The Indian Express', lang: 'English', type: 'National Daily' },
                        { name: 'Lokmat', lang: 'Marathi', type: 'Regional Daily' },
                        { name: 'Sakal', lang: 'Marathi', type: 'Regional Daily' },
                        { name: 'Maharashtra Times', lang: 'Marathi', type: 'Regional Daily' },
                        { name: 'Navbharat', lang: 'Hindi', type: 'Regional Daily' },
                        { name: 'Dainik Bhaskar', lang: 'Hindi', type: 'National Hindi Daily' },
                        { name: 'Economic Times', lang: 'English', type: 'Financial & Corporate' }
                      ].map((paper, i) => (
                        <div key={i} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-sm text-zinc-900 dark:text-white">{paper.name}</h4>
                            <span className="text-[11px] text-zinc-500 block">{paper.type}</span>
                          </div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-crimson-red bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md">
                            {paper.lang}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Magazines Grid */}
                  <div className="pt-4">
                    <h3 className="text-base font-extrabold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-crimson-red"></span>
                      Technical & General Periodicals
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { title: 'Electronics For You (EFY)', type: 'Monthly Technical', cat: 'Electronics & Hardware' },
                        { title: 'Digit', type: 'Monthly Tech', cat: 'Software, AI & Gadgets' },
                        { title: 'Competition Success Review', type: 'Monthly', cat: 'GATE & Civil Services' },
                        { title: 'Civil Services Times', type: 'Monthly', cat: 'General Studies & UPSC' },
                        { title: 'India Today', type: 'Weekly', cat: 'Current Affairs & News' },
                        { title: 'General Knowledge Today', type: 'Monthly', cat: 'Competitive Exams' },
                        { title: 'Outlook Magazine', type: 'Weekly', cat: 'Socio-Economic' },
                        { title: 'Reader’s Digest', type: 'Monthly', cat: 'General Reading' }
                      ].map((mag, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800">
                          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">{mag.type}</span>
                          <h4 className="font-extrabold text-sm text-zinc-900 dark:text-white mb-1">{mag.title}</h4>
                          <span className="text-xs text-crimson-red dark:text-rose-400 font-medium">{mag.cat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. STATISTICAL INFORMATION */}
            {currentTab === 'statistics' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xs">
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
                    <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                      Library Inventory & Metrics
                    </span>
                    <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1 flex items-center gap-2">
                      <BarChart3 size={24} className="text-crimson-red" />
                      Statistical Information Summary
                    </h2>
                  </div>

                  {/* Highlight Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
                    {[
                      { label: 'Total Books', val: '38,542' },
                      { label: 'Total Titles', val: '8,460' },
                      { label: 'Printed Journals', val: '65+' },
                      { label: 'E-Journals', val: '250+' },
                      { label: 'CD/DVD ROMs', val: '1,850+' },
                      { label: 'Bound Volumes', val: '1,240+' }
                    ].map((stat, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 text-center">
                        <span className="text-xl font-black text-crimson-red dark:text-rose-400 block">{stat.val}</span>
                        <span className="text-[11px] font-bold text-zinc-700 dark:text-zinc-300 block mt-0.5">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Branch-wise Volume Distribution Table */}
                  <h3 className="font-extrabold text-base text-zinc-900 dark:text-white mb-4">
                    Department-Wise Collection Distribution
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-200 dark:border-zinc-800 text-[11px] font-extrabold uppercase text-zinc-400 tracking-wider">
                          <th className="py-3 px-4">Department / Program</th>
                          <th className="py-3 px-4">Titles Count</th>
                          <th className="py-3 px-4">Volumes Count</th>
                          <th className="py-3 px-4">Print Journals</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-xs font-medium">
                        {[
                          { dept: 'Computer Science & Engineering', titles: '1,850', vols: '9,200', journals: '12' },
                          { dept: 'Artificial Intelligence & Data Science', titles: '920', vols: '4,100', journals: '8' },
                          { dept: 'Mechanical Engineering', titles: '1,780', vols: '8,400', journals: '12' },
                          { dept: 'Civil Engineering', titles: '1,510', vols: '6,800', journals: '10' },
                          { dept: 'Electrical Engineering', titles: '1,200', vols: '5,100', journals: '8' },
                          { dept: 'Electronics & Telecommunication', titles: '1,200', vols: '4,942', journals: '8' },
                          { dept: 'Science & Humanities / Basic Sciences', titles: '600', vols: '3,200', journals: '7' }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                            <td className="py-3 px-4 font-bold text-zinc-900 dark:text-white">{row.dept}</td>
                            <td className="py-3 px-4 text-zinc-600 dark:text-zinc-300">{row.titles}</td>
                            <td className="py-3 px-4 text-crimson-red dark:text-rose-400 font-extrabold">{row.vols}</td>
                            <td className="py-3 px-4 text-zinc-500">{row.journals}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 9. EVENTS CONDUCTED */}
            {currentTab === 'events' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xs">
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
                    <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                      Academic Activities & Workshops
                    </span>
                    <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1 flex items-center gap-2">
                      <Calendar size={24} className="text-crimson-red" />
                      Events Conducted by Central Library
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        title: 'National Library Week & Annual Book Exhibition 2025-26',
                        date: 'November 14 - 20, 2025',
                        desc: 'Organized a week-long grand book exhibition featuring leading publishers displaying latest engineering textbooks, GATE preparation guides, and research publications.',
                        tag: 'Exhibition'
                      },
                      {
                        title: 'Vachan Prerna Divas (Reading Inspiration Day)',
                        date: 'October 15, 2025',
                        desc: 'Celebrated Dr. A.P.J. Abdul Kalam Jayanti as Reading Inspiration Day with book review competitions, essay writing contests, and student book donation drives.',
                        tag: 'Celebration'
                      },
                      {
                        title: 'Workshop on IEEE ASPP & DELNET Digital Retrieval for B.Tech & M.Tech',
                        date: 'August 22, 2025',
                        desc: 'Hands-on user training session conducted by DELNET resource person for final year students and faculty on accessing full-text e-journals and remote digital library usage.',
                        tag: 'Workshop'
                      },
                      {
                        title: 'First-Year Student Library Orientation Program',
                        date: 'July 28, 2025',
                        desc: 'Comprehensive library orientation session introducing first-year B.Tech students to circulation rules, OPAC barcode usage, and Book Bank distribution procedures.',
                        tag: 'Orientation'
                      }
                    ].map((event, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-crimson-red px-2.5 py-0.5 rounded-full">
                              {event.tag}
                            </span>
                            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                              <Calendar size={13} /> {event.date}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-base text-zinc-900 dark:text-white">{event.title}</h3>
                          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">{event.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 10. LIBRARY STAFFS & CONTACTS */}
            {currentTab === 'staff-contacts' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xs">
                  <div className="border-b border-zinc-100 dark:border-zinc-800 pb-4 mb-6">
                    <span className="text-xs font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest">
                      Library Personnel & Assistance
                    </span>
                    <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white mt-1 flex items-center gap-2">
                      <Users size={24} className="text-crimson-red" />
                      Library Staffs & Contact Directory
                    </h2>
                  </div>

                  {/* Staff Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        name: 'Dr. Irfan Ahmad',
                        role: 'Librarian / Head of LRC',
                        qual: 'M.Lib.I.Sc, Ph.D. in Library & Info Science',
                        exp: '18+ Years Experience',
                        email: 'library@anjumanengg.edu.in'
                      },
                      {
                        name: 'Mr. Mohammad Imran',
                        role: 'Assistant Librarian',
                        qual: 'M.Lib.I.Sc, SET',
                        exp: '12+ Years Experience',
                        email: 'imran.library@anjumanengg.edu.in'
                      },
                      {
                        name: 'Ms. Parveen Sultana',
                        role: 'Library Assistant (Circulation)',
                        qual: 'B.Lib.I.Sc',
                        exp: '8+ Years Experience',
                        email: 'parveen.sultana@anjumanengg.edu.in'
                      }
                    ].map((staff, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 space-y-3">
                        <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-950/60 text-crimson-red dark:text-rose-400 font-black flex items-center justify-center text-lg">
                          {staff.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base text-zinc-900 dark:text-white">{staff.name}</h3>
                          <span className="text-xs font-bold text-crimson-red dark:text-rose-400 block">{staff.role}</span>
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1">
                          <p>{staff.qual}</p>
                          <p className="font-semibold">{staff.exp}</p>
                          <p className="text-zinc-700 dark:text-zinc-300 font-mono text-[11px] pt-1">{staff.email}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info Box */}
                  <div className="p-6 bg-rose-50/50 dark:bg-zinc-800/60 rounded-2xl border border-rose-100 dark:border-zinc-700/50 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-crimson-red shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-xs text-zinc-900 dark:text-white uppercase tracking-wider">Campus Location</h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1 leading-relaxed">
                          1st Floor, Main Academic Building, ACET Campus, Mangalwari Bazaar Road, Sadar, Nagpur - 440001 (M.S.)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={20} className="text-crimson-red shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-xs text-zinc-900 dark:text-white uppercase tracking-wider">Helpline & Ext</h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">
                          +91 712 2582749 (Ext. 214)
                        </p>
                        <p className="text-xs text-zinc-500">Mon - Sat: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail size={20} className="text-crimson-red shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-xs text-zinc-900 dark:text-white uppercase tracking-wider">Email Inquiry</h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1 font-mono">
                          library@anjumanengg.edu.in
                        </p>
                        <p className="text-xs text-zinc-600 dark:text-zinc-300 font-mono">
                          eng_acet@rediffmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
