import { Icons } from "@/components/icons";
import countries from "../../public/countries.jpeg";
import expenseease from "../../public/expenseease.jpeg";
import chathub from "../../public/chathub.jpeg";

export const DATA = {
  name: "Nikhil Kumar Sahu",
  initials: "DV",
  url: "https://dillion.io",
  location: "Bhubaneswar, Odisha, India",
  locationLink: "",
  description: "Software Engineer",
  summary:
    "I'm a software engineer at KFinTech with expertise in web development, particularly the MERN stack. I frequently compete in coding contests on different coding platforms and am now delving into open-source contributions. Let's connect and explore opportunities to collaborate on exciting projects. ",
  avatarUrl: "/profilePic.jpg",
  skills: [
    "React.js",
    "Javascript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "C",
    "C++",
    "Python",
    "HTML",
    "CSS",
    "AWS EC2",
    "Material UI",
    "Tailwind CSS",
    "GIT",
    "Postman",
    "Bootstrap",
    "Styled-components",
  ],
  contact: {
    email: "nikhilsahu1312@gmail.com",
    tel: "+919556709942",
    social: {
      GitHub: {
        url: "https://github.com/nikhil822",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/nikhil-kumar-sahu-74347617a/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://twitter.com/nikhil13sahu",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "KFinTech",
      href: "https://www.kfintech.com/",
      badges: [],
      location: "Bhubaneswar, Odisha",
      title: "Software Engineer",
      logoUrl:
        "https://www.kfintech.com/wp-content/uploads/2023/11/Group-1000002745.png",
      start: "June 2024",
      end: "Present",
      description: ` `,
      technologies: ["React.js, MUI, Node.js, Express.js, PostgreSQL, AWS"],
    },
    {
      company: "KFinTech",
      href: "https://www.kfintech.com/",
      badges: [],
      location: "Bhubaneswar, Odisha",
      title: "Software Engineer Intern",
      logoUrl:
        "https://www.kfintech.com/wp-content/uploads/2023/11/Group-1000002745.png",
      start: "Dec 2023",
      end: "June 2024",
      description: `Designed a project’s front end using React.js and MUI from scratch up, integrating FusionCharts to present a range of datasets with efficiency. Implemented data persistence for seamless retention during page navigation, enhancing user experience.  Developed a query to efficiently retrieve and convert data from an AWS S3 bucket into a compressed zip file. `,
      technologies: ["React.js, MUI, Node.js, Express.js, PostgreSQL, AWS"],
    },
  ],
  education: [
    {
      school: "Veer Surendra Sai University of Technology",
      degree: "B.Tech in Information Technology",
      logoUrl: "https://www.vssut.ac.in/assets/images/logo-circle.png",
      start: "Dec 2020",
      end: "May 2024",
      grade: "CGPA: 8.39 / 10",
      tags: []
    },
    {
      school: "Kendriya Vidyalaya Gopalpur Military Station",
      // href: "https://uwaterloo.ca",
      degree: "CBSE(12th)",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQVheGl2AkiEKMPjZfhQiNFhguMosBZNShg&s",
      start: "2017",
      end: "2019",
      grade: "Percentage: 89.8%",
      tags: []
    },
  ],
  projects: [
    {
      title: "ChatHub",
      href: "https://chat-hub-frontend.vercel.app/",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a real-time chat app with MERN stack and Socket.io, ensuring security measures and enabling avatar customization for enhanced user engagement.",
      technologies: [
        "React.js",
        "Javascript",
        "Styled-Components",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
      ],
      links: [
        {
          type: "Website",
          href: "https://chat-hub-frontend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nikhil822/ChatHub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: chathub,
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "ExpenseEase",
      href: "https://expense-ease-frontend.vercel.app/",
      // dates: "June 2023 - Present",
      active: true,
      description:
        "Built MERN app for income/expense tracking with visual data representation and user-friendly functionalities. Integrated graphs for clear insights and implemented convenient delete/add features for usability.",
      technologies: [
        "React.js",
        "Javascript",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://expense-ease-frontend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nikhil822/ExpenseEase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: expenseease,
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Rest Countries API",
      href: "https://nikhilsahu.netlify.app/assets/countries-ObMoBtbj.jpeg",
      // dates: "April 2023 - September 2023",
      active: true,
      description:
        "A website that provides users with information about the countries.",
      technologies: ["React.js", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://nikhilsahu.netlify.app/assets/countries-ObMoBtbj.jpeg",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nikhil822/Rest_Countries_API",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: countries,
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [],
} as const;
