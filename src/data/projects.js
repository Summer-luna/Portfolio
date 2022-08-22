import projectImage1 from '../img/project1.png';
import projectImage2 from '../img/project2_eCommerce.png';
import projectImage3 from "../img/project3_travel.png";
export const projects = [
  {
    id: 1,
    image: `${projectImage1}`,
    title: 'Food Blog Website Mock',
    describe: 'Used HTML and CSS to mock a food blog',
    tags: ['HTML', 'CSS'],
    link: 'https://github.com/Summer-luna/Programming-Project/tree/main/side%20projects/Blog-Website-Plain1',
    webLink: ''
  },
  {
    id: 2,
    image: `${projectImage2}`,
    title: 'Stantionary E-Commerce',
    describe: 'MERN Full Stack E-Commerce App',
    tags: ['React', 'CSS', 'Express', 'MongoDB', 'Node.JS'],
    link: 'https://github.com/Summer-luna/E-Commerce',
    webLink: 'https://mern-e-commerce-first-app-1.herokuapp.com/'
  },
  {
    id: 2,
    image: `${projectImage3}`,
    title: 'Socail Media Travel App',
    describe: 'A Full Stack Socail Media Travel App',
    tags: ['React', 'Next.js', 'Firebase', 'Tailwindcss'],
    link: 'https://github.com/Summer-luna/Travel-Social-Media-App',
    webLink: 'https://travel-social-media-app.vercel.app/'
  },
]