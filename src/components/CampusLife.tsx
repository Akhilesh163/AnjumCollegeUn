import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Users, Palette, Code, Radio } from 'lucide-react';

const CLUBS = [
  { id: 'robotics', name: 'ACET Robotics Club', category: 'Technical', icon: Code, text: 'Designing Autonomous drones, heavy combat bots, and automatic warehouse pickers. Participates in national Robocon events.', lead: 'Piyush Umate' },
  { id: 'code', name: 'Developer Coding Syndicate', category: 'Technical', icon: Sparkles, text: 'Organizing weekly coding challenges, smart city hackathons, and guest industry webinars on full-stack web development.', lead: 'Shantanu Patne' },
  { id: 'sports', name: 'Spartans Sports Cell', category: 'Athletics', icon: Trophy, text: 'Coordinating inter-university matches for Basketball, Cricket, and Football. Holders of RTMNU zonal trophies.', lead: 'Prasad Zalte' },
  { id: 'cultural', name: 'Aura Fine Arts & Drama Club', category: 'Creative', icon: Palette, text: 'Nurturing street dramas, fine art galleries, classical music, and annual fashion shows during the Cultural Fest.', lead: 'Fozia Sheikh' },
];

const GALLERY_IMAGES = [
  { title: 'Cultural Fest', url: 'https://lh3.googleusercontent.com/aida/AP1WRLsh6naEjf_9et3e1yX_XbQvAMbytThs6o4VO0gf_wIJ02Z_kEQQJKYeera3MKVq5jg89wO4s8vvlEedRAa1oj9F4lz9X08C5K-kJW7v1-yfJblwADX8Lm7O9KqOb0vkNfstOewSLMDV-fKdPxFiW1G9iTwBxJEmYvlCZRmwkN7QE01HCe34OXkUp8B3M_k_tWVE42eWk6uRMDoBzrCYAeUqYRLiBKxrYxDQxYYydDPClwjlKtQ7cTZNRgA' },
  { title: 'Alumni homecoming', url: 'https://lh3.googleusercontent.com/aida/AP1WRLsiX3OLnoiaUvMqwF9nFwaDNTe75Hb9FIfo6fDunCXmmvOdbJXD28BUsY2sqPTRZnsJR0rA23xVhXRUptPNLw3LXV4ewD_W8_gFHpWNSNPmefvg2WBOz5WR_gEJwfszU3L5il4c9d0bgbcBhYFAiFlY5ATR1m1UWDvaKI_v6kl71kgwo50Ti0rbLqxTHSsAJ5WTulvH2WmINyejw3MUWRobYMnb_VKwPoYWwQFF1GuakT2xQbqU3f_cRg' },
  { title: 'Invention Exhibition', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPJD8fc8vpf5pE5LIsdDodUxbsOXfvVdwrv-2gJhENaOFmfq9Q_s_L9jMhFrwV-tgUxLxmK2S6pc1AZKcvGjnPp3qMFnDT9Yy9CgwwWIESziVwcUbSQxxKUHQb_HLzytUjyypx0pRiSV-uNPMGgLYR3Xzx79WM92CzLJmKcVi_MJpJE-rkgtLCYPJFirdDTSbUjsUg4zRvGpdsbassHamvDmFy0G7Va8OJYsiht69xE3ahEVjEWj32nnE_iWYe0UdeL-vMbnY9rJKr6A' },
  { title: 'Vibrant Campus Life', url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZoBrYYLbvAxzqa_4W6qqIDGC2k_TDuhpwIr_tCfa7kcKVWMwe2msblbUfrEB_P5hZjJNWZj_43HCkU2QHINWOmsuXX7Nh4wPjphdeFnIW-cO8d-AwzKgj6rd8duBm3EpVCiTOh5sFLZ2_-NpZnp0F_GokEsovhl5qaPB81qJaU8fK5ndxG2ywGYdBKYgKu4o9aOZ6dYiDD7dSUjBrtdGdjDqb5pYtLYY_oiqfBS4LF5h3JPhYJxLfPbjGB-FSTtJ--w' }
];

export default function CampusLife() {
  const [selectedClubCategory, setSelectedClubCategory] = useState('All');

  const categories = ['All', 'Technical', 'Athletics', 'Creative'];

  const filteredClubs = selectedClubCategory === 'All' 
    ? CLUBS 
    : CLUBS.filter(club => club.category === selectedClubCategory);

  return (
    <section id="campus-life-gallery" className="py-20 px-6 md:px-12 bg-white dark:bg-zinc-900 border-b border-rose-50/10">
      <div className="max-w-7xl mx-auto text-left">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-sans font-bold text-xs text-crimson-red uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 px-3.5 py-1.5 rounded-full border border-rose-200/30">
            Campus Experience
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-3 mb-4">
            Vibrant Campus Life & Clubs
          </h2>
          <div className="h-1 w-20 bg-crimson-red mx-auto rounded-full mb-4"></div>
          <p className="font-sans text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto text-base text-center">
            At ACET, we foster student leadership, collaborative engineering prototypes, and high-energy athletic and creative expression.
          </p>
        </div>

        {/* Dynamic Clubs search filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div>
            <h3 className="font-sans font-extrabold text-lg text-zinc-900 dark:text-white">Student Societies & Clubs</h3>
            <p className="text-xs text-zinc-400">Discover and register for ACET's major cultural and tech organizations.</p>
          </div>

          <div className="flex gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedClubCategory(cat)}
                className={`text-[10px] font-sans font-bold uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all ${
                  selectedClubCategory === cat
                    ? 'bg-crimson-red text-white'
                    : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredClubs.map(club => {
            const Icon = club.icon;
            return (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-zinc-50 dark:bg-zinc-800/40 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex gap-4 items-start"
              >
                <div className="p-3 bg-rose-500/10 text-crimson-red rounded-xl shrink-0">
                  <Icon size={22} />
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="font-sans font-extrabold text-zinc-950 dark:text-white text-base">{club.name}</h4>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 px-2 py-0.5 rounded w-fit self-start sm:self-auto">
                      {club.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">{club.text}</p>
                  <span className="block text-[10px] font-bold text-crimson-red uppercase">Student Lead: {club.lead}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Image Gallery */}
        <div>
          <h3 className="font-sans font-extrabold text-lg text-zinc-900 dark:text-white mb-6">Gallery Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl h-44 shadow-sm border border-zinc-100 dark:border-zinc-800"
              >
                <img 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={img.url} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-sans font-bold text-xs">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
