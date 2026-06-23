export const siteConfig = {
  name: "EnterprisersForge",
  tagline: "Your Tech & Growth Partner",
  email: "hello@enterprisersforge.com",
  responseTime: "4 business hours",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/starter-plan", label: "Starter Plan" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// export const heroStats = [
//   { value: "150+", label: "Enterprise Clients" },
//   { value: "$2.4B+", label: "Revenue Processed" },
//   { value: "98%", label: "Retention Rate" },
// ];
export const heroStats = [
  { value: "B2B", label: "eCommerce Solutions" },
  { value: "ERP", label: "Integrations" },
  { value: "AI", label: "Automation" },
];

export const trustedClients = [
  { name: "Silmar Electronics", tag: "Technology" },
  { name: "Rubber Inc.", tag: "B2B Ecommerce" },
  { name: "SAC Netsuite Integration", tag: "Finance" },
  { name: "Auraq", tag: "Book Publishing" },
  { name: "HarborSky", tag: "Retail" },
  { name: "Enterpristore", tag: "SaaS" },
  { name: "Orbis Group", tag: "Manufacturing" },
  { name: "CarnivalUtopia", tag: "Events Booking" },
];

export const services = [
  {
    id: "web-apps",
    icon: "📱",
    tag: "Web · Android · iOS",
    tagClass: "tag-cyan",
    title: "Web & Cross-Platform App Development",
    description:
      "High-performance web applications and native-quality mobile experiences built on React, Next.js, Flutter, and Swift — unified under a single codebase strategy.",
    longDescription:
      "We engineer web and mobile products that feel native on every platform. Whether you need a customer-facing portal, an internal operations dashboard, or a cross-platform mobile app, we align your codebase strategy with your growth roadmap — so you ship faster without sacrificing quality.",
    tags: ["React / Next.js", "Flutter", "Swift / Kotlin", "PWA", "React Native"],
    features: [
      "Responsive web apps with React, Next.js, and TypeScript",
      "Native-quality iOS and Android apps via Flutter, Swift, or Kotlin",
      "Progressive Web Apps (PWA) for offline-capable experiences",
      "Unified codebase strategies across web and mobile",
      "Performance optimization, accessibility, and SEO built in",
    ],
    bentoClass: "bento-wide",
    accent: "cyan",
    number: "01",
    borderColor: "rgba(6,182,212,0.25)",
    orbColor: "rgba(6,182,212,0.1)",
    iconBg: "rgba(6,182,212,0.1)",
    gradBorder: true,
  },
  {
    id: "ai-automation",
    icon: "🤖",
    tag: "Automation · LLMs",
    tagClass: "tag-violet",
    title: "AI Automation & Intelligent Workflows",
    description:
      "Replace manual bottlenecks with agentic AI — document processing, predictive analytics, custom LLM pipelines.",
    longDescription:
      "Manual processes drain enterprise teams. We design intelligent workflows that automate document processing, surface predictive insights, and orchestrate custom LLM pipelines — so your people focus on decisions, not data entry.",
    tags: ["OpenAI / Claude", "n8n", "LangChain"],
    features: [
      "Agentic AI workflows for document and invoice processing",
      "Custom LLM pipelines with OpenAI, Claude, and LangChain",
      "Predictive analytics and intelligent decision support",
      "Workflow automation with n8n, Zapier, and custom integrations",
      "Human-in-the-loop review systems for high-stakes operations",
    ],
    bentoClass: "bento-narrow",
    accent: "violet",
    borderColor: "rgba(124,58,237,0.25)",
    orbColor: "rgba(124,58,237,0.2)",
    iconBg: "rgba(124,58,237,0.12)",
  },
  {
    id: "erp",
    icon: "🏭",
    tag: "B2B E-commerce · ERP",
    tagClass: "tag-green",
    title: "B2B E-commerce & ERP Integrations",
    description:
      "Deep integrations with Infor CloudSuite, NetSuite, SAP. Complex catalog management, customer-specific pricing, and order automation at scale.",
    longDescription:
      "Enterprise commerce is never off-the-shelf. We build B2B portals and e-commerce platforms deeply connected to your ERP — handling complex catalogs, customer-specific pricing tiers, and automated order flows at the scale your operations demand.",
    tags: ["NetSuite", "Infor CloudSuite", "SAP", "Magento"],
    features: [
      "Deep ERP integrations with NetSuite, Infor CloudSuite, and SAP",
      "Complex B2B catalog management and product configurators",
      "Customer-specific pricing, contracts, and approval workflows",
      "Order automation and real-time inventory synchronization",
      "Magento and custom storefront development for B2B buyers",
    ],
    bentoClass: "bento-half",
    accent: "green",
    borderColor: "rgba(16,185,129,0.2)",
    orbColor: "rgba(16,185,129,0.15)",
    iconBg: "rgba(16,185,129,0.1)",
  },
  {
    id: "api-integrations",
    icon: "🔌",
    tag: "Shipping · Payments · Logistics",
    tagClass: "tag-amber",
    title: "Advanced API Integrations",
    description:
      "Shipping carriers, last-mile logistics, payment gateways, and 3PL systems connected into a unified operational layer.",
    longDescription:
      "Disconnected systems create operational drag. We connect shipping carriers, payment gateways, last-mile logistics, and 3PL providers into a single unified layer — giving your teams real-time visibility and automated handoffs across every touchpoint.",
    tags: ["Stripe / Braintree", "FedEx / UPS APIs", "ShipStation", "Twilio"],
    features: [
      "Payment gateway integrations with Stripe, Braintree, and more",
      "Shipping carrier APIs — FedEx, UPS, and regional providers",
      "Last-mile logistics and 3PL system connectivity",
      "ShipStation and warehouse management integrations",
      "Communications layer via Twilio and webhook orchestration",
    ],
    bentoClass: "bento-half",
    accent: "amber",
    borderColor: "rgba(245,158,11,0.2)",
    orbColor: "rgba(245,158,11,0.12)",
    iconBg: "rgba(245,158,11,0.1)",
  },
];

export const whyUs = [
  { icon: "⚡", title: "Sprint Delivery", description: "2-week production cycles with live staging environments" },
  { icon: "🔒", title: "Enterprise Security", description: "SOC 2 compliant architecture, zero-trust by default" },
  { icon: "📈", title: "Scale-Ready", description: "Architected for 10x from day one" },
  { icon: "🤝", title: "Dedicated Team", description: "Your engineers, your Slack, your timezone" },
];

export const starterPlan = {
  price: "$8,900",
  deliverables: [
    { title: "Brand Identity System", detail: "Logo, color palette, typography guide, and brand voice" },
    { title: "Social Media Presence", detail: "Profile setup, template kit, first 30 posts designed and scheduled" },
    { title: "Professional Website", detail: "Up to 8 pages, CMS-powered, fully responsive, SEO-optimized" },
    { title: "Cross-Platform Mobile App", detail: "iOS & Android app with core business features, app store submission" },
    { title: "3-Month Growth Support", detail: "Monthly check-ins, analytics review, and priority bug fixes" },
  ],
  outcomes: [
    { label: "Brand Recognition", value: "+340%", width: "85%" },
    { label: "Web Traffic", value: "+520%", width: "92%" },
    { label: "Lead Generation", value: "+280%", width: "75%" },
  ],
  timeline: [
    { week: "Week 1–2", detail: "Discovery, brand strategy & architecture planning", color: "#06B6D4" },
    { week: "Week 3–5", detail: "Brand identity delivery + website design sprint", color: "#818CF8" },
    { week: "Week 6–9", detail: "App development + social media kit delivery", color: "#A78BFA" },
    { week: "Week 10–12", detail: "QA, launch, app store submission & handover", color: "#10B981" },
  ],
};

export const techStack = [
  { icon: "🎨", title: "Frontend", layer: "Layer 1", layerClass: "tag-cyan", borderColor: "rgba(6,182,212,0.15)", tags: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "GraphQL"] },
  { icon: "📱", title: "Mobile", layer: "Layer 2", layerClass: "tag-violet", borderColor: "rgba(124,58,237,0.15)", tags: ["Flutter", "React Native", "SwiftUI", "Jetpack Compose", "Expo", "Firebase"] },
  { icon: "⚙️", title: "Backend", layer: "Layer 3", layerClass: "tag-green", borderColor: "rgba(16,185,129,0.15)", tags: ["Node.js","PHP", "Laravel", "Python / FastAPI", "Go", "REST / gRPC", "PostgreSQL", "Redis"] },
  { icon: "🧠", title: "AI & Automation", layer: "Layer 4", layerClass: "tag-amber", borderColor: "rgba(245,158,11,0.15)", tags: ["OpenAI GPT-5", "Anthropic Claude", "LangChain", "n8n / Zapier", "Gemini", "Hugging Face"] },
  { icon: "☁️", title: "Cloud & Infra", layer: "Layer 5", layerClass: "", borderColor: "rgba(148,163,184,0.12)", tags: ["AWS", "GCP", "Azure", "Docker / K8s", "Terraform", "Vercel / Cloudflare"] },
  { icon: "🔗", title: "ERP & Systems", layer: "Layer 6", layerClass: "", borderColor: "rgba(148,163,184,0.12)", tags: ["NetSuite", "Infor CloudSuite", "SAP S/4HANA", "Salesforce", "Workday"] },
];

export const architecturePhilosophy = [
  { icon: "⚡", title: "Event-Driven Architecture", description: "We build systems where components communicate through events, enabling horizontal scaling and resilient microservices that handle enterprise load without compromise.", gradient: "from-cyan/6 to-violet/6" },
  { icon: "🔐", title: "Zero-Trust Security Model", description: "Every service, user, and device is verified continuously. We enforce least-privilege access, end-to-end encryption, and audit logging across every integration layer.", gradient: "from-green/6 to-cyan/6" },
];

export const testimonials = [
  {
    quote: "EnterprisersForge connected our Infor CloudSuite ERP to a custom B2B portal in 10 weeks. Our order cycle time dropped 60%. The team spoke our language from day one.",
    name: "Marcus T.",
    role: "COO, Meridian Logistics",
    initial: "M",
    gradient: "from-[#0891B2] to-[#6D28D9]",
  },
  {
    quote: "The Business Starter Plan gave us a brand, website, and app that looked like we'd spent $200k. We launched to 5,000 users in week one. Genuinely surprised by the quality.",
    name: "Sofia R.",
    role: "Founder, HarborSky Retail",
    initial: "S",
    gradient: "from-[#7C3AED] to-[#EC4899]",
  },
  {
    quote: "Their AI automation team built us a document processing pipeline that replaced 4 FTEs. Now it processes 15,000 invoices daily with 99.2% accuracy. ROI in under 90 days.",
    name: "James K.",
    role: "CTO, Cortexia AI Labs",
    initial: "J",
    gradient: "from-[#059669] to-[#0891B2]",
  },
];

export const interestOptions = [
  "Web & App Dev",
  "ERP Integration",
  "AI Automation",
  "API Integrations",
  "Business Starter Plan",
];

export const footerLinks = {
  services: [
    { href: "/services", label: "Web & App Dev" },
    { href: "/services#erp", label: "ERP Integrations" },
    { href: "/services#ai-automation", label: "AI Automation" },
    { href: "/services#api-integrations", label: "API Integrations" },
    { href: "/services#erp", label: "B2B E-commerce" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about#careers", label: "Careers" },
    { href: "/about#blog", label: "Blog" },
    { href: "/about#partners", label: "Partners" },
  ],
};

export const aboutContent = {
  mission: "We engineer the systems that power enterprise growth — from AI-powered workflows and deep ERP integrations to mobile apps and e-commerce platforms.",
  values: [
    { icon: "🎯", title: "Outcome-Driven", description: "Every sprint is tied to measurable business outcomes, not vanity metrics." },
    { icon: "🔬", title: "Technical Rigor", description: "Architecture decisions are documented, tested, and built for 10x scale from day one." },
    { icon: "🌍", title: "Global Delivery", description: "Distributed teams across timezones with dedicated Slack channels and weekly demos." },
    { icon: "💡", title: "Continuous Innovation", description: "We invest in R&D so your stack stays ahead of the curve, not behind it." },
  ],
  team: [
    { name: "Elena Vasquez", role: "CEO & Co-Founder", bio: "Former VP Engineering at a Fortune 500 logistics company. 15+ years building enterprise platforms." },
    { name: "David Chen", role: "CTO & Co-Founder", bio: "Ex-Google, led teams shipping systems processing $1B+ in annual transactions." },
    { name: "Priya Sharma", role: "Head of AI", bio: "PhD in ML, built document automation pipelines for healthcare and finance enterprises." },
    { name: "Alex Morgan", role: "Head of Integrations", bio: "NetSuite and SAP certified architect with 50+ ERP integration projects delivered." },
  ],
};

export const caseStudies = [
  {
    id: "meridian-logistics",
    client: "Meridian Logistics",
    industry: "Logistics",
    title: "B2B Portal + Infor CloudSuite Integration",
    result: "60% faster order cycle time",
    description: "Built a custom B2B ordering portal with real-time inventory sync, customer-specific pricing, and automated fulfillment workflows integrated with Infor CloudSuite.",
    tags: ["ERP", "B2B Portal", "NetSuite"],
    duration: "10 weeks",
  },
  {
    id: "cortexia-ai",
    client: "Cortexia AI Labs",
    industry: "AI / Finance",
    title: "Invoice Processing Automation Pipeline",
    result: "99.2% accuracy at 15K invoices/day",
    description: "Designed an AI document processing pipeline using custom LLM workflows that replaced 4 FTEs and achieved ROI in under 90 days.",
    tags: ["AI Automation", "LangChain", "Python"],
    duration: "8 weeks",
  },
  {
    id: "harborsky-retail",
    client: "HarborSky Retail",
    industry: "Retail",
    title: "Business Starter Plan Launch",
    result: "5,000 users in week one",
    description: "Delivered complete brand identity, e-commerce website, and cross-platform mobile app — enabling a full market launch in 12 weeks.",
    tags: ["Mobile App", "E-commerce", "Branding"],
    duration: "12 weeks",
  },
];
