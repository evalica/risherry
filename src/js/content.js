// Content data separated from presentation
// This file contains all the content that was previously hardcoded in HTML

export const siteConfig = {
  name: "Ecaterina Moraru",
  title: "Principal Product Designer",
  subtitle: "Principal Product Designer transforming complex enterprise platforms into intuitive experiences that scale across communities of engineers, developers, and technical users.",
  motto: "Building enterprise platforms that are driven by engaged communities",
  email: "contact@risherry.ro",
  cvUrl: "EcaterinaMoraruCV.pdf",
  stats: [
    { number: "16+", label: "Years Experience" },
    { number: "8", label: "Team Members" },
    { number: "4", label: "Industries" }
  ],
  tags: [
    "Complex Applications",
    "Enterprise", 
    "Platforms",
    "Communities",
    "Open Source",
    "Collaboration"
  ],
  social: [
    { name: "Twitter", url: "https://twitter.com/evalica", icon: "icon-twitter" },
    { name: "StackExchange", url: "http://ux.stackexchange.com/users/1141/risherry", icon: "icon-stackoverflow", class: "stackoverflow" },
    { name: "Instagram", url: "https://www.instagram.com/valicac", icon: "icon-instagram" },
    { name: "GitHub", url: "https://github.com/evalica/", icon: "icon-github" },
    { name: "LinkedIn", url: "http://ro.linkedin.com/in/evalica", icon: "icon-linkedin" }
  ]
};

export const caseStudies = [
  {
    slug: "xwiki",
    title: "XWiki Enterprise Ecosystem",
    description: "Led comprehensive UX transformation of XWiki's open source knowledge management platform, designing scalable features used by millions while bridging community and enterprise needs for clients like Amazon and EMC. Generated 2x increase in product revenue.",
    period: "2009-2019 • 10+ Years",
    icon: "hub",
    iconClass: "xwiki",
    url: "case-studies/xwiki.html",
    highlights: [
      { title: "Platform Scale", value: "10M+ users worldwide" },
      { title: "Feature Portfolio", value: "Skins, Themes, Extensions, Search, Notifications" },
      { title: "Business Impact", value: "2x increase in product revenue" }
    ],
    skills: [
      { name: "Design Systems", type: "design" },
      { name: "Community Design", type: "" },
      { name: "User Research", type: "research" },
      { name: "Platform Strategy", type: "strategy" },
      { name: "Knowledge Management", type: "" }
    ]
  },
  {
    slug: "anylyze",
    title: "Anylyze No-Code Platform", 
    description: "Built from scratch a no-code mobile platform for sales optimization data processing, creating comprehensive design systems that scaled across 4 products (Mobile, Web, Desktop) while supporting 25 developers and consulting for Optymyze.",
    period: "2021-2023 • 2 Years",
    icon: "phone_android",
    iconClass: "anylyze",
    url: "case-studies/anylyze.html",
    highlights: [
      { title: "Team Support", value: "25 developers across platforms" },
      { title: "Design System Scope", value: "Mobile + Web + Desktop platforms" },
      { title: "Platform Type", value: "No-code data processing" }
    ],
    skills: [
      { name: "Mobile Design", type: "design" },
      { name: "Design Systems", type: "design" },
      { name: "No-Code Platforms", type: "strategy" },
      { name: "Sales Optimization", type: "" },
      { name: "Data Processing", type: "" }
    ]
  },
  {
    slug: "analog-devices",
    title: "Analog Devices Product Suite",
    description: "Managing design for semiconductor evaluation and development tools including Evaluation Studio, Reference Design App, vLab, and ADI Hub. Leading 8 product designers across automotive, consumer, and power domains while contributing to Harmonic Design System and innersource UX patterns.",
    period: "2021-2025 • 4+ Years", 
    icon: "memory",
    iconClass: "adi",
            url: "case-studies/analogdevices.html",
    highlights: [
      { title: "Team Leadership", value: "8 product designers managed" },
      { title: "Product Portfolio", value: "Desktop, Web, Mobile evaluation tools" },
      { title: "Domain Expertise", value: "Electrical Engineering, Hardware Evaluation" }
    ],
    skills: [
      { name: "Design Leadership", type: "strategy" },
      { name: "Hardware Evaluation", type: "" },
      { name: "Design Systems", type: "design" },
      { name: "EE User Research", type: "research" },
      { name: "Semiconductor Tools", type: "" }
    ]
  }
];

export const talks = [
  {
    id: "talk-1",
    title: "UI/UX Tips & Tricks for developers",
    venue: "ApacheCon Europe 2019 • Berlin",
    youtubeId: "QND4EQMTGeU",
    slidesLink: "https://www.slideshare.net/valicac/uiux-tips-tricks-for-developers"
  },
  {
    id: "talk-2",
    title: "CSS Grid vs. Flexbox (Romanian)",
    venue: "Iaşi CSS Group • Iaşi",
    youtubeId: "9g8WqKp4BGI",
    slidesLink: "https://www.slideshare.net/valicac/css-grid-vs-flexbox"
  },
  {
    id: "talk-3",
    title: "Panel: Difficulties in having more designers participate in Open Source",
    venue: "FOSDEM 2019 • Brussels",
    youtubeId: "ng9w8jFuzIg",
    slidesLink: "https://www.slideshare.net/valicac/difficulties-in-having-more-designers-participate-in-open-source"
  },
  {
    id: "talk-4",
    title: "Icon Themes — Reusable icon variables and mappings for customizable user interfaces",
    venue: "FOSDEM 2018 • Brussels",
    youtubeId: "afZMLCgxl_s",
    slidesLink: "https://www.slideshare.net/valicac/icon-themes"
  },
  {
    id: "talk-5",
    title: "Expectations from Open Source Designers",
    venue: "FOSSASIA 2017 • Singapore",
    youtubeId: "3M9ptBxFyP4",
    slidesLink: "https://www.slideshare.net/valicac/expectations-from-open-source-designers"
  },
  {
    id: "talk-6",
    title: "Panel: Design feedback in Open Source",
    venue: "FOSDEM 2017 • Brussels",
    youtubeId: "byoYAYBUqAs",
    slidesLink: "https://www.slideshare.net/valicac/design-feedback-in-open-source"
  }
];

export const sections = {
  work: {
    title: "Featured Work",
    subtitle: "Strategic design leadership across open source communities, no-code platforms, and semiconductor tools"
  },
  talks: {
    title: "Talks",
    subtitle: "A selection of international conference presentations.",
    youtubeLink: "https://www.youtube.com/results?search_query=Ecaterina+Moraru"
  }
};
