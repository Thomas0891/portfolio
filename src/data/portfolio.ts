/**
 * Central portfolio data — generated from S Thomas's resume.
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
    linkedin: 'https://www.linkedin.com/in/thomas-joseph28/',
    github: 'https://github.com/Thomas0891',
  },

  resumePdf: '/assets/S Thomas_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.png',
    srcSet: '/assets/portrait-420.png 420w, /assets/portrait-720.png 720w, /assets/portrait-1100.png 1100w',
    alt: 'Portrait of Thomas Joseph',
  },
  interests: ['Machine Learning', 'Deep Learning', 'Generative AI'],
};

export const education = [
  {
    school: 'Centurion University of Technology and Management (CUTM)',
    place: 'Bhubaneswar, Odisha',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2023 – 2027',
    score: 'CGPA 8.6/10',
  },
  {
    school: 'Oneness International School',
    place: '',
    degree: 'Higher Secondary Education, Class XII',
    period: '2021 – 2022',
    score: 'Percentage 58.78',
  },
  {
    school: 'N.D.R.C. Government High School',
    place: '',
    degree: 'Secondary Education, Class X',
    period: '2019 – 2020',
    score: 'Percentage 51.64',
  },
];

export const experience = [
  {
    company: 'YHills Edutech Private Limited',
    role: 'Data Scientist Intern',
    place: '',
    period: 'May 2026 – Jul 2026',
    points: [
      'Three-month data science internship, completed with a Data Science Certificate.',
      'Worked on data analysis, visualization, and ML workflows.',
    ],
  },
  {
    company: 'Simplilearn – SkillUp',
    role: 'Data Science Intern',
    place: '',
    period: 'Nov 2025 – Jan 2026',
    points: ['Three-month data science internship through Simplilearn – SkillUp.'],
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
    id: 'ai-ml-workshop',
    title: 'AI/ML Workshop Coordinator',
    org: 'Technical Fest, Centurion University',
    detail: 'Organized a hands-on ML and Deep Learning workshop for 150+ students, demonstrating CNN-based image classification in Python.',
    laurel: '150+ Students',
  },
  {
    id: 'data-science-club-lead',
    title: 'Data Science Club Lead',
    org: 'Department of CSE, Centurion University',
    detail: 'Led 20+ members in weekly sessions on Python, EDA, and ML model building, and mentored 10+ teams in Kaggle competitions and project development.',
    laurel: 'Club Lead',
  },
];

export type Certification = { issuer: string; name: string; link: string };

// Add your certificate URLs in `link` (Google Drive / Credly). Empty link = no real page yet.
export const certifications: Certification[] = [
  { issuer: 'YHills Edutech', name: 'Data Science Certificate', link: '' },
  { issuer: 'Google', name: 'Google Prompting Essentials', link: '' },
  { issuer: 'Google Cloud & Simplilearn', name: 'Introduction to Generative AI Studio', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python comes first',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Models, features & evaluation',
    skills: [
      { name: 'Regression', mono: 'Rg' },
      { name: 'Classification', mono: 'Cl' },
      { name: 'Model Evaluation', mono: 'Me' },
      { name: 'Feature Engineering', mono: 'Fe' },
      { name: 'Scikit-learn', mono: 'Sk' },
    ],
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    subtitle: 'Vision & neural networks',
    skills: [
      { name: 'CNNs', mono: 'Cn' },
      { name: 'Transfer Learning', mono: 'Tl' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Keras', mono: 'Ke' },
      { name: 'Computer Vision', mono: 'Cv' },
    ],
  },
  {
    id: 'genai',
    title: 'Generative AI',
    subtitle: 'LLM-powered applications',
    skills: [
      { name: 'LLMs', mono: 'Ll' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'Multi-Agent Systems', mono: 'Ma' },
      { name: 'Prompt Engineering', mono: 'Pe' },
    ],
  },
  {
    id: 'data',
    title: 'Data Analysis & Tools',
    subtitle: 'Analysis, visuals & workflow',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'Seaborn', mono: 'Sb' },
      { name: 'EDA', mono: 'Ed' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Jupyter Notebook', mono: 'Jn' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, internships or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Finding Missing People Detection System', 'Multi-Agent AI Research System', 'AI Mock Interview Coach', 'AI Video Assistant'],
  TensorFlow: ['Finding Missing People Detection System'],
  'Computer Vision': ['Finding Missing People Detection System'],
  CNNs: ['AI/ML Workshop (CNN image classification)'],
  LangChain: ['Multi-Agent AI Research System'],
  'Multi-Agent Systems': ['Multi-Agent AI Research System'],
  LLMs: ['Multi-Agent AI Research System', 'AI Mock Interview Coach', 'AI Video Assistant'],
  'Prompt Engineering': ['Google Prompting Essentials'],
  EDA: ['Data Science Club Lead', 'YHills Data Science Certificate'],
  'Git / GitHub': ['Data Science Club Lead (project mentoring)'],
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
        description: 'Secondary Education, Class X at N.D.R.C. Government High School.',
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
  { label: 'Primary language', title: 'Python', detail: 'Used in all four projects', palette: amber },
  { label: 'The award winner', title: 'Best 3rd Year Project', detail: 'Finding Missing People Detection System', palette: crimson },
  { label: 'Accuracy', title: '95%', detail: 'Identification accuracy on benchmark test datasets', palette: ocean },
  { label: 'The agent builder', title: 'Multi-Agent AI', detail: 'LangChain research system', palette: violet },
  { label: 'Experience', title: '2 Internships', detail: 'YHills Edutech • Simplilearn – SkillUp', palette: jade },
  { label: 'Leadership', title: 'Data Science Club Lead', detail: '20+ members • 10+ teams mentored', palette: amber },
  { label: 'Teaching', title: '150+ Students', detail: 'AI/ML workshop at the Technical Fest', palette: crimson },
  { label: 'Academic', title: 'CGPA 8.6/10', detail: 'B.Tech CSE, CUTM', palette: ocean },
  { label: 'Current focus', title: 'Generative AI', detail: 'LLMs, LangChain & prompt engineering', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Centurion University of Technology and Management', '2023 – 2027'],
    chips: ['CGPA 8.6/10'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['Python, SQL, Java, C · TensorFlow, Keras, Scikit-learn', 'LangChain, LLMs · Pandas, NumPy, Matplotlib'],
    chips: ['Python', 'TensorFlow', 'LangChain', 'Scikit-learn', 'Pandas', 'SQL'],
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
  {
    kicker: 'Current mission',
    title: 'Now seeking',
    lines: ['AI/ML and Data Science roles'],
  },
];

export type ProfileId = 'thomas' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'thomas',
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
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};