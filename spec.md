# Specification

## Summary
**Goal:** Build a single-page professional data analyst portfolio and services website with a dark data-tech theme, multiple content sections, and a contact form backed by a Motoko backend.

**Planned changes:**
- Sticky top navigation bar with links to all sections (Home, About, Services, Portfolio, Pricing, Testimonials, Contact), logo/name on the left, and a mobile hamburger menu with smooth scrolling
- Hero section with headline, tagline, brief intro, and a call-to-action button (smooth scroll to Services or Contact)
- Services section displaying 7 data analyst services (Data Cleaning & Preparation, Data Visualization, Statistical Analysis, Business Reporting & Dashboards, Data Consulting, Predictive Modeling, Database Management) in a card/grid layout with icon, title, and description
- About Me section with professional bio, skill badges (Python, SQL, Excel, Tableau, Power BI, R), and tools/technologies icons
- Portfolio section with 3 project cards each showing a title, description, tools used tags, and a thumbnail image
- Pricing section with three tiers (Basic, Standard, Premium) featuring feature lists, price placeholders, CTA buttons, and one highlighted recommended plan
- Testimonials section with at least 3 placeholder client reviews (quote, name, role/company) in a card layout
- Contact section with a form (Name, Email, Subject, Message, Submit), client-side validation, success confirmation on submission, and backend storage of messages in a Motoko actor
- Dark data-tech visual theme: deep charcoal/dark navy background, teal/green accents, clean sans-serif typography, subtle geometric patterns, card shadows, and fade-in scroll animations

**User-visible outcome:** Visitors can browse a fully themed, single-page portfolio site showcasing the analyst's services, projects, pricing, and testimonials, and can submit a contact message that gets stored in the backend.
