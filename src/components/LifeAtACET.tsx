import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, Trophy, Tv, Film, ExternalLink, Flame, Info, CheckCircle } from 'lucide-react';

const BANNERS = [
  {
    title: 'CELESTIAL - Annual Cultural Festival',
    tag: 'Cultural Mega Event',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1600',
    description: 'Our premier annual socio-cultural fest capturing the artistic spirit of ACET Nagpur. A high-octane mix of choreography, rock bands, fashion pageants, and theatrical spectacles.',
    highlights: ['5000+ Footfall', 'Celebrity Guest Stars', 'Inter-collegiate Competitions']
  },
  {
    title: 'ACET Innovation & Invention Exhibition',
    tag: 'Technical Landmark',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    description: 'An annual research and design prototype showcase highlighting automatic drones, smart-city solutions, robotics, and cloud projects designed entirely by our engineering cells.',
    highlights: ['80+ Working Prototypes', 'Industry Venture Judges', 'Patent Filing Guidance']
  },
  {
    title: 'Annual Sports Arena & Tournaments',
    tag: 'Athletic Excellence',
    image: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=1600',
    description: 'ACET Spartans cell hosts state-level tournaments for basketball, indoor table-tennis, cricket, and soccer leagues, backed by state-of-the-art courts and sports trainers.',
    highlights: ['RTMNU Zonal Winners', 'Custom Indoor Arena', 'Professional Athletic Mentors']
  },
  {
    title: 'Alumni homecoming & Networking Meet',
    tag: 'Strong Global Network',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600',
    description: 'Bringing back prominent tech leads, company architects, and entrepreneurs to share industry updates, recruit, and mentor current engineering cohorts.',
    highlights: ['1500+ Active Alumni', 'Mentorship Programs', 'Direct Referral Drives']
  }
];

const VIDEOS = [
  {
    id: 'dQw4w9WgXcQ', // Placeholder link or realistic ACET Nagpur videos
    title: 'ACET Nagpur Campus Tour & Life Experience',
    duration: '4:25',
    category: 'Campus Tour',
    description: 'Explore the modern state-of-the-art laboratories, high-tech classrooms, vibrant library, and student hangouts at our central Sadar campus.',
    thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'f9b_m9F6H_4', // Another educational placeholder ID
    title: 'Annual Cultural Fest - Celestial Highlights',
    duration: '6:12',
    category: 'Festivals',
    description: 'Catch the exhilarating student dance competitions, rock concerts, and energetic cultural celebrations of our flagship fest.',
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'Y3Y_z7QZgX4', // Sports / tech ID
    title: 'ACET Technical Exhibition & Robotics Arena',
    duration: '3:50',
    category: 'Tech / Innovation',
    description: 'Watch the high-velocity robowars, autonomous pathfinder drone displays, and innovative software solutions designed by ACET research cells.',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function LifeAtACET() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoSelect = (video: typeof VIDEOS[0]) => {
    setActiveVideo(video);
    setIsVideoPlaying(false);
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* SECTION 1: LIFE AT ACET SECTION (Huge image banners in rich red background) */}
      <section id="life-at-acet" className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#80070d] via-[#B5121B] to-[#590408] text-white relative overflow-hidden">
        {/* Background decorative textures */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-rose-400/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="font-sans font-bold text-xs uppercase tracking-widest bg-white/10 text-rose-100 px-4 py-2 rounded-full border border-white/10">
              Campus Experience
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Life at ACET Nagpur
            </h2>
            <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full"></div>
            <p className="font-sans text-rose-100 max-w-2xl mx-auto text-sm sm:text-base opacity-90">
              Discover a campus that celebrates engineering innovation alongside vibrant student culture, sports competitions, and historic milestone alumni networks.
            </p>
          </div>

          {/* Huge Banners Slider Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-auto lg:h-[550px] mb-12">
            
            {/* Left Column: Interactive Navigation Controls (Tabs) */}
            <div className="lg:col-span-4 flex flex-col justify-center gap-4 text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                Explore Event Chapters
              </span>
              <div className="space-y-3.5">
                {BANNERS.map((banner, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveBanner(index)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex items-center gap-4 ${
                      activeBanner === index
                        ? 'bg-white/15 border-white/30 shadow-xl backdrop-blur-md'
                        : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                      activeBanner === index ? 'bg-amber-400 text-[#80070d]' : 'bg-white/10 text-white'
                    }`}>
                      {index === 0 && <Sparkles size={18} />}
                      {index === 1 && <Flame size={18} />}
                      {index === 2 && <Trophy size={18} />}
                      {index === 3 && <CheckCircle size={18} />}
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-rose-200/80 uppercase block tracking-wider leading-none mb-1">
                        {banner.tag}
                      </span>
                      <span className="font-sans font-extrabold text-xs sm:text-sm text-white block truncate">
                        {banner.title.split(' - ')[0]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Massive Banner Display */}
            <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-end min-h-[350px] lg:min-h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBanner}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img
                    alt={BANNERS[activeBanner].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    src={BANNERS[activeBanner].image}
                    referrerPolicy="no-referrer"
                  />
                  {/* Premium Ambient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Banner Text Details Content */}
              <div className="relative z-10 p-6 sm:p-10 text-left space-y-4 max-w-2xl">
                <span className="font-sans font-extrabold text-[10px] tracking-widest text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded">
                  {BANNERS[activeBanner].tag}
                </span>
                
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                  {BANNERS[activeBanner].title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-zinc-100 leading-relaxed opacity-90">
                  {BANNERS[activeBanner].description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                  {BANNERS[activeBanner].highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-rose-200">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: VIDEOS SECTION (Watch YouTube videos inline) */}
      <section className="py-20 px-6 md:px-12 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900/60 overflow-hidden text-left">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="font-sans font-bold text-xs text-crimson-red uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 px-3.5 py-1.5 rounded-full border border-rose-200/30 inline-block">
                Media & Highlights
              </span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-zinc-900 dark:text-white tracking-tight">
                Featured ACET YouTube Videos
              </h2>
              <p className="font-sans text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm max-w-xl">
                Tune in to view campus tours, student achievements, and our latest technical/cultural festival coverages.
              </p>
            </div>
            
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-crimson-red hover:text-rose-700 transition-colors bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2.5 rounded-xl shadow-sm"
            >
              <Tv size={14} /> View YouTube Channel <ExternalLink size={12} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Primary Video Player Panel */}
            <div className="lg:col-span-8 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-4 sm:p-5 shadow-lg">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black relative shadow-inner group">
                {isVideoPlaying ? (
                  <iframe
                    title={activeVideo.title}
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      alt={activeVideo.title}
                      className="w-full h-full object-cover brightness-75 group-hover:scale-[1.02] transition-transform duration-700 pointer-events-none"
                      src={activeVideo.thumbnail}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-crimson-red hover:bg-rose-700 hover:scale-110 active:scale-95 text-white rounded-full flex items-center justify-center transition-all shadow-xl hover:shadow-rose-600/30 duration-300 cursor-pointer"
                        aria-label="Play video"
                      >
                        <Play size={28} className="fill-current translate-x-0.5" />
                      </button>
                    </div>
                    {/* Floating Badge */}
                    <span className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-widest bg-zinc-950/80 text-amber-400 px-2.5 py-1 rounded">
                      {activeVideo.category}
                    </span>
                    <span className="absolute bottom-4 right-4 text-xs font-bold bg-zinc-950/80 text-white px-2.5 py-1 rounded">
                      {activeVideo.duration}
                    </span>
                  </>
                )}
              </div>

              {/* Active Video Title & Meta details */}
              <div className="pt-5 pb-2 text-left space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-crimson-red bg-rose-50 dark:bg-rose-950/20 px-2 py-0.5 rounded uppercase">
                    Active Video
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="text-[11px] text-zinc-400 font-semibold">{activeVideo.category}</span>
                </div>
                <h3 className="font-sans font-extrabold text-lg sm:text-xl text-zinc-950 dark:text-white leading-snug">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl">
                  {activeVideo.description}
                </p>
              </div>
            </div>

            {/* Right Column: Playlist selector cards */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                <Film size={12} /> Video Playlist Queue ({VIDEOS.length})
              </span>
              
              <div className="space-y-3">
                {VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => handleVideoSelect(video)}
                    className={`p-3.5 rounded-2xl border cursor-pointer text-left transition-all duration-300 flex gap-4 items-center ${
                      activeVideo.id === video.id
                        ? 'bg-white dark:bg-zinc-900 border-rose-200 dark:border-rose-900 shadow-md ring-1 ring-crimson-red/20'
                        : 'bg-white dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:shadow-sm'
                    }`}
                  >
                    {/* Small thumbnail preview */}
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-zinc-950 shrink-0">
                      <img
                        alt={video.title}
                        className="w-full h-full object-cover filter brightness-90"
                        src={video.thumbnail}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className={`p-1.5 rounded-full ${
                          activeVideo.id === video.id ? 'bg-crimson-red text-white' : 'bg-white/90 text-zinc-900'
                        }`}>
                          <Play size={10} className="fill-current translate-x-[0.5px]" />
                        </div>
                      </div>
                    </div>

                    {/* Meta details */}
                    <div className="min-w-0 space-y-1">
                      <span className="text-[9px] font-bold text-crimson-red dark:text-rose-400 uppercase tracking-widest block leading-none">
                        {video.category}
                      </span>
                      <h4 className="font-sans font-bold text-xs text-zinc-900 dark:text-white truncate">
                        {video.title}
                      </h4>
                      <p className="text-[10px] text-zinc-400 font-medium flex items-center gap-1.5">
                        Duration: {video.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fast Facts Card inside right rail */}
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white p-5 rounded-2xl border border-zinc-800 space-y-3 text-left shadow-md mt-2">
                <h4 className="font-bold text-xs text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Info size={12} /> Interactive Media Desk
                </h4>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  Our media outreach keeps students and parents informed of placements, major conferences, convocations, and hackathon victories. Subscribe to receive immediate alerts.
                </p>
                <div className="pt-1.5">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-[10px] font-extrabold uppercase tracking-widest text-crimson-red hover:text-rose-400 transition-colors"
                  >
                    Subscribe on YouTube →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
