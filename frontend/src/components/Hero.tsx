import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-banner.dim_1440x600.png"
          alt="Data visualization background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-bg opacity-60" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, oklch(0.72 0.15 195 / 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Floating data points decoration */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-teal opacity-60 float-anim" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-green-accent opacity-50 float-anim" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-1 h-1 rounded-full bg-teal opacity-40 float-anim" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-60 right-10 w-2 h-2 rounded-full bg-teal opacity-30 float-anim" style={{ animationDelay: '0.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/10 text-teal text-sm font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Available for Freelance Projects
          </div>

          {/* Main headline */}
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Turning Data Into</span>
            <br />
            <span className="shimmer-text">Actionable Insights</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            I'm a <span className="text-teal font-semibold">Senior Data Analyst</span> specializing in
            transforming complex datasets into clear, compelling stories that drive business decisions.
          </p>

          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10">
            Python · SQL · Tableau · Power BI · Machine Learning · Statistical Analysis
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollTo('#services')}
              className="bg-teal text-navy-deep hover:bg-teal-light font-semibold text-base px-8 py-3 h-auto rounded-md glow-teal transition-all duration-300 hover:scale-105"
            >
              View My Services
            </Button>
            <Button
              onClick={() => scrollTo('#portfolio')}
              variant="outline"
              className="border-teal/40 text-teal hover:bg-teal/10 hover:border-teal font-semibold text-base px-8 py-3 h-auto rounded-md transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              See My Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl sm:text-3xl font-bold text-teal">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-teal transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}
