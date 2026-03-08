export const siteConfig = {
  name: "Prasanna Madiwar",
  title: "AI Engineer · Generative AI · LLM Systems",
  description: "Portfolio website of Prasanna Madiwar",
  accentColor: "#1d4ed8",
  social: {
    email: "prasannamadiwar71@gmail.com",
    linkedin: "https://www.linkedin.com/in/prasanna-madiwar",
    github: "https://github.com/prasanna-madiwar",
  },
  aboutMe:
    "AI Engineer specializing in Generative AI and Large Language Model systems, with hands-on experience implementing GPT-style transformer models from scratch using PyTorch, including pretraining and instruction fine-tuning workflows. Experienced in building production-grade RAG pipelines and tool-augmented AI agents using LangChain and LangGraph, deployed through FastAPI APIs. Focused on end-to-end ML pipelines, transformer architectures, agentic AI systems, and scalable LLM application development.",
  skills: [
    "Python",
    "Java",
    "PyTorch",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Flask",
    "CrewAI",
    "LangSmith",
    "MCP",
    "ChromaDB",
    "Transformer Models",
    "RAG Pipelines",
    "Prompt Engineering",
    "Git",
    "REST APIs",
  ],
  projects: [
    {
      name: "GPT-2 Implementation & Instruction Fine-Tuning",
      description:
        "Implemented GPT-2 from scratch using PyTorch, building tokenization, multi-head self-attention, transformer blocks, causal masking, and training loops. Fine-tuned the model using Alpaca-style instruction datasets with additional post-layer normalization for improved stability and convergence.",
      link: "",
      skills: ["PyTorch", "Python", "Transformer Architecture", "Fine-Tuning"],
    },
    {
      name: "Data Analyst Agent",
      description:
        "Built an autonomous AI data analyst system capable of processing CSV datasets. Designed a multi-node LangGraph agent pipeline where AI agents dynamically generate and execute Python code for data preprocessing, feature encoding, and exploratory data analysis with secure Daytona sandbox execution.",
      link: "",
      skills: ["LangChain", "LangGraph", "DeepAgents", "Daytona"],
    },
    {
      name: "NexusAI – Central Hub Connecting Tools and Reasoning",
      description:
        "Built a stateful AI orchestration platform with multi-agent architecture using LangChain DeepAgents. Developed a task delegation system where a central agent routes tasks to specialized agents, integrating Gmail automation, calendar scheduling, DuckDuckGo search, and medical RAG knowledge retrieval via FastAPI endpoints.",
      link: "",
      skills: ["LangGraph", "LangChain", "DeepAgents", "FastAPI"],
    },
  ],
  experience: [] as { company: string; title: string; dateRange: string; bullets: string[] }[],
  education: [
    {
      school: "Vishwakarma Institute of Technology, Pune",
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      dateRange: "Aug 2025 - Jun 2028 (Pursuing)",
      achievements: [
        "Relevant coursework: Machine Learning, Statistics for ML, Mathematics for ML, Generative AI & Agentic AI, Transformer Architecture, Attention Mechanisms, Data Structures",
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
