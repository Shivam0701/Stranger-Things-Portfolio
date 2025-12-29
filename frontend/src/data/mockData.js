// Mock data for Stranger Things Portfolio - Shivam Raj

export const personalInfo = {
  name: "SHIVAM RAJ",
  role: "Full Stack Developer & Cybersecurity Explorer",
  email: "shivamraj.0110@gmail.com",
  phone: "+91-8210173404",
  linkedin: "https://www.linkedin.com/in/shivam-raj-0701sr/",
  github: "https://github.com/Shivam0701",
  resumeLink: "/Shivam_Raj_Resume.pdf"
};

export const aboutStory = {
  title: "ORIGIN STORY",
  subtitle: "THE MISSION BEGINS",
  story: "In the depths of the digital realm, where code meets consciousness, a developer emerged from Lovely Professional University. Armed with Python, Java, and C++, I ventured into the Upside Down of software development—where bugs lurk in shadows and solutions glow like portal lights. From building document comparison systems that reveal hidden differences, to crafting real estate platforms that connect worlds, my journey is one of constant exploration and creation.",
  highlights: [
    {
      year: "2022",
      event: "Entered the Portal",
      description: "Began BTech in Computer Science at LPU"
    },
    {
      year: "2023",
      event: "First Encounter",
      description: "Mastered DSA using C++ and built Quiz Game"
    },
    {
      year: "2024",
      event: "The Experiments",
      description: "Created Sudoku Visualizer, Real Estate Platform, and managed Youth Vibe event"
    },
    {
      year: "2025",
      event: "Current Mission",
      description: "Training at PwC in Cybersecurity, developing Django applications"
    }
  ]
};

export const skills = {
  title: "HAWKINS LAB EXPERIMENTS",
  subtitle: "POWER LEVELS & ABILITIES",
  categories: [
    {
      name: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Python", level: 90, color: "#3776AB" },
        { name: "Java", level: 85, color: "#007396" },
        { name: "C++", level: 80, color: "#00599C" },
        { name: "JavaScript", level: 85, color: "#F7DF1E" },
        { name: "PHP", level: 70, color: "#777BB4" },
        { name: "HTML/CSS", level: 90, color: "#E34F26" }
      ]
    },
    {
      name: "Frameworks & Libraries",
      icon: "Box",
      skills: [
        { name: "Django", level: 85, color: "#092E20" },
        { name: "React", level: 80, color: "#61DAFB" },
        { name: "NodeJS", level: 75, color: "#339933" },
        { name: "Bootstrap", level: 85, color: "#7952B3" }
      ]
    },
    {
      name: "Tools & Databases",
      icon: "Database",
      skills: [
        { name: "MySQL", level: 80, color: "#4479A1" },
        { name: "MongoDB", level: 75, color: "#47A248" },
        { name: "GitHub", level: 90, color: "#181717" }
      ]
    },
    {
      name: "Soft Skills",
      icon: "Users",
      skills: [
        { name: "Problem-Solving", level: 95, color: "#FF0033" },
        { name: "Team Collaboration", level: 90, color: "#FF0033" },
        { name: "Adaptability", level: 88, color: "#FF0033" },
        { name: "Management", level: 85, color: "#FF0033" }
      ]
    }
  ]
};

export const projects = [
  {
    id: 1,
    episode: "EPISODE 01",
    title: "Document Comparison Web Application",
    description: "A Django-based portal that reveals the hidden differences between documents—like finding clues in the Upside Down. Features PDF, Word, and text file analysis with difference-highlighting capabilities.",
    technologies: ["Python", "Django", "Bootstrap", "Django Templates"],
    duration: "Oct 2024 - Nov 2024",
    features: [
      "Multi-format document comparison (PDF, Word, Text)",
      "Real-time difference highlighting",
      "User authentication and file upload system",
      "Responsive UI with clean design"
    ],
    image: "https://images.unsplash.com/photo-1559842135-8d5e4214ae77",
    status: "MISSION COMPLETE",
    liveLink: null,
    fallback: "LOST IN THE UPSIDE DOWN 🌀",
    sourceCode: "https://github.com/Shivam0701/Shira-DocMatch"
  },
  {
    id: 2,
    episode: "EPISODE 02",
    title: "Real Estate Website",
    description: "An interactive platform connecting clients with top builders across dimensions. Features dynamic property searches and advocate profiles, bridging the gap between dream homes and reality.",
    technologies: ["React", "Chakra UI", "JavaScript", "HTML", "CSS"],
    duration: "Oct 2024 - Dec 2024",
    features: [
      "Real-time property search functionality",
      "Location-based builder connections",
      "Responsive and optimized UI/UX",
      "Dynamic contact forms and profiles"
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    status: "MISSION COMPLETE",
    liveLink: "https://real-estate-shira.vercel.app",
    fallback: "LOST IN THE UPSIDE DOWN 🌀",
    sourceCode: "https://github.com/Shivam0701/Real-Estate-Shira"
  },
  {
    id: 3,
    episode: "EPISODE 03",
    title: "Sudoku Solver Visualizer",
    description: "A Java Swing application that visualizes the ancient puzzle-solving rituals through backtracking algorithms. Watch as the code navigates through the maze of numbers like Eleven navigating minds.",
    technologies: ["Java", "Swing", "Backtracking Algorithm"],
    duration: "June 2024 - July 2024",
    features: [
      "Visual backtracking algorithm demonstration",
      "Model-View-Controller architecture",
      "Interactive puzzle solving interface",
      "Real-time solution visualization"
    ],
    image: "https://images.unsplash.com/photo-1607971584791-aca00eb17fd5",
    status: "MISSION COMPLETE",
    liveLink: null,
    fallback: "LOST IN THE UPSIDE DOWN 🌀",
    sourceCode: "https://github.com/Shivam0701/SUDUKO-Solver-Visualizer"
  },
  {
    id: 4,
    episode: "EPISODE 04",
    title: "Quiz Game",
    description: "A Python-based quiz system that tests knowledge through the fog of uncertainty. Random question shuffling creates a dynamic experience, keeping players on their toes like dodging demogorgons.",
    technologies: ["Python", "Random Module", "Data Structures"],
    duration: "Sept 2023 - Nov 2023",
    features: [
      "Dynamic question shuffling system",
      "Score calculation and tracking",
      "Input validation and error handling",
      "Command-line interface design"
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    status: "MISSION COMPLETE",
    liveLink: null,
    fallback: "LOST IN THE UPSIDE DOWN 🌀",
    sourceCode: "https://github.com/Shivam0701/PYTHON-QUIZ-GAME"
  }
];

export const experience = [
  {
    id: 1,
    classified: "CLASSIFIED PROJECT ALPHA",
    company: "PwC",
    role: "Cyber Security Risk & Regulatory Launchpad",
    duration: "Jan 2025 - June 2025",
    type: "Training Program",
    responsibilities: [
      "Python scripting for advanced cyber security operations",
      "Risk management protocols and analysis",
      "Regulatory compliance framework implementation",
      "Security threat assessment and mitigation"
    ],
    status: "COMPLETE"
  },
  {
    id: 2,
    classified: "CLASSIFIED PROJECT BETA",
    company: "Byte XL",
    role: "Software Development Training",
    duration: "Jan 2025 - Feb 2025",
    type: "Intensive Training",
    responsibilities: [
      "Object-oriented programming mastery",
      "Real-world project implementation",
      "Template design and exception handling",
      "File I/O operations in multiple scenarios"
    ],
    status: "COMPLETE"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Cloud Computing Certification",
    issuer: "NPTEL",
    date: "Jan 2025 - June 2025",
    type: "certification",
    icon: "Cloud"
  },
  {
    id: 2,
    title: "C++ Programming Master",
    issuer: "Udemy",
    date: "Jan 2024 - Mar 2024",
    type: "certification",
    icon: "Code"
  },
  {
    id: 3,
    title: "DSA using C++ - Advanced",
    issuer: "Udemy",
    date: "May 2023 - July 2023",
    type: "certification",
    icon: "Binary"
  },
  {
    id: 4,
    title: "Youth Vibe Event Manager",
    issuer: "Lovely Professional University",
    date: "Feb 2024 - Apr 2024",
    type: "achievement",
    icon: "Trophy"
  }
];

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science",
    duration: "Aug 2022 - July 2026",
    location: "Phagwara, Punjab",
    grade: "CGPA: 7.33",
    status: "Pursuing"
  },
  {
    institution: "S.L. Suri DAV Public School",
    degree: "Intermediate (12th)",
    duration: "Apr 2020 - Mar 2022",
    location: "New Delhi, Delhi",
    grade: "76.4%",
    status: "Completed"
  },
  {
    institution: "N.S. DAV Public School",
    degree: "Matriculation (10th)",
    duration: "Apr 2018 - Mar 2020",
    location: "Sitamarhi, Bihar",
    grade: "80.6%",
    status: "Completed"
  }
];

export const easterEggs = [
  {
    id: 1,
    title: "Download Resume",
    description: "Access the classified files",
    action: "download",
    icon: "FileDown"
  },
  {
    id: 2,
    title: "Upside Down Mode",
    description: "Flip the entire reality",
    action: "flip",
    icon: "FlipVertical"
  },
  {
    id: 3,
    title: "Demogorgon Alert",
    description: "Activate the alarm",
    action: "alert",
    icon: "AlertTriangle"
  },
  {
    id: 4,
    title: "Matrix Code Rain",
    description: "Enter the code dimension",
    action: "matrix",
    icon: "Binary"
  }
];