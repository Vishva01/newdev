import HeroImg from '../assets/hero.png';

import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Hero() {
  const config ={
    title1:'Im Vishva S',
    subtitle:'Full-Stack Developer And Designer',
    soical:{
      twitter:'https://twitter.com/Vishva_vs1',
      facebook:'https://www.facebook.com/profile.php?id=100054261189987',
      linkedin:'https://www.linkedin.com/in/vishva-s-2184b7239/'
    }
  }
  return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondry justify-center'>
    <div className='md:w-1/2 flex flex-col'>
      <h1 className=' text-white text-4xl'>Hi,<br/> {config.title1}
          <p>{config.subtitle}</p>
    </h1> 
    <div className='flex py-5'>
        <a className='pr-1' href={config.soical.twitter}><BsTwitterX size={40}/></a>
        <a className='pr-1'href={config.soical.linkedin}><FaLinkedin size={40}/></a>
        <a className='pr-1'href={config.soical.facebook}><FaFacebook size={40}/></a>
    </div>
    </div>
    <img className='md:w-1/3' src={HeroImg} />
    </section>
}
