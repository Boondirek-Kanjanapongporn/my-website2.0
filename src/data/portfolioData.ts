{/* ── HERO ── */}
export const techBadges = [
  "Vite",
  "TypeScript",
  "React",
  "Java",
  "Spring Boot",
  "SQL",
  "Python",
  "Git",
];

{/* ── EXPERIENCE ── */}
export const experience = [
  {
    company: "J.P. Morgan Asset Management",
    role: "Software Engineer (SEP Program)",
    type: "Full-time",
    location: "Glasgow, Scotland, UK · On-site",
    date: "Sep 2024 – Present",
    skills: ["Java", "JavaScript", "Spring Boot", "React.js", "SQL"],
    bullets: [
      "Developed backend APIs to query internal cache for Private Equities' daily position snapshots",
      "Implemented logic in the transaction system to correctly handle value-based instruments, ensuring consistent data storage despite intraday price fluctuations",
      "Refactored the system to support migration to a new integration, removing outdated code and improving maintainability",
      "Migrated legacy test functions from JUnit 4 to JUnit 5 ensuring latest code practices",
    ],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineer Intern",
    type: "Internship",
    location: "Glasgow, Scotland, UK · On-site",
    date: "Jun 2023 – Aug 2023",
    skills: [
      "TypeScript",
      "Spring Boot",
      "React.js",
      "Oracle SQL",
      "Jest",
      "Mockito",
    ],
    bullets: [
      "Implemented a Back End service to identify and address data inconsistencies between data servers throughout the stock market trading day",
      "Adapted the Spring Boot MVC model to develop Controllers, Services, and Repositories to facilitate interactions with React.js frontend and Oracle SQL database",
      "Developed a Front End dashboard with pagination, date filtering, and regional filtering to reduce SRE team workload",
      "Created unit tests using Mockito (Back End) and Jest (Front End)",
    ],
  },
  {
    company: "University of Glasgow",
    role: "GUSS Software Developer",
    type: "Part-time",
    location: "Glasgow, Scotland, UK · Hybrid",
    date: "Nov 2022 – Jun 2023",
    skills: [
      "JavaScript",
      "Python",
      "Docker",
      "Django",
      "GitLab",
      "Google Analytics",
    ],
    bullets: [
      "Implemented CI/CD pipeline to automate deployment of changes from GitLab to remote server",
      "Developed a Back End service in Django to calculate total work hours for all university professors",
      "Achieved cost savings of up to $400/year by devising custom Google Tag Manager events for user activity tracking",
      "Integrated Google Analytics 4, Google Tag Manager, and client website to monitor and dashboard data",
    ],
  },
  {
    company: "KASIKORN Business-Technology Group (KBTG)",
    role: "Software Quality Management Developer",
    type: "Internship",
    location: "Bangkok, Thailand · Hybrid",
    date: "Jun 2022 – Aug 2022",
    skills: ["Python", "Robot Framework", "Test Automation"],
    bullets: [
      "Developed nine algorithms to assess eligibility of customers applying for bank loans",
      "Optimized test scripts' runtime efficiency by 84% through integration of Python with Robot Framework",
      "Implemented algorithms including Non-Trade, Cheque Return, Circular, and Self Transaction to detect financial fraud patterns",
      "Wrote guideline manuals for future developers to onboard the project more easily",
    ],
  },
  {
    company: "MFEC Public Company Limited",
    role: "Full Stack Developer",
    type: "Internship",
    location: "Bangkok, Thailand · Remote",
    date: "Dec 2021 – Feb 2022",
    skills: ["Express.js", "Cypress.js", "PostgreSQL"],
    bullets: [
      "Developed new REST APIs using Express.js to efficiently retrieve data from PostgreSQL database",
      "Implemented table pagination and search filtering with dynamic URL query updates",
      "Wrote test cases to validate REST APIs and conduct unit and system testing through Cypress.js",
    ],
  },
  {
    company: "King Mongkut's Institute of Technology Ladkrabang",
    role: "Python Teacher Assistant & Frontend Developer",
    type: "Part-time",
    location: "Bangkok, Thailand",
    date: "Jul 2021 – Dec 2021",
    skills: ["Python", "React.js", "Django"],
    bullets: [
      "Instructed first-year students in Python covering foundational to advanced concepts including OOP, Hash Maps, and Priority Queues",
      "Assisted in developing Front End user interfaces using React.js framework",
      "Participated in developing Back End REST APIs using Django framework",
    ],
  },
];

{/* ── SKILLS ── */}
export const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Java", icon: "FaJava" },
      { name: "Python", icon: "SiPython" },
      { name: "C", icon: "SiC" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "Dart", icon: "SiDart" },
      { name: "CSS", icon: "SiCss" },
      { name: "R", icon: "SiR" },
      { name: "SQL", icon: "SiMysql" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Spring Boot", icon: "SiSpringboot" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "Flutter", icon: "SiFlutter" },
      { name: "Cypress.js", icon: "SiCypress" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Apache Kafka", icon: "SiApachekafka" },
      { name: "Vite", icon: "SiVite" },
    ],
  },
];

{/* ── EDUCATION ── */}
export const education = [
  {
    institution: "University of Glasgow",
    degree: "BSc Software Engineering — Computer Science",
    honour: "First-Class Honours",
    location: "Glasgow, United Kingdom",
    date: "Sep 2022 – May 2024",
  },
  {
    institution: "King Mongkut's Institute of Technology Ladkrabang",
    degree: "BEng Computer Engineering — Software Engineer",
    honour: "First-Class Honours",
    location: "Bangkok, Thailand",
    date: "Aug 2020 – Aug 2022",
  },
];
