import React from 'react'
import SectionTitle from './SectionTitle';
import {Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay , EffectFlip, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';


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
    className='py-16 '
    >
    <SectionTitle
    title='Testimonials' />

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       atque porro ad repellat corporis deserunt, accusantium delectus nisi quo consequatur.</p>

    <Swiper
    modules={[Pagination, Autoplay, EffectFlip, Scrollbar]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    // scrollbar={{
    //   draggable: true,
    //   hide: false
    // }}
    autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}}
    speed={1000}
    pagination={{clickable: true, 
      // el: '.custom-pagination'
    }}
    // effect='flip'
    effect='fade'
    fadeEffect={{
      crossFade: true
    }}
    
  
    >
      {testimonials.map((testimonial, index)=> (
        <SwiperSlide key={index} className='custom-pagination'>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden p-6 testimony'>
          <div className='w-full md:w-1/2'>
          <Image 
          alt={testimonial.name}
          src={testimonial.image}
          width={300}
          height={300}
          className='sm:w-16 md:w-24 lg:w-36'
          />
          </div>

          <div className='w-full md:w-1/2'>
          <p className='mt-4 font-semibold'> {testimonial.name} </p>
          <p className='text-md text-gray-500'>{testimonial.role} </p>
          <p className='text-gray-700'>{testimonial.feedback} </p>
          </div>

        </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
  )
}

export default Testimonies