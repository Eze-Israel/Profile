import React from 'react'
import SectionTitle from './SectionTitle';
import {Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';


const testimonials = [
  {
    name: 'Joe Doe',
    role: 'CEO',
    feedback: 'Lorem ipsum dolor sit . Quisquam sequi ratione ipsum. Ducimus totam im ',
    image: '/images/passport.jpg',

  },
  {
    name: 'John  Smith',
    role: 'Product Designer',
    feedback: 'Quisquam sequi ratione ipsum. Ducimus totam im bed agfe dety that boakuzea',
    image: '/images/passport.jpg',

  },
  {
    name: 'Michael Scott',
    role: 'Manager',
    feedback: 'Lorem ipsum dolor sit . Quisquam sequi ratione ipsum. Ducimus totam im ',
    image: '/images/passport.jpg',

  },
  {
    name: 'Joe Bidden',
    role: 'CEO',
    feedback: 'Lorem ipsum dolor sit . Quisquam sequi ratione ipsum. Ducimus totam im ',
    image: '/images/passport.jpg',

  },
]

const Testimonies = () => {
   

  return (
    <section
    id='testimonies'
    className='py-16'
    >
    <SectionTitle
    title='Testimonials' />
    <Swiper
    spaceBetween={30}
    slidesPerView={1}
    loop
    pagination={{clickable: true}}
    >
      {testimonials.map((testimonial, index)=> (
        <SwiperSlide key={index}>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden p-6'>
          <p className='text-gray-700'>{testimonial.feedback} </p>
          <p className='mt-4 font-semibold'> {testimonial.name} </p>
          <p className='text-sm text-gray-500'>{testimonial.role} </p>
           
        </div>
        </SwiperSlide>
      ))}
    
    </Swiper>
    </section>
  )
}

export default Testimonies