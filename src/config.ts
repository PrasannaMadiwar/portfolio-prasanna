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
    "I am pursuing a B.Tech in Artificial Intelligence and Machine Learning at Vishwakarma Institute of Technology, Pune, with a current CGPA of 9.33. After completing a Diploma in Electronics and Tele-Communication from Ballarpur Institute of Technology with 94.41%, I transitioned from electronics and embedded systems toward software engineering, backend development, and AI/LLM systems. I enjoy building backend applications, APIs, AI-powered systems, and production-oriented software while strengthening Data Structures & Algorithms and core Computer Science fundamentals.",
  skillGroups: [
    { name: "Programming", items: ["Python", "Java", "SQL"] },
    { name: "Computer Science", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Operating Systems", "Computer Networks"] },
    { name: "Backend", items: ["FastAPI", "REST APIs", "SQLAlchemy", "Pydantic", "JWT", "OAuth2", "Async Programming"] },
    { name: "Databases", items: ["PostgreSQL", "SQLite"] },
    { name: "Testing & Tools", items: ["PyTest", "Git", "GitHub", "Docker"] },
    { name: "AI / Generative AI", items: ["PyTorch", "LangChain", "LangGraph", "DeepAgents", "RAG", "LLMs", "MCP", "Transformer Architectures", "Fine-Tuning", "Prompt Engineering"] },
  ],
  projects: [
    {
      name: "NexusAI – AI Agent Orchestration Platform",
      description:
        "AI agent orchestration platform that coordinates specialized agents and external tools through a FastAPI backend.",
      link: "",
      skills: ["FastAPI", "Python", "LangGraph", "LangChain", "DeepAgents"],
      features: ["Modular FastAPI backend", "Stateful multi-agent orchestration using LangGraph", "Asynchronous task execution", "Tool routing", "Gmail and Calendar integrations", "Secure code execution workflows"],
      note: "Currently extending the platform with authentication, user isolation, and secure storage of tool credentials.",
    },
    {
      name: "Bank of Wasera – Banking & Payments Platform",
      description:
        "Banking backend in development, focused on account management, payments, transactions, PostgreSQL, and financial data integrity.",
      link: "",
      skills: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Authentication"],
      features: ["Account management", "Payments and transactions", "Financial data integrity"],
      note: "In Development: double-entry ledger, idempotency, database transactions, optimistic locking, audit logs, Redis, Celery, and Docker.",
    },
    {
      name: "LLM Fine-Tuning SaaS Platform",
      description:
        "Backend platform for preparing datasets and managing LLM fine-tuning jobs with RunPod cloud GPU integration.",
      link: "",
      skills: ["FastAPI", "Python", "PostgreSQL", "PyTorch", "RunPod"],
      features: ["Automated dataset preparation and standardization", "Instruction-tuning JSONL conversion", "Training job management", "Checkpoint, metrics, logs, and model artifact handling"],
    },
    {
      name: "GPT-2 Architecture Modification",
      description: "Research-oriented modification of the GPT-2 Transformer architecture by introducing an additional post-LayerNorm layer and evaluating training behavior.",
      link: "",
      skills: ["PyTorch", "Python"],
      features: ["Multi-head self-attention", "Causal masking", "Positional embeddings", "Transformer blocks", "Training and validation loss evaluation", "Training stability analysis"],
    },
  ],
  problemSolving: { solved: "200+", easy: 75, medium: 105, hard: 20, submissions: 651, acceptance: "59.45%", link: "https://leetcode.com/u/LzLJWzHwdb/" },
  publication: {
    title: "Stabilizing GPT-2 Training via an Additional Post-Normalization Layer",
    venue: "Published Research Paper — ICST 2026, IIT Patna",
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
