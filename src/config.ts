export const siteConfig = {
  name: "Prasanna Madiwar",
  title: "Backend Engineer | AI Systems | Seeking SDE Internship (Summer 2027)",
  description: "B.Tech AI/ML student building backend services for AI workloads: multi-tenant agent APIs, sandboxed code execution, and GPU job orchestration.",
  accentColor: "#0f766e",
  avatar: "/profile.jpg",
  social: {
    email: "prasannamadiwar71@gmail.com",
    phone: "+91-9527564209",
    linkedin: "https://www.linkedin.com/in/prasanna-madiwar-507462318/",
    github: "https://github.com/PrasannaMadiwar",
    leetcode: "https://leetcode.com/u/LzLJWzHwdb/",
    takeuforward: "https://takeuforward.org/profile/prasannamadiwar",
    codechef: "https://www.codechef.com/users/prasanna_m146",
  },
  aboutMe:
    "B.Tech AI/ML student at Vishwakarma Institute of Technology, Pune (CGPA 9.33/10) who builds backend services for AI workloads: multi-tenant agent APIs, sandboxed code execution, and GPU job orchestration. I work mainly in Python with FastAPI, Celery, PostgreSQL, MongoDB, Redis, and Docker. My projects have 350+ automated tests and CI behind them, and per-user access is enforced on every job, thread, and credential route. I presented GPT-2 training-stability research at ICST 2026, IIT Patna. Before VIT I completed a Diploma in Electronics & Tele-Communication at Ballarpur Institute of Technology with 94.41%. I'm looking for an SDE internship for Summer 2027.",
  skillGroups: [
    { name: "Languages", items: ["Python (primary)", "Java", "SQL"] },
    { name: "Backend Services", items: ["FastAPI", "REST APIs", "Async I/O", "Celery", "JWT", "OAuth2", "SQLAlchemy", "Pydantic"] },
    { name: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "SQLite"] },
    { name: "Engineering Practices", items: ["pytest", "GitHub Actions CI", "Health Checks & Structured Logging", "Design Docs", "Docker", "Git"] },
    { name: "AI Systems", items: ["LLM Fine-Tuning", "LangGraph Agent Orchestration", "PyTorch", "Hugging Face Transformers", "LangChain"] },
    { name: "Fundamentals", items: ["Object-Oriented Programming", "SOLID", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Networks"] },
  ],
  projects: [
    {
      name: "NexusLLMFineTuner - LLM Fine-Tuning Backend",
      description:
        "Fine-tuning backend that takes a Hugging Face dataset through validation, chat-format mapping, and GPU training jobs behind a per-user job state machine.",
      link: "https://github.com/PrasannaMadiwar/LLM_FineTuner",
      github: "https://github.com/PrasannaMadiwar/LLM_FineTuner",
      skills: ["FastAPI", "Celery", "Redis", "PostgreSQL", "Docker", "GitHub Actions"],
      features: [
        "Engineered a fine-tuning backend (36 REST routes, Celery worker) with a 13-state job state machine; per-user JWT checks return 403/404 on every cross-user request.",
        "Implemented a Hugging Face dataset pipeline that previews rows through the Dataset Viewer API with no full download, maps columns to chat format via a schema-validated LLM call cached in PostgreSQL, and blocks malformed data with 7 validation checks.",
        "Designed a provider-agnostic GPUProvider interface (7-state lifecycle) and a 13-endpoint runtime agent that restricts GPU pods to 4 approved templates and an allowlist of commands.",
        "Fine-tuned Qwen2.5-1.5B on 2,000 examples (250 steps, about 6 min on a local RTX GPU) and exported a 73.9 MB adapter.",
        "Wrote 329 pytest tests (API 73%, agent 80% coverage) covering every job-state transition with a fake GPU provider, and gated merges with GitHub Actions CI.",
      ],
    },
    {
      name: "NexusAI - Multi-Tenant Agent Backend",
      description:
        "Multi-tenant agent backend that orchestrates Gmail, Calendar, Meet/Zoom, and web-search subagents in LangGraph, with isolated tenants and an encrypted credential vault.",
      link: "https://nexusai-hub.onrender.com",
      live: true,
      github: "https://github.com/PrasannaMadiwar/NexusAI-Central-hub-connecting-tools-and-reasoning",
      skills: ["FastAPI", "LangGraph", "PostgreSQL", "MongoDB", "Docker", "GitHub Actions"],
      features: [
        "Built a multi-tenant agent backend (5 FastAPI routers; repositories, services, dependency injection) that orchestrates 4 subagents (Gmail, Calendar, Meet/Zoom, web search) in LangGraph, with state checkpointed in PostgreSQL.",
        "Isolated tenants with JWT auth, PBKDF2-SHA256 password hashing, and an encrypted per-user credential vault on MongoDB Atlas, verified by 7 tenant-isolation tests.",
        "Tested the service with 23 pytest tests (67% coverage) and added a CI coverage gate, a /health check on PostgreSQL and MongoDB, and structured JSON logs with request IDs.",
      ],
    },
    {
      name: "NexusCode Judge - Sandboxed Code Judge",
      description:
        "Online-judge backend that runs each submission in an isolated Docker container and returns a verdict.",
      skills: ["FastAPI", "Docker", "Python", "PostgreSQL", "MongoDB"],
      features: [
        "Building a Python judging pipeline that runs each submission in an isolated Docker container against per-testcase expected output, returning verdicts with error handling, runtime measurement, and time and memory limits.",
      ],
      note: "In progress (Oct 2026 - present)",
    },
    {
      name: "GPT-2 Architecture Modification & Stability Research",
      description:
        "Research-oriented modification of the GPT-2 Transformer architecture by introducing an additional post-LayerNorm layer to stabilize training dynamics and evaluate loss convergence.",
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
      live: true,
      skills: ["React", "JavaScript", "Vercel", "REST APIs"],
      features: [
        "Responsive task creation, status categorization, and priority management.",
        "Clean component architecture deployed live to production on Vercel.",
      ],
    },
  ],
  problemSolving: {
    solved: 352,
    easy: 116,
    medium: 192,
    hard: 44,
    ranking: 405255,
    submissions: 1157,
    acceptance: "60.52%",
    link: "https://leetcode.com/u/LzLJWzHwdb/",
    tufUsername: "prasannamadiwar",
    tufPlusScore: 513,
    tufTotalQuestions: 1494,
    codechefUsername: "prasanna_m146",
    codechefDsaRating: "1124 (1★)",
    codechefNormalRating: "1124",
    codechefMaxRating: "1124",
    codechefGlobalRank: "1,11,226",
    platforms: [
      {
        name: "TakeUForward (TUF+)",
        id: "takeuforward",
        link: "https://takeuforward.org/profile/prasannamadiwar",
        stats: [
          { value: "513", label: "TUF+ Score" },
          { value: "513", label: "Problems solved" },
          { value: "1,494", label: "Sheet questions" },
        ],
      },
      {
        name: "CodeChef",
        id: "codechef",
        link: "https://www.codechef.com/users/prasanna_m146",
        stats: [
          { value: "1124", label: "DSA rating (1★)" },
          { value: "1124", label: "Normal / Contest rating" },
          { value: "#1,11,226", label: "Global rank" },
        ],
      },
    ],
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
        "Elected President of the Student Association; led 5+ campus activities engaging 2,000+ students, managed organizational operations, and coordinated technical symposiums.",
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
      dateRange: "Aug 2025 - Jun 2028 (Expected)",
      achievements: [
        "CGPA: 9.33/10",
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
