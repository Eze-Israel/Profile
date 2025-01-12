import React from 'react'

const Contact = () => {


  return (
    <div id='contact'
    className='p-10 md:p-0'
    >
      <h1 className='text-center text-2xl md:text-4xl font-bold my-16 '>Lets Design Together</h1>
      <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Corrupti totam facere fugit suscipit magnam necessitatibus,</p>
        
      <form 
      action="https://formspree.io/f/mqazqpyq"
      method="POST"
      className='form'>

      <div className="my-20">
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Enter your Email'
        className="md:h-13  bg-gray-50 rounded mr-5 p-2 md:p-4 email"
        required
      />
        <button type="submit" className=" p-2 md:p-4 bg-orange-500 text-center text-white rounded mt-3 md:mt-0 ">
        Contact Me
      </button>
      </div>
        </form>
        
        </div>
  )
}

export default Contact