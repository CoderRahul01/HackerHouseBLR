import { Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-m3-outline-variant)] py-12 bg-[var(--color-m3-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cpu className="w-6 h-6 text-[var(--color-m3-primary)]" />
              <span className="m3-title-large font-bold">Hacker<span className="gradient-text">House</span></span>
            </div>
            <p className="m3-body-medium text-[var(--color-m3-on-surface-variant)] max-w-sm">India's premier residential incubator for AI, Web3, and Blockchain enthusiasts. Empowering the underdogs since 2024.</p>
          </div>
          
          <div>
            <h4 className="m3-title-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 m3-body-medium text-[var(--color-m3-on-surface-variant)]">
              <li><Link to="/apply" className="hover:text-[var(--color-m3-primary)] transition-colors">Apply Now</Link></li>
              <li><Link to="/projects" className="hover:text-[var(--color-m3-primary)] transition-colors">Projects</Link></li>
              <li><Link to="/#amenities" className="hover:text-[var(--color-m3-primary)] transition-colors">Amenities</Link></li>
              <li><Link to="/support" className="hover:text-[var(--color-m3-primary)] transition-colors">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="m3-title-medium mb-4">Connect</h4>
            <ul className="space-y-2 m3-body-medium text-[var(--color-m3-on-surface-variant)]">
              <li><a href="https://t.me/HackerHouseBLR" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-m3-primary)] transition-colors">Telegram</a></li>
              <li><a href="https://x.com/HackerHouseBLR" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-m3-primary)] transition-colors">Twitter/X</a></li>
              <li><a href="mailto:hello@hackerhouse.space" className="hover:text-[var(--color-m3-primary)] transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--color-m3-outline-variant)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="m3-body-small text-[var(--color-m3-on-surface-variant)]">© 2025 Hacker House. All rights reserved.</p>
          <p className="m3-body-small text-[var(--color-m3-on-surface-variant)] mt-2 md:mt-0">Made with 💜 in Bangalore</p>
        </div>
      </div>
    </footer>
  );
}
