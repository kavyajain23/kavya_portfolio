export const personalInfo = {
  name: "Kavya Jain",
  shortName: "Kavya",
  headline: "B.Tech Student | Aspiring AI & Web Developer",
  college: "JECRC University",
  degree: "B.Tech in CSE Core",
  duration: "2026 – 2030",
  graduationYear: "2030",
  location: "Jaipur, India",
  email: "kavyaaaaaaa23@gmail.com",
  githubUsername: "kavyajain23",
  githubUrl: "https://github.com/kavyajain23",
  linkedinUrl: "https://www.linkedin.com/in/kavya-jain-a93194421?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  introSnippet: "I build, learn, and explore technology to turn ideas into useful digital experiences.",
  bio: "I am a B.Tech student with a growing interest in artificial intelligence, frontend development, and digital productivity. I enjoy learning by building practical projects, exploring new tools, and improving my problem-solving skills. I am currently learning AUTOCAD, DIGITAL DATA & AI LITERACY, and COMMUNICATION SKILLS.",
  currentlyLearning: [
    { name: "AutoCAD", category: "Design & Drafting" },
    { name: "Digital Data & AI Literacy", category: "Artificial Intelligence" },
    { name: "Communication Skills", category: "Professional Development" },
    { name: "React & Modern Web Standards", category: "Frontend Engineering" }
  ],
  aboutHighlights: [
    {
      title: "Curious Learner",
      icon: "Sparkles",
      description: "Constantly experimenting with emerging tools, mastering foundational core computer science concepts, and discovering smarter ways to code and solve real problems."
    },
    {
      title: "Technology Enthusiast",
      icon: "Cpu",
      description: "Passionate about the intersection of intuitive web user interfaces and intelligent AI systems, with a drive to craft accessible and impactful digital solutions."
    }
  ]
};

export const educationData = {
  degree: "B.Tech in Computer Science & Engineering (Core)",
  college: "JECRC University",
  location: "Jaipur, Rajasthan, India",
  period: "2026 – 2030",
  status: "First Year Undergrad",
  overview: "Pursuing rigorous foundational education in Computer Science and Engineering Core, developing strong problem-solving acumen, analytical thinking, and hands-on software development principles.",
  learningAreas: [
    { name: "Programming Foundations", desc: "Core syntax, data types, logic structuring, and algorithmic thinking with Python and C." },
    { name: "Web Development", desc: "Building semantic, responsive, and interactive user interfaces using modern HTML, CSS, JavaScript, and React." },
    { name: "AI Fundamentals", desc: "Understanding machine intelligence, generative models, prompt engineering, and ethical data literacy." },
    { name: "Databases & Data Literacy", desc: "Grasping structured data organization, querying essentials, and information management." },
    { name: "Problem Solving", desc: "Mathematical foundations, discrete thinking, and structured debugging of code." }
  ],
  milestones: [
    {
      year: "2026",
      title: "B.Tech CSE Core Commencement",
      institution: "JECRC University",
      description: "Began undergraduate engineering journey focusing on Computer Science fundamentals, technical communication, and practical programming."
    },
    {
      year: "2026 – Present",
      title: "Applied Skill Development",
      institution: "Self-Paced & University Labs",
      description: "Actively engaging in hands-on frontend web experiments, AutoCAD modeling fundamentals, and digital AI literacy."
    },
    {
      year: "Expected 2030",
      title: "Graduation Target",
      institution: "JECRC University",
      description: "Aspiring to graduate as an agile AI and software engineer with a strong portfolio of meaningful projects."
    }
  ]
};

export const skillsData = [
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Building responsive, accessible, and fast web user interfaces",
    skills: [
      { name: "HTML5", status: "Proficient", level: 90, tag: "Semantic & Accessible" },
      { name: "CSS3 / Tailwind", status: "Proficient", level: 85, tag: "Modern Layouts & Flex/Grid" },
      { name: "JavaScript (ES6+)", status: "Intermediate", level: 75, tag: "DOM, Async & Logic" },
      { name: "React", status: "Learning", level: 55, isLearning: true, tag: "Components & Hooks" }
    ]
  },
  {
    category: "Programming & Logic",
    icon: "Code2",
    description: "Structured coding and foundational algorithmic problem solving",
    skills: [
      { name: "Python", status: "Intermediate", level: 78, tag: "Data Scripting & Automation" },
      { name: "C / C++ Basics", status: "Learning", level: 60, isLearning: true, tag: "Foundations & Memory Concepts" },
      { name: "Problem Solving", status: "Growing", level: 72, tag: "Algorithmic Logic" },
      { name: "Object-Oriented Basics", status: "Learning", level: 50, isLearning: true, tag: "Clean Architecture" }
    ]
  },
  {
    category: "AI & Modern Tools",
    icon: "Brain",
    description: "Harnessing artificial intelligence and developer toolchains",
    skills: [
      { name: "Artificial Intelligence", status: "Learning", level: 55, isLearning: true, tag: "AI Literacy & Principles" },
      { name: "Generative AI & Prompts", status: "Learning", level: 68, isLearning: true, tag: "Productive Workflows & LLMs" },
      { name: "Git & Version Control", status: "Intermediate", level: 70, tag: "Branching & Commits" },
      { name: "GitHub", status: "Intermediate", level: 75, tag: "Repositories & Open Source" },
      { name: "VS Code", status: "Proficient", level: 85, tag: "Extensions & Environment" }
    ]
  },
  {
    category: "Productivity & Design",
    icon: "Compass",
    description: "Design tools, structured communication, and technical workflow",
    skills: [
      { name: "AutoCAD", status: "Learning", level: 50, isLearning: true, tag: "2D Drafting & Geometries" },
      { name: "Digital Productivity Tools", status: "Proficient", level: 85, tag: "Notion, Docs & Task Boards" },
      { name: "Presentation Design", status: "Proficient", level: 80, tag: "Visual Pitch & Slides" },
      { name: "Technical Documentation", status: "Intermediate", level: 75, tag: "Markdown & Readmes" },
      { name: "Communication Skills", status: "Growing", level: 82, tag: "Teamwork & Presentations" }
    ]
  }
];

export const projectsData = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    shortDescription: "A responsive, modern portfolio presenting my academic profile, technical skillsets, and early projects with high contrast and accessible design.",
    longDescription: "Built from scratch to practice modern component-driven development. Features a custom dark navy aesthetic with electric blue and purple accents, smooth section scrolling, dynamic skill categorization with transparent learning badges, and mobile-first responsive architecture.",
    tags: ["React", "Tailwind CSS", "Vite", "JavaScript", "Responsive Design"],
    featured: true,
    viewUrl: "#",
    githubUrl: "https://github.com/kavyajain23/portfolio",
    category: "Web Development",
    highlights: [
      "100% responsive layout across mobile, tablet, and desktop",
      "Tailwind glassmorphism aesthetic with accessible dark mode palette",
      "Interactive project inspection modals and instant email copy utility"
    ]
  },
  {
    id: "ai-study-assistant",
    title: "AI Study & Prompt Notes Studio",
    shortDescription: "A student-centric web tool exploring prompt templates, AI note structuring, and generative topic summarization for college subjects.",
    longDescription: "Developed as part of my Digital Data & AI Literacy exploration. Enables first-year engineering students to craft structured prompts, categorize revision summaries by subject, and test automated question generation ideas.",
    tags: ["JavaScript", "HTML5", "CSS3", "GenAI Concepts", "Prompt Design"],
    featured: true,
    viewUrl: "#",
    githubUrl: "https://github.com/kavyajain23",
    category: "AI & Productivity",
    highlights: [
      "Categorized prompt templates for CSE subjects & theory revision",
      "Local storage persistence for student study cards",
      "Exploration of AI literacy concepts and responsible AI usage"
    ]
  },
  {
    id: "task-tracker",
    title: "Student Academic & Task Planner",
    shortDescription: "An intuitive task management web app designed to keep track of semester assignments, lab deliverables, and daily study targets.",
    longDescription: "A practical frontend application built to master state management and DOM operations. Helps students organize upcoming deadlines with priority tags, countdown indicators, and completion metrics.",
    tags: ["JavaScript", "CSS Grid", "DOM Manipulation", "Productivity"],
    featured: true,
    viewUrl: "#",
    githubUrl: "https://github.com/kavyajain23",
    category: "Productivity Tools",
    highlights: [
      "Categorized by coursework, exams, and personal coding goals",
      "Clean visual feedback on milestone completion",
      "Zero-clutter, keyboard-navigable student interface"
    ]
  },
  {
    id: "python-toolkit",
    title: "Python Logic & Algorithmic Mini-Toolkit",
    shortDescription: "A curated repository of foundational Python scripts solving mathematical series, array manipulations, and practical student utilities.",
    longDescription: "Authored during early computer science coursework to reinforce foundational algorithmic logic. Includes modules for prime factoring, matrix arithmetic, text formatting utilities, and beginner computational puzzles.",
    tags: ["Python", "Algorithms", "Problem Solving", "CLI"],
    featured: false,
    viewUrl: "#",
    githubUrl: "https://github.com/kavyajain23",
    category: "Programming",
    highlights: [
      "Modular Python functions with clean docstrings and comments",
      "Interactive command-line interfaces for each utility",
      "Focus on code readability and time-tested logic basics"
    ]
  }
];

export const achievementsData = {
  certifications: [
    {
      title: "Digital Data & AI Literacy",
      issuer: "Current Coursework & Online Module",
      status: "In Progress",
      date: "2026",
      badge: "In Progress",
      description: "Active study covering data fundamentals, machine intelligence awareness, and AI applications."
    },
    {
      title: "Foundational Web Development",
      issuer: "Self-Paced Learning",
      status: "In Progress",
      date: "2026",
      badge: "In Progress",
      description: "Structured exploration of semantic HTML5, modern CSS3 layout engines, and JavaScript ES6+."
    },
    {
      title: "Advanced Specialization Certifications",
      issuer: "Recognized Industry Platforms",
      status: "Coming Soon",
      date: "Upcoming (2026 - 2027)",
      badge: "Coming Soon",
      description: "Targeting verified credentials in Full Stack Development and Applied Machine Learning as coursework progresses."
    }
  ],
  courses: [
    {
      title: "AUTOCAD",
      type: "Technical Skill Course",
      institution: "Current Academic Curriculum",
      description: "Learning 2D technical drafting, geometrical transformations, and engineering schematics."
    },
    {
      title: "DIGITAL DATA & AI LITERACY",
      type: "Emerging Tech Course",
      institution: "Curricular / Applied Module",
      description: "Understanding data ethics, dataset analysis basics, generative models, and algorithmic thinking."
    },
    {
      title: "COMMUNICATION SKILLS",
      type: "Professional Development",
      institution: "JECRC University",
      description: "Mastering verbal articulation, technical presentations, collaborative communication, and professional writing."
    },
    {
      title: "CSE Core Fundamentals (Semester I)",
      type: "Undergraduate Core",
      institution: "JECRC University",
      description: "Structured problem solving, computer architecture basics, and introductory programming."
    }
  ],
  activities: [
    {
      role: "Active Member",
      group: "Campus Technical & Coding Circles",
      institution: "JECRC University",
      description: "Participating in peer-led learning groups, coding challenges, and introductory hackathon orientations."
    },
    {
      role: "Tech Explorer & Student Contributor",
      group: "Open Source & Developer Communities",
      institution: "GitHub & Community Forums",
      description: "Actively building public repositories, following tech documentation, and engaging in collaborative student initiatives."
    }
  ]
};
