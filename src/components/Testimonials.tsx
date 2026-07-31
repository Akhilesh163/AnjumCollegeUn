import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to middle card (Prajjwal Dubey)
  const [prevIndex, setPrevIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 2000); // Auto-scroll in 2 seconds
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const len = TESTIMONIALS.length;

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950/80 border-b border-rose-50/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans font-bold text-xs text-crimson-red uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 px-3.5 py-1.5 rounded-full border border-rose-200/30">
            Success Stories
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-3 mb-4">
            Student Placement Success
          </h2>
          <div className="h-1 w-20 bg-crimson-red mx-auto rounded-full mb-4"></div>
          <p className="font-sans text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto text-base">
            Read first-hand accounts from our placed graduates about how ACET Nagpur’s mentoring and technical workshops guided them to premier corporate offers.
          </p>
        </div>

        {/* Carousel stage with side previews */}
        <div className="relative flex items-center justify-center max-w-5xl mx-auto">
          
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-2 lg:-left-12 z-40 w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-xl border border-zinc-100 dark:border-zinc-700 flex items-center justify-center text-zinc-800 dark:text-zinc-200 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:text-crimson-red transition-all cursor-pointer"
            aria-label="Previous story"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Testimonial Cards Layout */}
          <div className="relative w-full h-[440px] sm:h-[520px] overflow-visible py-8 flex items-center justify-center">
            
            {TESTIMONIALS.map((t, idx) => {
              // Calculate wrapped offset relative to activeIndex
              let offset = idx - activeIndex;
              while (offset < -Math.floor(len / 2)) offset += len;
              while (offset > Math.floor(len / 2)) offset -= len;

              // Calculate previous offset to detect wrapping (teleporting)
              let previousOffset = idx - prevIndex;
              while (previousOffset < -Math.floor(len / 2)) previousOffset += len;
              while (previousOffset > Math.floor(len / 2)) previousOffset -= len;

              // If a card leaps between -1 and 1 directly, it's wrapping
              const isWrapping = (previousOffset === -1 && offset === 1) || (previousOffset === 1 && offset === -1);
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={t.name}
                  style={{
                    position: 'absolute',
                  }}
                  animate={{
                    x: isMobile ? (isCenter ? '0%' : `${offset * 120}%`) : `${offset * 105}%`,
                    scale: isCenter ? 1.05 : (isMobile ? 0.7 : 0.85),
                    opacity: isCenter ? 1 : (isMobile ? 0 : 0.35),
                    zIndex: isCenter ? 30 : 10,
                  }}
                  transition={isWrapping ? { type: 'tween', duration: 0 } : { type: 'spring', stiffness: 120, damping: 18 }}
                  className="w-[280px] sm:w-[350px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 bg-zinc-900"
                >
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent"></div>
                  
                  {/* Decorative Quote Icon */}
                  <Quote className="absolute top-6 left-6 text-white/20 h-10 w-10" />

                  {/* Testimonial info overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-center text-white flex flex-col justify-end h-[65%]">
                    
                    {/* Collapsible/Expandable Text Quote on Center Item */}
                    {isCenter && (
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-zinc-200 italic mb-4 line-clamp-3 leading-relaxed text-center px-2"
                      >
                        "{t.text}"
                      </motion.p>
                    )}

                    <h4 className="font-sans font-extrabold text-base sm:text-lg text-white tracking-tight leading-none">
                      {t.name}
                    </h4>
                    <p className="text-zinc-300 font-sans text-[10px] uppercase font-bold tracking-widest mt-1.5 leading-none">
                      {t.role}
                    </p>
                    
                    <div className="mt-4 inline-block mx-auto bg-crimson-red text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                      Placed @ {t.company}
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-2 lg:-right-12 z-40 w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-xl border border-zinc-100 dark:border-zinc-700 flex items-center justify-center text-zinc-800 dark:text-zinc-200 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:text-crimson-red transition-all cursor-pointer"
            aria-label="Next story"
          >
            <ChevronRight size={24} />
          </button>

        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setPrevIndex(activeIndex);
                setActiveIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex 
                  ? 'w-8 bg-crimson-red' 
                  : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
