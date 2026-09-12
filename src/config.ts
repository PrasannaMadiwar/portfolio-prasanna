export const siteConfig = {
  name: "Prasanna Madiwar",
  title: "Software Developer | Backend Engineering | AI/LLM Systems",
  description: "Software developer building backend systems and AI-powered applications.",
  accentColor: "#0f766e",
  social: {
    email: "prasannamadiwar71@gmail.com",
    phone: "+91-9527564209",
    linkedin: "https://www.linkedin.com/in/prasanna-madiwar-507462318/",
    github: "https://github.com/PrasannaMadiwar",
    leetcode: "https://leetcode.com/u/LzLJWzHwdb/",
  },
  aboutMe:
    "Software Developer focused on backend engineering and AI-powered systems, with hands-on experience building and deploying scalable RESTful applications using Python, FastAPI, SQLAlchemy, PostgreSQL, and Docker. Experienced in developing stateful multi-agent architectures and LLM platforms using PyTorch, LangGraph, and LangChain, with practical experience in cloud deployment, asynchronous processing (Celery, Redis), and GPU orchestration (RunPod). Currently pursuing a B.Tech in Artificial Intelligence & Machine Learning at Vishwakarma Institute of Technology, Pune (CGPA: 9.33/10) after completing a Diploma in Electronics & Tele-Communication at Ballarpur Institute of Technology with 94.41%. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks, with a keen focus on software design principles (SOLID, Low-Level Design).",
  skillGroups: [
    { name: "Languages", items: ["Python", "SQL"] },
    { name: "Backend", items: ["FastAPI", "REST APIs", "SQLAlchemy", "Pydantic", "JWT", "OAuth2", "Async Programming"] },
    { name: "Databases", items: ["PostgreSQL", "MySQL", "SQLite"] },
    { name: "Cloud & DevOps", items: ["Docker", "Render", "RunPod", "Git", "Daytona", "GitHub", "CI/CD"] },
    { name: "AI & Generative AI", items: ["PyTorch", "Transformers", "LLMs", "LangChain", "LangGraph", "RAG", "MCP", "Agentic AI"] },
    { name: "CS Fundamentals", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"] },
    { name: "Software Engineering", items: ["SOLID", "DRY", "KISS", "YAGNI", "UML/Class Diagrams"] },
  ],
  projects: [
    {
      name: "NexusAI - Multi-Tenant AI Agent Orchestration Platform",
      description:
        "Production-grade AI agent orchestration platform that coordinates specialized autonomous agents and external integrations through a multi-tenant FastAPI backend.",
      link: "https://nexusai-hub.onrender.com",
      github: "https://github.com/PrasannaMadiwar/NexusAI-Central-hub-connecting-tools-and-reasoning",
      skills: ["FastAPI", "LangGraph", "DeepAgents", "PostgreSQL", "MongoDB", "Docker"],
      features: [
        "Engineered a multi-tenant FastAPI backend exposing 14 REST endpoints for authentication, agent execution, conversation threads, user profiles, and encrypted service-credential management.",
        "Built a stateful multi-agent orchestration layer using LangGraph and DeepAgents, integrating specialized workflows for Gmail, Google Calendar, Google Meet transcript analysis, web search, and sandboxed Python execution.",
        "Implemented JWT-based user isolation, SQLAlchemy-backed PostgreSQL persistence for threads/messages, and an encrypted MongoDB credential vault.",
        "Containerized with Docker and deployed on Render with automated CI/CD pipelines and health checks.",
      ],
    },
    {
      name: "LLM Fine-Tuning SaaS Platform",
      description:
        "End-to-end backend platform for preparing datasets, managing instruction tuning jobs, and orchestrating cloud GPUs with RunPod.",
      link: "https://github.com/PrasannaMadiwar/LLM_FineTuner",
      github: "https://github.com/PrasannaMadiwar/LLM_FineTuner",
      skills: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "RunPod", "PyTorch"],
      features: [
        "Engineered an end-to-end LLM fine-tuning platform using a FastAPI + Celery architecture with PostgreSQL and Redis for dataset processing, training orchestration, and model artifact management.",
        "Built a dataset intelligence pipeline with 5 REST endpoints for dataset discovery, metadata extraction, semantic schema mapping, validation, and normalization into instruction-tuning JSONL format with caching and history.",
        "Implemented a provider-agnostic GPU orchestration layer with 8 authenticated API endpoints, integrating RunPod for GPU provisioning, remote file transfer, command execution, training lifecycle management, logs, health checks, and model output handling.",
      ],
    },
    {
      name: "GPT-2 Architecture Modification & Stability Research",
      description:
        "Research-oriented modification of the GPT-2 Transformer architecture by introducing an additional post-LayerNorm layer to stabilize training dynamics and evaluate loss convergence.",
      link: "https://github.com/PrasannaMadiwar",
      skills: ["PyTorch", "Python", "Transformers", "Research"],
      features: [
        "Implemented GPT-2 Transformer architecture from scratch: multi-head self-attention, causal masking, positional embeddings, and custom transformer blocks.",
        "Designed and evaluated an additional post-normalization layer to eliminate gradient anomalies and improve convergence during training.",
        "Authored and presented original research at ICST 2026, IIT Patna.",
      ],
    },
    {
      name: "MyTodo - Task Management App",
      description:
        "Full-stack task management application for creating, organizing, and tracking daily workflows through a clean responsive user interface.",
      link: "https://frontend-mytodo.vercel.app/",
      skills: ["React", "JavaScript", "Vercel", "REST APIs"],
      features: [
        "Responsive task creation, status categorization, and priority management.",
        "Clean component architecture deployed live to production on Vercel.",
      ],
    },
  ],
  problemSolving: {
    solved: 261,
    easy: 93,
    medium: 143,
    hard: 25,
    ranking: 616281,
    submissions: 846,
    acceptance: "60.52%",
    link: "https://leetcode.com/u/LzLJWzHwdb/",
  },
  achievements: [
    {
      title: "Stabilizing GPT-2 Training via an Additional Post-Normalization Layer",
      category: "Research Paper",
      venue: "ICST 2026, IIT Patna",
      description:
        "Authored and presented research investigating architectural modifications to the GPT-2 Transformer, demonstrating improved stability and convergence through an additional post-normalization layer.",
      badge: "Published Research",
      icon: "paper",
    },
    {
      title: "Automated Solar Panel Cleaning Robot System",
      category: "Patent Application",
      venue: "Published Patent Application",
      description:
        "Published a patent application for an autonomous robotic cleaning mechanism designed to maintain optimal solar panel efficiency; currently pending further approval.",
      badge: "Patent Published",
      icon: "patent",
    },
    {
      title: "IoT-Based Smart Agriculture Monitoring & Control System",
      category: "Project Exhibition Winner",
      venue: "Government College of Engineering, Chandrapur",
      description:
        "Won 1st prize in project exhibition for developing an end-to-end IoT sensor and actuation system that automates irrigation and climate tracking for precision agriculture.",
      badge: "1st Place Winner",
      icon: "trophy",
    },
    {
      title: "President - BIT Student Association",
      category: "Leadership & Governance",
      venue: "Ballarpur Institute of Technology",
      description:
        "Elected President of the Student Association; spearheaded campus-wide student initiatives, managed organizational operations, and coordinated technical symposiums.",
      badge: "Leadership",
      icon: "leadership",
    },
  ],
  publication: {
    title: "Stabilizing GPT-2 Training via an Additional Post-Normalization Layer",
    venue: "Published Research Paper - ICST 2026, IIT Patna",
    description: "Research work focused on modifying the GPT-2 Transformer architecture by introducing an additional post-normalization layer and evaluating its effect on training stability.",
  },
  coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks", "Design and Analysis of Algorithms", "Machine Learning", "Deep Learning", "Generative AI", "Agentic AI"],
  experience: [] as { company: string; title: string; dateRange: string; bullets: string[] }[],
  education: [
    {
      school: "Vishwakarma Institute of Technology, Pune",
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      dateRange: "Aug 2025 - Jun 2028 (Pursuing)",
      achievements: [
        "CGPA: 9.33",
      ],
    },
    {
      school: "Ballarpur Institute of Technology",
      degree: "Diploma in Electronics and Tele-Communication",
      dateRange: "Aug 2022 - Jun 2025",
      achievements: [
        "Score: 94.41%",
      ],
    },
  ],
};
