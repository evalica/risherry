# Case Studies

This directory contains individual case study pages for the featured work projects.

## Structure

Each case study follows a consistent structure:

- `xwiki.html` - XWiki Enterprise Ecosystem (2009-2019)
- `anylyze.html` - Anylyze No-Code Platform (2019-2021) 
- `analog-devices.html` - Analog Devices Product Suite (2021-Present)

## Case Study Template

Each case study includes:

1. **Hero Section** - Project overview with icon, period, title, subtitle, and tags
2. **Key Metrics** - Quantifiable results and impact
3. **Project Overview** - Detailed description of the project
4. **Challenge & Solution** - Problem statement and approach
5. **Design Process** - Step-by-step methodology
6. **Key Features** - Highlighted innovations
7. **Results** - Measurable outcomes
8. **Key Learnings** - Insights and takeaways
9. **Navigation** - Links to previous/next case studies

## Adding a New Case Study

1. Create a new HTML file following the existing structure
2. Update the navigation links in all case study files
3. Add the case study card to the homepage (`index.html`)
4. Update the CSS if needed for new styling elements
5. Build the CSS with `npx grunt swatch:dark`

## Styling

Case studies use the existing dark theme CSS variables and follow the established design patterns. Custom styles are included inline for case-study-specific components.

## Navigation

Case studies are linked in a circular navigation pattern:
- XWiki ↔ Anylyze ↔ Analog Devices ↔ XWiki

Each case study page includes:
- Back to Portfolio link in header
- Previous/Next case study navigation at bottom
