import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, LogIn, Key, User, ShieldAlert, CheckCircle, Clock, BookOpen, AlertCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [role, setRole] = useState<'student' | 'faculty' | 'admin'>('student');
  const [username, setQuery] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please fill out all credentials fields.');
      return;
    }

    if (password.length < 4) {
      setError('Password must exceed 4 characters.');
      return;
    }

    // Success simulation
    setError('');
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setQuery('');
    setPassword('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden w-full max-w-md shadow-2xl border border-zinc-200 dark:border-zinc-800 z-10 flex flex-col text-left"
      >
        
        {/* Header banner */}
        <div className="bg-crimson-red p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full bg-black/10 hover:bg-black/30 transition-all"
          >
            <X size={18} />
          </button>
          
          <div className="flex gap-3 items-center">
            <LogIn size={26} className="text-rose-200" />
            <div>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl leading-tight">ACET Campus Intranet</h3>
              <p className="text-xs text-rose-100/90 mt-0.5">ERP, Attendance, Syllabus & Grade portals</p>
            </div>
          </div>
        </div>

        {/* Scrollable Intranet container */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {!loggedInUser ? (
              <motion.div
                key="login-form"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {/* Role select tabs */}
                <div className="grid grid-cols-3 gap-1.5 mb-6 bg-zinc-50 dark:bg-zinc-800 p-1 rounded-xl">
                  {(['student', 'faculty', 'admin'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        setRole(r);
                        setError('');
                      }}
                      className={`py-2 px-1 text-center font-bold text-[10px] uppercase tracking-wider rounded-lg transition-all ${
                        role === r
                          ? 'bg-crimson-red text-white'
                          : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700/60'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-xs font-bold text-rose-500 rounded-xl flex gap-2 items-center">
                      <ShieldAlert size={16} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                      {role === 'student' ? 'University Roll Number' : role === 'faculty' ? 'Faculty ID' : 'Admin Username'}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={15} />
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={role === 'student' ? 'e.g. ACET-2026-CS82' : role === 'faculty' ? 'e.g. ACET-FAC-401' : 'admin_hq'}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs pl-10 pr-4 py-3 rounded-xl text-zinc-950 dark:text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5">
                      Portal Password
                    </label>
                    <div className="relative">
                      <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={15} />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs pl-10 pr-4 py-3 rounded-xl text-zinc-950 dark:text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-crimson-red hover:bg-[#93000f] text-white font-sans font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md mt-4"
                  >
                    Authenticate & Enter Intranet
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="dashboard-view"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-2xl">
                  <CheckCircle size={22} className="shrink-0" />
                  <div>
                    <span className="text-xs font-bold block uppercase tracking-wider">Authentication Approved</span>
                    <p className="text-[10px] text-zinc-500 font-semibold mt-0.5">Signed in as: {loggedInUser} ({role})</p>
                  </div>
                </div>

                <div className="border border-zinc-100 dark:border-zinc-800 rounded-2xl p-4 bg-zinc-50 dark:bg-zinc-800/40 text-xs space-y-3">
                  <div className="flex gap-2 items-center text-zinc-900 dark:text-zinc-100 font-bold border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <BookOpen size={15} className="text-crimson-red" />
                    <span>Your Intranet Dashboards</span>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-zinc-500 font-medium">Daily Attendance:</span>
                      <span className="font-extrabold text-emerald-600">89.4% (Eligible)</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-zinc-500 font-medium">Next Lecture:</span>
                      <span className="font-bold flex items-center gap-1"><Clock size={11} className="text-zinc-400" /> 10:30 AM (VLSI)</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-zinc-500 font-medium">Current Semester CGPA:</span>
                      <span className="font-bold">8.74 / 10.0</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={onClose}
                    className="flex-1 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 font-sans font-bold text-xs uppercase py-3 rounded-xl transition-all"
                  >
                    Go to Portal
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 bg-crimson-red hover:bg-[#93000f] text-white font-sans font-bold text-xs uppercase py-3 rounded-xl transition-all"
                  >
                    Sign Out
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
}
