import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full Stack Web Development",
    company: "Self Employed",
    startDate: "Jan 2025",
    isCurrentJob: true,
    location: "Blitar, East Java",
    description: [
      "Designed and developed a fullstack web application for school index book and violation management.",
      "Implemented user authentication, student and teacher management, and violation tracking features.",
      "Built backend APIs using NestJS and connected to a PostgreSQL database for secure data storage.",
      "Created an intuitive frontend interface for administrators and teachers to manage student records, track violations, and generate reports.",
      "Ensured responsive UI, data validation, and role-based access throughout the application."
    ],
  },
  {
    designation: "Internship Backend Web Developer",
    company: "PT Havedev Cipta Teknologi",
    startDate: "Jul 2024",
    endDate: "Jan 2025",
    isCurrentJob: false,
    location: "Blitar, East Java",
    description: [
      "Worked as a backend intern focused on fixing bugs and adding new features.",
      "Utilized NestJS for building and enhancing backend APIs.",
      "Tested and documented APIs using Postman.",
      "Worked with PostgreSQL for database design and management."
    ],
  },
];

export default experiences;
