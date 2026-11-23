/**
 * ============================================================================
 * PORTFOLIO DATA CONFIGURATION (ZERO-DATABASE ARCHITECTURE)
 * ============================================================================
 * Edit this single file to update your profile, stats, skills, projects,
 * career timeline, testimonials, and FAQs.
 *
 * HOW TO ADD A NEW PROJECT IN 30 SECONDS:
 * 1. Drop your screenshot into: public/images/projects/your-image.png
 * 2. Add a new object to the `projects` array below (without a leading slash).
 * ============================================================================
 */

export const portfolioData = {
  personal: {
    brandName: "Hammad Iqbal",
    fullName: "Hammad Iqbal",
    greeting: "Hi, I'm Hammad Iqbal",
    heroTitleLine1: "I design & build",
    heroTitleLine2: "web & AI applications",
    heroBio:
      "Full-stack developer and AI engineer specializing in React, Python, and explainable deep learning. I create clean, performant, and user-focused applications.",
    aboutTitle: "About Me",
    aboutParagraphs: [
      "I'm a Computer Science & AI developer focused on building digital products that solve real-world problems. I specialize in creating clean, performant web applications and explainable AI systems using modern technologies.",
      "My journey started with a fascination for the intersection of intuitive UI design and intelligent software. Today, I bring that same curiosity to every project—whether it's crafting pixel-perfect interfaces, architecting secure databases, or training computer vision models.",
      "When I'm not coding, you'll find me contributing to community initiatives, exploring AI-assisted developer workflows, or refining user experiences.",
    ],
    profileImage: "images/mypic.jpeg",
    footerTagline:
      "Full-stack developer and AI engineer crafting exceptional digital experiences.",
    email: "hammad.iqbal.dev@gmail.com",
    resumePath: "resume.pdf",
    resumeDownloadName: "Hammad_Iqbal_Resume.pdf",
    socials: {
      github: "https://github.com/yourusername",
      twitter: "https://twitter.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      website: "https://yourusername.github.io",
    },
  },

  heroTechBadges: [
    { name: "React", short: "⚛️" },
    { name: "Python", short: "PY" },
    { name: "Node.js", short: "JS" },
    { name: "MySQL", short: "DB" },
    { name: "pandas", short: "AI" },
  ],

  heroStats: [
    { value: "15+", label: "Projects Delivered" },
    { value: "3+", label: "Years Coding" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Client Focus" },
  ],

  aboutStats: [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "1+", label: "Happy Collaborators" },
  ],

  expertise: [
    {
      title: "Frontend",
      iconName: "Code2",
      skills: ["React", "JavaScript (ES6+)", "HTML5", "Standard CSS3", "Responsive UI"],
    },
    {
      title: "Backend & Data",
      iconName: "Server",
      skills: ["Node.js", "Python", "MySQL", "REST APIs"],
    },
    {
      title: "AI & Tools",
      iconName: "Cpu",
      skills: ["numpy", "Grad-CAM & SHAP", "pandas", "Git & GitHub", "UI/UX Design"],
    },
  ],

  projects: [
    {
      id: "oculens-ai",
      category: "AI / ML Application",
      title: "OcuLens — AI Eye Disease Screening",
      description:
        "An AI-powered retinal screening platform detecting Diabetic Retinopathy and Glaucoma with Grad-CAM and SHAP explainability heatmaps.",
      image: "projects/oci.png",
      tags: ["React", "Python", "PyTorch", "Grad-CAM"],
      githubUrl: "https://github.com/yourusername/oculens",
      liveUrl: "https://yourusername.github.io/oculens",
    },
    {
      id: "secure-portal",
      category: "Education Management System",
      title: "ABM Result Management System",
      description:
        "An academic dashboard for managing students, courses, results, attendance, and performance reports.",
      image: "projects/rms.png",
      tags: ["Dashboard", "Academic Records", "Analytics"],
      githubUrl: "https://github.com/yourusername/secure-portal",
      liveUrl: "https://yourusername.github.io/secure-portal",
    },
    {
      id: "ai-ux-auditor",
      category: "E-commerce",
      title: "Ultimate Wear — Smartwatch Storefront",
      description:
        "A minimalist smartwatch storefront with product details, selectable variants, and feature highlights.",
      image: "projects/watch.png",
      tags: ["E-commerce", "Product UI", "Responsive Design"],
      githubUrl: "https://github.com/yourusername/ai-ux-auditor",
      liveUrl: "",
    },
    {
      id: "community-portal",
      category: "Web Application",
      title: "Student Aid & Outreach Portal",
      description:
        "A transparent campaign tracking and student support coordination platform built to streamline peer-contribution initiatives across university classes.",
      image: "",
      tags: ["React", "CSS Grid", "JavaScript", "GitHub Pages"],
      githubUrl: "https://github.com/yourusername/aid-portal",
      liveUrl: "https://yourusername.github.io/aid-portal",
    },
  ],

  experience: [
    {
      period: "2025 - Present",
      role: "Lead AI & Frontend Developer",
      company: "OcuLens Final Year Project",
      side: "left",
      points: [
        "Architected a full-stack retinal screening interface in React with explainable AI heatmap overlays",
        "Benchmarked ResNet-50, EfficientNet, and Vision Transformer (ViT) models on clinical datasets",
        "Designed a responsive, zero-friction clinical dashboard for rapid diagnostic review",
      ],
    },
    {
      period: "2024 - 2025",
      role: "Full-Stack Web Developer",
      company: "Information Security & Web Systems",
      side: "right",
      points: [
        "Built a multi-role authentication portal with MySQL-backed immutable audit logging",
        "Engineered modular, dependency-free Standard CSS design systems for fast load times",
        "Automated multi-viewport UI/UX quality audits using Python and Playwright",
      ],
    },
    {
      period: "2023 - 2024",
      role: "Student Coordinator & Organizer",
      company: "University Financial Aid Community",
      side: "left",
      points: [
        "Coordinated peer-contribution outreach campaigns across 8 university classes",
        "Structured clear communication workflows to support fellow students with semester fees",
        "Collaborated closely with faculty leadership to maintain transparent reporting",
      ],
    },
  ],

  testimonials: [
    {
      initial: "E",
      name: "Sir Eid Rehman",
      role: "Head of Department",
      quote:
        "Hammad combines strong technical execution with structured leadership. His ability to organize initiatives and deliver clean solutions stands out.",
    },
    {
      initial: "F",
      name: "Fiza Khan",
      role: "Community Co-Organizer",
      quote:
        "Working alongside Hammad is seamless. He breaks down complex plans into clear, actionable steps and always delivers on time.",
    },
    {
      initial: "A",
      name: "Alex Rivera",
      role: "Product Design Lead",
      quote:
        "Clean architecture, responsive layouts, and thoughtful attention to user experience from start to finish.",
    },
    {
      initial: "S",
      name: "Sara Ahmed",
      role: "Software Engineer",
      quote:
        "His integration of Explainable AI visuals into a clean React interface made complex model outputs immediately understandable.",
    },
  ],

  faqs: [
    {
      question: "What is your availability for new projects or internships?",
      answer:
        "I am currently open to freelance web development projects, AI/ML collaborations, and full-time or internship software engineering roles.",
    },
    {
      question: "What does your development process look like?",
      answer:
        "I follow a visual-first, iterative workflow: starting with clean UI/UX prototyping, building modular responsive frontends, and integrating reliable backend APIs and databases.",
    },
    {
      question: "Which technologies do you specialize in?",
      answer:
        "My core stack includes React.js, JavaScript (ES6+), Standard CSS3, Python, PyTorch, Node.js, and MySQL.",
    },
    {
      question: "Can we collaborate on an AI or Computer Vision project?",
      answer:
        "Yes! I have hands-on experience building computer vision pipelines with ResNet, EfficientNet, ViT, and Explainable AI tools like Grad-CAM and SHAP.",
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "I check messages daily and typically respond within 24 hours via email or the contact form below.",
    },
  ],
};