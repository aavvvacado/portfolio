import { Description } from "@radix-ui/react-toast";

export const portfolioData = {
  profile: {
    name: "Vishal Pratap Singh",
    username: "@aavvvacado",
    tagline: ["I", "build", "apps,", "UI", "&", "experiences"],
    bio: "Hello, I'm Vishal ! a 20 years old developer based in India. I'm a passionate developer who loves to code and build things.",
    availability: "Available for work",
    profileImage: "/placeholder.svg",
    email: "vpratapsingh099@gmail.com",
    phone: "8941813316"
  },
  
  techStack: {
    frontend: ["Flutter", "React Native"],
    backend: ["Firebase",  "REST APIs"],
    tools: ["Postman", "Git", "GitHub", "Jira", "Figma", "Docker", "Google Cloud Services", "VS Code", "Android Studio"],
    languages: ["Dart", "Java", "C/C++", "Python", "JavaScript", "TypeScript"],
    databases: ["PostgreSQL", "Firebase", "Supabase", "MongoDB", "Redis", "SQL","Hive"],
    stateManagement: ["BLoC", "Provider", "GetX", "Inherited Widget", "Riverpod"],
    testing: ["Unit Testing", "Widget Testing", "Integration Testing"],
    architecture: ["MVVM", "Clean Architecture", "MVC"]
  },
  
  socialLinks: [
    { name: "GitHub", icon: "github", url: "https://github.com/aavvvacado" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/vishal-pratap-singh-163280279/" },
    { name: "Twitter", icon: "twitter", url: "https://x.com/aavvvacado" },
    { name: "Email", icon: "mail", url: "mailto:vpratapsingh099@gmail.com" },
    { name: "Discord", icon: "message-circle", url: "https://discord.com/users/aavvvacado" },
    { name: "LeetCode", icon: "code", url: "https://leetcode.com/u/user1782y/" },
  ],
  
  projects: [
    {
      title: "Chargerrr",
      description: "To simplify and accelerate EV adoption by providing seamless access to reliable, real-time, and unified electric vehicle charging infrastructure across India through a single intelligent platform.",
      image: "/placeholder.svg",
      logo: "chargerrr",
      video: "https://github.com/user-attachments/assets/a136e9f0-5da6-4481-92bc-ba17e9a0a369",
      url: "https://github.com/aavvvacado/Chargerrr",
      tech: ["Flutter", "Dart", "GetX", "Firebase", "Firestore", "Maps", "Location Services", "TTS", "Lottie"]
    },
    {
      title: "Asset Manager",
      description: "Modern asset management app built with Flutter to help users organize, track, and manage valuable assets (insurances, vehicles, jewellery, real estate, electronics, collectibles, and arts). Features Firebase authentication, Firestore storage, image uploads, AI assistant, category tabs, and responsive UI with BLoC state management.",
      image: "/placeholder.svg",
      logo: "assetwize",
      video: "https://github.com/user-attachments/assets/a19ca3fe-4f37-47dd-997e-210e0b572b3b",
      url: "https://github.com/aavvvacado/assetwize",
      tech: ["Flutter", "Firebase", "Firestore", "AI", "BLoC", "Clean Architecture"]
    },
    {
      title: "NEUROFORGE ATC",
      description: "AI-powered cattle management application with real-time health monitoring, smart breed insights, and predictive analytics. Built with Flutter using feature-based architecture, BLoC state management, and Hive for local storage. Helps farmers track cattle health, manage breeding programs, and optimize livestock management through intelligent data analysis.",
      image: "/placeholder.svg",
      logo: "neoforge_atc",
      video: "https://github.com/user-attachments/assets/d442c808-dfe7-4c07-b512-257607d74eaf",
      url: "https://github.com/aavvvacado/neoforge_mobileapp",
      tech: ["Flutter", "Dart", "BLoC", "Hive", "Dio", "Spring Boot", "REST APIs", "Clean Architecture","ML"]
    },
    {
      title: "Expense Manager DApp",
      description: "Decentralized expense tracking application built on Ethereum blockchain. Features smart contracts for secure transaction recording, transparent expense management, and immutable financial records with a modern Flutter interface.",
      image: "/placeholder.svg",
      logo: "expensemanager",
      video: "https://github.com/user-attachments/assets/407b2e8f-1ea0-4933-95d9-fca4c6ab3770",
      url: "https://github.com/aavvvacado/Expense-Manager-Dapp",
      tech: ["Solidity", "Truffle", "Flutter", "Ethereum", "Web3", "Smart Contracts"]
    },
    {
      title: "Smart Tyre Pulse",
      description: "IoT-powered tyre performance monitoring system with predictive maintenance capabilities. Tracks tyre health in real-time, provides cost analysis, wear predictions, and maintenance alerts to optimize vehicle performance and reduce operational costs.",
      image: "/placeholder.svg",
      url: "https://github.com/aavvvacado/smarttyrepulse",
      tech: ["Flutter", "Firebase", "IoT", "Real-time Monitoring", "Predictive Analytics", "MQTT"]
    }
  ],
  
  dailyTools: [
    { name: "VSCode", icon: "code" },
    { name: "Figma", icon: "figma" },
    { name: "Postman", icon: "package" },
    { name: "Terminal", icon: "terminal" },
    { name: "Git", icon: "git-branch" },
    { name: "Firebase", icon: "flame" }
  ],
  
  testimonials: [
    {
      text:
        "He demonstrated strong technical skills in Flutter and a solid understanding of mobile application development. His work ethic was sincere and punctual, and he consistently showed a proactive approach toward learning and problem-solving. He contributed effectively to front-end development tasks and displayed professionalism, adaptability, and a positive attitude throughout the internship. His dedication and performance were commendable.",
      author: "GForce Pvt. Ltd",
      role: "Flutter Frontend Intern"
    }
  ],
  
  story: [
    {
      period: "Oct 2025 - Dec 2025",
      role: "Freelance Flutter Developer",
      company: "Fluence Pay",
      description: "Developed user and merchant personas for Fluence Pay Phase 1 MVP. Built the entire application from scratch, including API integration, payment gateway integration (MSwipe), Graph API OAuth for Instagram linking, and comprehensive user experience design."
    },
    {
      period: "May 2025 - July 2025",
      role: "Flutter Frontend Intern",
      company: "GForce Pvt. Ltd",
      description: "Built responsive cross-platform Flutter apps (iOS & Android) with REST API integration from scratch, BLoC state management, performance optimization, and hands-on contribution to a live startup project."

    },
    {
      period: "Nov 2024 - Dec 2024",
      role: "Freelance Flutter Developer",
      company: "SIH 2024 Project",
      description: "Developed a mobile application to track and verify tyre fitment records for mining vehicles, helping prevent accidents and injuries."
    },
    {
      period: "Aug 2023 - May 2027",
      role: "B.Tech in Information Technology",
      company: "KIET Group of Institutions"
    }
  ],
  
  currentlyPlaying: {
    title: "Selfless",
    artist: "The Strokes",
    album: "The New Abnormal",
    year: "2020",
    coverArt: "/placeholder.svg"
  }
};