import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div
    id="#Home"
    className='home'
    >
      <div className='homeInfo'>
        <p className='name'>Hi I am </p>
        <p className='name text-white '>Muhammad Umair</p>
        <h1>UI & UX </h1>
          <h1>Designer</h1>
        
      </div>


      <div className='homePix'>
        <Image 
        src="/images/passport.jpg"
        width={300}
        height={300}
        alt='my pix'
        // className='rounded'
        />
       
      </div>
    
    
    </div>
  )
}

export default Home