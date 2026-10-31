/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };


export const profile = {
  fullName: 'Thomas Joseph',
  displayName: 'Thomas',
  firstName: 'THOMAS',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A THOMAS ORIGINAL',
  role: 'Data Science & Machine Learning',
  tagline: ['Data Scientist', 'Machine Learning', 'AI Developer'],
  intro:
    'A B.Tech Computer Science Engineering student focused on Data Science and Machine Learning, building AI-powered applications, predictive models and computer vision solutions using Python, machine learning and modern development tools.',
  location: 'Bhubaneswar, Odisha, India',
  email: 'thomasjoseph0891@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/YOUR_LINKEDIN/',
    github: 'https://github.com/YOUR_GITHUB_USERNAME',
  },

  resumePdf: '/assets/S Thomas_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.png',
    srcSet: '/assets/portrait-420.png 420w, /assets/portrait-720.png 720w, /assets/portrait-1100.png 1100w',
    alt: 'Portrait of Thomas Joseph',
  },
  interests: ['System Design', 'Cloud Computing (AWS)', 'Machine Learning'],
};

export const education = [
  {
    school: 'Centurion University of Technology and Management (CUTM)',
    place: 'Bhubaneswar, Odisha',
    degree: 'Bachelor of Technology — Artificial Intelligence and Machine Learning',
    period: 'October 2023 – Present',
    score: 'CGPA 8.10',
  },
  {
    school: 'Oneness International College',
    place: 'Bhubaneswar, Odisha',
    degree: 'Computer Science — Intermediate',
    period: 'June 2021 – May 2022',
    score: 'Score 925/1000',
  },
];

export const experience = [
  {
    company: 'Technical Hub Pvt Ltd',
    role: 'Trainee',
    place: 'Surampalem, AP',
    period: 'May 2025 – June 2026',
    points: [
      'Completed one year of intensive Full-Stack Development (FSD) training covering frontend, backend, database integration, and deployment workflows.',
      'Developed responsive and functional web applications by implementing user interfaces, server-side logic, and database connectivity.',
      'Deployed and managed web applications while applying version control, debugging, and end-to-end development practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'missing-people-detection',
    title: 'Finding Missing People Detection System',
    year: '2026',
    genre: 'Deep Learning • Computer Vision • TensorFlow',
    logline: 'A face recognition system built to support public safety and missing-person identification. Best 3rd Year Project.',
    stack: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
    build: [
      'Designed and developed a face recognition system using deep learning-based feature embeddings and similarity matching.',
      'Built optimized face detection and preprocessing pipelines, achieving 95% identification accuracy on benchmark test datasets.',
      'Applied the system to support public safety and missing person identification use cases.',
    ],
    features: [
      'Face recognition with deep learning feature embeddings',
      'Similarity matching for identification',
      'Optimized face detection and preprocessing pipelines',
      'Public safety and missing-person identification use case',
    ],
    metrics: [
      { value: '95%', label: 'identification accuracy' },
      { value: '#1', label: 'Best 3rd Year Project' },
      { value: 'Dec 2025 – Apr 2026', label: 'build period' },
    ],
    // Add `github: 'https://github.com/Thomas0891/<repo-name>',` once you have the repo link.
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'multi-agent-research',
    title: 'Multi-Agent AI Research System',
    year: '2026',
    genre: 'Generative AI • LangChain • Multi-Agent',
    logline: 'Specialized AI agents that search, analyze, and summarize a topic into a structured research report.',
    stack: ['Python', 'LangChain', 'LLMs', 'Multi-Agent Systems'],
    build: [
      'Built a multi-agent research system with LangChain where specialized agents search, analyze, and summarize information for a given topic.',
      'Orchestrated agent collaboration and tool usage to generate structured, well-organized research reports.',
    ],
    features: [
      'Specialized agents for search, analysis, and summarization',
      'Agent collaboration and tool usage orchestration',
      'Structured, well-organized research reports',
    ],
    metrics: [
      { value: '3', label: 'agent roles: search, analyze, summarize' },
      { value: 'LangChain', label: 'orchestration framework' },
    ],
    // github: 'https://github.com/Thomas0891/<repo-name>',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'ai-mock-interview-coach',
    title: 'AI Mock Interview Coach',
    year: '2026',
    genre: 'NLP • LLM • Streamlit',
    logline: 'An AI interview coach that asks role-specific questions and gives instant feedback on your answers.',
    stack: ['Python', 'NLP', 'LLMs', 'Streamlit'],
    build: [
      'Developed an AI-powered interview coach that generates role-specific questions and evaluates candidate answers.',
      'Delivered instant feedback on answer quality and areas of improvement through an interactive interface.',
    ],
    features: [
      'Role-specific interview question generation',
      'Automatic evaluation of candidate answers',
      'Instant feedback on quality and areas to improve',
      'Interactive Streamlit interface',
    ],
    metrics: [
      { value: 'Instant', label: 'answer feedback' },
      { value: 'Role-based', label: 'question generation' },
    ],
    // github: 'https://github.com/Thomas0891/<repo-name>',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'ai-video-assistant',
    title: 'AI Video Assistant',
    year: '2026',
    genre: 'NLP • LLM • Speech Processing',
    logline: 'An AI assistant that turns video into transcripts, summaries, and key insights, and answers questions about it.',
    stack: ['Python', 'NLP', 'LLMs', 'Speech Processing'],
    build: [
      'Built an AI assistant that processes video content to generate transcripts, summaries, and key insights.',
      'Enabled question answering over video content for faster understanding and information retrieval.',
    ],
    features: [
      'Video transcription with speech processing',
      'Automatic summaries and key insights',
      'Question answering over video content',
    ],
    metrics: [
      { value: '3', label: 'outputs: transcript, summary, insights' },
      { value: 'Q&A', label: 'over video content' },
    ],
    // github: 'https://github.com/Thomas0891/<repo-name>',
    palette: { from: '#0b1a0a', via: '#1f6b2c', to: '#050a06', accent: '#5dff8a' },
    motif: 'flow',
  },
];
export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'best-3rd-year-project',
    title: 'Best 3rd Year Project',
    org: 'Centurion University of Technology and Management',
    detail: 'Awarded for the Finding Missing People Detection System, a deep learning face recognition project with 95% identification accuracy on benchmark test datasets.',
    laurel: 'Best Project',
  },
  {
    id: 'yhills-certificate',
    title: 'Data Science Certificate',
    org: 'YHills Edutech',
    detail: 'Completed a data science internship covering data analysis, visualization, and ML workflows.',
    laurel: 'Certified',
    // link: 'https://...',
  },
  {
    id: 'google-prompting-essentials',
    title: 'Prompting Essentials',
    org: 'Google',
    detail: 'Certification in effective prompting for generative AI tools (Jul 2026).',
    laurel: 'Google Certified',
    // link: 'https://...',
  },
  {
    id: 'genai-studio',
    title: 'Introduction to Generative AI Studio',
    org: 'Google Cloud • Simplilearn',
    detail: 'Hands-on introduction to building with generative AI on Google Cloud (Jan 2026).',
    laurel: 'Gen AI',
    // link: 'https://...',
  },
  {
    id: 'ai-ml-workshop',
    title: 'AI/ML Workshop Coordinator',
    org: 'Technical Fest, Centurion University',
    detail: 'Organized a hands-on ML and Deep Learning workshop for 150+ students, demonstrating CNN-based image classification in Python.',
    laurel: '150+ Students',
  },
 
];

// export type Certification = { issuer: string; name: string; link: string };
//
// export const certifications: Certification[] = [
//   { issuer: 'NPTEL', name: 'Database Management System', link: 'https://drive.google.com/file/d/1MqkJHchXeaGD4S8mzPmEGxEYddAsxAjN/view?usp=drive_link' },
//   { issuer: 'NPTEL', name: 'Fundamentals of Artificial Intelligence', link: 'https://drive.google.com/file/d/1GqyUQ-lrE-bHaN457t6fIdssgGG4HMXf/view?usp=drive_link' },
//   { issuer: 'NPTEL', name: 'Deep Learning', link: 'https://drive.google.com/file/d/1PWSRP5SQDPzkoTCF3A24eIJoSpTwgsff/view?usp=sharing' },
//   { issuer: 'AWS', name: 'AWS Certified AI Practitioner', link: 'https://drive.google.com/file/d/1h8e5p0a9T6f5gBaOP2ROfwWHZfkkspGn/view?usp=drive_link' },
//   { issuer: 'AWS', name: 'AWS Academy Graduate – Cloud Foundations', link: 'https://www.credly.com/badges/2d4810f9-3dbe-444d-99b9-61312ea5e7df/public_url' },
//   { issuer: 'MongoDB', name: 'MongoDB Certified Associate Developer', link: 'https://www.credly.com/badges/fd3362bd-743a-4c4d-a68e-b1fdc5d46811/public_url' },
//   { issuer: 'GitHub', name: 'GitHub Foundations', link: 'https://drive.google.com/file/d/1o0fkCAMRWTg1oMwxlqu6t6wnOpBv66Vq/view?usp=sharing' },
//   { issuer: 'Pearson', name: 'IT Specialist – HTML and CSS', link: 'https://www.credly.com/badges/e4a55298-e396-41d8-a032-283aafe9fab7/public_url' },
//   { issuer: 'Oracle', name: 'Java Certified Foundations Associate', link: 'https://drive.google.com/file/d/1g-yyceHtLg_k2RWiOIJqH0MMcGlaH90P/view?usp=sharing' },
//   { issuer: 'Oracle', name: 'Oracle Certified Foundations Associate – Database', link: 'https://drive.google.com/file/d/10-DzabbcH2vHrI6bAohoT8czKRZMa2kV/view?usp=drive_link' },
//   { issuer: 'Cisco', name: 'HTML Essentials', link: 'https://www.credly.com/badges/eb27ca95-3b2a-4948-bef9-0385d1d49055/public_url' },
//   { issuer: 'Cisco', name: 'CSS Essentials', link: 'https://www.credly.com/badges/3b37497f-6a61-4889-af3c-ed337a460a0b/public_url' },
//   { issuer: 'Cisco', name: 'JavaScript Essentials 1', link: 'https://www.credly.com/badges/9cdd4d55-6ecc-463f-b254-811ccdd0539c/public_url' },
//   { issuer: 'Cisco', name: 'JavaScript Essentials 2', link: 'https://www.credly.com/badges/0e1b036e-4318-4c8e-b750-2aca77314442/public_url' },
//   { issuer: 'Cisco', name: 'Python Essentials 1', link: 'https://www.credly.com/badges/0e21e3eb-d8ef-4770-95d7-dcbd6f8696b1/public_url' },
//   { issuer: 'Udemy', name: 'Microsoft Azure Hands-On Training (AZ-900, AZ-104, AZ-305)', link: 'https://drive.google.com/file/d/1KrXClhY0nJ3Acxs7DioNf4Q1rpaMvgPT/view?usp=sharing' },
// ];

// Kept so files that import `certifications` don't break while the old list is commented out.
// Delete these lines if nothing imports them.
export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];




export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is the primary language',
    skills: [
      { name: 'Python', mono: 'Py',note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Collections', mono: 'Co' },
      { name: 'Multithreading', mono: 'Mt' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 5-star'],
  Python: ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 5-star'],
  C: ['HackerRank 5-star'],
  React: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  HTML: ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  Docker: ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  Microservices: ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  PostgreSQL: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  DBMS: ['NPTEL Database Management System', 'Oracle Database Foundations'],
  DSA: ['AlgoUniversity Tech Fellow', '850+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Tech AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2019 – 2022',
    synopsis: 'School years that built the foundation: Class X at N.D.R.C. Government High School and Class XII at Oneness International School.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Secondary Education, Class X at Oneness International School.',
        tags: ['Class X', 'Secondary'],
        runtime: '2019 – 2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Turning Point',
        description: 'Higher Secondary Education, Class XII at Oneness International School.',
        tags: ['Class XII', 'Higher Secondary'],
        runtime: '2021 – 2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Computer Science',
    period: '2023 – 2027',
    synopsis: 'B.Tech in Computer Science and Engineering at Centurion University of Technology and Management, with a focus on Machine Learning, Deep Learning and Computer Vision.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in Computer Science and Engineering, CGPA 8.6/10.',
        tags: ['B.Tech', 'CSE', 'CGPA 8.6'],
        runtime: '2023 – 2027',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Organizer',
        description: 'AI/ML Workshop Coordinator at the Technical Fest. Ran a hands-on ML and Deep Learning workshop for 150+ students, demonstrating CNN-based image classification in Python.',
        tags: ['CNN', 'Python', '150+ Students'],
        runtime: '2024 – 2025',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Leader',
        description: 'Data Science Club Lead in the Department of CSE. Led 20+ members in weekly sessions on Python, EDA and ML model building, and mentored 10+ teams in Kaggle competitions and projects.',
        tags: ['Python', 'EDA', 'Kaggle', 'Mentoring'],
        runtime: '2024 – 2025',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Learning Data Science',
    period: 'Nov 2025 – Jul 2026',
    synopsis: 'Two data science internships and a set of certifications in data analysis, ML workflows and generative AI.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Intern',
        description: 'Data Science Intern at Simplilearn – SkillUp, a three-month internship.',
        tags: ['Data Science', 'Simplilearn'],
        runtime: 'Nov 2025 – Jan 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Data Scientist',
        description: 'Data Scientist Intern at YHills Edutech Private Limited, with a certificate in data analysis, visualization and ML workflows.',
        tags: ['Data Analysis', 'Visualization', 'ML Workflows'],
        runtime: 'May 2026 – Jul 2026',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Certified',
        description: 'Google Prompting Essentials and Introduction to Generative AI Studio (Google Cloud and Simplilearn).',
        tags: ['Prompt Engineering', 'Generative AI', 'Google'],
        runtime: 'Jan 2026 – Jul 2026',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2025 – 2026',
    synopsis: 'Four projects across computer vision and generative AI, including the award-winning Finding Missing People Detection System.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Detector',
        description: 'Finding Missing People Detection System. A deep learning face recognition system with 95% identification accuracy on benchmark test datasets. Winner of Best 3rd Year Project.',
        tags: ['TensorFlow', 'Computer Vision', 'Best 3rd Year Project'],
        runtime: 'Dec 2025 – Apr 2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Orchestrator',
        description: 'Multi-Agent AI Research System. Specialized LangChain agents that search, analyze and summarize a topic into a structured research report.',
        tags: ['LangChain', 'LLMs', 'Multi-Agent'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Assistant Builder',
        description: 'AI Mock Interview Coach and AI Video Assistant. One gives instant feedback on interview answers, the other turns video into transcripts, summaries and answers to questions.',
        tags: ['NLP', 'Streamlit', 'Speech Processing'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Looking for the next arc of the story in AI/ML and Data Science.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Seeking an AI/ML or Data Science role, building end-to-end AI solutions in Python, TensorFlow and LangChain.',
        tags: ['AI/ML', 'Data Science', 'Generative AI'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'Listed as primary on the resume • Oracle certified', palette: amber },
  { label: 'The AI Original', title: 'PolicyGuard AI', detail: '500+ documents • 92% accuracy', palette: crimson },
  { label: 'Biggest stage', title: 'Flipkart GRiD 7.0', detail: 'Semi-Finalist', palette: ocean },
  { label: 'National selection', title: 'AlgoUniversity', detail: 'Tech Fellow', palette: violet },
  { label: 'Academic high', title: 'Branch Topper', detail: '9.24 SGPA in AI & ML', palette: jade },
  { label: 'Cloud credential', title: 'AWS AI Practitioner', detail: 'AWS Certified', palette: amber },
  { label: 'Problems solved', title: '850+', detail: 'LeetCode 350+ • GFG 300+ • CodeChef 200+', palette: crimson },
  { label: 'The training arc', title: '1 Year of FSD', detail: 'Technical Hub Pvt Ltd', palette: ocean },
  { label: 'Database credential', title: 'MongoDB', detail: 'Certified Associate Developer', palette: jade },
  { label: 'Current focus', title: 'System Design', detail: 'with Cloud (AWS) & Machine Learning', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & ML',
    lines: ['Centurion University of Technology and Management Bhubaneswar', 'October 2023 – Present'],
    chips: ['CGPA 8.10'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['Python, C, C++ · React, Node.js, Express.js', 'PostgreSQL, MongoDB, MySQL · Docker, REST, JWT'],
    chips: ['Python', 'Java', 'React', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  
  {
    kicker: 'Training',
    title: 'The Training Arc',
    lines: ['Two data science internships', 'Data Scientist Intern · YHills Edutech · May 2026 – Jul 2026', 'Data Science Intern · Simplilearn – SkillUp · Nov 2025 – Jan 2026'],
  },
  {
    kicker: 'Projects',
    title: 'Four Originals',
    lines: ['Finding Missing People Detection — 95% identification accuracy', 'Multi‑Agent AI Research System — specialized LangChain agents', 'AI Mock Interview Coach · AI Video Assistant'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Best 3rd Year Project — Finding Missing People Detection', 'AI/ML Workshop Coordinator — 150+ students', 'Data Science Club Lead — 20+ members, 10+ teams mentored'],
  },
  //{
    //kicker: 'Certified',
    //title: '16 Certifications',
    //lines: ['AWS · MongoDB · Oracle · GitHub · Pearson', 'NPTEL · Cisco · Udemy'],
 // },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing (AWS) · Machine Learning'],
  },
];

export type ProfileId = 'Thomas' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Thomas',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
