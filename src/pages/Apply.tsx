import { Send } from 'lucide-react';
import { FormEvent } from 'react';
import FadeIn from '../components/FadeIn';

export default function Apply() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Application submitted! We will review and update via Telegram.');
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16">
          <h1 className="m3-display-medium mb-4">Join the <span className="gradient-text">House</span></h1>
          <p className="m3-title-large text-[var(--color-m3-on-surface-variant)]">Apply now to be part of India's most exclusive builder community</p>
        </FadeIn>
        
        <FadeIn className="m3-card-elevated p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-m3-primary-container)] flex items-center justify-center mx-auto mb-4">
                <span className="m3-headline-small text-[var(--color-m3-on-primary-container)]">1</span>
              </div>
              <h4 className="m3-title-medium mb-2">Apply Online</h4>
              <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)]">Fill out the application form with your details and portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-m3-secondary-container)] flex items-center justify-center mx-auto mb-4">
                <span className="m3-headline-small text-[var(--color-m3-on-secondary-container)]">2</span>
              </div>
              <h4 className="m3-title-medium mb-2">Join Waitlist</h4>
              <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)]">Get added to our exclusive waiting list for review</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-m3-primary-container)] flex items-center justify-center mx-auto mb-4">
                <span className="m3-headline-small text-[var(--color-m3-on-primary-container)]">3</span>
              </div>
              <h4 className="m3-title-medium mb-2">Selection</h4>
              <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)]">Results announced on our Telegram channel</p>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">College/University *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your institution" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Resume (Google Drive URL) *</label>
              <input type="url" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="https://drive.google.com/..." />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Past Projects or Portfolio *</label>
              <textarea required rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Describe your projects, GitHub links, etc."></textarea>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">City of Residence *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your city" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Telegram Contact *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="@username" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number *</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="+91 98765 43210" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">What value can you bring to HH? *</label>
              <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Tell us about your skills, interests, and what makes you unique..."></textarea>
            </div>
            
            <button type="submit" className="w-full m3-button-filled h-14 text-lg">
              <span>Submit Application</span>
              <Send className="w-5 h-5 ml-2" />
            </button>
            
            <p className="text-center m3-body-medium text-[var(--color-m3-on-surface-variant)]">
              Selection updates will be posted on <a href="https://t.me/HackerHouseBLR" target="_blank" rel="noopener noreferrer" className="text-[var(--color-m3-primary)] hover:underline">t.me/HackerHouseBLR</a>
            </p>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
