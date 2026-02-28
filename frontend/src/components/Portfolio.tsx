import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Sales Analytics Dashboard',
    description:
      'Built a comprehensive sales analytics platform for a mid-size e-commerce company, processing 2M+ transactions. Identified $1.2M in revenue opportunities through customer segmentation and churn prediction.',
    image: '/assets/generated/project-thumb-1.dim_600x400.png',
    tools: ['Python', 'Tableau', 'PostgreSQL', 'Scikit-learn'],
    category: 'Business Intelligence',
    impact: '+23% Revenue',
  },
  {
    title: 'Geospatial Market Expansion Analysis',
    description:
      'Conducted geospatial analysis for a retail chain to identify optimal locations for 15 new store openings. Combined demographic data, competitor mapping, and foot traffic patterns.',
    image: '/assets/generated/project-thumb-2.dim_600x400.png',
    tools: ['R', 'GeoPandas', 'Power BI', 'SQL'],
    category: 'Geospatial Analytics',
    impact: '15 Locations Identified',
  },
  {
    title: 'Executive KPI Dashboard Suite',
    description:
      'Designed and deployed a real-time executive dashboard suite for a SaaS company, consolidating data from 8 different sources into a single source of truth for C-suite decision making.',
    image: '/assets/generated/project-thumb-3.dim_600x400.png',
    tools: ['Power BI', 'Python', 'Azure', 'DAX'],
    category: 'Dashboard Design',
    impact: '8 Data Sources Unified',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-sm opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-teal text-sm tracking-widest uppercase">My Work</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-2">
            Featured <span className="text-teal">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of data analytics projects that delivered measurable business impact.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-navy-mid border border-navy-border rounded-2xl overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-mid via-transparent to-transparent" />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-navy-deep/80 backdrop-blur-sm text-teal border border-teal/30 font-mono">
                    {project.category}
                  </span>
                </div>
                {/* Impact badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-teal/20 backdrop-blur-sm text-teal border border-teal/40 font-semibold">
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-teal transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="border-teal/25 text-teal/80 bg-teal/5 text-xs font-mono"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-teal transition-colors font-medium">
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Case Study
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-teal transition-colors font-medium">
                    <Github className="w-3.5 h-3.5" />
                    Source Code
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
