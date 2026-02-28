import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSubmitContactMessage } from '@/hooks/useQueries';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@dataanalyst.pro',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Remote · Worldwide',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitMessage, isPending, isError } = useSubmitContactMessage();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    submitMessage(
      { name: form.name, email: form.email, subject: form.subject, message: form.message },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: '', email: '', subject: '', message: '' });
          setErrors({});
        },
      }
    );
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy-mid relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-teal text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-2">
            Let's <span className="text-teal">Work Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a data challenge? I'd love to hear about it. Send me a message and I'll get back
            to you within 24 hours.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                Ready to unlock your data's potential?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you need a one-time analysis, an ongoing analytics partnership, or just
                want to explore what's possible — I'm here to help.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{info.label}</div>
                    <div className="text-sm text-foreground font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Free consultation callout */}
            <div className="bg-teal/5 border border-teal/20 rounded-xl p-5">
              <div className="text-teal font-heading font-semibold text-sm mb-1">🎯 Free Discovery Call</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every engagement starts with a free 30-minute call to understand your needs and
                determine the best approach for your data challenges.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16 px-8 bg-navy-deep border border-teal/30 rounded-2xl glow-teal">
                  <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I'll review your message and get back to you
                    within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="border-teal/40 text-teal hover:bg-teal/10"
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-navy-deep border border-navy-border rounded-2xl p-8 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name <span className="text-teal">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Smith"
                      className={`bg-navy-mid border-navy-border text-foreground placeholder:text-muted-foreground focus:border-teal focus:ring-teal/20 transition-colors ${
                        errors.name ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address <span className="text-teal">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="john@company.com"
                      className={`bg-navy-mid border-navy-border text-foreground placeholder:text-muted-foreground focus:border-teal focus:ring-teal/20 transition-colors ${
                        errors.email ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject <span className="text-teal">*</span>
                  </Label>
                  <Input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    placeholder="e.g. Sales Dashboard Project"
                    className={`bg-navy-mid border-navy-border text-foreground placeholder:text-muted-foreground focus:border-teal focus:ring-teal/20 transition-colors ${
                      errors.subject ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-teal">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell me about your project, data challenges, or what you're hoping to achieve..."
                    rows={5}
                    className={`bg-navy-mid border-navy-border text-foreground placeholder:text-muted-foreground focus:border-teal focus:ring-teal/20 transition-colors resize-none ${
                      errors.message ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Error state */}
                {isError && (
                  <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-teal text-navy-deep hover:bg-teal-light font-semibold py-3 h-auto rounded-lg glow-teal-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
