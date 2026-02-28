import { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-deep/95 backdrop-blur-md border-b border-teal/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded bg-teal/20 border border-teal/40 flex items-center justify-center group-hover:bg-teal/30 transition-colors">
              <BarChart3 className="w-4 h-4 text-teal" />
            </div>
            <span className="font-heading font-bold text-lg text-foreground">
              Data<span className="text-teal">Analyst</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-teal transition-colors duration-200 rounded-md hover:bg-teal/5"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 bg-teal text-navy-deep hover:bg-teal-light font-semibold text-sm px-5 py-2 rounded-md transition-all duration-200 glow-teal-sm"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-teal hover:bg-teal/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-navy-mid/98 backdrop-blur-md border-t border-teal/10 py-4 px-2 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-teal hover:bg-teal/5 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-4">
              <Button
                onClick={() => handleNavClick('#contact')}
                className="w-full bg-teal text-navy-deep hover:bg-teal-light font-semibold"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
