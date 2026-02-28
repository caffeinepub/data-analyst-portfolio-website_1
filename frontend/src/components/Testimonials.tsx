import { Quote, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote:
      "Working with this data analyst completely transformed how we make decisions. The dashboards they built gave us real-time visibility we never had before. Within 3 months, we identified $400K in cost savings we didn't know existed.",
    name: 'Sarah Mitchell',
    role: 'VP of Operations',
    company: 'TechFlow Inc.',
    rating: 5,
    initials: 'SM',
  },
  {
    quote:
      "The predictive model they built for our customer churn analysis was incredibly accurate — 87% precision. It's now a core part of our retention strategy. Highly professional, communicates complex findings in plain language.",
    name: 'James Okonkwo',
    role: 'Head of Product',
    company: 'GrowthBase',
    rating: 5,
    initials: 'JO',
  },
  {
    quote:
      "I hired them for a one-time data cleaning project and ended up on the Premium plan. The quality of work, attention to detail, and strategic thinking they bring is unmatched. Our entire analytics stack is now built on their recommendations.",
    name: 'Priya Sharma',
    role: 'CEO & Founder',
    company: 'DataDriven Co.',
    rating: 5,
    initials: 'PS',
  },
  {
    quote:
      "The geospatial analysis they delivered helped us choose 5 new store locations with confidence. Every recommendation was backed by solid data. We've already seen 30% higher foot traffic than our previous locations.",
    name: 'Marcus Chen',
    role: 'Director of Expansion',
    company: 'RetailEdge',
    rating: 5,
    initials: 'MC',
  },
  {
    quote:
      "Exceptional work on our quarterly reporting automation. What used to take our team 3 days now runs in 20 minutes. The ROI on this engagement was immediate and substantial.",
    name: 'Elena Vasquez',
    role: 'CFO',
    company: 'FinanceFirst',
    rating: 5,
    initials: 'EV',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy-deep relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.72 0.15 195 / 0.3), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.72 0.15 195 / 0.3), transparent)' }}
      />
      <div className="absolute inset-0 grid-bg-sm opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-teal text-sm tracking-widest uppercase">Social Proof</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-2">
            Client <span className="text-teal">Testimonials</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take my word for it — here's what clients say about working with me.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="h-full bg-navy-mid border border-navy-border rounded-2xl p-6 flex flex-col gap-4 hover:border-teal/30 transition-all duration-300 hover:shadow-card-hover">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-teal/40 flex-shrink-0" />

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-teal text-teal" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-navy-border">
                    <div className="w-10 h-10 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-teal font-mono">{t.initials}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground font-heading">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative inset-auto translate-y-0 bg-navy-mid border-teal/30 text-teal hover:bg-teal/10 hover:border-teal/60" />
            <CarouselNext className="relative inset-auto translate-y-0 bg-navy-mid border-teal/30 text-teal hover:bg-teal/10 hover:border-teal/60" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
