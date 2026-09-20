// ---------------------------------------------------------------------------
// Every piece of copy and every image path on the site lives here.
// Edit this file, not the JSX.
// ---------------------------------------------------------------------------

export const GITHUB = 'https://github.com/hashinnn';

export const profile = {
  name: 'Ginjala Hasini',
  initials: 'GH',
  photo: '/assets/hasini.png',
  // The typewriter cycles through these after "I build".
  roles: ['full-stack apps.', 'cloud backends.', 'dashboards that decide.', 'things that ship.'],
  role: 'Software Developer | AI & Analytics Student',
  tagline:
    'Full-stack builder and data storyteller. Every project I have shipped was recognised for something — and one is still being refined with the client who commissioned it.',
  email: 'hasinirg7@gmail.com',
  phone: '8764 6580',
  linkedin: 'https://www.linkedin.com/in/ginjala-h-31223b383',
  github: GITHUB,
  cv: '/assets/docs/hatch-certificate.pdf',
};

// ---------------------------------------------------------------------------
// Stats strip — recognition, never grades.
// ---------------------------------------------------------------------------

export const stats = {
  heading: 'Across every project I have shipped',
  items: [
    { verb: 'Built', value: 6, lines: ['projects', 'all recognised'] },
    { verb: 'Placed in', value: 2, lines: ['hackathons', '2nd and 3rd'] },
    { verb: 'Won', value: 1, lines: ['Outstanding Project', 'Presentation'] },
    { verb: 'Earned', value: 12, suffix: '+', lines: ['certifications', 'and counting'] },
  ],
};

// ---------------------------------------------------------------------------
// About — polaroid collage, then alternating text / image blocks.
//
// To swap a polaroid: drop your photo into client/public/assets/about/ and
// point `src` at it. Portrait-ish crops work best. `tilt` is in degrees.
// ---------------------------------------------------------------------------

export const about = {
  heading: 'About Me',
  polaroids: [
    { src: '/assets/about/portrait.png', caption: 'NYP ♡', tilt: -6 },
    { src: '/assets/about/aws-hackathon.png', caption: '2nd place\nAWS Hackathon', tilt: 8 },
    { src: '/assets/about/suss-2026.jpeg', caption: 'Bronze\nSUSS 2026', tilt: -3 },
    { src: '/assets/about/outstanding-presentation.png', caption: 'Outstanding\nProject Presentation', tilt: 5 },
  ],
  intro:
    'Year 2 Applied AI & Analytics student at Nanyang Polytechnic, and the kind who keeps working on a project after it has been marked. I build full-stack — React and Node on one side, Flask and MySQL on the other, AWS serverless when it earns its place — and what I care about is the distance between a working demo and something a person can actually rely on. I taught myself Tableau after losing a competition with it, went back the next year and placed; lose, rebuild, return is most of how I have learnt anything worth knowing. I am looking for software and data engineering roles where I can own a feature from the schema to the screen.',
  introImages: [
    { src: '/assets/about/estateops.png', alt: 'EstateOps defect management dashboard' },
    { src: '/assets/about/genlink.png', alt: 'Genlink intergenerational platform' },
  ],
  extracurriculars: [
    'NYP Ladies in Tech — Sub-Committee Member',
    'NYP Cloud Computing — Sub-Committee Member',
    'NYAA Bronze Award — Awarded for community service contributions',
    'NYAA Gold Award (in progress) — 80+ service hours completed',
  ],
  traits: [
    'Ships Past The Grade',
    'Self-Taught Fast',
    'Client-Facing',
    'Actually Finishes Things',
  ],
};

// ---------------------------------------------------------------------------
// Why Me — the recognition record.
// ---------------------------------------------------------------------------

export const whyMe = {
  heading: 'Why Me',
  lead: 'Every project I have built has been recognised for something. Not one of them stopped at a passing grade.',
  items: [
    {
      project: 'Genlink',
      award: 'Outstanding Project Presentation',
      detail:
        'An intergenerational platform where a senior records a story in Mandarin and a teenager reads it in English, auto-translated across 132 languages.',
    },
    {
      project: 'EstateOps',
      award: 'Selected for client presentation',
      detail:
        'Built with EM Services for Sembawang Town Council. Chosen from the cohort to present to the client, and now in talks about refining it further.',
    },
    {
      project: 'DeadlineIQ',
      award: '2nd place — AWS × NYP Cloud Hackathon 2026',
      detail:
        'Second in problem statement PS-3. A five-factor priority engine on AWS, where the AI writes the explanation but never picks the order.',
    },
    {
      project: 'Social Gifting Insights',
      award: '3rd place — SUSS Analytics & Visualisation 2026',
      detail:
        'Bronze, one year after walking away from the same competition with nothing. 10,869 orders analysed in Tableau in a single day.',
    },
    {
      project: "NYP Students' Union",
      award: 'A grade — commended for visual design',
      detail:
        'A CCA site that leans all the way into street-art styling instead of playing it safe: graffiti typography, bold colour, a live Instagram feed.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Skills — icons bounce around inside each basket. `icon` values are Iconify
// names; see https://icon-sets.iconify.design to find more.
// ---------------------------------------------------------------------------

export const skills = {
  heading: 'Skills & Technologies',
  baskets: [
    {
      name: 'Languages',
      items: [
        { icon: 'simple-icons:python', label: 'Python' },
        { icon: 'simple-icons:javascript', label: 'JavaScript' },
        { icon: 'simple-icons:html5', label: 'HTML' },
        { icon: 'simple-icons:css3', label: 'CSS' },
        { icon: 'simple-icons:mysql', label: 'SQL' },
      ],
    },
    {
      name: 'Web & App Development',
      items: [
        { icon: 'simple-icons:react', label: 'React' },
        { icon: 'simple-icons:vite', label: 'Vite' },
        { icon: 'simple-icons:nodedotjs', label: 'Node.js' },
        { icon: 'simple-icons:express', label: 'Express' },
        { icon: 'simple-icons:flask', label: 'Flask' },
        { icon: 'simple-icons:bootstrap', label: 'Bootstrap' },
        { icon: 'simple-icons:socketdotio', label: 'Socket.IO' },
      ],
    },
    {
      name: 'Cloud & Data',
      items: [
        { icon: 'simple-icons:awslambda', label: 'Lambda' },
        { icon: 'simple-icons:amazondynamodb', label: 'DynamoDB' },
        { icon: 'simple-icons:amazonwebservices', label: 'EventBridge' },
        { icon: 'simple-icons:amazonwebservices', label: 'Textract' },
        { icon: 'simple-icons:supabase', label: 'Supabase' },
        { icon: 'simple-icons:postgresql', label: 'PostgreSQL' },
        { icon: 'simple-icons:snowflake', label: 'Snowflake' },
      ],
    },
    {
      name: 'Analytics & AI',
      items: [
        { icon: 'simple-icons:tableau', label: 'Tableau' },
        { icon: 'simple-icons:powerbi', label: 'Power BI' },
        { icon: 'simple-icons:pandas', label: 'Pandas' },
        { icon: 'simple-icons:roboflow', label: 'Roboflow' },
        { icon: 'simple-icons:openai', label: 'OpenAI' },
        { icon: 'simple-icons:git', label: 'Git' },
        { icon: 'simple-icons:github', label: 'GitHub' },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Certifications — fanned deck. Images only (PDFs get a poster image where
// one exists, otherwise the deck shows a generated cover).
// ---------------------------------------------------------------------------

export const certifications = {
  heading: 'Certifications',
  filters: ['All', 'Technical', 'Academic'],
  items: [
    { cat: 'Technical', title: 'SnowPro Associate — Snowflake', img: '/assets/certs/snowpro-associate.png', href: '/assets/certs/snowpro-associate.pdf' },
    { cat: 'Technical', title: 'PCEP — Certified Entry-Level Python Programmer', img: '/assets/certs/pcep-python.png', href: '/assets/certs/pcep-python.pdf' },
    { cat: 'Technical', title: 'Web Development Fundamentals — IBM', img: '/assets/certs/ibm-web-dev.png', href: '/assets/certs/ibm-web-dev.pdf' },
    { cat: 'Technical', title: 'UX Design Fundamentals — IBM', img: '/assets/certs/ibm-ux-design.png', href: '/assets/certs/ibm-ux-design.pdf' },
    { cat: 'Technical', title: 'AI Fluency — Anthropic', href: '/assets/certs/anthropic-ai-fluency.pdf' },
    { cat: 'Technical', title: 'Literacy in AI — AI Singapore', href: '/assets/certs/ai4i-literacy-in-ai.pdf' },
    { cat: 'Technical', title: 'Web Development Bootcamp — Ipasmo', href: '/assets/certs/ipasmo-web-dev-bootcamp.pdf' },
    { cat: 'Technical', title: 'Analytics & Visualisation Challenge 2025 — SUSS', href: '/assets/certs/suss-avc-2025.pdf' },
    { cat: 'Academic', title: 'Edusave Merit Award 2024', img: '/assets/certs/edusave-edusavemerit2024.jpeg', href: '/assets/certs/edusave-edusavemerit2024.jpeg' },
    { cat: 'Academic', title: 'Academic Achievement 2024', img: '/assets/certs/edusave-edusaveachievement2024.jpeg', href: '/assets/certs/edusave-edusaveachievement2024.jpeg' },
    { cat: 'Academic', title: 'Academic Achievement 2023', img: '/assets/certs/edusave-edusaveachievement2023.jpeg', href: '/assets/certs/edusave-edusaveachievement2023.jpeg' },
    { cat: 'Academic', title: 'Good Progress Award 2023', img: '/assets/certs/edusave-edusaveprogress2023.jpeg', href: '/assets/certs/edusave-edusaveprogress2023.jpeg' },
    { cat: 'Academic', title: 'SINDA Sustained Improvement — Science 2023', img: '/assets/certs/edusave-sinda2023.jpeg', href: '/assets/certs/edusave-sinda2023.jpeg' },
    { cat: 'Academic', title: 'Edusave Scholarship 2021', img: '/assets/certs/edusave-edusavescholarship2021.jpeg', href: '/assets/certs/edusave-edusavescholarship2021.jpeg' },
    { cat: 'Academic', title: 'Academic Achievement 2020', img: '/assets/certs/edusave-edusaveachievement2020.jpeg', href: '/assets/certs/edusave-edusaveachievement2020.jpeg' },
    { cat: 'Academic', title: 'Good Progress Award 2020', img: '/assets/certs/edusave-edusaveprogress2020.jpeg', href: '/assets/certs/edusave-edusaveprogress2020.jpeg' },
    { cat: 'Academic', title: 'International Research Programme — Chengdu', img: '/assets/certs/edusave-internationalresearch.jpeg', href: '/assets/certs/edusave-internationalresearch.jpeg' },
  ],
};

// ---------------------------------------------------------------------------
// Hackathons — a storyboard. Each panel has its own picture.
// ---------------------------------------------------------------------------

export const journey = {
  heading: 'Hackathons',
  lead: 'A record of what I did after losing, which turned out to matter more than the losing.',
  panels: [
    {
      chapter: '01',
      year: '2025',
      title: 'SUSS Analytics & Visualisation Challenge',
      verdict: 'No placing',
      image: '/assets/projects/suss2025-original.jpeg',
      caption: 'What I submitted — four separate views of one question',
      href: 'https://public.tableau.com/views/SUSS_Competition_2025_Original/KindraSustainableRevenueDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      linkLabel: 'Open the original dashboard',
      body:
        'My first real dashboarding competition. I had barely touched Tableau and it showed. I answered the brief with four correct, unconnected charts and left the judges to assemble the story themselves. I went home with nothing.',
    },
    {
      chapter: '02',
      year: 'After',
      title: 'Went home and learnt Tableau properly',
      verdict: 'The rebuild',
      image: '/assets/projects/suss2025-improved.jpeg',
      caption: 'What I rebuilt — one finding, every chart supporting it',
      href: 'https://public.tableau.com/views/SUSS_Competition_2025_Imporved/KindraSalesOverview?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      linkLabel: 'Open the rebuilt dashboard',
      body:
        'I kept the dataset and kept going. I rebuilt the whole thing around a single finding — 87% of Kindra\'s sales come from one café and one category — and made every chart on the page support that one sentence. Nobody graded this version. It is the one that taught me the most.',
    },
    {
      chapter: '03',
      year: '2026',
      title: 'SUSS Analytics & Visualisation Challenge',
      verdict: '3rd place — Bronze',
      image: '/assets/projects/suss2026-dashboard.jpeg',
      caption: '10,869 orders, one day, one team',
      href: 'https://public.tableau.com/views/SUSS_Competition_2026_Pistachio/SocialGiftingCrafterIncomeDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      linkLabel: 'Open the dashboard',
      body:
        'Back to the same competition with a year of practice behind me. One day, a team, 10,869 orders of social-gifting data, and a dashboard that opened with the answer instead of the exploration. Third place.',
    },
    {
      chapter: '04',
      year: '2026',
      title: 'AWS × NYP Cloud Hackathon',
      verdict: '2nd place — PS-3',
      image: '/assets/projects/deadlineiq.png',
      caption: 'DeadlineIQ — fully deployed on AWS',
      href: 'https://d3c6ivdcez723d.cloudfront.net/login',
      linkLabel: 'Open the live app',
      body:
        'A different discipline entirely: cloud architecture rather than visual analytics. We took problem statement 3 and shipped DeadlineIQ — a deadline prioritiser running on Lambda, DynamoDB, EventBridge, Bedrock, Textract and SES. Second in our problem statement.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Projects — cards only, no expand. Links render as icon buttons.
// `kind` picks the icon: github | link | youtube.
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: 'deadlineiq',
    title: 'DeadlineIQ',
    award: '2nd place — AWS × NYP Cloud Hackathon 2026',
    image: '/assets/projects/deadlineiq.png',
    description:
      'A serverless deadline tracker that ranks every assignment you are carrying using arithmetic you can audit — urgency, stakes, effort, progress and clash. The AI writes the sentence explaining the ranking; it never picks the order.',
    tags: ['AWS Serverless', 'Bedrock', 'Textract', 'React'],
    links: [
      { kind: 'github', href: 'https://github.com/hashinnn/AWS_NYP_Cloud_Hackathon_2026' },
      { kind: 'link', href: 'https://d3c6ivdcez723d.cloudfront.net/login' },
      { kind: 'linkedin', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7496768524195942400/' },
    ],
  },
  {
    id: 'estateops',
    title: 'EstateOps',
    award: 'Selected for client presentation — in talks with the client',
    image: '/assets/projects/estateops.png',
    description:
      'A full-stack estate defect and lift inspection platform built with EM Services for Sembawang Town Council. Roboflow computer vision classifies defects straight from a photo, Socket.IO keeps office and ground staff on the same board, and the analytics view tracks response time against last month.',
    tags: ['React', 'Node/Express', 'Supabase', 'Computer Vision'],
    links: [
      { kind: 'github', href: 'https://github.com/hashinnn/FSAD_PROJECT' },
      { kind: 'link', href: 'https://fsad-project-pied.vercel.app/login' },
    ],
  },
  {
    id: 'genlink',
    title: 'Genlink',
    award: 'Outstanding Project Presentation',
    image: '/assets/projects/genlink.png',
    description:
      'Mdm Tan, 68, records a recipe in Mandarin. Jun Wei, 17, reads it in English. One post later they are playing chess every Sunday. Voice stories, translation across 132 languages, community events and a live-synced chess board.',
    tags: ['Flask', 'MySQL', 'Socket.IO', 'Google NMT'],
    links: [
      { kind: 'github', href: 'https://github.com/hashinnn/WDP_PROJECT_FINAL' },
      { kind: 'link', href: 'https://genlink-283z.onrender.com/' },
      { kind: 'linkedin', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7432992530306088961/' },
    ],
  },
  {
    id: 'hospital-flow',
    title: 'Hospital Patient Flow Dashboard',
    award: 'Built on real government healthcare data',
    image: '/assets/projects/hospital-flow.jpeg',
    description:
      'A four-page Power BI report on patient flow and efficiency across public hospitals — admissions by age and hour, bed capacity growth, and where the emergency department actually jams. 65% of admissions come from patients over 65, and average wait times run 5.4 hours at general hospitals against 1.8 at ED.',
    tags: ['Power BI', 'DAX', 'Data Modelling'],
    links: [],
    noLinkNote: 'Power BI build — no public repo',
  },
  {
    id: 'suss2026',
    title: 'Social Gifting Sales Insights',
    award: '3rd place — SUSS Analytics & Visualisation 2026',
    image: '/assets/projects/suss2026.png',
    description:
      'A one-day team build in Tableau answering how a social gifting platform can grow income for its crafters. 10,869 orders and $1.01M of sales reduced to the handful of patterns a crafter could act on that week.',
    tags: ['Tableau', 'EDA', 'Data Storytelling'],
    links: [
      {
        kind: 'tableau',
        href: 'https://public.tableau.com/views/SUSS_Competition_2026_Pistachio/SocialGiftingCrafterIncomeDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      },
    ],
  },
  {
    id: 'nypsu',
    title: "NYP Students' Union",
    award: 'A grade — commended for visual design',
    image: '/assets/projects/nypsu.png',
    description:
      'A front-end CCA site that refuses to look like a school microsite — graffiti typography, full-bleed mural photography and a live Instagram feed. Static multi-page build with no frameworks or libraries.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    links: [{ kind: 'github', href: 'https://github.com/hashinnn/nypsu_site_concept' }],
  },
];

// ---------------------------------------------------------------------------

export const experience = [
  {
    period: 'June 2022',
    role: 'UX / Product Design Intern',
    org: 'Hatch',
    orgNote: 'Youth digital skills organisation',
    bullets: [
      'Joined a small product team and shipped design work into a live platform used by 200+ underserved youth — 5 wireframes and 3 mood boards proposing a clearer navigation structure, several of which carried into the Q3 2022 redesign.',
      'Worked to a real accessibility brief rather than a classroom one: legible type, reachable tap targets, and flows that hold up for users on cheap phones and patchy connections.',
      'Presented my proposals to staff and defended the reasoning behind them — my first experience of designing for someone else\'s users instead of my own assumptions.',
      'Left with two written references, and with the realisation that I wanted to build the thing rather than hand off the mockup. Everything I have shipped since has been full-stack.',
    ],
    docs: [
      { label: 'Internship certificate', href: '/assets/docs/hatch-certificate.pdf' },
      { label: 'Reference letter — Hatch', href: '/assets/docs/hatch-reference-letter.pdf' },
      { label: 'Reference letter — Crater', href: '/assets/docs/crater-reference-letter.pdf' },
    ],
  },
];

export const contact = {
  heading: 'Connect with me',
  lead: 'Whether you want to collaborate, hire, or just say hi — I would love to hear from you. Reach out on any platform below, or send a message directly.',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'why-me', label: 'Why Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'certs', label: 'Certifications' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];
