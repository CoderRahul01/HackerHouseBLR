import { Handshake, Building2, Users, Mail, Send, Twitter } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Support() {
  return (
    <div className="pt-32 pb-20 min-h-screen relative">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16">
          <h1 className="m3-display-medium mb-4">Support the <span className="gradient-text">Mission</span></h1>
          <p className="m3-title-large text-[var(--color-m3-on-surface-variant)]">Partner with us to empower the next generation of Indian builders</p>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FadeIn className="m3-card-elevated p-8 text-center hover-glow">
            <div className="w-16 h-16 rounded-full bg-[var(--color-m3-primary-container)] flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-[var(--color-m3-on-primary-container)]" />
            </div>
            <h3 className="m3-title-large mb-3">Sponsor Projects</h3>
            <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mb-6">Fund our incubated startups and get early access to groundbreaking Web3 and AI innovations</p>
            <a href="mailto:hello@hackerhouse.space" className="text-[var(--color-m3-primary)] hover:underline font-medium">Contact Us →</a>
          </FadeIn>
          
          <FadeIn delay={0.1} className="m3-card-elevated p-8 text-center hover-glow">
            <div className="w-16 h-16 rounded-full bg-[var(--color-m3-secondary-container)] flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-[var(--color-m3-on-secondary-container)]" />
            </div>
            <h3 className="m3-title-large mb-3">Partner with Us</h3>
            <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mb-6">Collaborate as a Hacker House Partner and provide infrastructure, tools, or mentorship</p>
            <a href="mailto:hello@hackerhouse.space" className="text-[var(--color-m3-primary)] hover:underline font-medium">Contact Us →</a>
          </FadeIn>
          
          <FadeIn delay={0.2} className="m3-card-elevated p-8 text-center hover-glow">
            <div className="w-16 h-16 rounded-full bg-[var(--color-m3-primary-container)] flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[var(--color-m3-on-primary-container)]" />
            </div>
            <h3 className="m3-title-large mb-3">Become an Advisor</h3>
            <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] mb-6">Join our advisory board and help shape the future of India's builder ecosystem</p>
            <a href="mailto:hello@hackerhouse.space" className="text-[var(--color-m3-primary)] hover:underline font-medium">Contact Us →</a>
          </FadeIn>
        </div>
        
        <FadeIn className="m3-card-filled p-12 text-center">
          <h3 className="m3-headline-medium mb-4">Ready to connect?</h3>
          <p className="m3-body-large text-[var(--color-m3-on-surface-variant)] mb-8 max-w-2xl mx-auto">Whether you're looking to sponsor, partner, or just say hello, we'd love to hear from you</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@hackerhouse.space" className="m3-button-filled h-14 px-8 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              <span>hello@hackerhouse.space</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mt-8">
            <a href="https://t.me/HackerHouseBLR" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">
              <Send className="w-5 h-5" />
              <span>t.me/HackerHouseBLR</span>
            </a>
            <a href="https://x.com/HackerHouseBLR" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-[var(--color-m3-on-surface-variant)] hover:text-[var(--color-m3-primary)] transition-colors">
              <Twitter className="w-5 h-5" />
              <span>x.com/HackerHouseBLR</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
