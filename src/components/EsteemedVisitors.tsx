import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VISITORS } from '../data';
import { Visitor } from '../types';
import { X, Quote, Calendar, Lightbulb } from 'lucide-react';

export default function EsteemedVisitors() {
  const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null);

  return (
    <section className="py-20 bg-[#f4b93f] relative border-b border-rose-50/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-zinc-950">
          <div className="relative inline-block mb-4">
            <span className="font-sans font-extrabold tracking-[0.2em] uppercase text-xs">
              Distinguished Guests
            </span>
            <svg className="absolute -bottom-2.5 left-0 w-full h-3" preserveAspectRatio="none" viewBox="0 0 100 20">
              <path d="M0,10 Q50,20 100,5" fill="none" stroke="black" strokeWidth="2.5"></path>
              <path d="M20,15 Q60,25 90,10" fill="none" stroke="black" strokeWidth="2"></path>
            </svg>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-center tracking-tight text-zinc-950">
            Esteemed Visitors at ACET
          </h2>
        </div>

        {/* Visitors Infinite Marquee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden py-4 marquee-container"
        >
          {/* Marquee Track containing 2 identical sets of visitors */}
          <div className="animate-marquee gap-6">
            
            {/* Track Set 1 */}
            <div className="flex gap-6 shrink-0">
              {VISITORS.map((visitor, idx) => (
                <div
                  key={`track1-${visitor.name}-${idx}`}
                  onClick={() => setSelectedVisitor(visitor)}
                  className="group cursor-pointer text-left bg-white/85 hover:bg-white p-4 rounded-2xl border border-amber-600/10 transition-all duration-300 hover:shadow-xl w-[220px] sm:w-[250px] shrink-0"
                  id={`visitor-card-t1-${idx}`}
                >
                  <div className="overflow-hidden rounded-xl bg-zinc-100 aspect-[4/5] mb-4 relative">
                    <img 
                      alt={visitor.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={visitor.image} 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    
                    {/* Micro interactivity indicator */}
                    <div className="absolute bottom-2.5 right-2.5 bg-zinc-950/70 text-white text-[9px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Speech
                    </div>
                  </div>
                  <h4 className="font-sans font-extrabold text-zinc-950 text-base leading-tight group-hover:text-crimson-red transition-colors line-clamp-1">
                    {visitor.name}
                  </h4>
                  <p className="text-zinc-700 font-sans text-[11px] font-medium mt-1 leading-snug line-clamp-2">
                    {visitor.designation}
                  </p>
                </div>
              ))}
            </div>

            {/* Track Set 2 (Identical duplicate for seamless continuous looping) */}
            <div className="flex gap-6 shrink-0">
              {VISITORS.map((visitor, idx) => (
                <div
                  key={`track2-${visitor.name}-${idx}`}
                  onClick={() => setSelectedVisitor(visitor)}
                  className="group cursor-pointer text-left bg-white/85 hover:bg-white p-4 rounded-2xl border border-amber-600/10 transition-all duration-300 hover:shadow-xl w-[220px] sm:w-[250px] shrink-0"
                  id={`visitor-card-t2-${idx}`}
                >
                  <div className="overflow-hidden rounded-xl bg-zinc-100 aspect-[4/5] mb-4 relative">
                    <img 
                      alt={visitor.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={visitor.image} 
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    
                    {/* Micro interactivity indicator */}
                    <div className="absolute bottom-2.5 right-2.5 bg-zinc-950/70 text-white text-[9px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Speech
                    </div>
                  </div>
                  <h4 className="font-sans font-extrabold text-zinc-950 text-base leading-tight group-hover:text-crimson-red transition-colors line-clamp-1">
                    {visitor.name}
                  </h4>
                  <p className="text-zinc-700 font-sans text-[11px] font-medium mt-1 leading-snug line-clamp-2">
                    {visitor.designation}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Visitor Quotes Dialog */}
        <AnimatePresence>
          {selectedVisitor && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedVisitor(null)}
                className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl border border-zinc-200 dark:border-zinc-800 z-10 p-6 sm:p-8 text-left"
              >
                <button
                  onClick={() => setSelectedVisitor(null)}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
                  aria-label="Close quote modal"
                >
                  <X size={20} />
                </button>

                <div className="flex gap-4 items-start mb-6">
                  <img
                    alt={selectedVisitor.name}
                    className="w-16 h-20 object-cover rounded-lg border border-zinc-200 dark:border-zinc-700 shrink-0"
                    src={selectedVisitor.image}
                  />
                  <div>
                    <h3 className="font-sans font-extrabold text-zinc-950 dark:text-white text-lg">
                      {selectedVisitor.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold mt-1">
                      {selectedVisitor.designation}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Speech Topic if present */}
                  {selectedVisitor.speechTopic && (
                    <div className="bg-amber-500/10 dark:bg-amber-500/5 p-3 rounded-xl border border-amber-500/10 flex gap-2 items-center">
                      <Lightbulb className="text-amber-600 shrink-0" size={16} />
                      <span className="text-xs font-bold text-amber-800 dark:text-amber-400">
                        Guest Speech: "{selectedVisitor.speechTopic}"
                      </span>
                    </div>
                  )}

                  <div className="relative">
                    <Quote className="absolute -top-3 -left-3 text-rose-100 dark:text-zinc-800 h-10 w-10 -z-10" />
                    <p className="font-sans text-sm text-zinc-700 dark:text-zinc-300 italic leading-relaxed pl-1">
                      "{selectedVisitor.quote}"
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
                  <button
                    onClick={() => setSelectedVisitor(null)}
                    className="bg-zinc-950 dark:bg-zinc-800 text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-zinc-800 transition-all"
                  >
                    Close Quote
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
