import Image from "next/image"
import ProgressBar from "./ProgressBar"

const About = () => {
  
  return (
      <div 
      id="about"
      className="About">
        <div className="AboutDiv">
        <Image
         src="/images/Dpix2.png"
         width={500}
         height={500}
         priority={true}
         alt="my personal photo"
         className="Pix abtPix"
         />
         <Image 
          alt='rectangle'
          src="/images/Rectangle.png"
          width={300}
          height={300}
          className='Rect'
          />
        </div>
      
        <div className="AboutText">
          <h2 className=" font-bold text-xl md:text-4xl"><b className="font-bold ">A</b>bout<b className="font-bold"> M</b>e</h2>
           <p className="mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Consequatur ab possimus nostrum vel obcaecati corporis, animi tenetur iure.</p>
             
           <span className="flex flex-col gap-2">
            <span className="mb-4">
              UX
             <ProgressBar 
             percentage={90}
             />     
             </span>
            <span className="mb-4">
             Web Design
             <ProgressBar 
             percentage={85}
             />     
             </span>
            <span className="mb-4">
              App Design
             <ProgressBar 
             percentage={95}
             />     
             </span>
            <span className="mb-4">
              Graphic Design
             <ProgressBar 
             percentage={94}
             />     
             </span>
             </span>
           
        </div>


      </div>
  )
}

export default About