import React from 'react'

const Contact = () => {


  return (
    <div id='contact'
    className='p-10 md:p-0'
    >
      <h1 className='text-center text-2xl md:text-4xl font-bold '>Lets Design Together</h1>
      <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Corrupti totam facere fugit suscipit magnam necessitatibus,</p>
        
      <form 
      action="https://formspree.io/f/mqazqpyq"
      method="POST"
      className='form mx-auto'>

      <div className="my-20">
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Enter your Email'
        className="md:h-10 w-85 md:w-1/2 bg-gray-100 rounded mr-5 p-2 md:p-4"
        required
      />
        <button type="submit" className="p-2 bg-orange-500 text-center text-white rounded ">
        Contact Me
      </button>
      </div>
        </form>
        
        </div>
  )
}

export default Contact