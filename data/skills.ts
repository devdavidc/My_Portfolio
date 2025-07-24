export interface SkillCard {
  id: number;
  title: string;
  content: Skill[];
}

  interface Skill {

  title: string;
  description: string;
  level?: string;
  }

  export const skills: SkillCard[] = [
    {
      id: 1,
      title: "Soft Skills and Certfications",
      content: [
        { title: "Communication", description: "Effective verbal and written communication skills." },
        { title: "Teamwork", description: "Ability to work collaboratively in a team environment." },
        { title: "Problem Solving", description: "Strong analytical and problem-solving abilities." },
        { title: "Time Management", description: "Efficiently managing time and prioritizing tasks." },
      ],
    },
    {
      id: 2,
      title: "Side Projects",
      content: [
        { title: "Personal Portfolio Website", description: "A portfolio website showcasing my projects and skills." },
        { title: "E-commerce Platform", description: "A full-stack e-commerce application built with MERN stack." },
        { title: "Chat Application", description: "A real-time chat application using WebSocket and Node.js." },
      ],
    },
    ]