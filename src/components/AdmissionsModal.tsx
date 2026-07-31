import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ArrowLeft, GraduationCap, Calendar, FileCheck, HelpCircle, Award } from 'lucide-react';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedBranch?: string;
}

export default function AdmissionsModal({ isOpen, onClose, preselectedBranch = '' }: AdmissionsModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: preselectedBranch || 'Computer Science & Engineering',
    category: 'General (Cap Round)',
    twelfthMarks: '',
    entranceScore: '',
    entranceType: 'JEE Mains',
    declaration: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registrationSlip, setRegistrationSlip] = useState<string | null>(null);

  const branches = [
    'Computer Science & Engineering',
    'Artificial Intelligence & Data Science',
    'Electronics & Telecommunication Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering'
  ];

  const handleNext = () => {
    const stepErrors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.name.trim()) stepErrors.name = 'Full name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) stepErrors.email = 'Valid email is required';
      if (!formData.phone.trim() || formData.phone.length < 10) stepErrors.phone = 'Valid 10-digit phone number is required';
    } else if (step === 2) {
      if (!formData.branch) stepErrors.branch = 'Please choose a department';
    } else if (step === 3) {
      const twelfthVal = parseFloat(formData.twelfthMarks);
      const entranceVal = parseFloat(formData.entranceScore);
      if (isNaN(twelfthVal) || twelfthVal < 35 || twelfthVal > 100) stepErrors.twelfthMarks = 'Enter Twelfth score between 35% and 100%';
      if (isNaN(entranceVal) || entranceVal < 0 || entranceVal > 100) stepErrors.entranceScore = 'Enter percentile score between 0 and 100';
    }

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
    } else {
      setErrors({});
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setErrors({});
    setStep((prev) => prev - 1);
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.declaration) {
      setErrors({ declaration: 'You must agree to the academic declarations.' });
      return;
    }

    // Generate simulated slip
    const regNo = 'ACET/2026/' + Math.floor(1000 + Math.random() * 9000);
    setRegistrationSlip(regNo);
    setStep(5);
  };

  const isEligible = () => {
    const marks = parseFloat(formData.twelfthMarks);
    return marks >= 45; // standard criterion
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden w-full max-w-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 z-10 flex flex-col text-left max-h-[92vh]"
      >
        
        {/* Banner header */}
        <div className="bg-crimson-red p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full bg-black/10 hover:bg-black/30 transition-all"
            aria-label="Close form"
          >
            <X size={18} />
          </button>
          
          <div className="flex gap-3 items-center">
            <GraduationCap size={28} className="text-rose-200" />
            <div>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl leading-tight">Admissions Portal 2026-27</h3>
              <p className="text-xs text-rose-100/90 mt-0.5 font-medium">Provision Registration & Eligibility Calculator</p>
            </div>
          </div>

          {/* Stepper Wizard Indicator */}
          {step <= 4 && (
            <div className="flex justify-between items-center mt-6">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2 flex-1 last:flex-none">
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                    step === s 
                      ? 'bg-white text-crimson-red border-white' 
                      : step > s 
                        ? 'bg-rose-950/40 text-white border-rose-300/30' 
                        : 'bg-transparent text-rose-200/50 border-rose-200/20'
                  }`}>
                    {step > s ? <Check size={11} /> : s}
                  </div>
                  {s < 4 && <div className={`h-0.5 flex-1 ${step > s ? 'bg-rose-200' : 'bg-rose-200/10'}`} />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Wizard Step Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Personal details */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4 text-left"
              >
                <div className="space-y-1">
                  <h4 className="font-sans font-extrabold text-sm text-zinc-900 dark:text-white">Personal Contact Details</h4>
                  <p className="text-xs text-zinc-400">Kindly supply your official name and contact digits as per your matriculation marksheet.</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Candidate Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Prajjwal Dubey"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-crimson-red"
                    />
                    {errors.name && <span className="text-[10px] font-bold text-rose-500 block mt-1">{errors.name}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Active Email Address</label>
                      <input
                        type="email"
                        placeholder="candidate@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-crimson-red"
                      />
                      {errors.email && <span className="text-[10px] font-bold text-rose-500 block mt-1">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Mobile Contact No</label>
                      <input
                        type="tel"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-crimson-red"
                      />
                      {errors.phone && <span className="text-[10px] font-bold text-rose-500 block mt-1">{errors.phone}</span>}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Branch Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4 text-left"
              >
                <div className="space-y-1">
                  <h4 className="font-sans font-extrabold text-sm text-zinc-900 dark:text-white">Choose Engineering Stream</h4>
                  <p className="text-xs text-zinc-400">Select your preferred branch choice below. Availability subject to merit scores and seat capacity.</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Select Department</label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-3 rounded-xl text-zinc-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-crimson-red"
                    >
                      {branches.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Admission Quota Category</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['General (Cap Round)', 'Minority Quota', 'Management Quota', 'Direct Second Year'].map((q) => (
                        <button
                          type="button"
                          key={q}
                          onClick={() => setFormData({ ...formData, category: q })}
                          className={`p-3 text-xs rounded-xl border text-left font-bold transition-all ${
                            formData.category === q
                              ? 'border-crimson-red bg-rose-500/10 text-crimson-red'
                              : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/45 text-zinc-700 dark:text-zinc-300'
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Merit / Academic marks */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4 text-left"
              >
                <div className="space-y-1">
                  <h4 className="font-sans font-extrabold text-sm text-zinc-900 dark:text-white">Academic Qualifications & Merit</h4>
                  <p className="text-xs text-zinc-400">Fill in your high school marks and central entrance percentile scores to calculate your admission eligibility.</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Twelfth / HSC Percentage</label>
                      <input
                        type="number"
                        placeholder="e.g. 78.5"
                        value={formData.twelfthMarks}
                        onChange={(e) => setFormData({ ...formData, twelfthMarks: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-crimson-red"
                      />
                      {errors.twelfthMarks && <span className="text-[10px] font-bold text-rose-500 block mt-1">{errors.twelfthMarks}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Entrance Exam Type</label>
                      <select
                        value={formData.entranceType}
                        onChange={(e) => setFormData({ ...formData, entranceType: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-crimson-red"
                      >
                        <option value="MHT-CET (State)">MHT-CET (State)</option>
                        <option value="JEE Mains">JEE Mains</option>
                        <option value="Direct Merit Gate">Direct Diploma Merit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1.5">Entrance Percentile Score</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="e.g. 91.24"
                      value={formData.entranceScore}
                      onChange={(e) => setFormData({ ...formData, entranceScore: e.target.value })}
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs px-3.5 py-2.5 rounded-xl text-zinc-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-crimson-red"
                    />
                    {errors.entranceScore && <span className="text-[10px] font-bold text-rose-500 block mt-1">{errors.entranceScore}</span>}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Submit Confirmation & Eligibility Check */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4 text-left"
              >
                <div className="space-y-1">
                  <h4 className="font-sans font-extrabold text-sm text-zinc-900 dark:text-white">Review & Final Confirmation</h4>
                  <p className="text-xs text-zinc-400">Please review your credentials. Below is our instant eligibility assessment calculation.</p>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-500 font-semibold">Candidate:</span>
                    <span className="font-bold text-zinc-950 dark:text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-500 font-semibold">Selected Choice:</span>
                    <span className="font-bold text-crimson-red">{formData.branch}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-500 font-semibold">Twelfth Marks:</span>
                    <span className="font-bold text-zinc-950 dark:text-white">{formData.twelfthMarks}%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-500 font-semibold">Percentile:</span>
                    <span className="font-bold text-zinc-950 dark:text-white">{formData.entranceScore} ({formData.entranceType})</span>
                  </div>

                  <div className="h-px bg-zinc-200 dark:bg-zinc-700/60 my-2" />

                  {/* Eligibility Calculator Output */}
                  <div className="flex items-start gap-2 pt-1">
                    {isEligible() ? (
                      <>
                        <div className="p-0.5 bg-emerald-500 text-white rounded-full mt-0.5 shrink-0">
                          <Check size={12} />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">ELIGIBLE FOR ACET DIRECT REGISTRATION</span>
                          <p className="text-[10px] text-zinc-400">Score fulfills university minimum criteria (&gt;= 45% HSC core subjects).</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-0.5 bg-rose-500 text-white rounded-full mt-0.5 shrink-0">
                          <X size={12} />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-rose-500">POTENTIAL LOW-ELIGIBILITY MARKS</span>
                          <p className="text-[10px] text-zinc-400">Requires separate minority seat counseling. Feel free to register to consult guide cell.</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <form onSubmit={handleRegister} className="space-y-3 pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.declaration}
                      onChange={(e) => setFormData({ ...formData, declaration: e.target.checked })}
                      className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-crimson-red focus:ring-crimson-red"
                    />
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold leading-relaxed">
                      I hereby declare that all filled scores (HSC, {formData.entranceType}) are correct to the best of my knowledge and match my physical documents.
                    </span>
                  </label>
                  {errors.declaration && <span className="text-[10px] font-bold text-rose-500 block">{errors.declaration}</span>}
                  
                  <button
                    type="submit"
                    className="w-full bg-crimson-red hover:bg-[#93000f] text-white font-sans font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md mt-4"
                    id="submit-admission-form"
                  >
                    Submit Application & Generate Registration Slip
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 5: PROVISIONAL ADMISSION SLIP (SUCCESS) */}
            {step === 5 && registrationSlip && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-5 text-center py-4"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center border border-emerald-500/20">
                  <FileCheck size={28} />
                </div>

                <div className="space-y-1">
                  <h4 className="font-sans font-extrabold text-xl text-zinc-950 dark:text-white">Registration Complete!</h4>
                  <p className="text-xs text-zinc-500">Your provisional admission registration at Anjuman College has been processed successfully.</p>
                </div>

                {/* Slip card */}
                <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 bg-zinc-50 dark:bg-zinc-800/40 text-left relative overflow-hidden font-mono text-xs">
                  {/* Watermark logo */}
                  <div className="absolute right-4 bottom-4 opacity-10 font-sans font-bold text-6xl">ACET</div>
                  
                  <div className="border-b border-dashed border-zinc-300 dark:border-zinc-700 pb-3 mb-4 flex justify-between items-center">
                    <span className="font-sans font-extrabold text-crimson-red uppercase tracking-wider">ACET OFFICIAL SLIP</span>
                    <span className="text-[10px] text-zinc-500 font-semibold">Date: July 08, 2026</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-bold uppercase">Reg Number:</span>
                      <span className="text-zinc-950 dark:text-white font-extrabold">{registrationSlip}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-bold uppercase">Candidate:</span>
                      <span className="text-zinc-950 dark:text-white font-bold">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-bold uppercase">Branch Preferred:</span>
                      <span className="text-zinc-950 dark:text-white font-bold">{formData.branch}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-bold uppercase">Entrance Rank:</span>
                      <span className="text-zinc-950 dark:text-white font-bold">{formData.entranceScore}% ({formData.entranceType})</span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-zinc-300 dark:border-zinc-700 pt-3 mt-4 text-[10px] text-zinc-400 font-sans font-medium text-center">
                    Present this code at Sadar Nagpur Campus for counseling.
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all"
                  >
                    Print Slip
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 bg-crimson-red hover:bg-[#93000f] text-white font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all"
                  >
                    Go Back to Portal
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Wizard Footer controls */}
        {step <= 4 && (
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 flex justify-between gap-3">
            {step > 1 ? (
              <button
                onClick={handlePrev}
                className="font-sans font-bold text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 px-4 py-2.5 rounded-lg flex items-center gap-1.5"
                id="btn-admissions-prev"
              >
                <ArrowLeft size={14} /> Back
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              className="bg-crimson-red hover:bg-[#93000f] text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl shadow-md flex items-center gap-1.5"
              id="btn-admissions-next"
            >
              Next Step <ArrowRight size={14} />
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
