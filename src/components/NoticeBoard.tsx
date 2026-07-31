import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NOTICES } from '../data';
import { Notice } from '../types';
import { Search, Calendar, FileText, Download, ArrowRight, Bell, Sparkles, Check } from 'lucide-react';

export default function NoticeBoard() {
  const [activeTab, setActiveTab] = useState<'all' | 'exam' | 'general' | 'admission'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Filter Notices
  const filteredNotices = NOTICES.filter((notice) => {
    const matchesTab = activeTab === 'all' || notice.category === activeTab;
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (notice.description && notice.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const triggerDownload = (noticeId: string) => {
    setDownloadingId(noticeId);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadedIds((prev) => [...prev, noticeId]);
    }, 1500);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-zinc-900 border-b border-rose-50/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans font-bold text-xs text-crimson-red uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 px-3.5 py-1.5 rounded-full border border-rose-200/30 flex items-center gap-1.5 w-fit mx-auto">
            <Bell size={12} className="text-crimson-red animate-bounce" />
            Updates
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-3 mb-4">
            Latest Announcements & Notice Board
          </h2>
          <div className="h-1 w-20 bg-crimson-red mx-auto rounded-full mb-4"></div>
          <p className="font-sans text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto text-base">
            Stay up to date with core university circulars, PhD admissions, convocation schedules, and regular/backlog academic datesheets.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800">
          <div className="flex flex-wrap gap-1.5 self-start">
            {(['all', 'exam', 'admission', 'general'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setExpandedId(null);
                }}
                className={`text-xs font-sans font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all ${
                  activeTab === tab
                    ? 'bg-crimson-red text-white'
                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/30 dark:border-zinc-700'
                }`}
                id={`notice-tab-${tab}`}
              >
                {tab === 'all' ? 'All Updates' : tab === 'exam' ? 'Examinations' : tab === 'admission' ? 'PhD Admissions' : 'General Board'}
              </button>
            ))}
          </div>

          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={15} />
            <input
              type="text"
              placeholder="Search circulars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-zinc-800 text-xs pl-10 pr-4 py-2.5 rounded-xl border border-zinc-100 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-crimson-red"
            />
          </div>
        </div>

        {/* Two Column Layout matching HTML (Notice list) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          
          {/* Left Column: Examination Announcements */}
          <div className="bg-zinc-50 dark:bg-zinc-800/20 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800/60 shadow-sm flex flex-col justify-between">
            <div className="bg-crimson-red p-6 text-center text-white flex items-center justify-center gap-2">
              <FileText size={20} />
              <h3 className="font-sans font-extrabold text-lg sm:text-xl">University Examinations</h3>
            </div>

            <div className="p-6 sm:p-8 space-y-6 flex-1">
              {filteredNotices.filter(n => n.category === 'exam').map((notice) => (
                <div key={notice.id} className="border-b border-zinc-200/60 dark:border-zinc-800/50 pb-5 last:border-0 last:pb-0">
                  <div className="flex gap-2 items-start group">
                    <span className="material-symbols-outlined text-crimson-red text-sm mt-1 shrink-0">arrow_forward</span>
                    <div className="space-y-1">
                      <button
                        onClick={() => setExpandedId(expandedId === notice.id ? null : notice.id)}
                        className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100 hover:text-crimson-red dark:hover:text-rose-400 text-left transition-colors focus:outline-none leading-snug"
                      >
                        {notice.title}
                      </button>
                      <span className="text-[10px] font-semibold text-zinc-400 block">{notice.date}</span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === notice.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pt-3 space-y-3">
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {notice.description || 'Access details regarding timings, reporting instructions, and hall ticket generation.'}
                          </p>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => triggerDownload(notice.id)}
                              disabled={downloadingId === notice.id}
                              className="text-[10px] font-bold uppercase tracking-wider bg-zinc-900 dark:bg-zinc-700 hover:bg-crimson-red dark:hover:bg-rose-950 text-white px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
                            >
                              {downloadingId === notice.id ? (
                                <>
                                  <div className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" />
                                  Downloading...
                                </>
                              ) : downloadedIds.includes(notice.id) ? (
                                <>
                                  <Check size={12} className="text-emerald-400" />
                                  Downloaded
                                </>
                              ) : (
                                <>
                                  <Download size={12} />
                                  Download PDF ({notice.fileSize || '1.0 MB'})
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {filteredNotices.filter(n => n.category === 'exam').length === 0 && (
                <div className="text-center py-10 text-zinc-400 text-xs font-semibold">
                  No active examination notifications in this view.
                </div>
              )}
            </div>

            <div className="px-8 pb-8 text-center lg:text-left">
              <button 
                onClick={() => setActiveTab('exam')}
                className="bg-crimson-red hover:bg-[#93000f] text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all flex items-center gap-2"
                id="exam-view-all-btn"
              >
                Read More Circulars <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: General Notice Board */}
          <div className="bg-zinc-50 dark:bg-zinc-800/20 rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800/60 shadow-sm flex flex-col justify-between">
            <div className="bg-crimson-red p-6 text-center text-white flex items-center justify-center gap-2">
              <Bell size={20} />
              <h3 className="font-sans font-extrabold text-lg sm:text-xl">Academic Notice Board</h3>
            </div>

            <div className="p-6 sm:p-8 space-y-6 flex-1">
              {filteredNotices.filter(n => n.category !== 'exam').map((notice) => (
                <div key={notice.id} className="border-b border-zinc-200/60 dark:border-zinc-800/50 pb-5 last:border-0 last:pb-0">
                  <div className="flex gap-2 items-start group">
                    <span className="material-symbols-outlined text-crimson-red text-sm mt-1 shrink-0">arrow_forward</span>
                    <div className="space-y-1">
                      <button
                        onClick={() => setExpandedId(expandedId === notice.id ? null : notice.id)}
                        className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100 hover:text-crimson-red dark:hover:text-rose-400 text-left transition-colors focus:outline-none leading-snug"
                      >
                        {notice.title}
                      </button>
                      <span className="text-[10px] font-semibold text-zinc-400 block">{notice.date}</span>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === notice.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pt-3 space-y-3">
                          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {notice.description || 'Further information regarding dates, required document uploads and guidelines.'}
                          </p>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => triggerDownload(notice.id)}
                              disabled={downloadingId === notice.id}
                              className="text-[10px] font-bold uppercase tracking-wider bg-zinc-900 dark:bg-zinc-700 hover:bg-crimson-red dark:hover:bg-rose-950 text-white px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
                            >
                              {downloadingId === notice.id ? (
                                <>
                                  <div className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" />
                                  Downloading...
                                </>
                              ) : downloadedIds.includes(notice.id) ? (
                                <>
                                  <Check size={12} className="text-emerald-400" />
                                  Downloaded
                                </>
                              ) : (
                                <>
                                  <Download size={12} />
                                  Download PDF ({notice.fileSize || '1.0 MB'})
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {filteredNotices.filter(n => n.category !== 'exam').length === 0 && (
                <div className="text-center py-10 text-zinc-400 text-xs font-semibold">
                  No active general notices matching your criteria in this view.
                </div>
              )}
            </div>

            <div className="px-8 pb-8 text-center lg:text-left">
              <button 
                onClick={() => setActiveTab('general')}
                className="bg-crimson-red hover:bg-[#93000f] text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all flex items-center gap-2"
                id="general-view-all-btn"
              >
                View All Board Notices <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
