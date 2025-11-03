import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "violation-app",
    title: "Violation Management App",
    description:
      "A fullstack web application for school violation management. Features user authentication, teacher and student management, violation tracking, reporting, and role-based access.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React", "Javascript", "NestJS", "NextJS"],
  },
  {
    id: "index-app",
    title: "Index Book Management App",
    description:
      "A fullstack web application for index book management. Features user authentication, teacher and student management, violation tracking, reporting, and role-based access.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    tags: ["React", "Javascript", "NestJS", "NextJS"],
  },
];
export default projects;
