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
    feedback: 'Lorem ipsum dolor sit . Quisquam sequi ratione ipsum. Ducimus totam im Ducimus totam im bed agfe dety that boakuzea ',
    image: '/images/testi1.jpg',

  },
  {
    name: 'John  Smith',
    role: 'Product Designer',
    feedback: 'Quisquam sequi ratione ipsum. Ducimus totam im bed agfe dety that boakuzea Ducimus totam im bed agfe dety that boakuzea',
    image: '/images/testi2.jpg',

  },
  {
    name: 'Michael Scott',
    role: 'Manager',
    feedback: 'Lorem ipsum dolor sit . Quisquam sequi ratione ipsum. Ducimus totam im Ducimus totam im bed agfe dety that boakuzea',
    image: '/images/testi3.jpg',

  },
  {
    name: 'Joe Bidden',
    role: 'CEO',
    feedback: 'Lorem ipsum dolor sit . Quisquam sequi ratione ipsum. Ducimus totam im Ducimus totam im bed agfe dety that boakuzea',
    image: '/images/testi4.jpg',

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

    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
          width={200}
          height={200}
          className='testi-pix '
          />
          </div>

          <div className='w-full md:w-1/2'>
           <p className='text-gray-700'>
            <b className='text-orange-500 text-2xl'>&quot;</b>{testimonial.feedback}
            <b className='text-orange-500 text-2xl'>&quot;</b>
           </p>
          <p className='mt-4 font-semibold'> {testimonial.name} </p>
          <p className='text-md text-gray-500'>{testimonial.role} </p>
          </div>

        </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
  )
}

export default Testimonies