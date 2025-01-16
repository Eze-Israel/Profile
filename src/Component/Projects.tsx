import React from 'react'
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { useState } from 'react';


const projects = [
{
  title: "Air calling Landing Page Design", 
  description: "Landing Page for Calling App.",
  category:"Web Design",
  imageUrl:"/images/aircall.png",
  technologies:['Figma', 'UI/UX'],
},
{
  title: "Business  Landing Page Design", 
  description: "A sleek business Landing Page.",
  category:"Web Design",
  imageUrl:"/images/businex.png",
  technologies:['Next.js', 'Tailwind CSS'],
},
{
  title: "Ecom Web Page Design", 
  description: "An Ecom Web Page Design.",
  category:"Web Design",
  imageUrl:"/images/Ecom.png",
  technologies:['React', 'Node.js'],
},
{
  title: "Mobile App Design", 
  description: "Design for a mobile Application.",
  category:"App Design",
  imageUrl:"/images/CRUD.jpg",
  technologies:['React Native', 'UI/UX'],
},
{
  title: "Branding Graphic Design", 
  description: "Graphic Design for branding.",
  category:"Graphic Design",
  imageUrl:"/images/CBT-EXAM.jpg",
  technologies:['Photoshop', 'illustrator'],
},
{
  title: "Branding Graphic Design", 
  description: "Graphic Design for branding.",
  category:"UI/UX",
  imageUrl:"/images/UXMOB.png",
  technologies:['Photoshop', 'illustrator'],
},

];

const categories = [
  'All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
 const filteredProjects = activeCategory === 'All' ? projects 
    : projects.filter(project => project.category === activeCategory
 )

  return (
    <section className='py-16 bg-gray-50 Project'
    id='projects'
    >
      <SectionTitle  title='My Projects'/>
      <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Modi dolorum illo suscipit dignissimos architecto? Quidem eius </p>
         <div className='flex justify-center gap-4 my-12'>
          {categories.map(category => (
            <button key={category}
            onClick={() => setActiveCategory(category)}
            className={`sm:px-0 md:px-4 py-2 rounded-lg ${activeCategory === category 
              ? 'bg-orange-500 text-white' : 'bg-blue-50 text-gray-800 hover:bg-gray-300'
            }`}
            >
              {category}

            </button>
          ))}


         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index)=> (
            <ProjectCard 
            key={index}
            // description={project.description}
            imageUrl={project.imageUrl}
            category={project.category}
            title={project.title}
            // technologies={project.technologies}
            />
          ))}

         </div>
    
    
    
      
      </section>
  )
}

export default Projects