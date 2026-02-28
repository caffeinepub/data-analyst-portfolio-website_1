import { Badge } from '@/components/ui/badge';
import { Table2 } from 'lucide-react';
import {
  SiPython, SiR, SiMysql, SiTableau,
  SiJupyter, SiGit, SiDocker, SiGooglecloud, SiApachespark
} from 'react-icons/si';

const skills = [
  'Python', 'SQL', 'R', 'Excel', 'Tableau', 'Power BI',
  'Machine Learning', 'Statistical Analysis', 'Data Visualization',
  'ETL Pipelines', 'A/B Testing', 'Predictive Modeling',
  'Data Cleaning', 'Business Intelligence', 'Dashboard Design',
];

type ToolEntry =
  | { kind: 'si'; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; name: string; color: string }
  | { kind: 'lucide'; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; name: string; color: string };

const tools: ToolEntry[] = [
  { kind: 'si', icon: SiPython, name: 'Python', color: '#3776AB' },
  { kind: 'si', icon: SiR, name: 'R', color: '#276DC3' },
  { kind: 'si', icon: SiMysql, name: 'SQL', color: '#4479A1' },
  { kind: 'si', icon: SiTableau, name: 'Tableau', color: '#E97627' },
  { kind: 'lucide', icon: Table2, name: 'Excel', color: '#217346' },
  { kind: 'si', icon: SiJupyter, name: 'Jupyter', color: '#F37626' },
  { kind: 'si', icon: SiGit, name: 'Git', color: '#F05032' },
  { kind: 'si', icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { kind: 'si', icon: SiGooglecloud, name: 'GCP', color: '#4285F4' },
  { kind: 'si', icon: SiApachespark, name: 'Spark', color: '#E25A1C' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-sm opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-teal text-sm tracking-widest uppercase">Who I Am</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-2">
            About <span className="text-teal">Me</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + decorative elements */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-teal/5 border border-teal/20 pulse-glow" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-teal/30">
                <img
                  src="/assets/generated/analyst-avatar.dim_400x400.png"
                  alt="Data Analyst Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-navy-mid border border-teal/30 rounded-xl px-4 py-3 glow-teal-sm">
                <div className="font-heading text-2xl font-bold text-teal">5+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Right: Bio + Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Senior Data Analyst & Insights Strategist
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate data analyst with over 5 years of experience helping businesses
                  unlock the power of their data. I specialize in transforming raw, complex datasets
                  into clear, actionable insights that drive strategic decisions.
                </p>
                <p>
                  My expertise spans the full data lifecycle — from data collection and cleaning to
                  advanced statistical modeling and interactive dashboard creation. I've worked with
                  startups, mid-size companies, and enterprise clients across finance, e-commerce,
                  healthcare, and tech sectors.
                </p>
                <p>
                  I believe great data analysis isn't just about numbers — it's about telling a
                  compelling story that empowers teams to act with confidence.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-3">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-teal/30 text-teal bg-teal/5 hover:bg-teal/15 hover:border-teal/60 transition-colors cursor-default text-xs font-medium px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-3">Tools & Technologies</h4>
              <div className="grid grid-cols-5 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg bg-navy-mid border border-navy-border hover:border-teal/30 transition-all duration-200 group"
                  >
                    <tool.icon
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                      style={{ color: tool.color }}
                    />
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
