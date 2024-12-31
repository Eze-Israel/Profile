import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import Link from 'next/link'



const Header:  React.FC = () => {
  const [mobile, setMobile] = useState(false)


  const handleMobileChange = () => {
    setMobile(!mobile)
    
  }
  
  const handlelogoname = () => {
    setMobile(mobile)
    
  }

  
  return (
    <div className='header'>
      <div>
      <Link href="/" className="bg-red-500" onClick={handlelogoname} > <b className='text-red-500'>M</b>umair</Link>
      </div>
      <div className="mobile-icon" onClick={handleMobileChange}>
        {mobile ? <FaBars /> : <FaTimes />}
      </div>
      
            <div>
            <ul className={`${mobile ? 'nav-menu' : 'nav-menu show'}`}>
            <Link href="/" onClick={handleMobileChange}> <li className='list-items'>Home</li></Link> 
            <Link href="#about" onClick={handleMobileChange}> <li className='list-items'>About Me</li></Link> 
            <Link href="#services" onClick={handleMobileChange}>  <li className='list-items'>Services</li></Link> 
            <Link href="#projects" onClick={handleMobileChange}> <li className='list-items'>Projects</li></Link> 
            <Link href="#testimonies" onClick={handleMobileChange}> <li className='list-items'>Testimonials</li></Link> 
            <Link href="#contact" onClick={handleMobileChange}> <li className='list-items'>Contact</li></Link> 
            <Link href="MyResume" onClick={handleMobileChange}> <li className='list-items '>Download CV</li></Link> 
            </ul>
            </div>
      
             
    </div>
  )
}

export default Header