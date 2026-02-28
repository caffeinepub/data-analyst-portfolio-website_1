import { BarChart3, Heart, Github, Linkedin, Twitter } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: SiGithub, href: '#', label: 'GitHub' },
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'data-analyst-portfolio'
  );

  return (
    <footer className="bg-navy-deep border-t border-teal/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-sm opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-teal/20 border border-teal/40 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-teal" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                Data<span className="text-teal">Analyst</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Transforming complex data into clear, actionable insights that drive business growth
              and strategic decisions.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-navy-mid border border-navy-border flex items-center justify-center text-muted-foreground hover:text-teal hover:border-teal/40 hover:bg-teal/5 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-muted-foreground hover:text-teal transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                'Data Cleaning & Preparation',
                'Data Visualization',
                'Statistical Analysis',
                'Business Dashboards',
                'Predictive Modeling',
                'Data Consulting',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm text-muted-foreground hover:text-teal transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DataAnalyst. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-teal fill-teal mx-0.5" />
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
