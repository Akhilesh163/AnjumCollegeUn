import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe, HelpCircle } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <div className="py-16 bg-zinc-50 dark:bg-zinc-950 font-sans">
      <div className="max-w-7xl mx-auto px-6 text-left">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="font-sans font-extrabold text-xs text-crimson-red uppercase tracking-widest bg-rose-50 dark:bg-rose-950/40 px-3.5 py-1.5 rounded-full border border-rose-200/30">
            Get in touch
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white mt-3 mb-4">
            Contact Anjuman Admissions & Office
          </h2>
          <div className="h-1 w-20 bg-crimson-red mx-auto rounded-full mb-4"></div>
          <p className="font-sans text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto text-base text-center leading-relaxed">
            Have any queries about eligibility, fees, or campus visits? Reach out to our central desk or send us a query directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Info Card */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-8 space-y-6 shadow-xs">
              <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white">College Head Office</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-rose-500/10 text-crimson-red rounded-xl mt-0.5 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Address</span>
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 font-medium mt-0.5 leading-relaxed">
                      Mangalwari Bazaar Road, Sadar, Nagpur - 440022, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-rose-500/10 text-crimson-red rounded-xl mt-0.5 shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Helpline Inquiry</span>
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 font-bold mt-0.5">
                      +91 712 2582749, +91 712 2583559
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-rose-500/10 text-crimson-red rounded-xl mt-0.5 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Official Emails</span>
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 font-medium mt-0.5">
                      eng_acet@rediffmail.com
                    </p>
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                      principal@anjumancollege.edu.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-rose-500/10 text-crimson-red rounded-xl mt-0.5 shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Inquiry Hours</span>
                    <p className="text-xs text-zinc-800 dark:text-zinc-200 font-medium mt-0.5">
                      9:30 AM to 5:00 PM (Monday to Saturday)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mock Card */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-4 overflow-hidden shadow-xs relative h-60 flex items-center justify-center text-center">
              {/* Nice clean abstract map background */}
              <div className="absolute inset-0 bg-neutral-100 dark:bg-zinc-950 flex flex-col justify-center items-center p-6 space-y-4">
                <div className="h-12 w-12 bg-crimson-red/10 text-crimson-red rounded-full flex items-center justify-center animate-pulse">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-zinc-900 dark:text-white">Find us in Sadar, Nagpur</h4>
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500 max-w-xs leading-relaxed mt-1">
                    Mangalwari Bazaar Road, right in the center of Nagpur city. Easily accessible by local metro or public transit.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Anjuman+College+of+Engineering+and+Technology+Nagpur"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-zinc-900 hover:bg-crimson-red text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white">Send An Instant Message</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                Submit your details below and our academic admissions coordinator will review and respond to you via email or phone within 24 working hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aamir Khan"
                      className="w-full text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-crimson-red/50 focus:ring-1 focus:ring-crimson-red/30 transition-all text-zinc-800 dark:text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. aamir@gmail.com"
                      className="w-full text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-crimson-red/50 focus:ring-1 focus:ring-crimson-red/30 transition-all text-zinc-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 9876543210"
                      className="w-full text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-crimson-red/50 focus:ring-1 focus:ring-crimson-red/30 transition-all text-zinc-800 dark:text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Inquiry Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Admissions Eligibility"
                      className="w-full text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-crimson-red/50 focus:ring-1 focus:ring-crimson-red/30 transition-all text-zinc-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your question or query details here..."
                    className="w-full text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-crimson-red/50 focus:ring-1 focus:ring-crimson-red/30 transition-all text-zinc-800 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-crimson-red hover:bg-[#8c000e] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md cursor-pointer shrink-0"
                >
                  {loading ? 'Sending message...' : 'Dispatch Message'}
                  <Send size={13} />
                </button>
              </form>
            </div>

            {/* Submission confirmation toast */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center gap-2.5"
                >
                  <CheckCircle2 size={16} />
                  <span>Success! Your inquiry message was dispatched successfully. Our coordinator will contact you shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </div>
  );
}
