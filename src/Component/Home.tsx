import React from 'react'
import Image from 'next/image'
import {  FaLinkedin,FaInstagram, FaFacebook, FaTwitter,} from 'react-icons/fa';


const Home = () => {
  return (
    <div
    id="#Home"
    className='home'
    >
      <div className='homeInfo'>
        <p className='text-xl font-bold'>Hi I am </p>
        <p className='text-orange-500 text-xl font-bold'>Muhammad Umair</p>
        <h1 className='text-2xl md:text-6xl font-bold'>UI & UX </h1>
          <h1 className='text-2xl md:text-6xl font-bold ml-16 md:ml-32 mb-5'>Designer</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            tempore! Sunt cumque cum tempora ipsum nam quo provident quos porro doloribus.</p>
            <button className='bg-orange-500 p-2 text-white rounded'>Hire Me</button>
        
      </div>


      <div className='homePix'>
        <Image 
        src="/images/testi9.png"
        width={500}
        height={500}
        alt='my pix'
        className='Pix'
        />
        <div className='flex items-center justify-center gap-4 md:gap-10 mt-4'>
             <FaFacebook  className='facebook '/>
             <FaTwitter className='twitter' />
             <FaInstagram   className='insta' />
             <FaLinkedin className='linked' />
           </div>
      </div>
    
    
    </div>
  )
}

export default Home