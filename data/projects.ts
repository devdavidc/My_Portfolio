export interface Project {
  id: number;
  projectTitle: string;
  projectDescription: string;
  projectImage: string;
  projectPreviewLink?: string;
  projectSourceCode?: string;
  projectTechnologies?: string[];
}

export const projectsEn: Project[] = [
  {
    id: 1,
    projectTitle:"React Native + Expo Template",
    projectDescription:"A template for building cross-platform apps using React Native and Expo with NativeWind and MongoDB already configured.",
    projectImage:"/images/project1.png",
    projectSourceCode:"https://github.com/devdavidc/React-Native-Template",
    projectTechnologies: ["React Native", "Expo", "NativeWind", "MongoDB", "TypeScript", "Node.js"]
  },
  {
    id: 2,
    projectTitle: "Local AI Agent for documentation questions",
    projectDescription: "An AI agent that can answer questions about documentation using n8n, RAG (Retrieval-Augmented Generation), custom tools and MCP Servers.",
    projectImage: "/images/project2.png",
    projectSourceCode: "https://github.com/davidcrm/n8n-development",
    projectTechnologies: ["n8n", "RAG", "Docker", "MCP Servers", "PostgreSQL", "Node.js", "Python"]
  },
  {
    id: 3,
    projectTitle: "EsPROLAMA - Autoevaluación de centros de español",
    projectDescription: "EsPROLAMA is a Tool fully developed with Django to support the teaching and learning of Spanish in migratory contexts.",
    projectImage: "/images/project3.png",
    projectTechnologies: ["Django", "PostgreSQL", "Docker", "Bootstrap"],
  },
  {
    id: 4,
    projectTitle: "Recipe App",
    projectDescription: "A mobile recipe app developed using React Native + Expo, Express and MongoD that allows users to create and save their favorite recipes.",
    projectImage: "/images/project4.png",
    projectSourceCode: "https://github.com/devdavidc/recipe-app",
    projectTechnologies: ["React Native", "Expo", "Express", "MongoDB", "NativeWind", "TypeScript"]
  }
]

export const projectsEs: Project[] = [
  {
    id: 1,
    projectTitle: "Plantilla React Native + Expo",
    projectDescription: "Plantilla para crear apps multiplataforma con React Native y Expo, ya configurada con NativeWind y MongoDB.",
    projectImage: "/images/project1.png",
    projectSourceCode: "https://github.com/devdavidc/React-Native-Template",
    projectTechnologies: ["React Native", "Expo", "NativeWind", "MongoDB", "TypeScript", "Node.js"]
  },
  {
    id: 2,
    projectTitle: "Agente de IA local para consultas sobre documentación",
    projectDescription: "Un agente de IA capaz de responder preguntas sobre documentación utilizando n8n, RAG (Retrieval-Augmented Generation), herramientas personalizadas y servidores MCP.",
    projectImage: "/images/project2.png",
    projectSourceCode: "https://github.com/davidcrm/n8n-development",
    projectTechnologies: ["n8n", "RAG", "Docker", "Servidores MCP", "PostgreSQL", "Node.js", "Python"]
  },
  {
    id: 3,
    projectTitle: "EsPROLAMA - Autoevaluación de centros de español",
    projectDescription: "EsPROLAMA es una herramienta desarrollada íntegramente con Django para apoyar la enseñanza y el aprendizaje del español en contextos migratorios.",
    projectImage: "/images/project3.png",
    projectTechnologies: ["Django", "PostgreSQL", "Docker", "Bootstrap"],
  },
  {
    id: 4,
    projectTitle: "App de Recetas",
    projectDescription: "Una aplicación móvil de recetas desarrollada con React Native + Expo, Express y MongoDB que permite a los usuarios crear y guardar sus recetas favoritas.",
    projectImage: "/images/project4.png",
    projectSourceCode: "https://github.com/devdavidc/recipe-app",
    projectTechnologies: ["React Native", "Expo", "Express", "MongoDB", "NativeWind", "TypeScript"]
  }
]
