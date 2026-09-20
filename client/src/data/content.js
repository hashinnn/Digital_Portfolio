// ---------------------------------------------------------------------------
// Every piece of copy on the site lives here. Edit this file, not the JSX.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Ginjala Hasini',
  initials: 'GH',
  photo: '/assets/hasini.png',
  roles: [
    'full-stack applications.',
    'cloud-native backends.',
    'dashboards people act on.',
    'things that ship.',
  ],
  tagline: 'Software Developer · AI & Analytics @ Nanyang Polytechnic',
  intro:
    'I build full-stack products end to end — React front ends, Node and Flask back ends, AWS serverless pipelines — and I keep building them after the grade is in. Every project below was recognised for something, and one is still being refined with the client who commissioned it.',
  location: 'Singapore',
  email: 'hasinirg7@gmail.com',
  phone: '8764 6580',
  linkedin: 'https://www.linkedin.com/in/ginjala-hasini/',
  github: 'https://github.com/hasinirg',
  cv: '/assets/docs/hatch-certificate.pdf',
};

// Counters in the strip under the hero.
export const impact = {
  heading: 'Across every project I have shipped',
  stats: [
    { value: 6, suffix: '', label: 'projects shipped', sub: 'every one recognised' },
    { value: 2, suffix: '', label: 'hackathon podiums', sub: '2nd place · 3rd place' },
    { value: 1, suffix: '', label: 'live client engagement', sub: 'EM Services · Sembawang TC' },
    { value: 12, suffix: '+', label: 'certifications earned', sub: 'AWS-adjacent, Python, data, UX' },
  ],
};

export const about = {
  heading: 'About Me',
  paragraphs: [
    'I am a Year 2 Applied AI & Analytics student at Nanyang Polytechnic who spends most of her time in a code editor. What I care about is the distance between a working demo and something a person can actually rely on — the error states, the empty states, the part where a real user opens it on a real phone.',
    'That is usually where my projects get interesting. Genlink started as a coursework brief and turned into a platform that translates a grandmother\'s voice note into a teenager\'s language. A defect-reporting system for a town council started as an assignment and is now being refined with the client. A deadline tracker built in a hackathon weekend runs entirely on AWS serverless because I wanted to know whether I could.',
    'I am looking for software and data engineering roles where I can keep doing exactly that: own a feature from the schema to the screen, and stay long enough to see whether it held up.',
  ],
  facts: [
    { label: 'Studying', value: 'Dip. Applied AI & Analytics, NYP' },
    { label: 'Looking for', value: 'Software / data engineering internships' },
    { label: 'Based in', value: 'Singapore' },
    { label: 'Currently', value: 'Refining EstateOps with EM Services' },
  ],
  extras: [
    'NYP Cloud Computing — Sub-Committee Member',
    'NYP Indian Cultural Group — Dancer',
    'NYAA Bronze Award · Gold in progress (80+ service hours)',
    'Art Club EXCO for 3 years — work exhibited at Sengkang National Library',
  ],
};

// "Why me" — the recognition record.
export const whyMe = {
  heading: 'Why Me',
  lead: 'Every project I have built has been recognised for something. Not one of them stopped at a passing grade.',
  items: [
    {
      project: 'Genlink',
      award: 'Outstanding Project Award',
      detail:
        'Recognised for the presentation and the idea behind it — an intergenerational platform where a senior records a story in Mandarin and a teenager reads it in English, auto-translated across 132 languages.',
      accent: 'amber',
      icon: 'star',
    },
    {
      project: 'EstateOps (FSAD)',
      award: 'Selected for client presentation',
      detail:
        'Built with EM Services for Sembawang Town Council. Chosen out of the cohort to present to the client, and now in active talks with them about refining the system further.',
      accent: 'blue',
      icon: 'handshake',
    },
    {
      project: 'DeadlineIQ',
      award: '2nd place · AWS × NYP Cloud Hackathon 2026',
      detail:
        'Second in problem statement PS-3. A five-factor priority engine for student deadlines, fully deployed on AWS — where the AI writes the explanation but never picks the order.',
      accent: 'teal',
      icon: 'trophy',
    },
    {
      project: 'Social Gifting Insights',
      award: '3rd place · SUSS Analytics & Visualisation Challenge 2026',
      detail:
        'Bronze, one year after walking away from the same competition with nothing. 10,869 orders analysed in Tableau in a single day.',
      accent: 'bronze',
      icon: 'medal',
    },
    {
      project: 'NYP Students\' Union',
      award: 'A grade · commended for visual design',
      detail:
        'A front-end CCA site that leans all the way into street-art styling instead of playing it safe — graffiti typography, bold colour, an embedded live Instagram feed.',
      accent: 'violet',
      icon: 'spray',
    },
  ],
};

// The hackathon narrative — order matters, this reads top to bottom.
export const journey = {
  heading: 'Hackathons',
  lead: 'A record of what I did after losing, which turned out to matter more than the losing.',
  steps: [
    {
      year: '2025',
      title: 'SUSS Analytics & Visualisation Challenge',
      verdict: 'No placing',
      verdictTone: 'neutral',
      body:
        'My first real dashboarding competition. I had barely touched Tableau and it showed — I answered the brief with four separate views of the same question and left the judge to assemble the story themselves. I did not win anything.',
      projectId: 'suss2025',
    },
    {
      year: '2025 — after',
      title: 'Went home and learnt Tableau properly',
      verdict: 'The rebuild',
      verdictTone: 'work',
      body:
        'I kept the dataset and kept going. I rebuilt the whole thing around a single finding — 87% of Kindra\'s sales come from one café and one category — and let every chart on the page support that one sentence. Nobody graded this version. It is the one that taught me the most.',
      projectId: 'suss2025',
      compare: true,
    },
    {
      year: '2026',
      title: 'SUSS Analytics & Visualisation Challenge',
      verdict: '3rd place · Bronze',
      verdictTone: 'bronze',
      body:
        'Back with the same competition and a year of practice behind me. One day, a team, 10,869 orders of social-gifting data, and a dashboard that opened with the answer instead of the exploration. Third place.',
      projectId: 'suss2026',
    },
    {
      year: '2026',
      title: 'AWS × NYP Cloud Hackathon',
      verdict: '2nd place · PS-3',
      verdictTone: 'silver',
      body:
        'A different discipline entirely — cloud architecture rather than visual analytics. We took problem statement 3 and shipped DeadlineIQ: a deadline prioritiser running on Lambda, DynamoDB, EventBridge, Bedrock, Textract and SES. Second in our problem statement.',
      projectId: 'deadlineiq',
    },
  ],
};

export const skills = {
  heading: 'Skills & Technologies',
  groups: [
    {
      name: 'Languages',
      items: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      name: 'Front End',
      items: ['React', 'Vite', 'Bootstrap', 'Jinja', 'Socket.IO'],
    },
    {
      name: 'Back End & Data',
      items: ['Node.js', 'Express', 'Flask', 'MySQL', 'PostgreSQL', 'Supabase', 'Snowflake'],
    },
    {
      name: 'Cloud & AWS',
      items: ['Lambda', 'DynamoDB', 'EventBridge', 'Bedrock', 'Textract', 'SES'],
    },
    {
      name: 'Analytics & AI',
      items: ['Tableau', 'Power BI', 'DAX', 'Roboflow', 'OpenAI API', 'Pandas'],
    },
    {
      name: 'Tooling & Deploy',
      items: ['Git', 'GitHub', 'Render', 'Netlify', 'Railway', 'Figma'],
    },
  ],
};

export const projects = [
  {
    id: 'deadlineiq',
    title: 'DeadlineIQ',
    subtitle: 'Five-factor priority engine for student deadlines',
    badge: '2nd place · AWS × NYP Cloud Hackathon 2026',
    badgeTone: 'silver',
    year: '2026',
    image: '/assets/projects/deadlineiq.png',
    summary:
      'Ranks every assignment a student is carrying using arithmetic they can audit — urgency, stakes, effort, progress and clash. The AI writes the sentence explaining the ranking; it never picks the order.',
    problem:
      'Students juggle overlapping deadlines and rank them by anxiety rather than by consequence. Existing trackers either list dates or hand the whole decision to a language model you cannot question.',
    approach: [
      'A deterministic five-factor scoring engine — urgency, stakes, effort, progress and clash — so any ranking can be recomputed by hand.',
      'Amazon Bedrock generates the human explanation for each position, strictly downstream of the score.',
      'Textract parses uploaded assignment briefs into structured deadline records.',
      'EventBridge schedules the weekly re-rank; SES delivers the digest; DynamoDB holds state; Lambda runs all of it.',
    ],
    outcome:
      'Fully deployed on AWS and placed 2nd in problem statement PS-3 at the AWS × NYP Cloud Hackathon 2026.',
    stack: ['AWS Lambda', 'DynamoDB', 'EventBridge', 'Bedrock', 'Textract', 'SES', 'React'],
    tags: ['Cloud', 'Serverless', 'AI'],
    links: [{ label: 'Live site', href: 'https://nypxaws.netlify.app' }],
  },
  {
    id: 'estateops',
    title: 'EstateOps',
    subtitle: 'Estate defect & lift inspection management system',
    badge: 'Selected for client presentation · in talks with client',
    badgeTone: 'blue',
    year: '2025',
    image: '/assets/projects/estateops.png',
    summary:
      'A full-stack operations platform for estate maintenance, built with EM Services for Sembawang Town Council. Defect reporting, lift inspections and estate health in one place, with computer vision doing the first pass on every photo.',
    problem:
      'Estate defects arrive as photos and phone calls, lift inspections live in spreadsheets, and nobody can see whether response times are improving. The town council needed one system where a reported crack becomes a tracked, prioritised job.',
    approach: [
      'Computer vision via Roboflow classifies defects — cracks, water leakage, floor damage — straight from an uploaded photo with a confidence score and location.',
      'A lift inspection module tracks faults, schedules and completion status across every block.',
      'An analytics dashboard surfaces defect trends, category breakdowns and average response time against the previous period.',
      'Socket.IO pushes live updates so office and ground staff see the same board; OpenAI drafts the risk summary in generated reports.',
    ],
    outcome:
      'Selected out of the cohort to present to the client, and currently in discussion with EM Services about refining the system further.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'Socket.IO', 'Roboflow', 'OpenAI'],
    tags: ['Full-stack', 'Computer Vision', 'Real-time'],
    links: [],
  },
  {
    id: 'genlink',
    title: 'Genlink',
    subtitle: 'Bridging generations through shared interests',
    badge: 'Outstanding Project Award',
    badgeTone: 'amber',
    year: '2025',
    image: '/assets/projects/genlink.png',
    summary:
      'Mdm Tan, 68, records a recipe in Mandarin. Jun Wei, 17, reads it in English. One post later they are playing chess every Sunday. Genlink is the platform in between.',
    problem:
      'Singapore has an ageing population and a generation of teenagers three floors away who will never meet them. The barrier is rarely willingness — it is language, and not knowing what you have in common.',
    approach: [
      'Voice stories: seniors record in whatever language they are comfortable in, with audio upload handled server-side.',
      'Google Neural Machine Translation renders every post into the reader\'s language across 132 languages.',
      'Interest matching connects across three age bands — youth 13–20, adult 21–59, senior 60+.',
      'Admin-approved community events, Socket.IO chat, and a live-synced chess board for the pairs who keep meeting.',
    ],
    outcome:
      'Awarded the Outstanding Project Award for the build and its presentation at NYP.',
    stack: ['Flask', 'Python', 'MySQL', 'Socket.IO', 'Google NMT', 'OAuth 2.0', 'Bootstrap'],
    tags: ['Full-stack', 'Social Impact', 'Real-time'],
    links: [],
  },
  {
    id: 'suss2026',
    title: 'Social Gifting Sales Insights',
    subtitle: 'What sells, to whom, and when',
    badge: '3rd place · SUSS Analytics & Visualisation Challenge 2026',
    badgeTone: 'bronze',
    year: '2026',
    image: '/assets/projects/suss2026.png',
    gallery: ['/assets/projects/suss2026-dashboard.jpeg'],
    summary:
      'A one-day team build in Tableau answering how a social gifting platform can grow income for its crafters — 10,869 orders and $1.01M of sales reduced to the handful of patterns a crafter could act on that week.',
    problem:
      'Crafters on the platform had five years of sales data and no view of which products, colours, channels or seasons actually earned them money.',
    approach: [
      'Built the dashboard around a single question the judges could hold: what sells, to whom, and when.',
      'Vendor concentration analysis showing how steeply orders fall off after the top handful of sellers.',
      'Channel split across Co, Booth and Shopee, plus returning-customer trend by year.',
      'Colour and variant analysis — black outsells every other variant by a wide margin.',
    ],
    outcome: 'Third place. My second attempt at this competition, one year after placing nowhere.',
    stack: ['Tableau', 'Data Storytelling', 'EDA'],
    tags: ['Analytics', 'Tableau'],
    links: [],
  },
  {
    id: 'suss2025',
    title: 'Kindra Dashboard Redesign',
    subtitle: 'The one I lost, then rebuilt',
    badge: 'No placing — then rebuilt from scratch',
    badgeTone: 'neutral',
    year: '2025',
    image: '/assets/projects/suss2025.png',
    gallery: ['/assets/projects/suss2025-original.jpeg', '/assets/projects/suss2025-improved.jpeg'],
    summary:
      'My first dashboarding competition, and the clearest lesson I have had. The submitted version explored the question from four angles. The version I built afterwards answers it in one sentence.',
    problem:
      'Kindra, a social enterprise café, wanted to know how to turn heavy reliance on seasonal product sales into sustainable revenue. I had the right data and no idea how to make a dashboard argue a point.',
    approach: [
      'Submitted version: four independent views — profit vs sales, vendor dynamics, a seasonality heatmap and monthly volume — each correct, none of them leading anywhere.',
      'Afterwards I went back to the same dataset with the Tableau I had taught myself since.',
      'Rebuilt version opens with the finding — 87% of sales come from one café and one category — and every chart below it exists to support that claim.',
      'Reordered by net items sold, added a top-N product cut, and dropped everything that did not serve the headline.',
    ],
    outcome:
      'Nothing at the competition. Directly responsible for the bronze the following year.',
    stack: ['Tableau', 'Data Storytelling'],
    tags: ['Analytics', 'Tableau'],
    links: [],
  },
  {
    id: 'nypsu',
    title: 'NYP Students\' Union',
    subtitle: 'CCA website with a street-art identity',
    badge: 'A grade · commended for visual design',
    badgeTone: 'violet',
    year: '2024',
    image: '/assets/projects/nypsu.png',
    summary:
      'A front-end site for the NYP Students\' Union that refuses to look like a school microsite — graffiti typography, full-bleed mural photography and a live Instagram feed doing the heavy lifting.',
    problem:
      'Student union sites get ignored because they look institutional. The brief was a site students would actually open, for a body whose whole identity is student energy.',
    approach: [
      'Built the visual language around street art — mural hero imagery, heavy display type, high-contrast colour.',
      'Embedded the union\'s live Instagram feed so the site stays current without anyone maintaining it.',
      'Responsive layout and scroll-driven UI built on vanilla JavaScript and Bootstrap.',
    ],
    outcome:
      'Graded A, with the visual direction singled out for embracing the CCA\'s street-style identity rather than neutralising it.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    tags: ['Front-end', 'Design'],
    links: [],
  },
];

export const experience = [
  {
    period: 'June 2022',
    role: 'UX / Product Design Intern',
    org: 'Hatch',
    orgNote: 'Youth digital skills organisation',
    bullets: [
      'Designed 5 UX wireframes and 3 mood boards proposing navigation improvements for a platform serving 200+ underserved youth.',
      'Contributed to the Q3 2022 website redesign, focused on accessibility and engagement.',
      'Sat in on industry tech talks that pushed me from design toward building the thing myself.',
    ],
    docs: [
      { label: 'Internship certificate', href: '/assets/docs/hatch-certificate.pdf' },
      { label: 'Reference letter — Hatch', href: '/assets/docs/hatch-reference-letter.pdf' },
      { label: 'Reference letter — Crater', href: '/assets/docs/crater-reference-letter.pdf' },
    ],
  },
];

export const certifications = {
  heading: 'Certifications',
  groups: [
    {
      name: 'Technical',
      items: [
        {
          title: 'SnowPro Associate',
          issuer: 'Snowflake',
          href: '/assets/certs/snowpro-associate.pdf',
          thumb: '/assets/certs/snowpro-associate.png',
        },
        {
          title: 'PCEP — Certified Entry-Level Python Programmer',
          issuer: 'Python Institute',
          href: '/assets/certs/pcep-python.pdf',
          thumb: '/assets/certs/pcep-python.png',
        },
        {
          title: 'Web Development Fundamentals',
          issuer: 'IBM SkillsBuild',
          href: '/assets/certs/ibm-web-dev.pdf',
          thumb: '/assets/certs/ibm-web-dev.png',
        },
        {
          title: 'User Experience Design Fundamentals',
          issuer: 'IBM SkillsBuild',
          href: '/assets/certs/ibm-ux-design.pdf',
          thumb: '/assets/certs/ibm-ux-design.png',
        },
        {
          title: 'AI Fluency: Framework & Foundations',
          issuer: 'Anthropic',
          href: '/assets/certs/anthropic-ai-fluency.pdf',
        },
        {
          title: 'Literacy in AI',
          issuer: 'AI Singapore — AI4I®',
          href: '/assets/certs/ai4i-literacy-in-ai.pdf',
        },
        {
          title: 'Web Development Bootcamp',
          issuer: 'Ipasmo Technologies',
          href: '/assets/certs/ipasmo-web-dev-bootcamp.pdf',
        },
        {
          title: 'Analytics & Visualisation Challenge 2025',
          issuer: 'Singapore University of Social Sciences',
          href: '/assets/certs/suss-avc-2025.pdf',
        },
      ],
    },
    {
      name: 'Academic awards',
      items: [
        { title: 'Edusave Merit Award', issuer: '2024', href: '/assets/certs/edusave-edusavemerit2024.jpeg' },
        { title: 'Academic Achievement', issuer: '2024', href: '/assets/certs/edusave-edusaveachievement2024.jpeg' },
        { title: 'Academic Achievement', issuer: '2023', href: '/assets/certs/edusave-edusaveachievement2023.jpeg' },
        { title: 'Good Progress Award', issuer: '2023', href: '/assets/certs/edusave-edusaveprogress2023.jpeg' },
        { title: 'SINDA Sustained Improvement — Science', issuer: '2023', href: '/assets/certs/edusave-sinda2023.jpeg' },
        { title: 'Edusave Scholarship', issuer: '2021', href: '/assets/certs/edusave-edusavescholarship2021.jpeg' },
        { title: 'Academic Achievement', issuer: '2020', href: '/assets/certs/edusave-edusaveachievement2020.jpeg' },
        { title: 'Good Progress Award', issuer: '2020', href: '/assets/certs/edusave-edusaveprogress2020.jpeg' },
        {
          title: 'International Research Programme',
          issuer: 'Chengdu Aeronautic Polytechnic University',
          href: '/assets/certs/edusave-internationalresearch.jpeg',
        },
      ],
    },
  ],
};

export const contact = {
  heading: 'Get In Touch',
  lead: 'I am looking for software and data engineering roles, and I am always up for a conversation about a build. Drop me a line and I will reply.',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'why-me', label: 'Why Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];
