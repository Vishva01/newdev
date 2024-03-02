import Aboutus from '../assets/about (1).png';
export default function About() {
     const config={
          line1: "Hello, I'm Vishwa. I've completed my B.Tech in Computer Science Engineering at Manakula Vinayagar Institute of Technology under Pondicherry University, achieving a CGPA of 7.44. I possess proficiency in Java, JavaScript, Bootstrap framework,and Angular, gained through academic projects and extracurricular activities." ,
           line2:"My goal is to work collaboratively in a dynamic team, leveraging my passion for crafting visually appealing and responsive user interfaces I am committed to staying updated on the latest industry trends and technologies, ensuring that I can bring fresh and modern solutions to the table."
     }
    return<section id='about' className='flex flex-col md:flex-row bg-primary'>
    <div className='md:1/2 px-5'>
             <img src={Aboutus} /> 
        </div>
        <div className='md:1/2 flex justify-center'>
         <div className='flex flex-col justify-center'>
              <h1 className='text-4xl px-2'>About</h1> 
              
              <p className='py-2 px-3 justify-center'>{config.line1}<br/>
              {config.line2}  
               </p>
              
         </div>   
    </div>
    </section>
}