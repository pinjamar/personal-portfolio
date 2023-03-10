import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: backend,
  },
  {
    title: "Crypto Researcher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Junior Frontend Developer",
    company_name: "Code Base",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Learning and working with a lot of new frontend technologies (Typescript, Node.js, MongoDB, SQL, Tailwind, Three.js)",
      "Implementing responsive design, styling components and ensuring cross-browser compatibility, working a lot with HTML/CSS/SCSS.",
    ],
  },
  {
    title: "Crypto researcher / analyst",
    company_name: "Shard Labs",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2022 - Oct 2022",
    points: [
      "Blockchain analyst and researcher of various Web3 projects",
      "Aggregated data across various blockchains, exchanges (CEXes & DEXes)",
      "Researched developer teams, tech conferences, socials, VCs, tokenmetrics ",
      "Used Airtable for data storage and Power BI for data visualization",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelancer",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2021 - May 2022",
    points: [
      "'beaconsmind AG' - Converted design templates of the complete dashboard to HTML/CSS for a business app in React",
      "'metahub.info' - NFT and Crypto blog for which I was a content creator",
      "'Agilathon' - worked as a Javascript developer inside a companies custom solution - got exposure to MongoDB and APIs",
      "'TaxTris' - developer, calculant and tester for crypto startup building CEX - tax reports (C# simple scripting / testing and PostgreSQL data storage) ",
      "'TopCroatiaSailing' - built a static webpage for a nautical charter ",
    ],
  },
  {
    title: "Frontend Developer (internship)",
    company_name: "Code Base",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2020 - May 2021",
    points: [
      "Worked frontend parts of several business apps and some web pages",
      "Used HTML, CSS, SCSS, Javascript. Figma, Git and React",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Defined and implemented simple React components (cards, forms etc.).",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Adria Docks",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2015 - Apr 2020",
    points: [
      "Did procurement and warehouse operations, coordinated contractors",
      "Shiprepair projects analysis', did business reports monthly and made budget plans - reported business results to the CEO.",
      "Sorted all costs and prepared financial reports by projects for bookkeeping.",
      "Implemented ERP and BI systems (first with 'Infor LN' and afterwards with 'Pantheon') - used them for analysis and supporting Project Managers.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
