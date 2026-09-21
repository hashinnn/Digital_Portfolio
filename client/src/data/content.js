// ---------------------------------------------------------------------------
// Every piece of copy and every image path on the site lives here.
// Edit this file, not the JSX.
// ---------------------------------------------------------------------------

// Vite's base path — '/' for this user site, or '/<repo-name>/' if the site is
// ever served from a project subpath instead. Every asset URL goes through it,
// so the same source builds correctly either way.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const asset = (path) => BASE + path;

export const GITHUB = 'https://github.com/hashinnn';

export const profile = {
  name: 'Ginjala Hasini',
  photo: asset('/assets/hasini.webp'),
  // The typewriter cycles through these after "I build".
  roles: ['full-stack apps.', 'cloud backends.', 'dashboards people act on.', 'things that ship.'],
  tagline:
    'Full-stack builder and data storyteller — two hackathon podiums, an Outstanding Project Presentation, and a system now in the refinement stage with an industry client.',
  education: {
    school: 'Nanyang Polytechnic',
    course: 'Diploma in Applied AI & Analytics',
    courseHref:
      'https://www.nyp.edu.sg/student/study/schools/information-technology/diploma-applied-AI-analytics',
  },
  email: 'hasinirg7@gmail.com',
  whatsapp: '6587646580',
  whatsappDisplay: '+65 8764 6580',
  linkedin: 'https://www.linkedin.com/in/ginjalahasini/',
  github: GITHUB,
  cv: asset('/assets/docs/ginjala-hasini-cv.pdf'),
};

// ---------------------------------------------------------------------------
// Stats strip — recognition, never grades.
// ---------------------------------------------------------------------------

export const stats = {
  heading: 'Across every project I have shipped',
  items: [
    { verb: 'Shipped', value: 6, lines: ['projects', 'five recognised'] },
    { verb: 'Placed in', value: 2, lines: ['hackathons', '2nd and 3rd'] },
    { verb: 'Won', value: 1, lines: ['Outstanding Project', 'Presentation'] },
    { verb: 'Earned', value: 18, lines: ['certifications', '& awards'] },
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
    { src: asset('/assets/about/aws-hackathon.webp'), caption: '2nd place\nAWS x NYP', tilt: -6 },
    { src: asset('/assets/about/genlink-presentation.webp'), caption: 'Outstanding\nProject Presentation', tilt: 8 },
    { src: asset('/assets/about/suss-2026.webp'), caption: 'Bronze\nSUSS 2026', tilt: -3 },
    { src: asset('/assets/about/aws-hackathon-2.webp'), caption: 'The team behind\nDeadlineIQ', tilt: 5 },
  ],
  // **double asterisks** mark the terms a skim-reader should catch.
  paragraphs: [
    'I work **across the stack** and I am most at home in the unglamorous middle of it — designing the schema, writing the queries, wiring the API, and then finding out what breaks. That has meant **relational modelling in MySQL and Postgres**, **REST services on Node and Flask**, **real-time state over Socket.IO**, and an **event-driven pipeline on AWS Lambda, DynamoDB and EventBridge** where the interesting problem was **idempotency** rather than the UI. On the data side I work in **Tableau, Power BI and DAX**, and I care more about whether a chart changes a decision than whether it looks impressive.',
    'The other half of what I do is getting people into a room. Through **NYP Cloud Computing** and **NYP Ladies in Tech** I have **organised hackathons and hands-on workshops** — scoping the problem statements, lining up the tooling, and making sure a beginner can actually finish something by the end of the session. Through **NYAA** I have run community programmes too: a session teaching **seniors how to recognise scam calls and phishing attempts**, and an activity getting students to engage with **sustainability** in a way that was not another lecture.',
    'Those two halves turn out to be the same skill. Explaining a scam call to someone who has never heard of phishing is the same work as an error message that tells a user what to do next. I am looking for **software and data engineering roles** where I can **own a feature from the schema to the screen**, and stay long enough to find out whether it held up.',
  ],
  extracurriculars: [
    {
      label: 'Extracurriculars',
      note: 'Tech interest groups',
      items: [
        'NYP Ladies in Tech — Sub-Committee Member',
        'NYP Cloud Computing — Sub-Committee Member',
      ],
    },
    {
      label: 'Volunteering',
      note: 'National Youth Achievement Award (NYAA)',
      items: [
        'Community Leadership Initiatives (CLI) — Sub-Committee Member',
        'Bronze Award — for community service contributions',
        'Gold Award (in progress) — 80+ service hours completed',
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Why Me — the recognition record.
// ---------------------------------------------------------------------------

export const whyMe = {
  heading: 'Why Me',
  lead: 'Five of the six projects on this site were recognised — by competition judges, by lecturers, or by the client I am still working with. None of them stopped at the submission deadline.',
  items: [
    {
      project: 'Genlink',
      award: 'Outstanding Project Presentation — NYP Web Development Project',
      detail:
        'A Flask and MySQL platform that matches users across three age bands, auto-translates every post across 132 locales, and keeps chat and a shared chess board in sync over Socket.IO.',
    },
    {
      project: 'EstateOps',
      award: 'Selected for client presentation',
      detail:
        'Built with EM Services for Sembawang Town Council. Chosen from the cohort to present to the client, and now in the refinement stage with them.',
    },
    {
      project: 'DeadlineIQ',
      award: '2nd place — AWS × NYP Cloud Hackathon 2026',
      detail:
        'Second in problem statement PS-3. A five-factor priority engine on AWS, where the AI writes the explanation but never picks the order.',
    },
    {
      project: 'Social Gifting Sales Insights',
      award: '3rd place — SUSS Analytics & Visualisation 2026',
      detail:
        'Bronze, one year after walking away from the same competition with nothing. 10,869 orders analysed in Tableau in a two-hour build.',
    },
    {
      project: 'NYP Students’ Union',
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
        { icon: 'skill-icons:python-dark', label: 'Python' },
        { icon: 'skill-icons:javascript', label: 'JavaScript' },
        { icon: 'skill-icons:html', label: 'HTML' },
        { icon: 'skill-icons:css', label: 'CSS' },
        { icon: 'logos:mysql-icon', label: 'SQL' },
      ],
    },
    {
      name: 'Web & App Development',
      items: [
        { icon: 'logos:react', label: 'React' },
        { icon: 'logos:vitejs', label: 'Vite' },
        { icon: 'skill-icons:nodejs-dark', label: 'Node.js' },
        { icon: 'skill-icons:expressjs-light', label: 'Express' },
        { icon: 'skill-icons:flask-dark', label: 'Flask' },
        { icon: 'skill-icons:bootstrap', label: 'Bootstrap' },
        { icon: 'logos:socket-io', label: 'Socket.IO' },
        { icon: 'logos:chartjs', label: 'Chart.js' },
      ],
    },
    {
      name: 'Cloud & Data',
      items: [
        { icon: 'logos:aws-lambda', label: 'Lambda' },
        { icon: 'logos:aws-dynamodb', label: 'DynamoDB' },
        { icon: 'logos:aws-eventbridge', label: 'EventBridge' },
        { icon: 'logos:aws', label: 'Textract' },
        { icon: 'logos:aws-api-gateway', label: 'API Gateway' },
        { icon: 'logos:aws-cloudformation', label: 'SAM' },
        { icon: 'logos:supabase-icon', label: 'Supabase' },
        { icon: 'logos:postgresql', label: 'PostgreSQL' },
        { icon: 'logos:snowflake-icon', label: 'Snowflake' },
      ],
    },
    {
      name: 'Analytics & AI',
      items: [
        { icon: 'logos:tableau-icon', label: 'Tableau' },
        { icon: 'logos:microsoft-power-bi', label: 'Power BI' },
        { icon: 'logos:pandas-icon', label: 'Pandas' },
        { icon: 'simple-icons:roboflow', label: 'Roboflow' },
        { icon: 'simple-icons:openai', label: 'OpenAI' },
        { icon: 'logos:git-icon', label: 'Git' },
        { icon: 'skill-icons:github-dark', label: 'GitHub' },
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
    { cat: 'Technical', title: 'SnowPro Associate — Snowflake', img: asset('/assets/certs/snowpro-associate.webp'), href: asset('/assets/certs/snowpro-associate.pdf') },
    { cat: 'Technical', title: 'PCEP — Certified Entry-Level Python Programmer', img: asset('/assets/certs/pcep-python.webp'), href: asset('/assets/certs/pcep-python.pdf') },
    { cat: 'Technical', title: 'Web Development Fundamentals — IBM', img: asset('/assets/certs/ibm-web-dev.webp'), href: asset('/assets/certs/ibm-web-dev.pdf') },
    { cat: 'Technical', title: 'UX Design Fundamentals — IBM', img: asset('/assets/certs/ibm-ux-design.webp'), href: asset('/assets/certs/ibm-ux-design.pdf') },
    { cat: 'Technical', title: 'AI Fluency — Anthropic', img: asset('/assets/certs/anthropic-ai-fluency.webp'), href: asset('/assets/certs/anthropic-ai-fluency.pdf') },
    { cat: 'Technical', title: 'AI for Industry — AI Singapore', img: asset('/assets/certs/ai4i-literacy-in-ai.webp'), href: asset('/assets/certs/ai4i-literacy-in-ai.pdf') },
    { cat: 'Technical', title: 'Web Development Bootcamp — Ipasmo', img: asset('/assets/certs/ipasmo-web-dev-bootcamp.webp'), href: asset('/assets/certs/ipasmo-web-dev-bootcamp.pdf') },
    { cat: 'Technical', title: 'Analytics & Visualisation Challenge 2025 — SUSS', img: asset('/assets/certs/suss-avc-2025.webp'), href: asset('/assets/certs/suss-avc-2025.pdf') },
    { cat: 'Technical', title: 'METEOR Programme — Crater', img: asset('/assets/certs/crater-meteor.webp'), href: asset('/assets/docs/crater-meteor-certificate.png') },
    { cat: 'Academic', title: 'Edusave Merit Award 2024', img: asset('/assets/certs/edusave-edusavemerit2024.webp'), href: asset('/assets/certs/edusave-edusavemerit2024.webp') },
    { cat: 'Academic', title: 'Academic Achievement 2024', img: asset('/assets/certs/edusave-edusaveachievement2024.webp'), href: asset('/assets/certs/edusave-edusaveachievement2024.webp') },
    { cat: 'Academic', title: 'Academic Achievement 2023', img: asset('/assets/certs/edusave-edusaveachievement2023.webp'), href: asset('/assets/certs/edusave-edusaveachievement2023.webp') },
    { cat: 'Academic', title: 'Good Progress Award 2023', img: asset('/assets/certs/edusave-edusaveprogress2023.webp'), href: asset('/assets/certs/edusave-edusaveprogress2023.webp') },
    { cat: 'Academic', title: 'SINDA Sustained Improvement — Science 2023', img: asset('/assets/certs/edusave-sinda2023.webp'), href: asset('/assets/certs/edusave-sinda2023.webp') },
    { cat: 'Academic', title: 'Edusave Scholarship 2021', img: asset('/assets/certs/edusave-edusavescholarship2021.webp'), href: asset('/assets/certs/edusave-edusavescholarship2021.webp') },
    { cat: 'Academic', title: 'Academic Achievement 2020', img: asset('/assets/certs/edusave-edusaveachievement2020.webp'), href: asset('/assets/certs/edusave-edusaveachievement2020.webp') },
    { cat: 'Academic', title: 'Good Progress Award 2020', img: asset('/assets/certs/edusave-edusaveprogress2020.webp'), href: asset('/assets/certs/edusave-edusaveprogress2020.webp') },
    { cat: 'Academic', title: 'International Research Programme — Chengdu', img: asset('/assets/certs/edusave-internationalresearch.webp'), href: asset('/assets/certs/edusave-internationalresearch.webp') },
  ],
};

// ---------------------------------------------------------------------------
// Hackathons — a storyboard. Each panel has its own picture.
// ---------------------------------------------------------------------------

export const journey = {
  heading: 'Hackathons',
  lead: 'Two podiums in a year. Both of them started with a competition I lost, and what I did about it afterwards.',
  panels: [
    {
      chapter: '01',
      year: '2025',
      title: 'SUSS Analytics & Visualisation Challenge',
      verdict: 'No placing',
      image: asset('/assets/projects/suss2025-original.webp'),
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
      image: asset('/assets/projects/suss2025-improved.webp'),
      caption: 'What I rebuilt — one finding, every chart supporting it',
      href: 'https://public.tableau.com/views/SUSS_Competition_2025_Imporved/KindraSalesOverview?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      linkLabel: 'Open the rebuilt dashboard',
      body:
        'I kept the dataset and kept going. I rebuilt the whole thing around a single finding — 87% of Kindra’s sales come from one café and one category — and made every chart on the page support that one sentence. Nobody graded this version. It is the one that taught me the most.',
    },
    {
      chapter: '03',
      year: '2026',
      title: 'SUSS Analytics & Visualisation Challenge',
      verdict: '3rd place — Bronze',
      image: asset('/assets/projects/suss2026-dashboard.webp'),
      caption: '10,869 orders, two hours, one team',
      href: 'https://public.tableau.com/views/SUSS_Competition_2026_Pistachio/SocialGiftingCrafterIncomeDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      linkLabel: 'Open the dashboard',
      body:
        'Back to the same competition. Two hours, a team, 10,869 orders from Social Gifting, and a dashboard that opened with the answer instead of the exploration. Third place.',
    },
    {
      chapter: '04',
      year: '2026',
      title: 'AWS × NYP Cloud Hackathon',
      verdict: '2nd place — PS-3',
      image: asset('/assets/projects/deadlineiq.webp'),
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

export const projects = [  {
    id: 'estateops',
    title: 'EstateOps',
    award: 'Selected for client presentation — now in refinement with the client',
    image: asset('/assets/projects/estateops.webp'),
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
    award: 'Outstanding Project Presentation — NYP Web Development Project',
    image: asset('/assets/projects/genlink.webp'),
    description:
      'A Flask and MySQL platform pairing users across three age bands by shared interests. Audio posts are uploaded server-side and passed through the Google Neural Machine Translation API so every post renders in the reader’s own language across 132 locales. Socket.IO carries the direct messaging and a move-by-move synced chess board, with Google OAuth 2.0 for sign-in and an admin approval queue gating community events.',
    tags: ['Flask', 'MySQL', 'Socket.IO', 'Google NMT'],
    links: [
      { kind: 'github', href: 'https://github.com/hashinnn/WDP_PROJECT_FINAL' },
      { kind: 'link', href: 'https://genlink-283z.onrender.com/' },
      { kind: 'linkedin', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7432992530306088961/' },
    ],
  },
  {
    id: 'deadlineiq',
    title: 'DeadlineIQ',
    award: '2nd place — AWS × NYP Cloud Hackathon 2026',
    image: asset('/assets/projects/deadlineiq.webp'),
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
    id: 'hospital-flow',
    title: 'Hospital Patient Flow Dashboard',
    award: 'Built on real government healthcare data',
    image: asset('/assets/projects/hospital-flow.webp'),
    description:
      'A four-page Power BI report on patient flow and efficiency across public hospitals — admissions by age and hour, bed capacity growth, and where the waiting actually happens. 63% of admissions come from patients over 65, and average waits run 5.4 hours at general hospitals against 1.8 hours at emergency departments.',
    tags: ['Power BI', 'DAX', 'Data Modelling'],
    links: [],
    noLinkNote: 'Power BI build — no public repo',
  },
  {
    id: 'suss2026',
    title: 'Social Gifting Sales Insights',
    award: '3rd place — SUSS Analytics & Visualisation 2026',
    image: asset('/assets/projects/suss2026.webp'),
    description:
      'A two-hour team build in Tableau answering how Social Gifting, a Singapore social enterprise, can grow income for its crafters. 10,869 orders and $1.01M of sales reduced to the handful of patterns a crafter could act on that week.',
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
    title: 'NYP Students’ Union',
    award: 'A grade — commended for visual design',
    image: asset('/assets/projects/nypsu.webp'),
    description:
      'A front-end CCA site that refuses to look like a school microsite — graffiti typography, full-bleed mural photography and a live Instagram feed. Static multi-page build with no frameworks or libraries.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    links: [{ kind: 'github', href: 'https://github.com/hashinnn/nypsu_site_concept' }],
  },
];

// ---------------------------------------------------------------------------

export const experience = {
  // The METEOR programme is training rather than employment, so the section
  // is named to cover both without overstating either.
  heading: 'Experience & Training',
  items: [
    {
      period: 'May – Jun 2022',
      role: 'UX / Product Design Intern',
      kind: 'Internship',
      org: 'Hatch',
      orgNote: 'Youth digital skills social enterprise',
      bullets: [
        'Produced 5 wireframes and 3 mood boards in Figma proposing a revised navigation structure for a platform serving 200+ underserved youth, and prototyped a live chat feature; elements of the proposal carried into the Q3 2022 site redesign.',
        'Applied accessibility requirements to each design — type sizing, contrast and touch target dimensions — for an audience using low-end devices on unreliable connections.',
        'Presented proposals to staff stakeholders and revised them against their feedback.',
      ],
      docs: [
        { label: 'Internship certificate', href: asset('/assets/docs/hatch-certificate.pdf') },
        { label: 'Reference letter — Hatch', href: asset('/assets/docs/hatch-reference-letter.pdf') },
      ],
    },
    {
      period: 'Apr – May 2022',
      role: 'METEOR Programme',
      kind: 'Programme',
      org: 'Crater',
      orgNote: 'Youth development programme, supported by the National Youth Council',
      bullets: [
        'Completed Crater’s METEOR Programme covering project management, professional communications, networking and content creation, through industry-led workshops and real-world scenario training.',
        'Took the initiative to lead group members and facilitate discussions on several occasions, and volunteered to teach peers the workshop content where I already knew it.',
        'Secured the month-long work attachment with Hatch through the programme.',
      ],
      docs: [
        { label: 'METEOR certificate', href: asset('/assets/docs/crater-meteor-certificate.png') },
        { label: 'Reference letter — Crater', href: asset('/assets/docs/crater-reference-letter.pdf') },
      ],
    },
  ],
};

export const contact = {
  heading: 'Connect with me',
  lead: 'Whether you want to collaborate, hire, or just say hi — I would love to hear from you. Reach out on any platform below, or send a message straight to my WhatsApp.',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'why-me', label: 'Why Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'certs', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
