import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: '$299',
    period: '/project',
    tagline: 'Perfect for small businesses',
    features: [
      'Data cleaning & preparation',
      'Basic statistical analysis',
      'Up to 3 visualizations',
      'Excel/CSV deliverables',
      '1 revision round',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '$799',
    period: '/project',
    tagline: 'Most popular for growing teams',
    features: [
      'Everything in Basic',
      'Interactive dashboard (Tableau/Power BI)',
      'Predictive modeling',
      'Up to 10 visualizations',
      'Executive summary report',
      '3 revision rounds',
      'Priority email & video support',
      'Data pipeline setup',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$1,999',
    period: '/month',
    tagline: 'Full-service analytics partnership',
    features: [
      'Everything in Standard',
      'Unlimited projects & revisions',
      'Custom ML model development',
      'Real-time dashboard maintenance',
      'Monthly strategy sessions',
      'Database design & optimization',
      'Team training & workshops',
      'Dedicated Slack channel',
      'SLA guarantee',
    ],
    cta: 'Contact Me',
    highlighted: false,
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-navy-mid relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-teal text-sm tracking-widest uppercase">Investment</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-2">
            Pricing <span className="text-teal">Plans</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Transparent, flexible pricing for every stage of your data journey. All plans include
            a free 30-minute discovery call.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-navy-deep border-teal/50 glow-teal scale-105 shadow-teal'
                  : 'bg-navy-deep border-navy-border hover:border-teal/30 card-hover'
              }`}
            >
              {/* Recommended badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal text-navy-deep text-xs font-bold">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={`font-heading text-xl font-bold mb-1 ${plan.highlighted ? 'text-teal' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.highlighted ? 'bg-teal/30' : 'bg-navy-border'}`} />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? 'bg-teal/20 border border-teal/40' : 'bg-teal/10 border border-teal/20'
                    }`}>
                      <Check className="w-2.5 h-2.5 text-teal" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={scrollToContact}
                className={`w-full font-semibold py-3 h-auto rounded-lg transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-teal text-navy-deep hover:bg-teal-light glow-teal-sm hover:scale-105'
                    : 'bg-navy-light border border-teal/30 text-teal hover:bg-teal/10 hover:border-teal/60'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          Need a custom solution?{' '}
          <button
            onClick={scrollToContact}
            className="text-teal hover:underline font-medium"
          >
            Let's talk
          </button>{' '}
          — I offer tailored packages for enterprise clients.
        </p>
      </div>
    </section>
  );
}
