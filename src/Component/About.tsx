import Image from "next/image"
import ProgressBar from "./ProgressBar"

const About = () => {
  
  return (
      <div 
      id="about"
      className="About">
        <div className="AboutDiv">
        <Image
         src="/images/testi9.png"
         width={500}
         height={500}
         priority={true}
         alt="my personal photo"
         className="Pix  "
         />
        </div>
      
        <div className="AboutText">
          <h2 className=" font-bold text-xl md:text-4xl"><b className="font-bold ">A</b>bout<b className="font-bold"> M</b>e</h2>
           <p className="mb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Consequatur ab possimus nostrum vel obcaecati corporis, animi tenetur iure.</p>
             
           
            <span>
              UX
             <ProgressBar 
             percentage={90}
             />     
             </span>
            <span>
             Web Design
             <ProgressBar 
             percentage={85}
             />     
             </span>
            <span >
              App Design
             <ProgressBar 
             percentage={95}
             />     
             </span>
            <span>
              Graphic Design
             <ProgressBar 
             percentage={94}
             />     
             </span>
           
        </div>


      </div>
  )
}

export default About