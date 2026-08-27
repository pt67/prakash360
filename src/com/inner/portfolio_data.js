const projects = [
  {
    id: 'webapps',
    icon: 'faLaptopCode',
    category: 'Full-Stack',
    title: 'Custom Web Applications',
    tagline: 'End-to-end apps built to scale with your business.',
    description:
      'From concept to deployment, I design and build production-ready web applications. Whether a SaaS dashboard, an internal tool, or a customer-facing platform, I architect clean, modular systems that are fast, secure, and easy to maintain.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    highlights: [
      'Role-based dashboards & admin panels',
      'Real-time features with WebSockets',
      'REST & GraphQL API design',
      'Payments, auth & file uploads',
    ],
    deliverables: 'MVP in 2–4 weeks, fully documented',
  },
  {
    id: 'apis',
    icon: 'faServer',
    category: 'Backend',
    title: 'Robust APIs & Microservices',
    tagline: 'Scalable backends that power your front-end.',
    description:
      'I engineer secure, well-tested APIs and microservices that handle thousands of concurrent requests. Clean architecture, rate limiting, caching, and monitoring baked in from day one.',
    tech: ['Node.js', 'Python', 'Laravel', 'Docker'],
    highlights: [
      'REST / GraphQL / Webhook endpoints',
      'JWT auth, RBAC & token refresh',
      'Database design & query optimization',
      'CI/CD pipelines & containerization',
    ],
    deliverables: 'Versioned API reference & Postman collection',
  },
  {
    id: 'ecommerce',
    icon: 'faCartShopping',
    category: 'E-Commerce',
    title: 'E-Commerce & Storefronts',
    tagline: 'Stores that convert browsers into buyers.',
    description:
      'I build custom and headless e-commerce solutions with intuitive checkout flows, inventory management, and integrations that streamline your operations and grow revenue.',
    tech: ['Laravel', 'Vue', 'Stripe', 'Rails'],
    highlights: [
      'Custom carts & one-page checkout',
      'Stripe / PayPal / mobile-money gateways',
      'Inventory, orders & shipping modules',
      'Admin dashboards & analytics',
    ],
    deliverables: 'Live store + admin panel + training',
  },
  {
    id: 'cms',
    icon: 'faFileLines',
    category: 'Content',
    title: 'CMS & Corporate Websites',
    tagline: 'Manageable sites with beautiful, powerful front-ends.',
    description:
      'Content is king, and managing it should be effortless. I deliver flexible CMS-driven websites with blazing-fast performance, great SEO, and a silky-smooth editing experience for your team.',
    tech: ['React', 'Rails', 'Laravel', 'Headless CMS'],
    highlights: [
      'Headless & traditional CMS setups',
      'SEO, meta, and sitemap automation',
      'Multilingual & multi-site support',
      'Page-speed & accessibility audits',
    ],
    deliverables: 'CMS handover with documentation',
  },
  {
    id: 'automation',
    icon: 'faBolt',
    category: 'Automation',
    title: 'Automation & Scripts',
    tagline: 'Let software handle the repetitive work.',
    description:
      'I turn manual, error-prone workflows into reliable automated pipelines. From data scraping to report generation and system integrations, my scripts save your team hours every week.',
    tech: ['Python', 'Node.js', 'Selenium', 'Cron'],
    highlights: [
      'Scraping & data enrichment tools',
      'Report & invoice generation',
      'Third-party API integrations',
      'Scheduled jobs & bot alerts',
    ],
    deliverables: 'Production script + runbook',
  },
  {
    id: 'eol',
    icon: 'faWrench',
    category: 'Maintenance',
    title: 'Support & Maintenance',
    tagline: 'Your system, updated, secured, and improved.',
    description:
      'Launching is just the beginning. I provide ongoing support, security patches, performance tuning, and feature evolution so your product stays healthy and ahead of the curve.',
    tech: ['CI/CD', 'DevOps', 'Monitoring'],
    highlights: [
      'Security updates & backups',
      'Performance & uptime monitoring',
      'Bug fixes & small feature sprints',
      'Weekly progress reports',
    ],
    deliverables: 'SLA-based support plans',
  },
];

export default projects;
