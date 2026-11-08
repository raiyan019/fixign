export const brand = { name: "FiXiGN" };

export const navLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "products", label: "Products", href: "/products" },
  { id: "services", label: "Services", href: "/services" },
  { id: "pricing", label: "Pricing", href: "/pricing" },
  { id: "works", label: "Works", href: "/works" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "contact", label: "Contact Us", href: "/contact" },
];

// title = 2 fixed lines (so the layout never shifts)
// image  = put the file in /public/images
export const slides = [
  {
    id: 1,
    kicker: "FIXIGN A GLOBAL LEADER IN",
    title: ["WEB DESIGN", "& DEVELOPMENT"],
    quote:
      "creating seamless digital experiences and innovative branding solutions that elevate businesses and engage audiences worldwide.",
    description:
      "Fixign is a global leader in UX/UI design, creating seamless digital experiences and innovative branding solutions that elevate businesses and engage audiences worldwide.",
    image: "/images/brain.png",
  },
  {
    id: 2,
    kicker: "FIXIGN A GLOBAL LEADER IN",
    title: ["UX/UI", "DESIGN"],
    quote:
      "from logos to full visual systems, we shape brands people remember and trust.",
    description:
      "Our team builds complete brand identities, from logo and color systems to guidelines that keep every touchpoint consistent across channels.",
    image: "/images/brain.png",
  },
  {
    id: 3,
    kicker: "FIXIGN A GLOBAL LEADER IN",
    title: ["BRANDING", "SOLUTIONS"],
    quote:
      "research-led interfaces that feel simple to use and look great on every screen.",
    description:
      "We design web and mobile products with clear flows, accessible interfaces and developer-ready handoff for every release.",
    image: "/images/brain.png",
  },
];

export const cta = {
  primary: { label: "Our Services", href: "#/services" },
  secondary: { label: "See Portfolio", href: "#works" },
};

export const SLIDE_DURATION = 5000; // ms

// Figma frame size. Change these if your frame is not 1920 x 1080.
export const DESIGN_W = 1920;
export const DESIGN_H = 1047; // hero height = Rectangle 70's Y in Figma
export const FLOW_BREAKPOINT = 1100; // below this width the stacked layout is used
/* ===================== SECTION 2 (Services) ===================== */
export const SECTION2_H = 14340; // was 13690

export const about = {
  heading: ["Boost the Growth Development", "Agency Your Branding!"],
  label: "About Us",
  quote: [
    "“creating seamless digital experiences and innovative branding solutions that elevate businesses and engage audiences worldwide.",
    "“creating seamless digital experiences and innovative branding solutions that elevate businesses and engage audiences worldwide.”",
  ],
};

export const serviceImage = "/images/service-4.jpg"; // the one image in the big box
export const services = [
  {
    id: 1,
    title: ["Boosts Marketing &", "Sales"],
    text: "Attractive designs increase engagement, strengthen credibility, and influence buying decisions.",
    image: "/images/service-1.jpg",
  },
  {
    id: 2,
    title: ["Builds Brand Identity"],
    text: "Consistent design (logo, colors, typography) helps establish trust and recognition.",
    image: "/images/service-2.jpg",
  },
  {
    id: 3,
    title: ["Improves", "Communication"],
    text: "Good design conveys messages quickly and effectively, making complex ideas easy to understand.",
    image: "/images/service-3.jpg",
  },
  {
    id: 4,
    title: ["Creates Strong First", "Impressions"],
    text: "Eye-catching visuals make a brand stand out and attract attention instantly.",
  },
];
export const DEFAULT_ACTIVE_CARD = 3; // 0 = first card ... 3 = fourth (yellow)

export const marqueeText = "Understanding Your Industry";

/* ===================== SECTION 3 (Graphic Design cards) ===================== */
const base = {
  image: "",
  title: "GRAPHIC DESIGN",
  text: "Design services are built around understanding users, business goals, and the latest design standards to deliver solutions that are intuitive, engaging, and impactful.",
  // first 5 go in column 1, last 5 in column 2
  categories: [
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
  ],
  button: { label: "Start Now", href: "/contact" },
};

// 3 identical cards. Change title / text / image on card 2 and 3 here.
export const graphicCards = [
  {
    ...base,
    id: 1,
    title: "WEB DESIGN & DEVELOPMENT",
    text: " Creating visually appealing and functional websites that deliver exceptional user experiences.",
    image: "/images/web-design-development.png",
    categories: [
      "Business & Corporate Websites",
      "E-commerce Websites",
      "Portfolio & Personal Websites",
      "Landing Page Design",
      "SaaS & Web Applications",
      "Real Estate Websites",
      "Healthcare & Medical Websites",
      "Education & E-learning Platforms",
      "Travel & Hospitality Websites",
      "Restaurant & Food Websites",
    ],
  },
  {
    ...base,
    id: 2,
    title: "UX/UI DESIGN",
    text: "Designing intuitive and engaging user experiences that enhance usability and satisfaction.",
    image: "/images/ux-ui-design.png",
    categories: [
      "Wireframing",
      "Prototyping",
      "User research",
      "Usability testing",
      "Design systems",
      "Mobile apps",
      "Web apps",
      "Dashboards",
      "Landing pages",
      "Redesigns",
    ],
  }, // e.g. { ...base, id: 2, title: "UX/UI DESIGN", image: "/images/ux.png" }
  {
    ...base,
    id: 3,
    title: "BRANDING DESIGN",
    text: "Building memorable identities that make brands stand out.",
    image: "/images/branding-design.png",
    categories: [
      "Logo design",
      "Brand identity",
      "Visual guidelines",
      "Marketing materials",
      "packaging design",
      "Brand Identity Design",
      "Typography & Color Systems",
      "Social Media Branding",
      "Rebranding & Brand Refresh",
      "Business Card & Stationery Design",
    ],
  },
  {
    ...base,
    id: 4,
    title: "Graphic design",
    text: "Creating impactful visuals that communicate ideas and capture attention.",
    image: "/images/graphic-design1.png",
    categories: [
      "Social Media Graphics",
      "Marketing & Advertising Design",
      "Print & Editorial Design",
      "Poster & Flyer Design",
      "Brochure & Catalogue Design",
      "Banner & Billboard Design",
      "Infographic Design",
      "Presentation Design",
      "Packaging Graphics",
      "Illustration & Digital Artwork",
    ],
  }, // NEW card. Change its title / text / image later (example below)
  {
    ...base,
    id: 5,
    title: "Digital Marketing",
    text: "Driving growth through strategic campaigns that connect brands with the right audience.",
    image: "/images/digital-marketing.png",
    categories: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Content Marketing",
      "Email Marketing",
      "Social Media Marketing",
      "Influencer Partnerships",
      "Marketing Automation",
      "Analytics & Reporting",
      "Brand Management",
      "Customer Relationship Management (CRM)",
    ],
  }, // NEW card
];

/* ===================== SECTION 4 (Stats grid) ===================== */
// order = top-left, top-right, bottom-left, bottom-right
export const statCards = [
  {
    value: 100,
    suffix: "+",
    label: ["Happy Clients Who Trust", "my work"],
    image: "/images/handshake.png",
    button: { label: "Start New Project", href: "/contact" },
  },
  {
    value: 40,
    suffix: "+",
    label: ["Clients come back for", "a new projects"],
    image: "/images/website-mockups.png",
  },
  {
    value: 4,
    suffix: "+",
    label: [
      "Years of professional",
      "experience in designing",
      "digital products",
    ],
    image: "/images/graphic-design.png",
  },
  {
    value: 90,
    suffix: "+",
    label: ["Successfully", "Completed Projects"],
    image: "/images/robot-ring.png",
    button: { label: "See Works", href: "#works" },
  },
];

// second scrolling text under the grid
export const marquee2 = [
  "Branding Your Industry",
  "Branding Design",
  "Development",
  "Graphic Design",
];

/* ===================== SECTION 5 (Featured Projects) ===================== */
export const featured = {
  title: ["FEATURED", "PROJECTS"],
  text: "Explore a selection of projects blending creativity with practical design",
  button: { label: "See All Works", href: "#works" },
  list: ["Web design", "Development", "Branding Design"],
  image: "/images/project.png",
  caption: "Creative Design template for modern agencies",
};

/* ===================== SECTION 6 (Laptop banner image) ===================== */
export const banner = {
  image: "/images/laptop.png",
};

/* ===================== SECTION 7 (Pricing Plan) ===================== */
const planBase = {
  price: "$2000",
  tag: "For Saas & fast MVP launches",
  name: "Web/Mobile App Design",
  features: [
    "UX Research",
    "Pixel-Perfect Execution",
    "Unlimited Revisions",
    "Developer handoff",
    "Ongoing Support & Updates",
    "Quality Assurance Testing",
    "Responsive across all devices",
  ],
  button: { label: "Start Here", href: "/contact" },
};

export const pricing = {
  title: "Pricing Plan",
  subtitle: "A Strong Commitment to Quality and Growth",
  // 3 identical plans for now. Edit price / name / features per plan here.
  plans: [
    { ...planBase, id: 1 },
    { ...planBase, id: 2 },
    { ...planBase, id: 3 },
  ],
};

/* ===================== SECTION 8 (BrandBreak) ===================== */
export const brandBreak = "FiXiGN";

/* ===================== SECTION 10 (Why Choose US) ===================== */
export const whyUs = {
  kicker: "Why Choose US?",
  heading: ["We Design for the Future to", "Drive Today’s Success"],
  quote:
    "“We’re committed to your satisfaction with unlimited revisions at every step. We deliver exactly as you imagine.”",
  icon: "/images/robot-ring.png",
  // first 2 = wide cards (row 1), last 3 = narrow cards (row 2)
  cards: [
    {
      id: 1,
      title: ["Unlimited Revisions"],
      text: "We’re committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.",
    },
    {
      id: 2,
      title: ["Lifetime Support"],
      text: "We’re committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.",
    },
    {
      id: 3,
      title: ["Personalised Plans"],
      text: "We’re committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine.",
    },
    {
      id: 4,
      title: ["Custom Design", "Solutions"],
      text: "Our easy payment options are completely flexible. So, you can invest in your success while staying within your budget.",
    },
    {
      id: 5,
      title: ["24/7 Customer", "Support"],
      text: "Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results.",
    },
  ],
};

/* ===================== SECTION 11 (Testimonials) ===================== */
const testimonialBase = {
  photo: "/images/client.png",
  text: " Working with this team was a game-changer. Their design and development expertise brought our vision to life, and the results exceeded our expectations. Working with this team was a game-changer. Their design and development expertise brought our vision to life, and the results exceeded our expectations.",
  name: "DJ MARKO",
  role: "CEO & CO FOUNDER",
  name2: "DEXKO PIE",
  role2: "",
};

export const testimonials = {
  kicker: "Testimonials",
  heading: "Our Clients Say’s",
  subtitle:
    "Fixign turned our ideas into a unique project that inspires both us and our Clients.",
  // 3 identical cards for now. Change name / text / photo per card here.
  items: [
    { ...testimonialBase, id: 1 },
    { ...testimonialBase, id: 2 },
    { ...testimonialBase, id: 3 },
  ],
};

/* ===================== SECTION 13 (FAQ) ===================== */
const faqAnswer1 =
  "Starting your project is easy—simply contact us via our website or email. We’ll discuss your goals, gather project details, and create a tailored plan to bring your vision to life.";
const faqAnswer2 =
  "Project costs vary depending on complexity, scope, and features. After understanding your requirements, we provide a transparent estimate that aligns with your budget and project needs.";
const faqAnswer3 =
  "Fixign stands out by blending creativity, strategy, and user research to craft designs that truly work. We don’t just design interfaces—we create meaningful experiences that connect with users and drive business results.";

const faqAnswer4 =
  "The timeline depends on the project’s size and complexity. Smaller projects, like landing pages, may take 2–3 weeks, while full apps or platforms can take several months. We always provide a clear timeline before starting.";
const faqAnswer5 =
  "Fixign specializes in website design, mobile app design, dashboards, product design, and wireframes & prototypes. We focus on creating user-friendly, visually engaging solutions that balance creativity with functionality.";

const faqAnswer6 =
  "We maintain quality across time zones by using clear communication, modern project management tools, and flexible collaboration schedules. Our workflow ensures smooth progress and consistent results, no matter where you are.";

export const faq = {
  heading: "Curious About",
  accent: "Fixign?",
  heading2: "Find Your Answers Here!",
  subtitle: [
    "Everything you need to know about our services, process, and",
    "how we bring your ideas to life.",
  ],
  // answers 1 and 2 are repeated on the other questions for now. Edit each "a" later.
  items: [
    { q: "How do I begin working with Fixign?", a: faqAnswer1 },
    { q: "What is the typical cost of a UI/UX design project?", a: faqAnswer2 },
    {
      q: "What sets Fixign apart from other UI/UX design agencies?",
      a: faqAnswer3,
    },
    { q: "How long does a typical design project take?", a: faqAnswer4 },
    { q: "What are Fixign’s main areas of expertise in UI/UX?", a: faqAnswer5 },
    {
      q: "How do you maintain quality when working across different time zones?",
      a: faqAnswer6,
    },
  ],
};
export const FAQ_DEFAULT_OPEN = -1; // -1 = all closed, 0 = first question open

/* ===================== SECTION 14 (Join Us) ===================== */
export const join = {
  kicker: "Join Us",
  person: {
    photo: "/images/sarah.png",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    text: "We put your ideas and thus your wishes in the form of a unique web project that inspires.”“We put your ideas and thus your wishes in the form of a unique web project that inspires.",
    phoneLabel: "Phone:",
    phone: "+012 345 678 90",
    emailLabel: "Email:",
    email: "admin@example.com",
    followLabel: "Follow Me:",
    // the 4 boxes (empty in the design). Add real links here.
    socials: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "X", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  form: {
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "title", label: "Project Title", type: "text" },
      { name: "message", label: "Message (Project Details)", type: "textarea" },
    ],
    send: "Send Message",
    sending: "Sending...",
    sent: "Message Sent",
    work: {
      label: "Work With Us",
      href: "mailto:admin@example.com?subject=Work%20with%20Fixign",
    },
  },
};

/* ===================== Join Us pop-up messages ===================== */
export const joinToast = {
  duration: 4500, // ms before it closes by itself
  success: {
    type: "success",
    title: "Message sent successfully!",
    text: "Thanks for reaching out. We'll get back to you soon.",
  },
  error: {
    type: "error",
    title: "Please check the form",
    text: "Fill in the required fields with a valid email.",
  },
  failed: {
    type: "error",
    title: "Could not send",
    text: "Something went wrong. Please try again.",
  },
};

/* ===================== FOOTER ===================== */
export const footer = {
  about: [
    "From UX design to full-scale development, Fixign builds",
    "meaningful digital products and brand identities that",
    "inspire confidence and create lasting impact.",
  ],
  services: {
    title: "Services",
    links: [
      { label: "UX/UI Design", href: "#/services" },
      { label: "Web Design", href: "#/services" },
      { label: "Graphic Design", href: "#/services" },
      { label: "Mobile App Design", href: "#/services" },
      { label: "Web App Development", href: "#/services" },
      { label: "Branding Design", href: "#/services" },
    ],
  },
  quick: {
    title: "Quick links",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Career", href: "#career" },
      { label: "Pricing", href: "#pricing" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Condition", href: "#" },
      { label: "Pricing", href: "#/pricing" },
    ],
  },
  contact: {
    title: "CONTACT US:",
    phones: ["+8801603474320", "+8801603474320"],
    email: "support@fixign.com",
  },
  follow: {
    title: "FOLLOW US:",
    socials: [
      { id: "facebook", label: "Facebook", href: "#" },
      { id: "instagram", label: "Instagram", href: "#" },
      { id: "linkedin", label: "LinkedIn", href: "#" },
      { id: "x", label: "X", href: "#" },
    ],
  },
  copyright: "©2025. Fixign. All Right Reserved.",
};

/* ===================== SERVICES PAGE ===================== */
export const SV_H = 7630; // was 6020. Page height now includes the form and the footer

export const servicesPage = {
  heading: ["Digital Product Design", "& Consulting"],
  accent: "Services", // yellow word at the end of the last line
  text: "Our Global digital product design agency helps brands to make top-quality SaaS, MVP, software, mobile apps, and websites. We focus on user-friendly designs that look great and work smoothly. Let us help your business grow with our expert digital product solutions.",
  button: { label: "Design My Product Now", href: "/contact" },
};

/* ===================== SERVICES PAGE: 6 CARDS ===================== */
export const SC_ALTERNATE = true; // true = image side alternates (left, right, left...). false = always left.

const scBase = {
  image: "/images/graphic-design.png",
  title: "GRAPHIC DESIGN",
  text: "Design services are built around understanding users, business goals, and the latest design standards to deliver solutions that are intuitive, engaging, and impactful.",
  // 10 categories: first 5 in column 1, last 5 in column 2.
  // href is the link. "#/services" keeps you on this page until you add the real links.
  categories: [
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
    "Category 01",
  ],
  button: { label: "Start Now", href: "/contact" },
};

export const serviceCards = [
  {
    ...scBase,
    id: 1,
    title: "WEB DESIGN & DEVELOPMENT",
    text: " Creating visually appealing and functional websites that deliver exceptional user experiences.",
    image: "/images/web-design-development.png",
    categories: [
      "Business & Corporate Websites",
      "E-commerce Websites",
      "Portfolio & Personal Websites",
      "Landing Page Design",
      "SaaS & Web Applications",
      "Real Estate Websites",
      "Healthcare & Medical Websites",
      "Education & E-learning Platforms",
      "Travel & Hospitality Websites",
      "Restaurant & Food Websites",
    ],
  },
  {
    ...scBase,
    id: 2,
    title: "UX/UI DESIGN",
    text: "Designing intuitive and engaging user experiences that enhance usability and satisfaction.",
    image: "/images/ux-ui-design.png",
    categories: [
      "Wireframing",
      "Prototyping",
      "User research",
      "Usability testing",
      "Design systems",
      "Mobile apps",
      "Web apps",
      "Dashboards",
      "Landing pages",
      "Redesigns",
    ],
  },
  {
    ...scBase,
    id: 3,
    title: "BRANDING DESIGN",
    text: "Building memorable identities that make brands stand out.",
    image: "/images/branding-design.png",
    categories: [
      "Logo design",
      "Brand identity",
      "Visual guidelines",
      "Marketing materials",
      "packaging design",
      "Brand Identity Design",
      "Typography & Color Systems",
      "Social Media Branding",
      "Rebranding & Brand Refresh",
      "Business Card & Stationery Design",
    ],
  },
  {
    ...scBase,
    id: 4,
    title: "Graphic design",
    text: "Creating impactful visuals that communicate ideas and capture attention.",
    image: "/images/graphic-design1.png",
    categories: [
      "Social Media Graphics",
      "Marketing & Advertising Design",
      "Print & Editorial Design",
      "Poster & Flyer Design",
      "Brochure & Catalogue Design",
      "Banner & Billboard Design",
      "Infographic Design",
      "Presentation Design",
      "Packaging Graphics",
      "Illustration & Digital Artwork",
    ],
  },
  {
    ...scBase,
    id: 5,
    title: "Digital Marketing",
    text: "Driving growth through strategic campaigns that connect brands with the right audience.",
    image: "/images/digital-marketing.png",
    categories: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Content Marketing",
      "Email Marketing",
      "Social Media Marketing",
      "Influencer Partnerships",
      "Marketing Automation",
      "Analytics & Reporting",
      "Brand Management",
      "Customer Relationship Management (CRM)",
    ],
  },
];
// To give one card its own categories, for example:
// { ...scBase, id: 2, title: "UX/UI DESIGN", categories: [
//     { label: "UX Research", href: "/ux-research" },
//     { label: "Wireframing", href: "/wireframing" },
//   ] },

/* ===================== SERVICES PAGE: OUR EXPERTISE ===================== */
export const expertise = {
  label: "Our Expertise",
  text: "We’ve worked with dozens of app businesses across industries to design digital product. Here are some industries where we excel, but our expertise extends far beyond:",
  cta: "View work", // text of the button that appears on hover
  // href = link of each card ("#/services" is a placeholder until you add the real ones)
  // accent = color of the soft glow. image = put it in /public/images
  items: [
    {
      id: 1,
      title: "E-Commerce",
      accent: "#ff6a2b",
      image: "/images/expertise-1.png",
      href: "#/services",
    },
    {
      id: 2,
      title: "Edu-Tech",
      accent: "#8e3a9a",
      image: "/images/expertise-2.png",
      href: "#/services",
    },
    {
      id: 3,
      title: "Fintech",
      accent: "#d9ea1f",
      image: "/images/expertise-3.png",
      href: "#/services",
    },
    {
      id: 4,
      title: "Corporate",
      accent: "#9a52ff",
      image: "/images/expertise-4.png",
      href: "#/services",
    },
    {
      id: 5,
      title: "Health tech",
      accent: "#e69be6",
      image: "/images/expertise-5.png",
      href: "#/services",
    },
    {
      id: 6,
      title: "SaaS Application",
      accent: "#15e6ea",
      image: "/images/expertise-6.png",
      href: "#/services",
    },
  ],
};

/* ===================== ABOUT US PAGE ===================== */
export const AB_H = 520; // banner height
export const AB_PAGE_H = 6523; // was 5873. Page now ends with the footer (650px tall)

export const aboutPage = {
  title: "ABOUT US",
  crumbs: [{ label: "Home", href: "#home" }, { label: "About Us" }],
  about: {
    pill: "About Company",
    heading: [
      "WE’RE CREATING",
      "DIGITAL EXPERIENCE",
      "THAT AMPLIFY YOUR",
      "BRAND.",
    ],
    text: "There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum simply free text market randomised words which don’t slightly.",
    stat: { value: 13, suffix: "+", label: "Years of experience in marketing" },
    image: "/images/about-team.png",
    card: {
      title: ["HELPING BRANDS GROW THROUGH", "CREATIVE DIGITAL MARKETING."],
      items: [
        "Website Growths",
        "Digital Marketing Solutions",
        "Best Design Consultancy",
        "Professional Team Members",
      ],
    },
  },

  team: {
    pill: "Team Members",
    heading: ["MEET PROFESSIONAL BEHIND", "STARTUPS SUCCESS."],
    rows: [3, 5, 3, 2], // how many photos in each row (the pyramid shape)
    // 13 members = 3 + 5 + 3 + 2. Edit names, roles and image paths here.
    members: Array.from({ length: 13 }, (_, i) => ({
      id: i + 1,
      name: `Team Member ${String(i + 1).padStart(2, "0")}`,
      role: "Role / Position",
      image: `/images/team-${i + 1}.png`,
    })),
  },

  why: {
    pill: "Why Choose Us",
    heading: "WHY CHOOSE US?",
    image: "/images/why-choose.png",
    points: [
      {
        title: "Think Differently",
        text: "Think differently to create unique solutions that inspire innovation, growth, and lasting digital impact.",
      },
      {
        title: "Quality Projects",
        text: "We deliver quality projects with precision, creativity, and dedication to meet every client expectation.",
      },
      {
        title: "Expert Team",
        text: "Our expert team combines skills and experience to build powerful, modern, and digital solutions.",
      },
    ],
    marquee: [
      "Understanding Your Industry",
      "Branding Design",
      "Development",
      "Graphic Design",
    ], // the moving text. Edit these two
    stats: [
      {
        value: 28,
        suffix: "k",
        icon: "clipboard",
        label: ["Recently Projects", "Completed For Clients"],
      },
      {
        value: 13,
        suffix: "k+",
        icon: "badge",
        label: ["Repeat Clients Visit", "Every Month"],
      },
      {
        value: 36,
        suffix: "k",
        icon: "users",
        label: ["Satisfied Clients With", "5 Star Reviews"],
      },
      {
        value: 78,
        suffix: "+",
        icon: "team",
        label: ["Professional Team Members", "Behind The Success"],
      },
    ],
  },

  clients: {
    pill: "Global Clients",
    heading: "HELPING 100+ BRANDS SUCCESS.",
    // 6 logo boxes. Put the images in /public/images. Until then the name is shown.
    logos: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      name: `Client ${i + 1}`,
      image: `/images/client-logo-${i + 1}.png`,
    })),
  },
};

/* ===================== PRICING PAGE ===================== */
export const PR_H = 3410; // page height. Always = footer top (2760, set in PricingPage.jsx) + 650

export const pricingPage = {
  title: "PRICING",
  crumbs: [{ label: "Home", href: "#home" }, { label: "Pricing" }],

  /* ---------- text ABOVE the pricing plans ---------- */
  intro: {
    pill: "Transparent Pricing",
    heading: "Simple Plans,",
    accent: "Clear Prices",
    text: "Pick the plan that fits your project. Every plan has a fixed price, a clear list of what is included and a team that stays with you until launch. Not sure which one to choose? Send us a message and we will help you decide.",
    points: ["No hidden fees", "Unlimited revisions", "Pay in milestones"], // the 3 chips. Add or remove freely
  },

  /* ---------- discount chart BELOW the pricing plans ---------- */
  discounts: {
    pill: "Offers",
    heading: "Save More With",
    accent: "Our Discounts",
    text: "We like long-term relationships. Use one of the offers below on your next project and tell us the promo code when you get in touch.",
    columns: ["Offer", "Who it's for", "Discount", "Promo code"],
    scaleMax: 30, // the discount that fills a bar completely. 30 means a 30% discount = full bar
    // one object = one row of the chart. Copy a row to add another one
    rows: [
      {
        id: 1,
        offer: "First-time client",
        who: "Your first project with Fixign",
        percent: 10,
        code: "WELCOME10",
      },
      {
        id: 2,
        offer: "Bundle & save",
        who: "Book any two services together",
        percent: 15,
        code: "BUNDLE15",
      },
      {
        id: 3,
        offer: "Long-term partner",
        who: "3 or more projects, or a monthly retainer",
        percent: 20,
        code: "PARTNER20",
      },
      {
        id: 4,
        offer: "Startups & non-profits",
        who: "Verified early-stage and non-profit teams",
        percent: 25,
        code: "IMPACT25",
      },
    ],
    note: "*Only one discount can be used per project. These percentages and codes are examples, update them in data.js.",
  },
};

/* sticky cards: everything below them moves down when you add cards */
export const GC_STEP = 840; // card height 720 + gap 120 (same numbers as CARD_H and GAP in Services.jsx)
export const GC_BASE_COUNT = 3; // the number of cards the sections below were designed for. Don't change
export const gcExtra = (count) => Math.max(0, count - GC_BASE_COUNT) * GC_STEP;

/* ===================== PRODUCTS PAGE ===================== */
export const PD_H = 2774; // page height. Always = footer top (2124, set in ProductsPage.jsx) + 650

export const productsPage = {
  title: "PRODUCTS",
  crumbs: [{ label: "Home", href: "/" }, { label: "Products" }],
  intro: {
    pill: "Our Products",
    heading: "Ready-Made Designs,",
    accent: "Built To Launch",
    text: "Browse our digital products: UI kits, templates and design assets made by the Fixign team. Pick one, download it and start your project faster.",
  },
  cta: "View product", // button text on every card
  // one object = one card. Copy a card to add another one (see the note below for the page height)
  items: [
    {
      id: 1,
      tag: "UI Kit",
      title: "Fixign UI Kit",
      text: "A complete set of buttons, forms and layouts for modern web apps.",
      price: "$49",
      image: "/images/product-1.png",
      href: "/products",
    },
    {
      id: 2,
      tag: "Template",
      title: "Dashboard Template",
      text: "A clean admin dashboard with charts, tables and dark mode.",
      price: "$59",
      image: "/images/product-2.png",
      href: "/products",
    },
    {
      id: 3,
      tag: "Mobile",
      title: "Mobile App Kit",
      text: "Over 80 mobile screens for iOS and Android, ready to customize.",
      price: "$39",
      image: "/images/product-3.png",
      href: "/products",
    },
    {
      id: 4,
      tag: "Template",
      title: "Landing Page Pack",
      text: "Ten landing pages for agencies, SaaS and startups.",
      price: "$29",
      image: "/images/product-4.png",
      href: "/products",
    },
    {
      id: 5,
      tag: "Assets",
      title: "Icon Set",
      text: "More than 500 sharp icons in 3 styles, SVG and Figma.",
      price: "$19",
      image: "/images/product-5.png",
      href: "/products",
    },
    {
      id: 6,
      tag: "Branding",
      title: "Brand Starter Kit",
      text: "Logo files, color system and guidelines to launch a brand quickly.",
      price: "$69",
      image: "/images/product-6.png",
      href: "/products",
    },
  ],
};

/* ===================== CONTACT PAGE ===================== */
export const CT_H = 3070; // page height. Always = footer top (2420, set in ContactPage.jsx) + 650

export const contactPage = {
  title: "CONTACT US",
  crumbs: [{ label: "Home", href: "/" }, { label: "Contact Us" }],
};

/* ===================== ARTICLES (the 4 cards in "Why Choose US") ===================== */
// Add your blog subdomain here later, with no slash at the end. For example:
// export const BLOG_URL = "https://blog.fixign.com";
export const BLOG_URL = import.meta.env.DEV ? "" : "https://blog.fixign.com";
export const articleHref = (slug) =>
  BLOG_URL ? `${BLOG_URL}/${slug}` : `/blog/${slug}`;
export const blogIndexHref = BLOG_URL ? `${BLOG_URL}/` : "/blog";

export const articles = {
  kicker: "Our Articles", // small italic line on top
  author: "Honour to Fixign", // shown on every article (a single article can override it)
  authorImage: "/images/author.png", // round photo next to the name. If missing, a yellow circle with the first letter shows
  heading: ["Insights, Stories and Tips", "From the Fixign Team"], // big heading, one item per line
  quote:
    "“Read how we think, how we work and what we learn from every project.”", // grey text on the right

  cta: "Read article", // button text on every card
  // Each card opens: BLOG_URL + "/" + slug   (e.g. https://blog.fixign.com/happy-clients)
  items: [
    {
      id: 1,
      tag: "Case Study",
      title: "Why 100+ Clients Trust Our Work",
      text: "How clear communication and steady delivery turned first projects into long partnerships.",
      meta: "5 min read",
      slug: "happy-clients",
      image: "/images/handshake.png",
    },
    {
      id: 2,
      tag: "Client Stories",
      title: "40+ Clients Come Back For New Projects",
      text: "What makes teams return to Fixign for a second, third and fourth project.",
      meta: "4 min read",
      slug: "returning-clients",
      image: "/images/website-mockups.png",
    },
    {
      id: 3,
      tag: "Insights",
      title: "4+ Years Of Designing Digital Products",
      text: "The lessons we learned designing apps, websites and brands for growing businesses.",
      meta: "6 min read",
      slug: "years-of-experience",
      image: "/images/vr-person.png",
    },
    {
      id: 4,
      tag: "Our Work",
      title: "90+ Projects Completed Successfully",
      text: "A look at the process that helps us deliver on time, on budget and on brief.",
      meta: "7 min read",
      slug: "completed-projects",
      image: "/images/robot-ring.png",
    },
  ],
};

/* ===================== BLOG: ARTICLE PAGES ===================== */
export const blogPage = {
  title: "BLOG",
  crumbs: [{ label: "Home", href: "/" }, { label: "Blog" }],
};

// Placeholder text. Replace it with your real article.
// Block types: { type: "p", text }  { type: "h2", text }  { type: "ul", items: [...] }  { type: "quote", text }
const articleBody = [
  {
    type: "p",
    text: "In a digital-first world, your website is often the first point of contact between your business and a potential client. People decide within seconds if they trust you, and good design is a big part of that decision.",
  },
  {
    type: "p",
    text: "In this article, we look at how clear design, honest communication and steady delivery help businesses grow, and what we have learned from working with clients all over the world.",
  },
  { type: "h2", text: "Why design matters" },
  {
    type: "p",
    text: "Design is not decoration. It guides visitors, explains your offer in a few seconds and makes every next step feel easy. When a website is simple to understand, people stay longer and come back.",
  },
  {
    type: "ul",
    items: [
      "Clear structure that is easy to scan",
      "Fast pages that work on every device",
      "A consistent look that builds trust",
      "Calls to action that guide the visitor",
    ],
  },
  {
    type: "quote",
    text: "Good design makes a business look reliable before anyone reads a single word.",
  },
  { type: "h2", text: "What we do differently" },
  {
    type: "p",
    text: "We start with your goals, not with colors. We research your audience, plan the experience, design it with you and stay with the project until it is live and working.",
  },
  {
    type: "p",
    text: "If you would like to talk about your own project, get in touch with the Fixign team. We are happy to help.",
  },
];

// one entry per article. The key is the card's slug.  title / author are optional (they default to the card title and articles.author)
// cover = the big image on top (860 x 368). Put it in /public/images
export const articlePages = {
  "happy-clients": {
    date: "Nov 07, 2026",
    cover: "/images/article-1.png",
    body: articleBody,
  },
  "returning-clients": {
    date: "Nov 03, 2026",
    cover: "/images/article-2.png",
    body: articleBody,
  },
  "years-of-experience": {
    date: "Oct 28, 2026",
    cover: "/images/article-3.png",
    body: articleBody,
  },
  "completed-projects": {
    date: "Oct 21, 2026",
    cover: "/images/article-4.png",
    body: articleBody,
  },
};

/* Services page: the sections below the cards were placed for this many cards */
export const SC_BASE_COUNT = 6;
export const SC_PITCH = 720; // height of one card + its gap
