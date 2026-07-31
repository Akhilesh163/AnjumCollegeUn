import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onApplyNow: () => void;
  onExplorePrograms: () => void;
}

const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkxa9goO-hBRBTDRWyhbBEEAvCD2mBnmfy0OsB9CFhxqMFRRf-_O7HxNjkOBN7BbT5si1MkLyUdqCEu-iU_k8Ro-CJy0fO8tRdW-_wS040xcljFhRq47zEn2NbXQ-W-0QFfHMWM4WphPSGGIi0zIBEsxzBFZNMk1p3bmEdMaTmZtp3r4OoPOTYp63B8i-i7wIEK4pDWvUiWtuDPPZRdCcfBwVCygA9KNyYQjj_d-33e56Dhq7JoB1iLTeLzNkdsJWcEQ", // ACET Main Building Landmark
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPJD8fc8vpf5pE5LIsdDodUxbsOXfvVdwrv-2gJhENaOFmfq9Q_s_L9jMhFrwV-tgUxLxmK2S6pc1AZKcvGjnPp3qMFnDT9Yy9CgwwWIESziVwcUbSQxxKUHQb_HLzytUjyypx0pRiSV-uNPMGgLYR3Xzx79WM92CzLJmKcVi_MJpJE-rkgtLCYPJFirdDTSbUjsUg4zRvGpdsbassHamvDmFy0G7Va8OJYsiht69xE3ahEVjEWj32nnE_iWYe0UdeL-vMbnY9rJKr6A" // Advantage Vidarbha Event
];

export default function Hero({ onApplyNow, onExplorePrograms }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 min-h-[660px] lg:h-[86vh] max-h-[920px] flex flex-col justify-between pt-36 sm:pt-40 lg:pt-44">
      
      {/* Background Image Carousel with Ultra-Clear Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="flex h-full w-full"
          animate={{ x: `-${currentImageIndex * 100}%` }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          {HERO_IMAGES.map((imgUrl, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img 
                alt={`Anjuman Campus ${index + 1}`} 
                className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.02]" 
                src={imgUrl} 
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Senior Designer Ambient Vignettes - Keeps 95% center clarity intact */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-zinc-950/70 via-zinc-950/20 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent z-10 pointer-events-none"></div>

        {/* Carousel Indicators (Bottom Left) */}
        <div className="absolute bottom-6 left-6 md:left-12 z-20 flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentImageIndex 
                  ? 'w-8 bg-crimson-red shadow-lg shadow-rose-950' 
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>



      {/* Sticky Right Admission Button (Kept intact) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex items-center">
        <button 
          onClick={onApplyNow}
          className="bg-[#ff0000] hover:bg-[#d40000] text-white border-[3px] border-white border-r-0 rounded-l-xl px-4 py-2.5 flex items-center gap-3 shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform hover:-translate-x-1 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center pl-1">
            <span className="absolute flex h-8 w-8 opacity-60">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white"></span>
            </span>
            <div className="bg-white text-[#ff0000] text-[10px] font-black px-1.5 py-0.5 rounded shadow-sm relative z-10 uppercase tracking-widest mt-1">
              NEW
            </div>
          </div>
          <div className="flex flex-col text-left leading-[1.1]">
            <span className="font-bold text-sm tracking-wide">Admission</span>
            <span className="font-extrabold text-base md:text-lg tracking-tight">2026-27</span>
          </div>
        </button>
      </div>
    </section>
  );
}

