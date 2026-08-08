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
  const [openAccordion, setOpenAccordion] = useState<string | null>('accordion-2');

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

                <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
                  <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                    <div className="overflow-hidden rounded-2xl mb-6">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkxa9goO-hBRBTDRWyhbBEEAvCD2mBnmfy0OsB9CFhxqMFRRf-_O7HxNjkOBN7BbT5si1MkLyUdqCEu-iU_k8Ro-CJy0fO8tRdW-_wS040xcljFhRq47zEn2NbXQ-W-0QFfHMWM4WphPSGGIi0zIBEsxzBFZNMk1p3bmEdMaTmZtp3r4OoPOTYp63B8i-i7wIEK4pDWvUiWtuDPPZRdCcfBwVCygA9KNyYQjj_d-33e56Dhq7JoB1iLTeLzNkdsJWcEQ"
                        alt="Anjuman Campus 1"
                        className="w-full h-64 object-cover object-center filter brightness-[1.03] contrast-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-crimson-red">
                        <Sparkles size={18} />
                        <span className="text-[11px] font-bold uppercase tracking-[0.24em]">About AHI</span>
                      </div>

                      <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                        Anjuman Hami-E-Islam (AHI) is the biggest Muslim Minority Institution of erstwhile Province of C.P. &amp; Berar and presently under the state of Maharashtra in its Vidarbha Division established long back, i.e. in 1888 and completed 138 years. It is the off-shoot of past social reformation movement of Sir Syed Ahmed Khan. Khan Sahab Mohd. Amir Khan was its founder President (1888-1910).
                      </p>

                      <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                        AHI is corporate body having its perpetual succession and seal. It is absolutely non-political, non-communal and non-sectarian in its policies, programmes and educational activities. It has its own constitution and is a registered body under the Societies Registration Act. (1927), and Bombay Public Trusts Act. (1970). It has also been sanctioned permanent Minority Status( 2010).
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-7 shadow-sm">
                      <div className="flex items-center gap-2 text-crimson-red mb-4">
                        <Layers size={18} />
                        <span className="text-[11px] font-bold uppercase tracking-[0.24em]">Aims & Objectives</span>
                      </div>
                      <div className="space-y-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                        <p>
                          The basic aim of the Anjuman is to serve all people without discrimination and to create an atmosphere of universal peace and progress through mutual love, understanding, respect and cooperation. It endeavors to bring about emotional integration amongst the people and enable them to contribute and participate in the various educational and welfare activities - general, scientific and technical.
                        </p>
                        <p>
                          The Executive Council of the Anjuman have all powers for carrying out its policies and powers to hold, control and administer the property and funds of the Anjuman and to establish, maintain and control Educational Institutions. Presently, in all 20 Educational Institutes are efficiently undertaking various promotional activities under the thumb of AHI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-zinc-50 dark:from-rose-950/20 dark:to-zinc-900 border border-rose-100 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-2 text-crimson-red mb-6">
                    <BookOpen size={18} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.24em]">Promotional Activities Undertaken by Anjuman in the Past</span>
                  </div>

                  <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
                    <p className="leading-relaxed">
                      From time to time Anjuman has strived hard to disseminate knowledge through its schools and colleges in the faculty of arts, commerce, science, technical and professional branches as per the requirement of the students. The funds of all educational institutions are maintained separately as per the rules of the respective Departments. Various promotional activities undertaken by Anjuman in the past can briefly be enlisted as follows:-
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      {[
                        "Khan Sahab Mohd. Amir Khan, a pleader and founder President of AHI served Nagpur Municipality as member for number of years.",
                        "All India Mohammedan Education Conference (1910), all India Muslim League Session (1910) and Seventeenth Annual Conference of Nadawatul Ulema, etc. were held during the tenure of Khan Bahadur H.M.Malak.",
                        "Mr. H.M.Malak along with Adv. Mohd. Samiullah Khan collected Rs. 3000/- from C.P. for the Aligarh Muslim University Fund and gave it to Maulana Shaukat Ali.",
                        "Students of Anjuman High School had participated in the Non-Cooperation Movement started by father of the Nation Mahatma Gandhi in 1920-21.",
                        "Barrister Mohd. Yusuf Shareef, President of Anjuman was MLC from 1930 to 1937, Education Minister (1933-34), and Law Minister (1937-38) in the Govt. of C.P. & Berar.",
                        "Secretary of Anjuman Adv. Mohd. Samiullah Khan a local Swarajist Leader, was twice Mayor of Nagpur Municipality (1931-37).",
                        "Municipal Urdu Primary School, Sadar Bazaar was housed in the premises of Anjuman Hostel from 1932 to 1940.",
                        "Anjuman housed Govt. Girls High School during 1946-1972 in its Girls School building.",
                        "As per Government's desire Anjuman's Playground was allowed to be shared by the students of Govt. Girls High School for hockey and other games after 1955.",
                        "Maulana Hifzur Rahman, M.P. and General Secretary of the Jamiat Ulema-e-Hind and Shri. Brijlal Biyani, State's Finance Minister laid the foundation stone of Anjuman's Gandhibagh IEM School Branch on 7th November, 1954.",
                        "19 teachers from Anjuman Sadar High School and 15 teachers from M.A.K.Azad High School, Gandhibagh actively participated, in Shanti Yatra (13th Dec., 1970) taken out by Nagpur Nagrik Shanti Samiti to create good-will in society.",
                        "Mr. Rafique Zakaria, Revenue Minister visited Anjuman Schools (1976).",
                        "Grand Felicitation was accorded to Governor of Maharashtra State Hon. Sadique Ali on 3rd November 1977 by Anjuman.",
                        "Hon. Justice Mohd. Hidayatullah, Vice President of India visited AHI, Sadar, Nagpur on Friday, 2nd March, 1984 at 11:30 am and along with President Q.M.A.Wahab, laid a foundation stone of Anjuman Polytechnic Workshop cum Laboratory.",
                        "Free – PMT Coaching classes were conducted in Anjuman for students of minorities during 1992-2000 by Nagpur University (UGC) Minority Coaching Centre.",
                        "Padma Bhushan Hon'ble Late Maulana Abdul Karim Parekh was Executive member of AHI and he contributed many Radio/T.V programmes and authored many books to create solidarity in Indian society.",
                        "AHI started Anjuman Girls College in 1998 and Anjuman College of Engineering and Technology in 1999.",
                        "Foundation stone for the grand building of Anjuman College of Engineering and Technology was laid on 27th Oct. 2001 by Hon'ble Anees Ahmed, Minister of State for Higher & Tech. Education and Justice M.M.Qazi (Retd.), President, AHI.",
                        "Various promotional activities are conducted from time to time in the hall of Anjuman Polytechnic.",
                        "Two batches of police constables of 30 each belonging to minority were imparted coaching during (2005-2006) with the assistance of State Minority Commission.",
                        "Hon'ble Sami Khatib, ex-President, Anjuman-E-Islam, and Managing Director, Medley Lab, Mumbai inaugurated Silver Jubilee of Anjuman Polytechnic (2009).",
                        "The foundation stone was laid for new building of Anjuman Polytechnic on 09th Jan 2009 and after completion it was inaugurated by Justice A.A.Ginwala, sole Administrator, AHI.",
                        "Dr. Aziz Qureshi, Governor of Uttarakhand inaugurated Laboratory of Civil Deptt. of Anjuman Engineering College on 08-04-2013.",
                        "Marathi Foundation Classes sponsored by State Minority Commission are held successfully in our five High Schools.",
                        "Voluntary organization Anjuman–E-khawateen, Nagpur, promotes nursing, sewing, embroidery, Quran classes for poor and needy women of the society."
                      ].map((activity, index) => (
                        <div key={index} className="flex gap-2.5 items-start">
                          <span className="font-bold text-crimson-red shrink-0 text-xs mt-0.5">{index + 1}.</span>
                          <p className="text-xs leading-relaxed">{activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ABOUT ACET */}
            {currentTab === 'about-acet' && (
              <div className="space-y-8 w-full">
                {/* Key Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
                    <span className="block font-black text-2xl sm:text-3xl text-crimson-red">1999</span>
                    <span className="text-[10px] sm:text-xs text-zinc-500 font-semibold mt-1">Established Year</span>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
                    <span className="block font-black text-2xl sm:text-3xl text-crimson-red">A+</span>
                    <span className="text-[10px] sm:text-xs text-zinc-500 font-semibold mt-1">NAAC Grade</span>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
                    <span className="block font-black text-2xl sm:text-3xl text-crimson-red">7+</span>
                    <span className="text-[10px] sm:text-xs text-zinc-500 font-semibold mt-1">UG Programs</span>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
                    <span className="block font-black text-2xl sm:text-3xl text-crimson-red">5000+</span>
                    <span className="text-[10px] sm:text-xs text-zinc-500 font-semibold mt-1">Alumni Network</span>
                  </div>
                </div>
                   
                <div className="rounded-[30px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_20px_60px_-30px_rgba(153,27,27,0.35)]">
                  <div className="bg-gradient-to-r from-rose-900 via-crimson-red to-rose-700 px-6 py-5 sm:px-8 sm:py-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-rose-100 font-bold">First Year B.Tech</p>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">Science &amp; Humanities</h3>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[10px] sm:text-xs font-semibold text-rose-50">Academic Foundation</span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8 space-y-8">
                    <div className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-700">
                      <img
                        src="/anjumancollegeimage.jpeg"
                        alt="First year Science & Humanities"
                        className="w-full h-56 sm:h-72 object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                      <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Student Intake</span>
                        <span className="mt-2 block text-xl font-black text-zinc-900 dark:text-white">360</span>
                        <span className="text-xs text-zinc-500">Seats/Yr</span>
                      </div>
                      <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Course Duration</span>
                        <span className="mt-2 block text-base font-black text-zinc-900 dark:text-white">1 Year</span>
                        <span className="text-xs text-zinc-500">First Year Foundation</span>
                      </div>
                      <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Department Head</span>
                        <span className="mt-2 block text-base font-black text-zinc-900 dark:text-white">Dr. Tasneem Khan</span>
                      </div>
                      <div className="bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                        <span className="block text-[10px] font-extrabold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">Avg Placement</span>
                        <span className="mt-2 block text-base font-black text-zinc-900 dark:text-white">N/A</span>
                        <span className="text-xs text-zinc-500">First Year</span>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-800/30 p-4 sm:p-6">
                      <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
                        <div className="space-y-5">
                          <h4 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">About First year B.Tech. (Science &amp; Humanities)</h4>

                          <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-7">
                            <div>
                              <p className="font-extrabold uppercase tracking-[0.1em] text-[11px] text-crimson-red">Vision</p>
                              <p className="mt-2">To be a center of excellence for developing quality technocrats with moral and social ethics, to face the global challenges for the sustainable development of society.</p>
                            </div>

                            <div>
                              <p className="font-extrabold uppercase tracking-[0.1em] text-[11px] text-crimson-red">Mission</p>
                              <p className="mt-2">To create conducive academic culture for learning and identifying career goals.</p>
                              <p className="mt-2">To provide quality technical education, research opportunities and imbibe entrepreneurship skills contributing to the socio-economic growth of the Nation.</p>
                              <p className="mt-2">To inculcate values and skills, that will empower our students towards development through technology.</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-[28px] border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 shadow-sm">
                          <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
                            <img
                              src="https://anjumanengg.edu.in/UserData/uploads/pages/1345/HOD-first-year-b.tech.jpg"
                              alt="Dr. Tasneem Khan"
                              className="w-full h-64 object-cover object-center"
                            />
                          </div>
                          <div className="mt-4 rounded-2xl bg-gradient-to-r from-rose-50 to-zinc-50 dark:from-rose-950/30 dark:to-zinc-900 px-4 py-3 text-center border border-rose-100 dark:border-rose-900/60">
                            <p className="text-sm sm:text-base font-black text-zinc-900 dark:text-white">Dr. Tasneem Khan</p>
                            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] font-bold text-zinc-500">Head of the Department</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-7">
                      <div>
                        <h5 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white">About Department</h5>
                        <p className="mt-3">Department of Science &amp; Humanities of Anjuman College Of Engineering &amp; Technology, was established in the year 1999 as the first department and since then it has been playing an imperative role in college by catering the need of teaching basic Sciences and Humanities courses to the engineering students of all branches.</p>
                        <p className="mt-3">The purpose of Applied Sciences in Engineering field is to lay a sturdy foundation of fundamental principles and values of diverse disciplines such as Mathematics, Chemistry, Physics, Communication Skills and soft skills in the mind of the learners, so that they proceed to rest of their years of study and life with updated knowledge and training of basic engineering skills.</p>
                        <p className="mt-3">At Science &amp; Humanities department, majority of the faculty is having minimum 15 years of teaching experience and are proud to possess highly qualified teaching staff which is totally dedicated and devoted towards the teaching and is always striving to perceive and resolve students’ queries so that the overall personality of the student can be groomed in such a manner that they are ready to face the ever challenging world.</p>
                        <p className="mt-3">Faculty members are not only completing the prescribed syllabus from university but also motivate the students to learn beyond the syllabus which helps in gaining in-depth knowledge of subject theoretically and practically.</p>
                        <p className="mt-3">The department has well-equipped laboratories. The laboratories are upgraded as per the needs and with the updated curriculum.</p>
                        <p className="mt-3">As the department deals with first year students prominently, a special attention is paid to bring homogeneity among students coming from different social, linguistic and financial backgrounds. Sincere steps are taken to mould them into professional course by way through paying attention to their academic discipline, punctuality, vocabulary and responsible behavior. Staff members are achieving this transformation through their action and regular interaction.</p>
                        <p className="mt-3">The teaching module comprises lectures, tutorials, practical and remedial lectures wherever needed. The methodology adopted in the classroom teaching is based on application of innovative strategies, guest lectures, regular assignments and interaction between teachers and students.</p>
                        <p className="mt-3">The department conducts Orientation program and Induction Program for the newly admitted F.Y.B.Tech students for acquainting them with the work culture and various department of college. Mentor Faculty and Counsellors are available to help the students if they are facing any problem.</p>
                        <p className="mt-3">Extra and co-curricular activities including soft skill training, seminars, workshops, quiz, subjectwise activities and many more for building the leadership quality in the students are conducted from time to time.</p>
                      </div>

                      <div>
                        <h5 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white">Department of Applied Physics</h5>
                        <p className="mt-3">The Department of Applied Physics has eminent faculties with two doctorates pursuing the research in front line areas of Physics like Superconductivity, their film study of semi conducting material, ferroelectric, multiferroic, glass, composites. Applied Physics forms the foundation for wide band of engineering subjects.</p>
                      </div>

                      <div>
                        <h5 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white">Department of Chemistry</h5>
                        <p className="mt-3">We pride ourselves on offering our students an excellent education, and strive to provide an inspiring environment to encourage and enable the best science. We are well equipped to conduct research in advanced areas, through highly qualified and experienced faculties of good international repute.</p>
                      </div>

                      <div>
                        <h5 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white">Department of Mathematics</h5>
                        <p className="mt-3">Mathematics forms the basis of all technical studies. The department of mathematics has changed in recent years. This change has been particularly striking in terms of faculty recruitment, research output and the diversity of research pursued. The department has at present six energetic and dedicated faculty members.</p>
                      </div>

                      <div>
                        <h5 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-white">Department of Humanities</h5>
                        <p className="mt-3">The studies of humanities is essential and integral part of the Technical Curriculum. The Study of Social Science and management helps the students to orient themselves with Industrial etiquettes and interpret the relation between industry, society and government and have a better understanding of contemporary world. The knowledge of English and particularly Communication Skills plays a critical role in professional life. The knowledge is only as good as the ability to communicate. A perfect communication skill enhances the technical knowledge and has multiple professional reflections. The Department of Humanities comprises of five highly qualified faculties with two doctorates having specialization in areas such as, Communication Skills, Management, Social Science, Industrial Economics etc.</p>
                      </div>

                      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-4 sm:p-5">
                        <p className="font-extrabold text-lg text-zinc-900 dark:text-white">Course Outcomes</p>
                        <a
                          href="https://anjumanengg.edu.in/UserData/uploads/pages/1345/SCIENCE_HUMANITES.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-crimson-red font-semibold hover:underline"
                        >
                          <Download size={16} />
                          Click Here to Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full-width Image */}
                <div className="w-full overflow-hidden rounded-3xl shadow-lg border border-zinc-200 dark:border-zinc-800">
                  <img
                    src="/anjumancollegeimage.jpeg"
                    alt="Anjuman College Campus"
                    className="w-full h-auto object-cover max-h-96"
                  />
                </div>

                {/* Main Content Section */}
                <div className="bg-zinc-50 dark:bg-zinc-800/40 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white">
                      About ACET
                    </h3>
                    <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                      The Anjuman College of Engineering and Technology [A.C.E.T.] is managed by Anjuman Hami-E-Islam, Nagpur. It is a pioneer Educational Trust, serving the cause of education in the region for well over 138 years. Irrespective of the considerations of the various caste and creed, it has a widespread reputation in the field of education in Vidarbha and is currently running 20 educational institutions. Anjuman Hami-E-Islam started an Engineering College from the academic year 1999-2000 with three branches: Mechanical, Electrical, Electronics and Telecommunication. Two more branches, namely Computer Science & Engineering and Civil Engineering, were added. Also, to meet Industry 4.0 challenges, an Artificial Intelligence and Data Science branch was introduced. Slowly and steadily, the College has carved a niche for itself and has established itself as a name to be reckoned with, providing quality technical education at a very affordable cost.
                    </p>
                  </div>

                  {/* Accordions */}
                  <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                    
                    {/* Vision Accordion */}
                    <div className="border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === 'accordion-2' ? null : 'accordion-2')}
                        className="w-full px-5 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-between text-left font-semibold text-zinc-900 dark:text-white transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <ChevronRight size={18} className={`text-crimson-red transition-transform ${openAccordion === 'accordion-2' ? 'rotate-90' : ''}`} />
                          Vision
                        </span>
                      </button>
                      {openAccordion === 'accordion-2' && (
                        <div className="px-5 py-4 bg-zinc-100/50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-700 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          To be a centre of excellence for developing quality technocrats with moral and social ethics, to face the global challenges for the sustainable development of society.
                        </div>
                      )}
                    </div>

                    {/* Mission Accordion */}
                    <div className="border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === 'accordion-1' ? null : 'accordion-1')}
                        className="w-full px-5 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-between text-left font-semibold text-zinc-900 dark:text-white transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <ChevronRight size={18} className={`text-crimson-red transition-transform ${openAccordion === 'accordion-1' ? 'rotate-90' : ''}`} />
                          Mission
                        </span>
                      </button>
                      {openAccordion === 'accordion-1' && (
                        <div className="px-5 py-4 bg-zinc-100/50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-700 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                          <div className="flex gap-3 items-start">
                            <span className="text-crimson-red font-bold">→</span>
                            <p className="leading-relaxed">To create conducive academic culture for learning and identifying career goals.</p>
                          </div>
                          <div className="flex gap-3 items-start">
                            <span className="text-crimson-red font-bold">→</span>
                            <p className="leading-relaxed">To provide quality technical education, research opportunities and imbibe entrepreneurship skills contributing to the socio-economic growth of the Nation.</p>
                          </div>
                          <div className="flex gap-3 items-start">
                            <span className="text-crimson-red font-bold">→</span>
                            <p className="leading-relaxed">To inculcate values and skills, that will empower our students towards development through technology.</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Core Values Accordion */}
                    <div className="border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === 'accordion-7' ? null : 'accordion-7')}
                        className="w-full px-5 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-between text-left font-semibold text-zinc-900 dark:text-white transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <ChevronRight size={18} className={`text-crimson-red transition-transform ${openAccordion === 'accordion-7' ? 'rotate-90' : ''}`} />
                          Core Values
                        </span>
                      </button>
                      {openAccordion === 'accordion-7' && (
                        <div className="px-5 py-4 bg-zinc-100/50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-700">
                          <button className="flex items-center gap-2 text-crimson-red hover:underline font-semibold text-sm">
                            <Download size={14} />
                            Click Here to Download
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Code of Professional Ethics Accordion */}
                    <div className="border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === 'accordion-4' ? null : 'accordion-4')}
                        className="w-full px-5 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-between text-left font-semibold text-zinc-900 dark:text-white transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <ChevronRight size={18} className={`text-crimson-red transition-transform ${openAccordion === 'accordion-4' ? 'rotate-90' : ''}`} />
                          Code of Professional Ethics
                        </span>
                      </button>
                      {openAccordion === 'accordion-4' && (
                        <div className="px-5 py-4 bg-zinc-100/50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-700">
                          <button className="flex items-center gap-2 text-crimson-red hover:underline font-semibold text-sm">
                            <Download size={14} />
                            Click Here to Download
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Code of Conduct Accordion */}
                    <div className="border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === 'accordion-8' ? null : 'accordion-8')}
                        className="w-full px-5 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-between text-left font-semibold text-zinc-900 dark:text-white transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <ChevronRight size={18} className={`text-crimson-red transition-transform ${openAccordion === 'accordion-8' ? 'rotate-90' : ''}`} />
                          Code of Conduct
                        </span>
                      </button>
                      {openAccordion === 'accordion-8' && (
                        <div className="px-5 py-4 bg-zinc-100/50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-700">
                          <button className="flex items-center gap-2 text-crimson-red hover:underline font-semibold text-sm">
                            <Download size={14} />
                            Click Here to Download
                          </button>
                        </div>
                      )}
                    </div>

                    {/* NAAC Self Study Reports Accordion */}
                    <div className="border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === 'accordion-5' ? null : 'accordion-5')}
                        className="w-full px-5 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-between text-left font-semibold text-zinc-900 dark:text-white transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <ChevronRight size={18} className={`text-crimson-red transition-transform ${openAccordion === 'accordion-5' ? 'rotate-90' : ''}`} />
                          NAAC - Self Study Reports
                        </span>
                      </button>
                      {openAccordion === 'accordion-5' && (
                        <div className="px-5 py-4 bg-zinc-100/50 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-700">
                          <button className="flex items-center gap-2 text-crimson-red hover:underline font-semibold text-sm">
                            <Download size={14} />
                            Click Here to Download
                          </button>
                        </div>
                      )}
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
              <div className="relative overflow-hidden rounded-[30px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_20px_60px_-25px_rgba(153,27,27,0.30)]">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-rose-100 via-rose-50 to-white dark:from-rose-950/50 dark:via-zinc-900 dark:to-zinc-900" />

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-crimson-red/20 to-rose-300/10 blur-xl" />
                      <div className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-[28px] overflow-hidden border-4 border-white shadow-xl ring-1 ring-zinc-200 bg-zinc-100">
                        <img
                          src="/department.jpg"
                          alt="Administrator"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>

                    <div className="flex-1 space-y-3 pt-1">
                      <span className="inline-flex items-center bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-full uppercase tracking-[0.18em] border border-rose-100 dark:border-rose-900/60">
                        Management Message
                      </span>
                      <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-900 dark:text-white">Administrator's Desk</h3>
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium">
                        Anjuman Hami-E-Islam Executive Management
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-zinc-200 dark:border-zinc-700 pt-8">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h4 className="font-black text-xl sm:text-2xl lg:text-3xl text-zinc-900 dark:text-white leading-tight tracking-tight">
                          JUSTICE RETD. Z. A. HAQ
                        </h4>
                        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-zinc-600 dark:text-zinc-300">
                          Bombay High Court
                        </p>
                        <p className="text-base sm:text-lg font-extrabold text-crimson-red uppercase tracking-[0.12em]">
                          Administrator
                        </p>
                        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium">
                          ANJUMAN HAMI-E-ISLAM, Sadar, Nagpur
                        </p>
                      </div>

                      <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-8">
                        <p className="rounded-2xl border border-rose-100 dark:border-rose-900/60 bg-gradient-to-r from-rose-50 via-white to-rose-50 dark:from-rose-950/20 dark:via-zinc-900 dark:to-zinc-900 p-4 sm:p-5 italic">
                          "The Anjuman Hami-E-Islam stands as a beacon of educational excellence and social welfare. Under its stewardship, we remain committed to providing quality technical education while maintaining the highest standards of governance and institutional integrity."
                        </p>

                        <p className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/40 p-4 sm:p-5 italic">
                          "Our mission is to nurture competent professionals who are not only technically proficient but also deeply rooted in moral and ethical values. Education, in its truest sense, is about shaping individuals who contribute meaningfully to society and uphold the principles of justice and equity."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. PRINCIPAL'S MESSAGE */}
            {currentTab === 'principals-message' && (
              <div className="relative overflow-hidden rounded-[30px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_20px_60px_-25px_rgba(153,27,27,0.35)]">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-rose-100 via-rose-50 to-white dark:from-rose-950/50 dark:via-zinc-900 dark:to-zinc-900" />

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-crimson-red/25 to-rose-300/10 blur-xl" />
                      <div className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-[28px] overflow-hidden border-4 border-white shadow-xl ring-1 ring-zinc-200 bg-zinc-100">
                        <img
                          src="/principle-new-img.jpeg"
                          alt="Dr. Syed Mohammad Ali"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4 pt-1">
                      <span className="inline-flex items-center bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-full uppercase tracking-[0.18em] border border-rose-100 dark:border-rose-900/60">
                        Principal's Desk
                      </span>
                      <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-900 dark:text-white">Principal's Message</h3>
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium">
                        Dr. Syed Mohammad Ali — Principal, ACET Nagpur
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-zinc-200 dark:border-zinc-700 pt-8">
                    <div className="rounded-3xl border border-rose-100 dark:border-rose-900/60 bg-gradient-to-r from-rose-50 via-white to-rose-50 dark:from-rose-950/30 dark:via-zinc-900 dark:to-rose-950/20 p-5 sm:p-6 shadow-sm">
                      <p className="font-bold italic text-base sm:text-xl leading-relaxed text-zinc-800 dark:text-zinc-100">
                        "Engineers should possess the courage to think different, the courage to invent, the courage to discover the impossible, and the courage to conquer the problems and succeed."
                      </p>
                      <p className="mt-4 text-right font-semibold text-zinc-700 dark:text-zinc-200 text-sm sm:text-base">
                        — Dr. A.P.J. Abdul Kalam
                      </p>
                    </div>

                    <div className="mt-8 space-y-5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-8">
                      <p className="font-semibold text-zinc-800 dark:text-zinc-100 text-base sm:text-lg">
                        Dear Students, Parents and Stakeholders
                      </p>

                      <p>
                        The aim of our institution is to create an environment of high-quality teaching and learning in which students are encouraged to innovate and approach problems with a courageous and creative mindset.
                      </p>

                      <p>
                        We are committed to creating an ecosystem that provides technical skills while also fostering innovation, creativity, and ethical values among students. We are dedicated to building an educational system that inspires and equips students to solve real-world problems and contribute meaningfully to industry and society.
                      </p>

                      <p>
                        Our faculty comprises highly qualified and experienced professionals, passionate about nurturing young minds and helping them achieve their fullest potential.
                      </p>

                      <p>
                        We continuously strive to provide opportunities that strengthen career readiness, leadership, and holistic development for every student.
                      </p>

                      <p>
                        Our alumni hold prominent roles in esteemed organisations both domestically and internationally, reflecting the quality of education and values instilled at ACET.
                      </p>

                      <p>
                        I cordially encourage you to visit our ACET campus and witness the excellence, spirit, and distinction that define our institution.
                      </p>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <div className="text-right border-t border-zinc-200 dark:border-zinc-700 pt-5">
                        <p className="font-bold text-zinc-900 dark:text-white text-base sm:text-lg">
                          Prof. (Dr.) K. S. Zakiuddin
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">Principal, ACET</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. DEAN'S DESK */}
            {currentTab === 'deans-desk' && (
              <div className="relative overflow-hidden rounded-[30px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_20px_60px_-25px_rgba(153,27,27,0.35)]">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-rose-100 via-rose-50 to-white dark:from-rose-950/50 dark:via-zinc-900 dark:to-zinc-900" />

                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-crimson-red/25 to-rose-300/10 blur-xl" />
                      <div className="relative h-40 w-40 sm:h-44 sm:w-44 rounded-[28px] overflow-hidden border-4 border-white shadow-xl ring-1 ring-zinc-200 bg-zinc-100">
                        <img
                          src="https://anjumanengg.edu.in/UserData/uploads/pages/1013/dean-anjuman.jpg"
                          alt="Dr. M.S. Khatib"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4 pt-1">
                      <span className="inline-flex items-center bg-rose-50 dark:bg-rose-950/40 text-crimson-red font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-full uppercase tracking-[0.18em] border border-rose-100 dark:border-rose-900/60">
                        Dean's Desk
                      </span>
                      <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-900 dark:text-white">Dean's Message</h3>
                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium">
                        Dr. M.S. Khatib — Dean Academics
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-zinc-200 dark:border-zinc-700 pt-8">
                    <div className="rounded-3xl border border-rose-100 dark:border-rose-900/60 bg-gradient-to-r from-rose-50 via-white to-rose-50 dark:from-rose-950/30 dark:via-zinc-900 dark:to-rose-950/20 p-5 sm:p-6 shadow-sm">
                      <p className="font-bold italic text-base sm:text-xl leading-relaxed text-zinc-800 dark:text-zinc-100">
                        "Ensuring high academic standards, continuous internal evaluation, updated outcome-based curriculum execution, and student mentoring across all B.Tech streams."
                      </p>
                    </div>

                    <div className="mt-8 space-y-5 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-8">
                      <p>
                        The major challenge for today’s engineering educational institutions is to accommodate the ever varying aspirations of the younger generation because of increasingly changing demand and development in industries. We constantly put efforts to accommodate these aspirations by fine-tuning the academics of the college with innovative and practical-oriented teaching-learning practices along with other developmental activities.
                      </p>

                      <p>
                        Our goal is to impart value education and human values. It is what motivates the work of everyone at the Anjuman College of Engineering and Technology — from faculty and staff, to students and alumni. It inspires our teaching and research. It is this goal which fuels the faculty to excel. We focus on our students by providing them with a world-class outcome-based education and hands-on experience through teaching-learning process, research, training and student forum activities.
                      </p>

                      <p>
                        The success of our undergraduate, postgraduate &amp; research programs is supervised by our eminent faculty, who continue to set the standard for excellence. To keep abreast with the latest knowledge, we encourage the faculty members to organize or participate in faculty development programs, conferences, workshops and other scholarly activities.
                      </p>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <div className="text-right border-t border-zinc-200 dark:border-zinc-700 pt-5">
                        <p className="font-bold text-zinc-900 dark:text-white text-base sm:text-lg">
                          Dr. M.S. Khatib
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">Dean Academics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. GOVERNANCE BODY */}
            {currentTab === 'governance-body' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-zinc-900 rounded-[30px] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-[0_20px_60px_-25px_rgba(153,27,27,0.25)]">
                  <div className="bg-gradient-to-r from-rose-900 to-crimson-red p-6 sm:p-8 text-white">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold text-rose-100/90">Institutional Governance</p>
                    <h3 className="mt-3 font-extrabold text-2xl sm:text-3xl">Governance Body</h3>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="rounded-[28px] border border-zinc-200 dark:border-zinc-700 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 shadow-[0_25px_60px_-30px_rgba(153,27,27,0.5)] overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-separate border-spacing-0 text-left">
                          <thead>
                            <tr className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-white text-[10px] sm:text-[11px] uppercase tracking-[0.18em]">
                              <th className="px-4 sm:px-5 py-4 font-extrabold border-b border-zinc-700">Sr. No</th>
                              <th className="px-4 sm:px-5 py-4 font-extrabold border-b border-zinc-700">Name</th>
                              <th className="px-4 sm:px-5 py-4 font-extrabold border-b border-zinc-700">Designation</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm text-zinc-700 dark:text-zinc-300">
                            {[
                              { sr: 1, name: 'Dr. Ab. Shakeel Ab. Sattar', designation: 'Chairman, Governing Body, ACET, Nagpur' },
                              { sr: 2, name: 'Mr. Anees Ahmad', designation: 'Chief Executive Officer, Anjuman Hami-E-Islam & Member, Governing Body, ACET, Nagpur (Management Nominee)' },
                              { sr: 3, name: 'Mr. Ahmad Sayeed', designation: 'Advisor (General Administration), Anjuman Hami-E-Islam & Member, Governing Body, ACET, Nagpur (Management Nominee)' },
                              { sr: 4, name: 'Dr. Salim Chavan', designation: 'Principal, Govindrao Wanjari College of Engg & Technology & Member, Governing Body, ACET, Nagpur (Management Nominee - Educationalist)' },
                              { sr: 5, name: 'Dr. Neeraj Khaty', designation: 'Registrar, LIT & Member, Governing Body, ACET, Nagpur (Management Nominee - University)' },
                              { sr: 6, name: 'Dr. Gajanan K. Awari', designation: 'HOD, Automobile Engg Deptt., Govt Polytechnic & Member, Governing Body, ACET, Nagpur (Management Nominee - State Government)' },
                              { sr: 7, name: 'Mr. Hifzurrehman Abdul Rehman Sheikh', designation: 'Director, A R Comm Televenture Pvt. Ltd. & Member, Governing Body, ACET, Nagpur (Management Nominee - Industrialist)' },
                              { sr: 8, name: 'Dr. Mohammad Nasiruddin', designation: 'Associate Professor, ETC, ACET & Member, Governing Body, ACET (Faculty Representative)' },
                              { sr: 9, name: 'Dr. Namrata V. Lotia', designation: 'Associate Professor, Mechanical Engineering, ACET & Member, Governing Body, ACET (Faculty Representative)' },
                              { sr: 10, name: 'Prof. (Dr.) K. S. Zakiuddin', designation: 'Principal & Member Secretary, Governing Body, ACET' }
                            ].map((member, index) => (
                              <tr
                                key={member.sr}
                                className={[
                                  'transition-all duration-200',
                                  index % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-50/80 dark:bg-zinc-900/80',
                                  'hover:bg-rose-50/80 dark:hover:bg-zinc-800/80'
                                ].join(' ')}
                              >
                                <td className="px-4 sm:px-5 py-4 border-b border-zinc-200 dark:border-zinc-700">
                                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-crimson-red text-xs font-black shadow-sm ring-1 ring-rose-100 dark:bg-rose-950/40 dark:text-rose-200 dark:ring-rose-900/60">
                                    {member.sr}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-5 py-4 border-b border-zinc-200 dark:border-zinc-700 font-black text-zinc-900 dark:text-white leading-snug">
                                  {member.name}
                                </td>
                                <td className="px-4 sm:px-5 py-4 border-b border-zinc-200 dark:border-zinc-700 leading-relaxed">
                                  <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                                    {member.designation}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="mt-8 rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/40 p-4 sm:p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-2.5 w-2.5 rounded-full bg-crimson-red" />
                        <h4 className="font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-white">Organizational Structure</h4>
                      </div>

                      <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-2">
                        <img
                          src="https://anjumanengg.edu.in/UserData/uploads/pages/1012/org-structure1.png"
                          alt="Organizational Structure"
                          className="w-full h-auto object-contain rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. COLLEGE DEVELOPMENT COMMITTEE */}
            {currentTab === 'college-development-committee' && (
              <div className="space-y-8">
                <div className="bg-white dark:bg-zinc-900 rounded-[30px] border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-[0_20px_60px_-25px_rgba(153,27,27,0.25)]">
                  <div className="bg-gradient-to-r from-rose-900 to-crimson-red p-6 sm:p-8 text-white">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.24em] font-bold text-rose-100/90">Institutional Governance</p>
                    <h3 className="mt-3 font-extrabold text-2xl sm:text-3xl">College Development Committee - Anjuman College of Engineering &amp; Technology</h3>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="rounded-[28px] border border-zinc-200 dark:border-zinc-700 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 shadow-[0_25px_60px_-30px_rgba(153,27,27,0.5)] overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-separate border-spacing-0 text-left">
                          <thead>
                            <tr className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-white text-[10px] sm:text-[11px] uppercase tracking-[0.18em]">
                              <th className="px-4 sm:px-5 py-4 font-extrabold border-b border-zinc-700">Sr No</th>
                              <th className="px-4 sm:px-5 py-4 font-extrabold border-b border-zinc-700">Name</th>
                              <th className="px-4 sm:px-5 py-4 font-extrabold border-b border-zinc-700">Designation</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm text-zinc-700 dark:text-zinc-300">
                            {[
                              { sr: 1, name: 'Mr. Tanveer Mirza', designation: 'Chairperson - College Development Committee, ACET' },
                              { sr: 2, name: 'Dr. Sajid Anwar', designation: 'Professor in Mathematics, S&H, ACET & Teacher Representative, CDC-ACET' },
                              { sr: 3, name: 'Dr. Pramod Gadge', designation: 'Associate Professor, EXPO, ACET, & Teacher Representative, CDC-ACET' },
                              { sr: 4, name: 'Miss Nazish Khan', designation: 'Assistant Professor, CSE, & Woman Teacher Representative, CDC-ACET' },
                              { sr: 5, name: 'Mr. Imran Ibrahim Shaikh', designation: 'Laboratory Assistant, EXTC & Non-Teaching Elected Employee, CDC-ACET' },
                              { sr: 6, name: 'Dr. I. H. Jeevaji', designation: 'Rtd. Principal, Dr. Ambedkar College, & Social Service Category Member, CDC, ACET' },
                              { sr: 7, name: 'Dr. Minhaj Ahmed', designation: 'Associate Professor, St. Vincent Palloti College of Engg & Tech, & Education Category Member, CDC-ACET' },
                              { sr: 8, name: 'Dr. Tausif Diwan', designation: 'Associate Dean, Indian Institute of Information Technology, Nagpur & Research Category Member, CDC, ACET' },
                              { sr: 9, name: 'Dr. Archana Shirbhate', designation: 'Associate Professor, Electrical & Coordinator IQAC of the College, CDC, ACET' },
                              { sr: 10, name: 'Dr Ruhina Quazi', designation: 'Assistant Professor, EXTC, ACET, & Alumnus Category Member, CDC-ACET' },
                              { sr: 11, name: 'Mr. Qazi Mohammad Aqtab Zafar', designation: '(CS&E) Student Representative' },
                              { sr: 12, name: 'Rudra Pratab Singh', designation: '(E&TC) Student Representative' },
                              { sr: 13, name: 'Prof (Dr) K. S. Zakiuddin', designation: 'Member Secretary & Principal, ACET' }
                            ].map((member, index) => (
                              <tr
                                key={member.sr}
                                className={[
                                  'transition-all duration-200',
                                  index % 2 === 0 ? 'bg-white dark:bg-zinc-900' : 'bg-zinc-50/80 dark:bg-zinc-900/80',
                                  'hover:bg-rose-50/80 dark:hover:bg-zinc-800/80'
                                ].join(' ')}
                              >
                                <td className="px-4 sm:px-5 py-4 border-b border-zinc-200 dark:border-zinc-700">
                                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-crimson-red text-xs font-black shadow-sm ring-1 ring-rose-100 dark:bg-rose-950/40 dark:text-rose-200 dark:ring-rose-900/60">
                                    {member.sr}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-5 py-4 border-b border-zinc-200 dark:border-zinc-700 font-black text-zinc-900 dark:text-white leading-snug">
                                  {member.name}
                                </td>
                                <td className="px-4 sm:px-5 py-4 border-b border-zinc-200 dark:border-zinc-700 leading-relaxed">
                                  <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                                    {member.designation}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 9. VARIOUS CELLS */}
            {currentTab === 'various-cells' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Anti-Ragging Committee & Squad', desc: 'Ensuring zero tolerance towards ragging with 24x7 monitoring helplines.', href: 'https://anjumanengg.edu.in/page/?id=1365' },
                  { title: 'Internal Complaints Committee (ICC)', desc: 'Preventing harassment and supporting women safety across campus.', href: 'https://anjumanengg.edu.in/page/?id=1365' },
                  { title: 'Grievance Redressal Cell', desc: 'Redressing student and faculty academic or administrative grievances promptly.', href: 'https://anjumanengg.edu.in/page/?id=1365' },
                  { title: 'SC / ST & OBC Welfare Cell', desc: 'Assisting reserved candidates in obtaining state and central scholarships.', href: 'https://anjumanengg.edu.in/page/?id=1365' },
                  { title: 'Minority Cell', desc: 'Guiding minority students for central government scholarship portals.', href: 'https://anjumanengg.edu.in/page/?id=1365' },
                  { title: 'Student Council & Advisory', desc: 'Promoting student representation, cultural fests, and sports events.', href: 'https://anjumanengg.edu.in/page/?id=1365' }
                ].map((cell, idx) => (
                  <div key={idx} className="group bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-6 rounded-[26px] border border-zinc-200 dark:border-zinc-800 shadow-[0_18px_45px_-25px_rgba(153,27,27,0.35)] hover:-translate-y-1 hover:shadow-[0_22px_50px_-25px_rgba(153,27,27,0.45)] transition-all duration-300 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="p-3 bg-rose-500/10 text-crimson-red rounded-2xl ring-1 ring-rose-100 dark:ring-rose-900/60">
                        <ShieldCheck size={20} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">Cell</span>
                    </div>

                    <h4 className="font-black text-base sm:text-lg text-zinc-900 dark:text-white leading-snug">{cell.title}</h4>
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed flex-1">{cell.desc}</p>

                    <a
                      href={cell.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-crimson-red to-rose-700 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200"
                    >
                      View Details
                    </a>
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
                    <div key={index} className="group bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 p-6 rounded-[26px] border border-zinc-200 dark:border-zinc-800 shadow-[0_18px_45px_-25px_rgba(153,27,27,0.35)] hover:-translate-y-1 hover:shadow-[0_22px_50px_-25px_rgba(153,27,27,0.45)] transition-all duration-300 flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        <div className="p-3 bg-rose-500/10 text-crimson-red rounded-2xl ring-1 ring-rose-100 dark:ring-rose-900/60 w-fit">
                          <BookOpen size={24} />
                        </div>
                        <div>
                          <h4 className="font-black text-lg text-zinc-900 dark:text-white leading-snug">{edition}</h4>
                          <p className="mt-2 text-xs sm:text-sm text-zinc-500">Official Annual Magazine Issue</p>
                        </div>
                      </div>

                      <button
                        onClick={() => alert(`Downloading ${edition} PDF...`)}
                        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson-red to-rose-700 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200"
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
