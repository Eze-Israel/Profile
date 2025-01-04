import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'



const services =[
  {
    title: 'UI/UX',
    description:'Lorem ipsum dolor t amsiet eligendi aut necessitatibus vel in non magni' ,
    icon:'/images/UXMOB.png',

  },
  {
    title: 'Web Design',
    description:'Lorem ipsum dolor t amsiet eligendi aut necessitatibus vel in non magni' ,
    icon:'/images/web-design.png',

  },
  {
    title: 'App Design',
    description:'Lorem ipsum dolor t amsiet eligendi aut necessitatibus vel in non magni' ,
    icon:'/images/app-design.png',

  },
  {
    title: 'Graphic Design',
    description:'Lorem ipsum dolor t amsiet eligendi aut necessitatibus vel in non magni' ,
    icon:'/images/graphic-design.png',

  },
]

const Services = () => {
  return (
    <section className='py-16'
    id='services'
    >
      <SectionTitle title='Services I Offer'/>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         vel aperiam eum voluptatum sequi dignimos sapiente. Quibusdam!</p>
      
    <div
    className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-8'>
    

   {services.map((service, index)=> (
    <div key={index} className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center'>
     <Image  
     className='w-16 h-16 mb-4'
     src={service.icon}
     alt={service.title}
     width={200}
     height={200}
     />
     <h3
     className='text-xl font-semibold' 
     >
      {service.title}
     </h3>
     <p className='text-gray-600 mt-2 text-center'>  {service.description}  </p>

    </div>
   ))}
    </div>
    </section>
  );
}

export default Services