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
  meta,
  code,
  btc,
  adria,
  freelancer,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React.js Developer',
    icon: mobile,
  },
  {
    title: 'Front-End Developer',
    icon: backend,
  },
  {
    title: 'Crypto Researcher',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Junior Frontend Developer',
    company_name: 'Code Base',
    icon: code,
    iconBg: '#E6DEDD',
    date: 'Nov 2022 - Present',
    points: [
      'Developing web applications using React.js and other related technologies.',
      'Learning and working with a lot of new frontend technologies (Typescript, Node.js, MongoDB, SQL, Tailwind, Three.js)',
      'Implementing responsive design, styling components and ensuring cross-browser compatibility, working a lot with HTML/CSS/SCSS.',
    ],
  },
  {
    title: 'Crypto researcher / analyst',
    company_name: 'Shard Labs',
    icon: btc,
    iconBg: '#383E56',
    date: 'May 2022 - Oct 2022',
    points: [
      'Blockchain analyst and researcher of various Web3 projects',
      'Aggregated data across various blockchains, exchanges (CEXes & DEXes)',
      'Researched developer teams, tech conferences, socials, VCs, tokenmetrics ',
      'Used Airtable for data storage and Power BI for data visualization',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Freelancer',
    icon: freelancer,
    iconBg: '#E6DEDD',
    date: 'May 2021 - May 2022',
    points: [
      "'beaconsmind AG' - Converted design templates of the complete dashboard to HTML/CSS for a business app in React",
      "'metahub.info' - NFT and Crypto blog for which I was a content creator",
      "'Agilathon' - worked as a Javascript developer inside a companies custom solution - got exposure to MongoDB and APIs",
      "'TaxTris' - developer, calculant and tester for crypto startup building CEX - tax reports (C# simple scripting / testing and PostgreSQL data storage) ",
      "'TopCroatiaSailing' - built a static webpage for a nautical charter ",
    ],
  },
  {
    title: 'Frontend Developer (internship)',
    company_name: 'Code Base',
    icon: meta,
    iconBg: '#383E56',
    date: 'May 2020 - May 2021',
    points: [
      'Worked frontend parts of several business apps and some web pages',
      'Used HTML, CSS, SCSS, Javascript. Figma, Git and React',
      'Implemented responsive design and ensured cross-browser compatibility.',
      'Defined and implemented simple React components (cards, forms etc.).',
    ],
  },
  {
    title: 'Business Analyst',
    company_name: 'Adria Docks',
    icon: adria,
    iconBg: '#E6DEDD',
    date: 'Apr 2015 - Apr 2020',
    points: [
      'Did procurement and warehouse operations, coordinated contractors',
      "Shiprepair projects analysis', did business reports monthly and made budget plans - reported business results to the CEO.",
      'Sorted all costs and prepared financial reports by projects for bookkeeping.',
      "Implemented ERP and BI systems (first with 'Infor LN' and afterwards with 'Pantheon') - used them for analysis and supporting Project Managers.",
    ],
  },
];

const projects = [
  {
    name: 'Lyrikum',
    description:
      'Modern music app built with ShazamAPI. It has a music player with all the functions; songs and artists searchbar and a lyrics for every song. You can also search popular music around you and see worlds most popular music by genre.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'green-text-gradient',
      },
      {
        name: 'rapidAPI',
        color: 'blue-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/pinjamar/lyrikum',
  },
  {
    name: 'Cryptopedia',
    description:
      'Cryptocurrency app that uses rapidAPI and redux to create allaround info about top50 cryptocurrencies. Also uses AntDesign and Chart.js for UI creation. Goal is to expand it with more informations soon like news, exchanges, links etc.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rapidAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'antdesign',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'blue-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/pinjamar/cryptopedia',
  },
  {
    name: 'Ecommerce',
    description:
      'Ecommerce website built using React. App has modern design and animations, ability to add and edit products using Sanity. Has cart and checkout functionality and is integrated with Stripe for payments. Type of products will be updated soon.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'stripe',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/pinjamar/ecommerce-web-shop',
  },
];

export { services, technologies, experiences, projects };
