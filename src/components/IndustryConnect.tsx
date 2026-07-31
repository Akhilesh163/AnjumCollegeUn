import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IndustryEvent } from '../types';
import { Calendar, MapPin, X, Sparkles, ChevronRight, HelpCircle } from 'lucide-react';

const ALL_EVENTS: IndustryEvent[] = [
  {
    id: 'antidrug',
    title: 'Anti-Drug & Youth Vigilance Seminar',
    category: 'Youth Campaign',
    description: 'An inspiring address by Nagpur Police Commissioner, charting digital safety and campus anti-drug campaigns for students.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    date: 'January 20, 2026',
    venue: 'ACET Central Auditorium, Nagpur',
    highlights: [
      'Address by Nagpur Police Commissioner on drug-free community frameworks.',
      'Student pledge signed by over 1,500 active engineering minds.',
      'Interactive Q&A on cyber stalking, cyber safety, and emergency contacts.',
      'Disciplinary protocol workshop in presence of high-ranking IPS panels.'
    ]
  },
  {
    id: 'police-welcome',
    title: 'IPS Guard of Honor Welcome',
    category: 'Distinguished Visit',
    description: 'Welcoming the Police Commissioner to Anjuman College campus with a ceremonial guard of honor on a rain-swept afternoon.',
    image: 'https://images.unsplash.com/photo-1599740831119-97300c012b1c?auto=format&fit=crop&q=80&w=800',
    date: 'January 20, 2026',
    venue: 'ACET Entrance Stairs & Courtyard',
    highlights: [
      'Welcomed by high management, Dr. S. M. Ali and Principal chairs.',
      'Traditional student-line guard of honor extending up the central stairs.',
      'Reviewing campus security, smart CCTV arrays, and local traffic modules.',
      'Interactive walkabout in rain discussing city-college partnership pipelines.'
    ]
  },
  {
    id: 'elocution',
    title: 'State Level Elocution Victory',
    category: 'Student Laurel',
    description: 'Celebrating the outstanding success of our student orator cohort winning top accolades at the State Level COP Elocution Competition.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    date: 'December 15, 2025',
    venue: 'COPS Oratory Summit, Maharashtra',
    highlights: [
      'Outstanding orations on Implementing National Education Policy (NEP) 2020.',
      'Awarded prestigious State Winner trophy, plaque, and cash incentives.',
      'Mentored by experienced humanities faculty and debate curators.',
      'Felicitation in front of RTMNU university chancellors.'
    ]
  },
  {
    id: 'ml-capstone',
    title: 'ML Capstone Project Expert Seminar',
    category: 'Expert Lecture',
    description: 'Distinguished Guest Lecture on "Capstone Projects in ML: Ideas and Guidelines" presented by VNIT Guest Speaker, Dr. Ashish Tiwari.',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800',
    date: 'February 18, 2026',
    venue: 'CSE Computing Wing, ACET Nagpur',
    highlights: [
      'Curated insights by guest of honor Dr. Ashish Tiwari (VNIT, Nagpur).',
      'Detailed roadmap for implementing end-to-end Machine Learning pipelines.',
      'Panel discussion with CSE department heads and HOD Dr. M. S. Khatib.',
      'Interactive guideline session for selecting project titles and datasets.'
    ]
  },
  {
    id: 'student-interaction',
    title: 'Interactive ML Research Workshop',
    category: 'Workshops',
    description: 'Interactive student workshop discussing real-world implementation blocks, model tuning, and cloud deployment for capstone research.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    date: 'February 18, 2026',
    venue: 'Computer Science Lecture Hall, Sadar Campus',
    highlights: [
      'Attended by over 120 final-year B.Tech CSE and AIDS student cohorts.',
      'Discussing project milestones, validation sets, and latency tuning.',
      'Live feedback session on project proposals and model choices.',
      'One-on-one team interactions resolving algorithmic bottlenecks.'
    ]
  },
  {
    id: 'vidarbha',
    title: 'Advantage Vidarbha 2026',
    category: 'Exhibition & Summit',
    description: 'Showcasing engineering innovations and empowering industrial growth across central India at the Khasdar Audyogik Mahotsav.',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800',
    date: 'February 12-14, 2026',
    venue: 'Nagpur Exhibition Center, Nagpur',
    highlights: [
      'Over 40 prototype technologies exhibited by ACET students.',
      'Panel discussions with key directors of heavy metal and tech industries.',
      'Awarded Outstanding Innovator trophy in state-level competition.',
      'Explored 12+ MoUs for collaborative R&D and internships.'
    ]
  },
  {
    id: 'reunir',
    title: 'SE-REUNIR Alumni Homecoming',
    category: 'Alumni Meet',
    description: 'Welcoming back the proud global alumni of ACET to network, mentor current students, and celebrate decades of academic excellence.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    date: 'December 27, 2025',
    venue: 'ACET Central Auditorium, Nagpur',
    highlights: [
      'Fireside chat with prominent Silicon Valley alumni leaders.',
      'Launched Alumni Endowment Scholarship program for meritorious students.',
      'Batch-wise felicitation & campus walks revisiting historic lecture halls.',
      'Interactive networking dinner with final-year students.'
    ]
  },
  {
    id: 'celestial',
    title: 'Celestial Cultural Festival',
    category: 'Youth Fest',
    description: 'Celebrating creativity, passion, art, and the rich cultural diversity of our campus through interactive exhibitions and spectacular stage shows.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800',
    date: 'March 18-20, 2024',
    venue: 'ACET Main Sports Arena, Sadar, Nagpur',
    highlights: [
      'Mega Fashion Show and Choreographed Street Dance competitions.',
      'Live music concerts featuring popular indie and folk-fusion bands.',
      'Art exhibitions and food stalls curated by student clubs.',
      'Over 2,500 inter-college students participated in diverse competitions.'
    ]
  },
  {
    id: 'robowars',
    title: 'ACET Robowars Championship',
    category: 'Robotics',
    description: 'Witness high-voltage heavy combat robots clashing in an enclosed bulletproof arena designed by mechanical and electrical cells.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    date: 'March 5, 2026',
    venue: 'ACET Sports Complex, Nagpur',
    highlights: [
      'Heavy-weight 45kg category combat machines clashing.',
      'Custom pneumatic weapons and titanium armor designs.',
      'Expert jury panels measuring engineering craftsmanship and controller agility.',
      'Cash prizes worth 1.5 Lakhs awarded to winning captains.'
    ]
  },
  {
    id: 'sports',
    title: 'Annual Sports Spartans League',
    category: 'Sports',
    description: 'State-level inter-collegiate basketball, indoor table-tennis, cricket, and football leagues hosting the top athletic talent.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800',
    date: 'January 14-17, 2026',
    venue: 'ACET Stadium & Indoor Courts',
    highlights: [
      'Over 40 colleges competing for the rotating Spartans Trophy.',
      'Inauguration of modern floodlit volleyball and basketball grounds.',
      'Outstanding athlete awards honoring national zonal representation.',
      'Daily live matches with high active student cheering cohorts.'
    ]
  }
];

export default function IndustryConnect() {
  const [selectedEvent, setSelectedEvent] = useState<IndustryEvent | null>(null);

  const lane1 = ALL_EVENTS.slice(0, 5);
  const lane2 = ALL_EVENTS.slice(5, 10);

  // Duplicate the list of 5 items so we have continuous loop at 50% shift
  const lane1Items = [...lane1, ...lane1];
  const lane2Items = [...lane2, ...lane2];

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950/80 border-b border-rose-50/10 overflow-hidden select-none relative">
      {/* Inline styles for custom keyframe animations and paused state handling */}
      <style>{`
        @keyframes marqueeLTR {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
        @keyframes marqueeRTL {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-ltr {
          animation: marqueeLTR 38s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marqueeRTL 38s linear infinite;
        }
        .lane-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="flex flex-col items-center shrink-0">
              <span className="font-sans font-extrabold text-[10px] tracking-widest text-zinc-900 dark:text-zinc-400">SPOTLIGHT</span>
              <div className="h-1 w-12 bg-amber-400 rounded-full mt-1"></div>
            </div>
            <div className="h-8 w-px bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>
            <div>
              <span className="font-sans font-bold text-xs text-crimson-red uppercase tracking-widest bg-rose-100 dark:bg-rose-950/40 px-3 py-1 rounded-full border border-rose-200/20">
                Industry Connect
              </span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white mt-1.5">
                Events & Workshops
              </h2>
            </div>
          </div>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md text-left md:text-right">
            Immersive technical symposia, continuous hackathons, cultural festivals, and research showcases fueling our students' creative fire.
          </p>
        </div>
      </div>

      {/* Two Moving Lanes */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-zinc-50 via-zinc-50/85 to-transparent dark:from-zinc-950 dark:via-zinc-950/85 dark:to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-zinc-50 via-zinc-50/85 to-transparent dark:from-zinc-950 dark:via-zinc-950/85 dark:to-transparent z-20 pointer-events-none" />

        {/* Lane 1: Left to Right */}
        <div className="lane-container w-full overflow-hidden relative flex">
          <div className="marquee-track flex gap-6 animate-marquee-ltr min-w-max pr-6">
            {lane1Items.map((event, idx) => (
              <div
                key={`lane1-${event.id}-${idx}`}
                onClick={() => setSelectedEvent(event)}
                className="group w-[280px] sm:w-[420px] h-[180px] sm:h-[260px] shrink-0 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/40 dark:border-zinc-800/40 shadow-md hover:shadow-lg cursor-pointer select-none transition-all duration-300"
              >
                <img
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={event.image}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent group-hover:from-zinc-950 group-hover:via-zinc-950/85 transition-all duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex flex-col items-start text-left space-y-1.5 sm:space-y-2.5 z-10">
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                    {event.category}
                  </span>
                  
                  <h3 className="text-white font-sans font-extrabold text-sm sm:text-lg leading-tight tracking-tight">
                    {event.title}
                  </h3>
                  
                  {/* Text description revealed on hover */}
                  <p className="text-zinc-200 text-[10px] sm:text-xs leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-out font-medium">
                    {event.description}
                  </p>

                  <span className="text-[9px] sm:text-[10px] text-amber-400 font-extrabold uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Details <ChevronRight size={10} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lane 2: Right to Left */}
        <div className="lane-container w-full overflow-hidden relative flex">
          <div className="marquee-track flex gap-6 animate-marquee-rtl min-w-max pr-6">
            {lane2Items.map((event, idx) => (
              <div
                key={`lane2-${event.id}-${idx}`}
                onClick={() => setSelectedEvent(event)}
                className="group w-[280px] sm:w-[420px] h-[180px] sm:h-[260px] shrink-0 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/40 dark:border-zinc-800/40 shadow-md hover:shadow-lg cursor-pointer select-none transition-all duration-300"
              >
                <img
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={event.image}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent group-hover:from-zinc-950 group-hover:via-zinc-950/85 transition-all duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex flex-col items-start text-left space-y-1.5 sm:space-y-2.5 z-10">
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded">
                    {event.category}
                  </span>
                  
                  <h3 className="text-white font-sans font-extrabold text-sm sm:text-lg leading-tight tracking-tight">
                    {event.title}
                  </h3>
                  
                  {/* Text description revealed on hover */}
                  <p className="text-zinc-200 text-[10px] sm:text-xs leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-out font-medium">
                    {event.description}
                  </p>

                  <span className="text-[9px] sm:text-[10px] text-amber-400 font-extrabold uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Details <ChevronRight size={10} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Helper message */}
      <div className="max-w-7xl mx-auto px-6 text-center mt-6">
        <p className="inline-flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 px-4 py-2 rounded-full shadow-sm">
          <HelpCircle size={14} className="text-crimson-red shrink-0" />
          <span>Hover on any card to pause scrolling & read description. Click to view detailed outcomes.</span>
        </p>
      </div>

      {/* Detailed Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 z-10 max-h-[85vh] flex flex-col text-left"
            >
              <div className="h-48 relative">
                <img
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                  src={selectedEvent.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-1.5 rounded-full backdrop-blur-md transition-all"
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="bg-rose-600 font-sans font-bold text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded">
                    {selectedEvent.category}
                  </span>
                  <h3 className="font-sans font-extrabold text-xl sm:text-2xl mt-1.5">
                    {selectedEvent.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 overflow-y-auto space-y-5">
                <p className="font-sans text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                  {selectedEvent.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
                    <Calendar className="text-crimson-red" size={16} />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
                    <MapPin className="text-crimson-red" size={16} />
                    <span>{selectedEvent.venue}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-sans font-bold text-xs uppercase text-crimson-red mb-3 flex items-center gap-1.5">
                    <Sparkles size={14} />
                    Key Event Outcomes & Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedEvent.highlights.map((item, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-xs text-zinc-600 dark:text-zinc-300 font-medium">
                        <span className="h-5 w-5 rounded-full bg-rose-50 dark:bg-rose-950/20 text-crimson-red flex items-center justify-center shrink-0 text-[10px] font-bold">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-zinc-50 dark:bg-zinc-800/40 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="bg-crimson-red text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-rose-700 transition-all"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
