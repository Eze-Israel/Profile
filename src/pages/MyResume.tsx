import React from 'react'
import { useLayoutEffect } from 'react'
import Link from 'next/link'

const MyResume = () => {
  const CV = "/PDF/ISRAEL_RESUME2025-.pdf"
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <div 
    style={{
      height: '100vh',
      textAlign:"center",
      fontStyle:"italic",
      
    }}>
      <Link href="/"><button className='float-left bg-gray-500  p-2 rounded text-xl'>Back</button></Link>
       <a href={CV} target="blank" rel="noopener noreferrer"
        className="bg-blue-500 p-16 md:text-2xl text-xl  rounded text-center " download> Download CV</a>
      <iframe
      src={CV + '#toolbar=0'}
      width= '100%'
      height='100%'
      />
      
      </div>
  )
}

export default MyResume