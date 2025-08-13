(function () {
  'use strict';

  // Content data separated from presentation
  // This file contains all the content that was previously hardcoded in HTML

  const siteConfig = {
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
      { name: "GitHub", url: "https://github.com/evalica/", icon: "icon-github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ecaterina-moraru/", icon: "icon-linkedin" },
      { name: "Instagram", url: "https://www.instagram.com/valicac", icon: "icon-instagram" }
    ]
  };

  const caseStudies = [
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
      url: "case-studies/analog-devices-protected.html",
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

  const talks = [
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

  // Main application module for dynamic content rendering

  class PortfolioApp {
    constructor() {
      this.init();
    }

    init() {
      this.renderHero();
      this.renderCaseStudies();
      this.renderTalks();
      this.renderSocialLinks();
      this.setupEventListeners();
    }

    renderHero() {
      // Render hero stats
      const statsContainer = document.querySelector('.hero-stats');
      if (statsContainer) {
        statsContainer.innerHTML = siteConfig.stats.map(stat => `
        <div class="stat">
          <span class="stat-number">${stat.number}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      `).join('');
      }

      // Render hero tags
      const tagsContainer = document.querySelector('.hero-tags');
      if (tagsContainer) {
        tagsContainer.innerHTML = siteConfig.tags.map(tag => 
          `<span class="tag">${tag}</span>`
        ).join('');
      }

      // Update hero content
      const heroTitle = document.querySelector('.hero-text h1');
      if (heroTitle) {
        heroTitle.textContent = siteConfig.name;
      }

      const heroSubtitle = document.querySelector('.hero-subtitle');
      if (heroSubtitle) {
        heroSubtitle.textContent = siteConfig.subtitle;
      }

      const heroMotto = document.querySelector('.hero-motto');
      if (heroMotto) {
        heroMotto.textContent = `"${siteConfig.motto}"`;
      }
    }

    renderCaseStudies() {
      const casesGrid = document.querySelector('.cases-grid');
      if (!casesGrid) return;

      casesGrid.innerHTML = caseStudies.map(caseStudy => this.renderCaseStudy(caseStudy)).join('');
    }

    renderCaseStudy(caseStudy) {
      const highlights = caseStudy.highlights.map(highlight => `
      <div class="highlight">
        <div class="highlight-title">${highlight.title}</div>
        <div class="highlight-value">${highlight.value}</div>
      </div>
    `).join('');

      const skills = caseStudy.skills.map(skill => 
        `<span class="skill-tag ${skill.type}">${skill.name}</span>`
      ).join('');

      return `
      <article class="case-card">
        <a href="${caseStudy.url}" class="case-link">
          <div class="case-header">
            <div class="case-meta">
              <div class="case-icon ${caseStudy.iconClass}">
                <span class="material-icons">${caseStudy.icon}</span>
              </div>
              <span class="case-period">${caseStudy.period}</span>
            </div>
            
            <h3 class="case-title">${caseStudy.title}</h3>
            <p class="case-description">${caseStudy.description}</p>
            
            <div class="case-highlights">
              ${highlights}
            </div>
            
            <div class="case-skills">
              ${skills}
            </div>
          </div>
        </a>
      </article>
    `;
    }

    renderTalks() {
      const talksGrid = document.querySelector('.talks-grid');
      if (!talksGrid) return;

      talksGrid.innerHTML = talks.map(talk => this.renderTalk(talk)).join('');
    }

    renderTalk(talk) {
      const slidesLink = talk.slidesLink ? `
      <a href="${talk.slidesLink}" target="_blank" rel="noopener" class="talk-slides-link">
        <span class="material-icons">slideshow</span>
        Slides
      </a>
    ` : '';
      
      return `
      <article class="talk-card">
        <div class="talk-video-container">
          <iframe
            title="${talk.title}"
            src="https://www.youtube.com/embed/${talk.youtubeId}"
            class="talk-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
        <div class="talk-content">
          <h3 class="talk-title">${talk.title}</h3>
          <p class="talk-venues">${talk.venue}</p>
          ${slidesLink}
        </div>
      </article>
    `;
    }

    renderSocialLinks() {
      // Render social links in header
      const headerSocialNav = document.querySelector('.social-nav');
      if (headerSocialNav) {
        headerSocialNav.innerHTML = siteConfig.social.map(social => `
        <a href="${social.url}" target="_blank" aria-label="${social.name}" rel="noopener">
          <svg class="${social.icon}" viewBox="0 0 24 24">
            ${this.getSocialIconPath(social.name)}
          </svg>
        </a>
      `).join('');
      }

      // Render social links in footer
      const footerSocialLinks = document.querySelector('.footer-links:last-child');
      if (footerSocialLinks) {
        footerSocialLinks.innerHTML = siteConfig.social.map(social => `
        <a href="${social.url}" target="_blank" title="${social.name}" class="social-link">
          <svg class="${social.icon}" viewBox="0 0 24 24">
            ${this.getSocialIconPath(social.name)}
          </svg>
        </a>
      `).join('');
      }

      // Update footer info
      const footerInfo = document.querySelector('.footer-info');
      if (footerInfo) {
        footerInfo.innerHTML = `
        <p>© ${new Date().getFullYear()} ${siteConfig.name}</p>
        <span class="footer-separator">•</span>
        <a href="mailto:${siteConfig.email}" class="footer-link">${siteConfig.email}</a>
        <span class="footer-separator">•</span>
        <a href="${siteConfig.cvUrl}" target="_blank" class="footer-link">Download CV</a>
      `;
      }
    }

    getSocialIconPath(socialName) {
      const iconPaths = {
        'Twitter': '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>',
        'GitHub': '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
        'LinkedIn': '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
        'Instagram': '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>'
      };
      return iconPaths[socialName] || '';
    }

    setupEventListeners() {
      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
      window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
          header.style.background = 'rgba(3, 7, 18, 0.98)';
          header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
          header.style.background = 'rgba(3, 7, 18, 0.95)';
          header.style.boxShadow = 'none';
        }
      });

      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe all case cards and talk cards
      document.querySelectorAll('.case-card, .talk-card, .approach-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });
    }
  }

  // Initialize the app when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
  });

})();
