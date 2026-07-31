import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Sparkles, Loader2, ArrowRight, CornerDownLeft, MessageCircle } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

interface ChatbotProps {
  onOpenAdmissions: () => void;
}

const QUICK_QUESTIONS = [
  { text: 'Placement records?', label: 'Placements' },
  { text: 'Admissions & how to apply?', label: 'Admissions' },
  { text: 'CSE & other departments?', label: 'Departments' },
  { text: 'College contact & address?', label: 'Contacts' }
];

export default function Chatbot({ onOpenAdmissions }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load chat from session storage or load default greeting
  useEffect(() => {
    try {
      const savedChat = sessionStorage.getItem('acet_chat_messages');
      if (savedChat) {
        const parsed = JSON.parse(savedChat);
        // Rehydrate timestamps
        const rehydrated = parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
        setMessages(rehydrated);
      } else {
        const defaultGreeting: Message = {
          sender: 'bot',
          text: `Hello! I am **Anjuma**, the virtual assistant for **Anjuman College of Engineering & Technology (ACET)**, Nagpur. 

I can help you with:
- **Admissions** process & requirements
- **Placements** statistics & recruiters
- **Academic Departments** (CSE, Mechanical, etc.)
- **Campus Life** & student clubs
- **College address & contact details**

What would you like to know today?`,
          timestamp: new Date()
        };
        setMessages([defaultGreeting]);
      }
    } catch (e) {
      console.error('Error loading chat history:', e);
    }
  }, []);

  // Save chat to session storage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('acet_chat_messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setErrorText(null);
    const userMsg: Message = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Fetch response from server-side API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(-10) // Send last 10 messages for context
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response. Please check your network connection.');
      }

      const data = await response.json();
      const botMsg: Message = {
        sender: 'bot',
        text: data.reply,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error('Error in chatbot connection:', err);
      setErrorText(err?.message || 'Something went wrong while connecting to the assistant.');
    } finally {
      setIsLoading(false);
    }
  };

  // Helper to parse formatting inside the bot responses (bold **text** and bulleted lists)
  const renderFormattedText = (text: string) => {
    // Check if the text implies opening admissions
    const showAdmissionsCTA = 
      text.toLowerCase().includes('inquiry form') || 
      text.toLowerCase().includes('admissions open') || 
      text.toLowerCase().includes('apply now') || 
      text.toLowerCase().includes('click') && text.toLowerCase().includes('admissions');

    const lines = text.split('\n');

    return (
      <div className="space-y-1">
        {lines.map((line, i) => {
          // Handle bulleted list line starting with - or * or •
          const trimmedLine = line.trim();
          const isBullet = trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ') || trimmedLine.startsWith('• ');
          
          let contentLine = line;
          if (isBullet) {
            contentLine = trimmedLine.substring(2);
          }

          // Parse **bold** parts
          const boldRegex = /(\*\*.*?\*\*)/g;
          const parts = contentLine.split(boldRegex);
          const parsedElements = parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={index} className="font-extrabold text-zinc-950 dark:text-white">{part.slice(2, -2)}</strong>;
            }
            return part;
          });

          if (isBullet) {
            return (
              <div key={i} className="flex items-start gap-2 pl-1.5 py-0.5">
                <span className="text-crimson-red font-extrabold text-sm select-none mt-0.5 leading-none">•</span>
                <span className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">{parsedElements}</span>
              </div>
            );
          }

          return (
            <p key={i} className={`text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium ${trimmedLine === '' ? 'h-2' : ''}`}>
              {parsedElements}
            </p>
          );
        })}

        {showAdmissionsCTA && (
          <div className="mt-3.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
            <button
              onClick={() => {
                onOpenAdmissions();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-crimson-red text-white hover:bg-rose-950 text-xs font-bold py-2 px-3 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Open Admissions Inquiry Form</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    );
  };

  const handleClearHistory = () => {
    sessionStorage.removeItem('acet_chat_messages');
    const defaultGreeting: Message = {
      sender: 'bot',
      text: `Hello! I am **Anjuma**, your ACET campus assistant. How can I help you today?`,
      timestamp: new Date()
    };
    setMessages([defaultGreeting]);
    setErrorText(null);
  };

  return (
    <>
      {/* Floating Action Button with pulse highlight */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Helper popup banner (dismisses on open) */}
        {!isOpen && messages.length <= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="pointer-events-auto bg-zinc-950 text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 max-w-[240px] border border-white/10"
          >
            <Sparkles size={13} className="text-amber-400 shrink-0 animate-bounce" />
            <span className="font-sans leading-snug">Have college questions? Ask **Anjuma**!</span>
          </motion.div>
        )}

        {/* The Action Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto w-14 h-14 bg-crimson-red hover:bg-[#8c000e] text-white rounded-full shadow-[0_10px_30px_rgba(181,18,27,0.35)] flex items-center justify-center cursor-pointer transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-crimson-red/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle ACET AI Assistant"
        >
          {/* Animated pulsing outer border */}
          <span className="absolute inset-0 rounded-full bg-crimson-red opacity-20 group-hover:scale-125 transition-transform duration-500 animate-ping pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="chat-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <MessageCircle size={26} />
                <span className="absolute -top-1.5 -right-1.5 bg-zinc-950 text-[8px] font-black tracking-widest text-white px-1.5 py-0.5 rounded-full border border-crimson-red uppercase scale-90 animate-pulse">
                  AI
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Expandable Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[360px] sm:w-[400px] max-w-[calc(100vw-2rem)] h-[580px] max-h-[calc(100vh-12rem)] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.14)] overflow-hidden flex flex-col font-sans"
          >
            {/* Header */}
            <div className="bg-zinc-950 text-white p-4 flex items-center justify-between border-b border-zinc-800 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-crimson-red/20 blur-2xl rounded-full pointer-events-none -mr-8 -mt-8" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="h-10 w-10 bg-crimson-red text-white rounded-xl flex items-center justify-center shadow-md border border-white/10">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-sans font-extrabold text-sm tracking-tight text-white">Anjuma</h3>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                    ACET Virtual Assistant
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 relative z-10">
                <button
                  onClick={handleClearHistory}
                  title="Clear Chat History"
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all text-[10px] font-bold uppercase tracking-widest border border-zinc-800"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all cursor-pointer"
                  aria-label="Close Chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 bg-zinc-50 dark:bg-zinc-950/40 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start gap-2`}
                >
                  {msg.sender === 'bot' && (
                    <div className="h-7 w-7 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/80 rounded-lg flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Bot size={14} className="text-crimson-red" />
                    </div>
                  )}
                  
                  <div className="flex flex-col max-w-[82%]">
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-zinc-900 text-white rounded-tr-none shadow-sm'
                          : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-100 dark:border-zinc-800/80 rounded-tl-none shadow-xs'
                      }`}
                    >
                      {msg.sender === 'user' ? (
                        <p className="text-xs font-semibold leading-relaxed break-words">{msg.text}</p>
                      ) : (
                        renderFormattedText(msg.text)
                      )}
                    </div>
                    <span className={`text-[9px] text-zinc-400 font-bold uppercase mt-1 px-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Gemini thinking spinner */}
              {isLoading && (
                <div className="flex justify-start items-start gap-2">
                  <div className="h-7 w-7 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700/80 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                    <Bot size={14} className="text-crimson-red" />
                  </div>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 px-4 py-3 rounded-2xl rounded-tl-none shadow-xs flex items-center gap-2">
                    <Loader2 size={13} className="text-crimson-red animate-spin" />
                    <span className="text-xs text-zinc-500 font-bold tracking-tight">Anjuma is typing...</span>
                  </div>
                </div>
              )}

              {/* Error Box */}
              {errorText && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-rose-600 dark:text-rose-400 font-medium flex flex-col gap-2">
                  <p>{errorText}</p>
                  <button
                    onClick={() => handleSendMessage(messages[messages.length - 1]?.text || 'Hello')}
                    className="w-fit bg-rose-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg hover:bg-rose-700 transition-all self-end"
                  >
                    Retry Connection
                  </button>
                </div>
              )}

              <div ref={scrollRef} />
            </div>

            {/* Quick Helper Chips (only display when not loading) */}
            {!isLoading && (
              <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-100 dark:border-zinc-800/50">
                <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
                  <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest shrink-0 select-none">
                    Suggestions:
                  </span>
                  {QUICK_QUESTIONS.map((chip, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(chip.text)}
                      className="shrink-0 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-[10px] font-bold text-zinc-600 dark:text-zinc-300 px-2.5 py-1 rounded-full hover:border-crimson-red dark:hover:border-crimson-red transition-all shadow-xs cursor-pointer select-none"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Input Box */}
            <div className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 flex gap-2 items-center">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage(inputText);
                    }
                  }}
                  disabled={isLoading}
                  placeholder="Type a college question..."
                  className="w-full text-xs bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700 rounded-2xl pl-4 pr-10 py-3 text-zinc-800 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-crimson-red/60 focus:ring-1 focus:ring-crimson-red/30 transition-all disabled:opacity-60"
                />
                
                {/* Visual Keyboard Enter hint (hidden on small screens) */}
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 text-[9px] text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700 font-mono select-none">
                  <CornerDownLeft size={8} />
                  <span>Enter</span>
                </div>
              </div>

              <button
                onClick={() => handleSendMessage(inputText)}
                disabled={isLoading || !inputText.trim()}
                className="p-3 bg-crimson-red text-white hover:bg-[#8c000e] rounded-2xl flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:bg-crimson-red shadow-md cursor-pointer shrink-0"
                title="Send message"
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
