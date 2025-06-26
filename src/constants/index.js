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
  tripguide,
  threejs,
  blog,
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
    title: 'Business Analyst',
    icon: web,
  },
  {
    title: 'Crypto Researcher',
    icon: mobile,
  },
  {
    title: 'DeFi PhD Student',
    icon: backend,
  },
  {
    title: 'Web Developer',
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
    title: 'Crypto Researcher & Creator',
    company_name: 'Freelance',
    icon: code,
    iconBg: '#E6DEDD',
    date: 'Nov 2024 - Present',
    points: [
      'Conducting detailed research and data analysis in cryptocurrency, blockchain, and DeFi.',
      'Producing insightful articles and reports to educate and inform the crypto community.',
      'Collaborating on freelance projects involving market trends and crypto analytics.',
      'Continuously enhancing knowledge of blockchain technologies and crypto economics.',
    ],
  },
  {
    title: 'Crypto analyst',
    company_name: 'Shard Labs',
    icon: btc,
    iconBg: '#383E56',
    date: 'Jan 2022 - Oct 2024',
    points: [
      'Blockchain analyst and researcher of various Web3 projects',
      'Aggregated data across various blockchains, exchanges (CEXes & DEXes)',
      'Researched developer teams, tech conferences, socials, VCs, tokenmetrics ',
      'Used Airtable for data storage and Power BI for data visualization',
    ],
  },
  {
    title: 'Web Dev & Tester',
    company_name: 'TaxTris',
    icon: freelancer,
    iconBg: '#E6DEDD',
    date: 'May 2022 - Dec 2022',
    points: [
      'Developer, tax calculant and tester for crypto startup building CEX - tax reports (testing and PostgreSQL data storage)',
      'Did tax calculations for various countries, made manual test cases and built tax reports for CEX trading',
      'Translated PDF tax forms into HTML code and worked with simple scripting / calculations, learned basic C#',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Code Base',
    icon: meta,
    iconBg: '#383E56',
    date: 'May 2020 - May 2022',
    points: [
      "'beaconsmind AG' - Converted design templates of the complete dashboard to HTML/CSS for a business app in React",
      "'metahub.info' - NFT and Crypto blog for which I was a content creator",
      "'Agilathon' - worked as a Javascript developer inside a companies custom solution - got exposure to MongoDB and APIs",
      "'TopCroatiaSailing' - built a static webpage for a nautical charter ",
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
    name: 'Crypto Scientia Blog',
    description:
      'A personal blog exploring DeFi, blockchain, and crypto economics — written from the perspective of a PhD student and researcher. Features insights, educational posts, and project breakdowns in web3 and digital finance.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'hygraph',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'vite',
        color: 'orange-text-gradient',
      },
    ],
    image: blog,
    source_code_link: 'https://github.com/pinjamar/crypto_scientia_blog',
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
