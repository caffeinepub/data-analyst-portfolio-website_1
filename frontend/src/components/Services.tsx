import {
  Database, BarChart2, TrendingUp, FileText, MessageSquare,
  Brain, Server, Search
} from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data Cleaning & Preparation',
    description:
      'Transform messy, inconsistent raw data into clean, structured datasets ready for analysis. I handle missing values, outliers, normalization, and data validation.',
    tags: ['Python', 'Pandas', 'SQL'],
  },
  {
    icon: BarChart2,
    title: 'Data Visualization',
    description:
      'Create stunning, interactive charts and dashboards that make complex data instantly understandable. From static reports to live, filterable dashboards.',
    tags: ['Tableau', 'Power BI', 'Matplotlib'],
  },
  {
    icon: TrendingUp,
    title: 'Statistical Analysis',
    description:
      'Apply rigorous statistical methods — hypothesis testing, regression analysis, correlation studies — to uncover meaningful patterns and validate findings.',
    tags: ['R', 'Python', 'SPSS'],
  },
  {
    icon: FileText,
    title: 'Business Reporting & Dashboards',
    description:
      'Design executive-ready reports and KPI dashboards that give stakeholders real-time visibility into business performance and key metrics.',
    tags: ['Power BI', 'Tableau', 'Excel'],
  },
  {
    icon: MessageSquare,
    title: 'Data Consulting',
    description:
      'Strategic advisory services to help your team build a data-driven culture, define KPIs, select the right tools, and establish best practices.',
    tags: ['Strategy', 'KPIs', 'Roadmapping'],
  },
  {
    icon: Brain,
    title: 'Predictive Modeling',
    description:
      'Build machine learning models to forecast trends, predict customer behavior, detect anomalies, and automate decision-making processes.',
    tags: ['Scikit-learn', 'XGBoost', 'TensorFlow'],
  },
  {
    icon: Server,
    title: 'Database Management',
    description:
      'Design, optimize, and maintain relational and NoSQL databases. Write efficient queries, create indexes, and ensure data integrity at scale.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    icon: Search,
    title: 'Exploratory Data Analysis',
    description:
      'Deep-dive investigations into your datasets to discover hidden patterns, generate hypotheses, and surface insights before formal modeling begins.',
    tags: ['Python', 'Jupyter', 'Seaborn'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy-mid relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-teal text-sm tracking-widest uppercase">What I Offer</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-2">
            My <span className="text-teal">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            End-to-end data analytics services tailored to your business needs — from raw data to
            strategic insights.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-navy-deep border border-navy-border rounded-xl p-6 card-hover cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl bg-gradient-to-r from-transparent via-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center mb-4 group-hover:bg-teal/20 group-hover:border-teal/40 transition-all duration-300">
                <service.icon className="w-6 h-6 text-teal" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-teal transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-teal/10 text-teal border border-teal/20 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
